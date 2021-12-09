/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

namespace facebook {
namespace cachelib {

/* Container Interface Implementation */
template <typename T, MMLirs::Hook<T> T::*HookPtr>
MMLirs::Container<T, HookPtr>::Container(serialization::MMTinyLFUObject object,
                                         PtrCompressor compressor)
    : lru_(*object.lrus_ref(), std::move(compressor)),
      config_(*object.config_ref()) {
  lruRefreshTime_ = config_.lruRefreshTime;
  nextReconfigureTime_ = config_.mmReconfigureIntervalSecs.count() == 0
                             ? std::numeric_limits<Time>::max()
                             : static_cast<Time>(util::getCurrentTimeSec()) +
                                   config_.mmReconfigureIntervalSecs.count();
}

template <typename T, MMLirs::Hook<T> T::*HookPtr>
bool MMLirs::Container<T, HookPtr>::recordAccess(T& node,
                                                 AccessMode mode) noexcept {
  if ((mode == AccessMode::kWrite && !config_.updateOnWrite) ||
      (mode == AccessMode::kRead && !config_.updateOnRead)) {
    return false;
  }

  const auto curr = static_cast<Time>(util::getCurrentTimeSec());
  // check if the node is still being memory managed
  if (node.isInMMContainer() &&
      ((curr >= getUpdateTime(node) +
                    lruRefreshTime_.load(std::memory_order_relaxed)) ||
       !isAccessed(node))) {
    if (!isAccessed(node)) {
      markAccessed(node);
    }
    LockHolder l(lruMutex_, std::defer_lock);
    if (config_.tryLockUpdate) {
      l.try_lock();
    } else {
      l.lock();
    }
    if (!l.owns_lock()) {
      return false;
    }
    reconfigureLocked(curr);
    if (!node.isInMMContainer()) {
      return false;
    }

    accessInLirs(node, true);

    setUpdateTime(node, curr);
    return true;
  }
  return false;
}

template <typename T, MMLirs::Hook<T> T::*HookPtr>
cachelib::EvictionAgeStat MMLirs::Container<T, HookPtr>::getEvictionAgeStat(
    uint64_t projectedLength) const noexcept {
  LockHolder l(lruMutex_);
  return getEvictionAgeStatLocked(projectedLength);
}

template <typename T, MMLirs::Hook<T> T::*HookPtr>
cachelib::EvictionAgeStat
MMLirs::Container<T, HookPtr>::getEvictionAgeStatLocked(
    uint64_t projectedLength) const noexcept {
  EvictionAgeStat stat;
  const auto curr = static_cast<Time>(util::getCurrentTimeSec());

  auto& list = lru_.getList(LruType::Main);
  auto it = list.rbegin();
  stat.warmQueueStat.oldestElementAge =
      it != list.rend() ? curr - getUpdateTime(*it) : 0;
  stat.warmQueueStat.size = list.size();
  for (size_t numSeen = 0; numSeen < projectedLength && it != list.rend();
       ++numSeen, ++it) {
  }
  stat.projectedAge = it != list.rend() ? curr - getUpdateTime(*it)
                                        : stat.warmQueueStat.oldestElementAge;
  return stat;
}

template <typename T, MMLirs::Hook<T> T::*HookPtr>
void MMLirs::Container<T, HookPtr>::shiftHashListToNext(
    T& node, uint64_t nodeHashVal) noexcept {
  // only lir node can call this function
  XDCHECK(!isTiny(node));

  auto& hashList = mapLirHash2HirHash_[nodeHashVal];
  if (hashList.size() == 0) {
    return;
  }

  T* nextNodePtr = lru_.getList(LruType::Main).getNext(node);
  uint64_t nextNodeHashVal =
      nextNodePtr == nullptr ? kLirPtrTombstone : hashNode(*nextNodePtr);
  for (uint64_t hirHashVal : hashList) {
    // shift hir hash to next node's list
    mapLirHash2HirHash_[nextNodeHashVal].insert(hirHashVal);
    // update hir 2 lir mapping
    mapHirHash2LirPtr_[hirHashVal] = nextNodePtr;
  }

  // clean hir hash list of node itself
  hashList.clear();
}

template <typename T, MMLirs::Hook<T> T::*HookPtr>
void MMLirs::Container<T, HookPtr>::maybeMoveRmaxLocked() noexcept {
  // Choose eviction candidate and place it at the tail of tiny
  auto& mainLru = lru_.getList(LruType::Main);
  auto& tinyLru = lru_.getList(LruType::Tiny);

  T* LirNodePtr = mainLru.getTail();
  if (!LirNodePtr) {
    return;
  }
  XDCHECK(!isTiny(*LirNodePtr));

  size_t expectedLirNum = tinyLru.size() / (config_.tinySizePercent / 100.0);

  if (mainLru.size() > expectedLirNum) {
    // If main cache is full, unconditionally move main tail to tiny head.
    // (update rmax, lir node demote to hir node)
    size_t tailLirNodeHashVal = hashNode(*LirNodePtr);
    shiftHashListToNext(*LirNodePtr, tailLirNodeHashVal);

    // remove lir -> hir entry, demoted
    mapLirHash2HirHash_.erase(tailLirNodeHashVal);
    mapHirHash2LirPtr_[tailLirNodeHashVal] = nullptr;

    mainLru.remove(*LirNodePtr);
    tinyLru.linkAtHead(*LirNodePtr);
    markTiny(*LirNodePtr);
  }
}

template <typename T, MMLirs::Hook<T> T::*HookPtr>
void MMLirs::Container<T, HookPtr>::promoteHirToMainTop(
    T& node, uint64_t nodeHashVal, bool isMoving) noexcept {
  // hir node promoted to lir node
  auto& mainLru = lru_.getList(LruType::Main);
  auto& tinyLru = lru_.getList(LruType::Tiny);
  if (isMoving) {
    XDCHECK(node.isInMMContainer());
    XDCHECK(isTiny(node));
    tinyLru.remove(node);
    mainLru.linkAtHead(node);
    unmarkTiny(node);
  } else {
    mainLru.linkAtHead(node);
  }

  // remove hir hash from old list
  T* oldLirNodePtr = mapHirHash2LirPtr_[nodeHashVal];
  uint64_t oldLirNodeHashVal =
      oldLirNodePtr == nullptr ? kLirPtrTombstone : hashNode(*oldLirNodePtr);
  mapLirHash2HirHash_[oldLirNodeHashVal].erase(nodeHashVal);

  // create new list
  mapLirHash2HirHash_[nodeHashVal] = {};

  // remove hir 2 lir mapping
  mapHirHash2LirPtr_.erase(nodeHashVal);
}

template <typename T, MMLirs::Hook<T> T::*HookPtr>
void MMLirs::Container<T, HookPtr>::moveHirToTinyTop(T& node,
                                                     uint64_t nodeHashVal,
                                                     bool isMoving) noexcept {
  // remain as a hir node
  auto& mainLru = lru_.getList(LruType::Main);

  XDCHECK(mapHirHash2LirPtr_[nodeHashVal] == nullptr);
  auto& tinyLru = lru_.getList(LruType::Tiny);
  if (isMoving) {
    XDCHECK(node.isInMMContainer());
    XDCHECK(isTiny(node));
    tinyLru.moveToHead(node);
  } else {
    tinyLru.linkAtHead(node);
  }

  // remove hir hash from old list
  T* oldLirNodePtr = mapHirHash2LirPtr_[nodeHashVal];
  uint64_t oldLirNodeHashVal =
      oldLirNodePtr == nullptr ? kLirPtrTombstone : hashNode(*oldLirNodePtr);
  mapLirHash2HirHash_[oldLirNodeHashVal].erase(nodeHashVal);

  // add hir hash to new list
  T* lirNodePtr = mainLru.getHead();
  uint64_t lirNodeHashVal =
      lirNodePtr == nullptr ? kLirPtrTombstone : hashNode(*lirNodePtr);
  mapLirHash2HirHash_[lirNodeHashVal].insert(nodeHashVal);

  // modify hir 2 lir mapping
  mapHirHash2LirPtr_[nodeHashVal] = lirNodePtr;
}

template <typename T, MMLirs::Hook<T> T::*HookPtr>
void MMLirs::Container<T, HookPtr>::moveLirToMainTop(T& node,
                                                     uint64_t nodeHashVal,
                                                     bool isMoving) noexcept {
  auto& mainLru = lru_.getList(LruType::Main);
  if (isMoving) {
    XDCHECK(node.isInMMContainer());
    XDCHECK(!isTiny(node));
    mainLru.moveToHead(node);
  } else {
    mainLru.linkAtHead(node);
  }

  shiftHashListToNext(node, nodeHashVal);
}

template <typename T, MMLirs::Hook<T> T::*HookPtr>
void MMLirs::Container<T, HookPtr>::accessInLirs(T& node,
                                                 bool isMoving) noexcept {
  uint64_t nodeHashVal = hashNode(node);
  if (mapHirHash2LirPtr_.count(nodeHashVal)) {
    // this node is previously a hir node
    if (mapHirHash2LirPtr_[nodeHashVal] == nullptr) {
      // the previous hir node is after rmax, then -> hir node
      moveHirToTinyTop(node, nodeHashVal, isMoving);
      markTiny(node);
    } else {
      // the previous hir node is above rmax, then -> lir node
      promoteHirToMainTop(node, nodeHashVal, isMoving);
    }
  } else if (mapLirHash2HirHash_.count(nodeHashVal)) {
    // this node is previously a lir node, then -> lir node
    moveLirToMainTop(node, nodeHashVal, isMoving);
  } else {
    XDCHECK(!isMoving);
    // this node is a new node, then -> lir node
    lru_.getList(LruType::Main).linkAtHead(node);
    mapLirHash2HirHash_[nodeHashVal] = {};
  }

  maybeMoveRmaxLocked();
}

template <typename T, MMLirs::Hook<T> T::*HookPtr>
bool MMLirs::Container<T, HookPtr>::add(T& node) noexcept {
  // default: main node
  const auto currTime = static_cast<Time>(util::getCurrentTimeSec());
  LockHolder l(lruMutex_);
  if (node.isInMMContainer()) {
    return false;
  }

  node.markInMMContainer();
  accessInLirs(node, false);

  setUpdateTime(node, currTime);
  unmarkAccessed(node);
  return true;
}

template <typename T, MMLirs::Hook<T> T::*HookPtr>
typename MMLirs::Container<T, HookPtr>::Iterator
MMLirs::Container<T, HookPtr>::getEvictionIterator() const noexcept {
  LockHolder l(lruMutex_);
  return Iterator{std::move(l), *this};
}

template <typename T, MMLirs::Hook<T> T::*HookPtr>
void MMLirs::Container<T, HookPtr>::removeLocked(T& node) noexcept {
  size_t nodeHashVal = hashNode(node);
  if (isTiny(node)) {
    // remove a hir node
    lru_.getList(LruType::Tiny).remove(node);
    unmarkTiny(node);
    // T* lirNodePtr = mapHirHash2LirPtr_[nodeHashVal];
    // size_t lirHashVal =
    //     lirNodePtr == nullptr ? kLirPtrTombstone : hashNode(*lirNodePtr);
    // mapLirHash2HirHash_[lirHashVal].erase(nodeHashVal); // remove from
    // hashlist mapHirHash2LirPtr_.erase(nodeHashVal); // remove hir->lir
    // mapping
  } else {
    // remove a lir node
    auto& mainLru = lru_.getList(LruType::Main);
    shiftHashListToNext(node, nodeHashVal);
    mapLirHash2HirHash_.erase(nodeHashVal);
    mainLru.remove(node);
  }

  unmarkAccessed(node);
  node.unmarkInMMContainer();
  return;
}

template <typename T, MMLirs::Hook<T> T::*HookPtr>
bool MMLirs::Container<T, HookPtr>::remove(T& node) noexcept {
  LockHolder l(lruMutex_);
  if (!node.isInMMContainer()) {
    return false;
  }
  removeLocked(node);
  return true;
}

template <typename T, MMLirs::Hook<T> T::*HookPtr>
void MMLirs::Container<T, HookPtr>::remove(Iterator& it) noexcept {
  T& node = *it;
  XDCHECK(node.isInMMContainer());
  ++it;
  removeLocked(node);
}

template <typename T, MMLirs::Hook<T> T::*HookPtr>
bool MMLirs::Container<T, HookPtr>::replace(T& oldNode, T& newNode) noexcept {
  LockHolder l(lruMutex_);
  if (!oldNode.isInMMContainer() || newNode.isInMMContainer()) {
    return false;
  }
  const auto updateTime = getUpdateTime(oldNode);

  size_t oldNodeHashVal = hashNode(oldNode);
  size_t newNodeHashVal = hashNode(newNode);
  if (isTiny(oldNode)) {
    // replace hir node
    lru_.getList(LruType::Tiny).replace(oldNode, newNode);
    unmarkTiny(oldNode);
    markTiny(newNode);
    // replace hir 2 lir mapping
    T* lirNodePtr = mapHirHash2LirPtr_[oldNodeHashVal];
    size_t lirNodeHashVal =
        lirNodePtr == nullptr ? kLirPtrTombstone : hashNode(*lirNodePtr);
    // remove old hash from hash list
    auto& hashList = mapLirHash2HirHash_[lirNodeHashVal];
    // insert the new hash to hash list
    hashList.erase(oldNodeHashVal);
    hashList.insert(newNodeHashVal);
    // update hir 2 lir mapping
    mapHirHash2LirPtr_.erase(oldNodeHashVal);
    mapHirHash2LirPtr_[newNodeHashVal] = lirNodePtr;
  } else {
    // replace lir node
    lru_.getList(LruType::Main).replace(oldNode, newNode);
    auto& hashList = mapLirHash2HirHash_[oldNodeHashVal];
    if (hashList.size() != 0) {
      // shift the hir node hashes
      for (uint64_t hirHashVal : hashList) {
        mapLirHash2HirHash_[newNodeHashVal].insert(hirHashVal);
        mapHirHash2LirPtr_[hirHashVal] = &newNode;
      }
    }
  }

  oldNode.unmarkInMMContainer();
  newNode.markInMMContainer();
  setUpdateTime(newNode, updateTime);
  if (isAccessed(oldNode)) {
    markAccessed(newNode);
  } else {
    unmarkAccessed(newNode);
  }
  return true;
}

template <typename T, MMLirs::Hook<T> T::*HookPtr>
typename MMLirs::Config MMLirs::Container<T, HookPtr>::getConfig() const {
  LockHolder l(lruMutex_);
  return config_;
}

template <typename T, MMLirs::Hook<T> T::*HookPtr>
void MMLirs::Container<T, HookPtr>::setConfig(const Config& c) {
  LockHolder l(lruMutex_);
  config_ = c;
  lruRefreshTime_.store(config_.lruRefreshTime, std::memory_order_relaxed);
  nextReconfigureTime_ = config_.mmReconfigureIntervalSecs.count() == 0
                             ? std::numeric_limits<Time>::max()
                             : static_cast<Time>(util::getCurrentTimeSec()) +
                                   config_.mmReconfigureIntervalSecs.count();
}

template <typename T, MMLirs::Hook<T> T::*HookPtr>
serialization::MMTinyLFUObject MMLirs::Container<T, HookPtr>::saveState()
    const noexcept {
  serialization::MMTinyLFUConfig configObject;
  *configObject.lruRefreshTime_ref() =
      lruRefreshTime_.load(std::memory_order_relaxed);
  *configObject.lruRefreshRatio_ref() = config_.lruRefreshRatio;
  *configObject.updateOnWrite_ref() = config_.updateOnWrite;
  *configObject.updateOnRead_ref() = config_.updateOnRead;
  *configObject.windowToCacheSizeRatio_ref() = config_.windowToCacheSizeRatio;
  *configObject.tinySizePercent_ref() = config_.tinySizePercent;
  // TODO: May be save/restore the counters.

  serialization::MMTinyLFUObject object;
  *object.config_ref() = configObject;
  *object.lrus_ref() = lru_.saveState();
  return object;
}

template <typename T, MMLirs::Hook<T> T::*HookPtr>
MMContainerStat MMLirs::Container<T, HookPtr>::getStats() const noexcept {
  LockHolder l(lruMutex_);
  auto* tail = lru_.size() == 0 ? nullptr : lru_.rbegin().get();
  return {lru_.size(),
          tail == nullptr ? 0 : getUpdateTime(*tail),
          lruRefreshTime_.load(std::memory_order_relaxed),
          0,
          0,
          0,
          0};
}

template <typename T, MMLirs::Hook<T> T::*HookPtr>
void MMLirs::Container<T, HookPtr>::reconfigureLocked(const Time& currTime) {
  if (currTime < nextReconfigureTime_) {
    return;
  }
  nextReconfigureTime_ = currTime + config_.mmReconfigureIntervalSecs.count();

  // update LRU refresh time
  auto stat = getEvictionAgeStatLocked(0);
  auto lruRefreshTime = std::min(
      std::max(config_.defaultLruRefreshTime,
               static_cast<uint32_t>(stat.warmQueueStat.oldestElementAge *
                                     config_.lruRefreshRatio)),
      kLruRefreshTimeCap);

  lruRefreshTime_.store(lruRefreshTime, std::memory_order_relaxed);
}

// Iterator Context Implementation
template <typename T, MMLirs::Hook<T> T::*HookPtr>
MMLirs::Container<T, HookPtr>::Iterator::Iterator(
    LockHolder l, const Container<T, HookPtr>& c) noexcept
    : c_(c),
      tIter_(c.lru_.getList(LruType::Tiny).rbegin()),
      mIter_(c.lru_.getList(LruType::Main).rbegin()),
      l_(std::move(l)) {}
} // namespace cachelib
} // namespace facebook
