"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4724],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return p}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=s(a),p=i,d=u["".concat(c,".").concat(p)]||u[p]||m[p]||o;return a?n.createElement(d,r(r({ref:t},h),{},{components:a})):n.createElement(d,r({ref:t},h))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4015:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return h},default:function(){return u}});var n=a(7462),i=a(3366),o=(a(7294),a(3905)),r=["components"],l={id:"CacheLib_configs",title:"CacheLib configs"},c=void 0,s={unversionedId:"Cache_Library_User_Guides/CacheLib_configs",id:"Cache_Library_User_Guides/CacheLib_configs",isDocsHomePage:!1,title:"CacheLib configs",description:"This document covers the configs that CacheLib cache consumes. In general there are two types of configs: the static ones that are consumed only when CacheAllocator is constructed, the dynamic ones that can be updated without restarting CacheAllocator.",source:"@site/docs/Cache_Library_User_Guides/CacheLib_configs.md",sourceDirName:"Cache_Library_User_Guides",slug:"/Cache_Library_User_Guides/CacheLib_configs",permalink:"/docs/Cache_Library_User_Guides/CacheLib_configs",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Cache_Library_User_Guides/CacheLib_configs.md",tags:[],version:"current",frontMatter:{id:"CacheLib_configs",title:"CacheLib configs"},sidebar:"userguideSidebar",previous:{title:"Tuning DRAM cache efficiency",permalink:"/docs/Cache_Library_User_Guides/Tuning_DRAM_cache_efficiency"}},h=[{value:"Static configs",id:"static-configs",children:[{value:"RAM cache configs",id:"ram-cache-configs",children:[],level:3},{value:"NVM Cache Configs",id:"nvm-cache-configs",children:[],level:3},{value:"WORKERS",id:"workers",children:[],level:3},{value:"Other configs",id:"other-configs",children:[],level:3}],level:2},{value:"Dynamic configs",id:"dynamic-configs",children:[{value:"Pool settings",id:"pool-settings",children:[],level:3}],level:2}],m={toc:h};function u(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document covers the configs that CacheLib cache consumes. In general there are two types of configs: the static ones that are consumed only when CacheAllocator is constructed, the dynamic ones that can be updated without restarting CacheAllocator."),(0,o.kt)("h2",{id:"static-configs"},"Static configs"),(0,o.kt)("p",null,"The most CacheLib configs living in CacheAllocatorConfig are static. These configs are consumed in the constructor of CacheAllocator."),(0,o.kt)("p",null,"The sections below list out the ",(0,o.kt)("em",{parentName:"p"},"config setters(in italic)")," in the order of the config they set gets consumed (the order of that config gets used in the constructor). You do ",(0,o.kt)("strong",{parentName:"p"},"not")," have to call these setters in this order and in fact some setters have to be called in a different order. All the setters here are functions under CacheAllocatorConfig."),(0,o.kt)("h3",{id:"ram-cache-configs"},"RAM cache configs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SharedMemoryManager: The component that controls the shared memory (new, attaching, etc)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"enableCachePersistence"),": setting cache directory."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"usePosixForShm"),": setting whether to Posix."))),(0,o.kt)("li",{parentName:"ul"},"Memory allocator: The components that manages memory allocations. (Carving out slabs, pool managers)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"setDefaultAllocSizes"),": set the default allocation sizes, by either supplying the sizes directly or specifying min, max, size factor and"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"enableCachePersistence"),": the baseAddr is used here as the slab base address (if supplied)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"setCacheSize"),": total RAM size."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"disableFullCoreDump"),": this flag is passed to construct slab allocator."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"enableCompactCache"),": This setter sets a flag of enableZeroedSlabAllocs, which is copied into MemoryAllocator::Config and is used later when releasing and allocating slabs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"setMemoryLocking"),": This flag is passed to construct slab allocator."))),(0,o.kt)("li",{parentName:"ul"},"Access container: The component that index the RAM cache.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"setAccessConfig"),": the access config is used to construct access container."))),(0,o.kt)("li",{parentName:"ul"},"Chained items: The components that manage chained item.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"configureChainedItems"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"chained item's accessConfig constructs the access container for chained item;"),(0,o.kt)("li",{parentName:"ul"},"lockPower: Controls the number of locks to sync chain items operation (move, transfer, etc). Note that this is not the same as the lock power of hash table of access containers.")))))),(0,o.kt)("h3",{id:"nvm-cache-configs"},"NVM Cache Configs"),(0,o.kt)("p",null,"Configs to initialize NVM cache lives in CacheAllocatorConfig::nvmConfig and a majority of them are still set via CacheAllocatorConfig's setter functions. Below is the list of setters in CacheAllocatorConfig that sets nvmConfig:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"enableCachePersistence: cache directory is used to initialize NVM cache as well.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"setDropNvmCacheOnShmNew"),": This flag is used to determine whether the NVM cache would start truncated."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"enableNvmCacheEncryption"),": This sets CacheAllocatorConfig::nvmConfig::deviceEncryptor."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"enableNvmCacheTruncateAllocSize"),": This sets CacheAllocatorConfig::nvmConfig::truncateItemToOriginalAllocSizeInNvm."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"setNvmCacheAdmissionPolicy"),"/",(0,o.kt)("em",{parentName:"li"},"enableRejectFirstAPForNvm"),": Sets the NvmAdmissionPolicy. Notice that the field lives with CacheAllocatorConfig."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"setNvmAdmissionMinTTL"),": Sets the NVM admission min TTL. Similarly this lives directly with CacheAllocatorConfig."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"enableNvmCache"),": Sets CacheAllocatorConfig::nvmConfig directly. This function should be called first if you intend to turn on NVM cache. And the other functions above would correctly modify the nvmConfig.")),(0,o.kt)("h3",{id:"workers"},"WORKERS"),(0,o.kt)("p",null,"CacheLib has worker threads that run in background for asynchronous jobs. These worker threads are initialized at the end of CacheAllocator's initialization."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pool resizers:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"setCacheWorkerPostWorkHandler"),": This sets a callback that is called on some workers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"enablePoolResizing"),": Pool resizing configs."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"pool_rebalance_strategy"},"Pool rebalancing"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"setCacheWorkerPostWorkHandler"),": Similarly, the same callback is used for pool rebalancer. Notice that here a default rebalancing strategy is provided for all pools. It could be overridden later with dynamic config."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"enablePoolRebalancing"),": Pool rebalancing configs."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"oom_protection"},"Memory monitor"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"setCacheWorkerPostWorkHandler"),": Similarly, the same callback is used for memory monitor."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"enableFreeMemoryMonitor"),"/enableResidentMemoryMonitor: Memory monitor configs."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"ttl_reaper/#configure-reaper"},"Reapers"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"enableItemReaperInBackground"),": Reaper configs."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"automatic_pool_resizing"},"Pool optimizer"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"enablePoolOptimizer"))))),(0,o.kt)("h3",{id:"other-configs"},"Other configs"),(0,o.kt)("p",null,"For the other fields in CacheAllocatorConfig that do not show up above (e.g. ",(0,o.kt)("em",{parentName:"p"},"CacheAllocatorConfig::enableFastShutdown"),"), they are all static configs but just not consumed in the constructor. In CacheAllocator's constructor, a deep copy of CacheAllocatorConfig is made and all the fields are read from that copy. ",(0,o.kt)("strong",{parentName:"p"},"Changing the copy of CacheAllocatorConfig after the construction of CacheAllocator won't change its behavior.")),(0,o.kt)("h2",{id:"dynamic-configs"},"Dynamic configs"),(0,o.kt)("p",null,"Now that static configs are set, CacheAllocator is initialized, you can set some other configs via CacheAllocator directly."),(0,o.kt)("h3",{id:"pool-settings"},"Pool settings"),(0,o.kt)("p",null,"After the CacheAllocator is constructed, you need to add pools. The pools can be added via addPool, which takes the following arguments and some of them can be overriden later."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"pool name"),(0,o.kt)("li",{parentName:"ul"},"size"),(0,o.kt)("li",{parentName:"ul"},"allocation sizes: This overrides the allocation size provided in the static config for memory allocator. If this is empty, the allocation sizes in the memory allocator will be used."),(0,o.kt)("li",{parentName:"ul"},"MMConfig: This can be overriden by ",(0,o.kt)("em",{parentName:"li"},"CacheAllocator::overridePoolConfig"),", which makes use of a config set by ",(0,o.kt)("em",{parentName:"li"},"CacheAllcatorConfig::enableTailHitsTracking"),"."),(0,o.kt)("li",{parentName:"ul"},"rebalanceStrategy: This overrides the one that is specified in the Pool rebalancing workers in the static config. And it could be in turn overridden by ",(0,o.kt)("em",{parentName:"li"},"CacheAllocator::overridePoolRebalanceStrategy"),"."),(0,o.kt)("li",{parentName:"ul"},"resizeStrategy: This overrides the one that is specified in the pool resizer workers in the static config. And it could be overridden by *CacheAllocator::overridePoolRe")))}u.isMDXComponent=!0}}]);