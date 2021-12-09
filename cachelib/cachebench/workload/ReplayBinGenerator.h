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

#pragma once

#include "cachelib/cachebench/cache/Cache.h"
#include "cachelib/cachebench/util/Exceptions.h"
#include "cachelib/cachebench/util/Parallel.h"
#include "cachelib/cachebench/util/Request.h"
#include "cachelib/cachebench/workload/ReplayBinGeneratorBase.h"

namespace facebook {
namespace cachelib {
namespace cachebench {

class ReplayBinGenerator : public ReplayBinGeneratorBase {
 public:
  explicit ReplayBinGenerator(const StressorConfig& config)
      : ReplayBinGeneratorBase(config),
        sizes_(1, 4096),
        req_(key_, sizes_.begin(), sizes_.end(), OpType::kGet) {}

  virtual ~ReplayBinGenerator() {}

  // getReq generates the next request from the named trace file.
  // it expects a comma separated file (possibly with a header)
  // which consists of the fields:
  // fbid,OpType,size,repeats
  //
  // Here, repeats gives a number of times to repeat the request specified on
  // this line before reading the next line of the file.
  // TODO: not thread safe, can only work with single threaded stressor
  const Request& getReq(
      uint8_t,
      std::mt19937_64&,
      std::optional<uint64_t> lastRequestId = std::nullopt) override;

 private:
  // current outstanding key
  std::string key_;
  std::vector<size_t> sizes_;
  // current outstanding req object
  Request req_;
};

const Request& ReplayBinGenerator::getReq(uint8_t,
                                          std::mt19937_64&,
                                          std::optional<uint64_t>) {
  uint32_t num_key = 0;
  if (!infile_.read((char*)&num_key, 4)) {
    throw cachelib::cachebench::EndOfTrace("");
  }
  key_ = std::to_string(num_key);
  return req_;
}

} // namespace cachebench
} // namespace cachelib
} // namespace facebook
