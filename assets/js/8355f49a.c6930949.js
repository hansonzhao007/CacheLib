"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2153],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,p=u["".concat(l,".").concat(d)]||u[d]||h[d]||o;return a?n.createElement(p,i(i({ref:t},m),{},{components:a})):n.createElement(p,i({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},27:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return m},default:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],c={id:"Remove_callback",title:"Remove callback"},l=void 0,s={unversionedId:"Cache_Library_User_Guides/Remove_callback",id:"Cache_Library_User_Guides/Remove_callback",isDocsHomePage:!1,title:"Remove callback",description:"Remove callback provides destructor semantics for an item in the cache. This is useful when you want to execute some logic on removal of an item from the cache. When you use cachelib APIs to concurrently allocate memory from the cache for an item, insert an item into the cache, or remove an item from the cache, the item's lifetime ends when the item is evicted or removed from the cache and the last handle held by all sources drops. Remove callback provides you an ability to capture this and take some appropriate action if needed.",source:"@site/docs/Cache_Library_User_Guides/Remove_callback.md",sourceDirName:"Cache_Library_User_Guides",slug:"/Cache_Library_User_Guides/Remove_callback",permalink:"/docs/Cache_Library_User_Guides/Remove_callback",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Cache_Library_User_Guides/Remove_callback.md",tags:[],version:"current",frontMatter:{id:"Remove_callback",title:"Remove callback"},sidebar:"userguideSidebar",previous:{title:"Configure lookup performance",permalink:"/docs/Cache_Library_User_Guides/Configure_HashTable"},next:{title:"Cache persistence",permalink:"/docs/Cache_Library_User_Guides/Cache_persistence"}},m=[{value:"RemoveCBData",id:"removecbdata",children:[],level:2},{value:"Guarantees",id:"guarantees",children:[],level:2},{value:"NvmCache",id:"nvmcache",children:[],level:2}],h={toc:m};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Remove callback")," provides destructor semantics for an item in the cache. This is useful when you want to execute some logic on removal of an item from the cache. When you use cachelib APIs to concurrently allocate memory from the cache for an item, insert an item into the cache, or remove an item from the cache, the item's lifetime ends when the item is evicted or removed from the cache and the last handle held by all sources drops. ",(0,o.kt)("em",{parentName:"p"},"Remove callback")," provides you an ability to capture this and take some appropriate action if needed."),(0,o.kt)("p",null,"For example, suppose you want to maintain a counter for the total number of items in your cache and increment the counter when you call the ",(0,o.kt)("inlineCode",{parentName:"p"},"insertOrReplace()")," method. The item you inserted could be evicted or removed from the cache when you again call ",(0,o.kt)("inlineCode",{parentName:"p"},"insertOrReplace()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"allocate()"),". To decrement the counter when the item you inserted is evicted or removed by another thread, you can have your logic encapsulated as ",(0,o.kt)("em",{parentName:"p"},"remove callback"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Remove callback")," takes the following signature and can be provided in the config for initializing the cache:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"auto removeCB = [&](const Allocator::RemoveCbData& data) { --totalItems; };\nconfig.setRemoveCallback(removeCB);\n\n// Adds an item to cache and increment the counter.\nvoid addToCache(std::string key, size_t val) {\n  auto handle = cache.allocate(keys[i], 100); // allocate an item\n  cache.insertOrReplace(handle); // insert into cache.\n  ++totalItems;\n}\n\n// Suppose your cache can contain at most 5 items and\n// it evicts beyond that.\nfor (int i = 0; i < 1000; i++) {\n  addToCache(std::to_string(i), 100);\n}\n\nstd::cout << totalItems << std::endl; // this will print 5.\n")),(0,o.kt)("h2",{id:"removecbdata"},"RemoveCBData"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Remove callback")," gets called with the following pieces of information:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"// Holds information about removal, used in RemoveCb\nstruct RemoveCbData {\n  // Remove or eviction\n  RemoveContext context;\n\n  // Item about to be freed back to allocator\n  Item& item;\n\n  // Iterator range pointing to chained allocs associated with items\n  folly::Range<ChainedItemIter> chainedAllocs;\n};\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"context")," This refers to the context of removal. ",(0,o.kt)("inlineCode",{parentName:"li"},"RemoveCB")," can be called ","[invoked]"," on an item when it is explicitly removed by the user through the ",(0,o.kt)("inlineCode",{parentName:"li"},"remove()")," API or when it is replacing an old item through the ",(0,o.kt)("inlineCode",{parentName:"li"},"insertOrReplace()")," API, or when it being evicted to make room for a new item. For the first two calls on ",(0,o.kt)("inlineCode",{parentName:"li"},"RemoveCB"),", the context is ",(0,o.kt)("inlineCode",{parentName:"li"},"kRemoval"),"; and for eviction, the context is ",(0,o.kt)("inlineCode",{parentName:"li"},"kEviction"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"item")," Reference to the item that is being destroyed. Modifying the item at this point is pointless because this is the last handle to the item and the memory will be recycled after the call to the remove callback."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"chainedAllocs")," This provides a reference to the list of chained items associated with the given item if they exist. For details on what chained allocations are, see ",(0,o.kt)("a",{parentName:"li",href:"Visit_data_in_cache"},"visit data in cache"),".")),(0,o.kt)("h2",{id:"guarantees"},"Guarantees"),(0,o.kt)("p",null,"Cachelib guarantees the following for remove callback executions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The callback will be executed ",(0,o.kt)("em",{parentName:"li"},"exactly once")," when the last handle for the item goes out of scope and the item is no longer accessible through the cache upon calling ",(0,o.kt)("inlineCode",{parentName:"li"},"remove()")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"insertOrReplace()")," causing a replace."),(0,o.kt)("li",{parentName:"ul"},"The callback will be executed for any item that is evicted from cache."),(0,o.kt)("li",{parentName:"ul"},"When the callback is executed, there can be no other future or concurrent accessors to the item."),(0,o.kt)("li",{parentName:"ul"},"The callback will ",(0,o.kt)("em",{parentName:"li"},"not")," be executed if you allocate memory for an item and don't insert the item into the cache."),(0,o.kt)("li",{parentName:"ul"},"The callback will ",(0,o.kt)("em",{parentName:"li"},"not")," be executed when items are moved internally.")),(0,o.kt)("p",null,"Note that remove callback is executed per item, not per key. For example, if you already have an item in cache and call ",(0,o.kt)("inlineCode",{parentName:"p"},"insertOrReplace()")," to replace it with another item with same key, cachelib will execute remove callback for the replaced item."),(0,o.kt)("h2",{id:"nvmcache"},"NvmCache"),(0,o.kt)("p",null,"Currently remove callback is not supported seamlessly when NvmCache is enabled. This will be addressed and available in the near future."))}u.isMDXComponent=!0}}]);