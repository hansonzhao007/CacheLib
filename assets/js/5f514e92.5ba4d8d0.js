"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4198],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},354:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={id:"Configuring_cachebench_parameters",title:"Configuring cachebench parameters"},s=void 0,c={unversionedId:"Cache_Library_User_Guides/Configuring_cachebench_parameters",id:"Cache_Library_User_Guides/Configuring_cachebench_parameters",isDocsHomePage:!1,title:"Configuring cachebench parameters",description:"Command line parameters",source:"@site/docs/Cache_Library_User_Guides/Configuring_cachebench_parameters.md",sourceDirName:"Cache_Library_User_Guides",slug:"/Cache_Library_User_Guides/Configuring_cachebench_parameters",permalink:"/docs/Cache_Library_User_Guides/Configuring_cachebench_parameters",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Cache_Library_User_Guides/Configuring_cachebench_parameters.md",tags:[],version:"current",frontMatter:{id:"Configuring_cachebench_parameters",title:"Configuring cachebench parameters"},sidebar:"cachebenchSideBar",previous:{title:"Overview",permalink:"/docs/Cache_Library_User_Guides/Cachebench_Overview"},next:{title:"Contributing to Cachebench",permalink:"/docs/Cache_Library_User_Guides/Developing_for_Cachebench"}},p=[{value:"Command line parameters",id:"command-line-parameters",children:[{value:"JSON test configuration",id:"json-test-configuration",children:[],level:3},{value:"Watching progress",id:"watching-progress",children:[],level:3},{value:"Recording periodic stats",id:"recording-periodic-stats",children:[],level:3},{value:"Stopping after a certain duration",id:"stopping-after-a-certain-duration",children:[],level:3},{value:"Sample JSON test config",id:"sample-json-test-config",children:[],level:3}],level:2},{value:"Tuning workload parameters",id:"tuning-workload-parameters",children:[{value:"Duration of replay",id:"duration-of-replay",children:[],level:3},{value:"Number of benchmark threads",id:"number-of-benchmark-threads",children:[],level:3},{value:"Number of keys in cache",id:"number-of-keys-in-cache",children:[],level:3},{value:"Operation ratios",id:"operation-ratios",children:[],level:3},{value:"Workload generator",id:"workload-generator",children:[],level:3},{value:"Popularity and Size distribution",id:"popularity-and-size-distribution",children:[],level:3},{value:"Throttling the benchmark",id:"throttling-the-benchmark",children:[],level:3},{value:"Consistency checking",id:"consistency-checking",children:[],level:3},{value:"Populating items",id:"populating-items",children:[],level:3}],level:2},{value:"Tuning DRAM cache parameters",id:"tuning-dram-cache-parameters",children:[{value:"DRAM cache  size",id:"dram-cache--size",children:[],level:3},{value:"Allocator type and its eviction parameters",id:"allocator-type-and-its-eviction-parameters",children:[],level:3},{value:"Pools",id:"pools",children:[],level:3},{value:"Allocation sizes",id:"allocation-sizes",children:[],level:3},{value:"Access config parameters",id:"access-config-parameters",children:[],level:3},{value:"Pool rebalancing",id:"pool-rebalancing",children:[],level:3}],level:2},{value:"Hybrid cache parameters",id:"hybrid-cache-parameters",children:[{value:"Storage file/device/directory path info",id:"storage-filedevicedirectory-path-info",children:[],level:3},{value:"Monitoring write amplification",id:"monitoring-write-amplification",children:[],level:3},{value:"Storage engine parameters",id:"storage-engine-parameters",children:[],level:3},{value:"Small item engine parameters",id:"small-item-engine-parameters",children:[],level:3},{value:"Large item engine parameters",id:"large-item-engine-parameters",children:[],level:3}],level:2}],h={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"command-line-parameters"},"Command line parameters"),(0,r.kt)("p",null,"Cachebench takes command line parameters to control its behavior. The following are the semantics of the command line parameters:"),(0,r.kt)("h3",{id:"json-test-configuration"},"JSON test configuration"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--json_test_config")," is the most important command line parameter that is needed for  specifying the workoad and cache configuration for cachebench.  See the section below on JSON config for more details."),(0,r.kt)("h3",{id:"watching-progress"},"Watching progress"),(0,r.kt)("p",null,"While the benchmark runs, you can monitor the progress so far. The interval for progress update can be configured using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--progress")," and specifying a duration in seconds."),(0,r.kt)("h3",{id:"recording-periodic-stats"},"Recording periodic stats"),(0,r.kt)("p",null,"While the benchmark runs, you can have cachebench output a snapshot of its internal stats to a file periodically. To do this,   you have to pass a suitable file location to  ",(0,r.kt)("inlineCode",{parentName:"p"},"--progress_stats_file"),". cachebench will appendd stats to this file every ",(0,r.kt)("inlineCode",{parentName:"p"},"--progress")," interval."),(0,r.kt)("h3",{id:"stopping-after-a-certain-duration"},"Stopping after a certain duration"),(0,r.kt)("p",null,"If you would like cachebench to terminate after running for X hours, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"--timeout_seconds")," to pass a suitable timeout."),(0,r.kt)("h3",{id:"sample-json-test-config"},"Sample JSON test config"),(0,r.kt)("p",null,"Cachebench takes in a json config file that provides the workload and cache configuration. The following is a sample json config file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n   "cache_config" : {\n     "cacheSizeMB" : 512,\n     "poolRebalanceIntervalSec" : 1,\n     "moveOnSlabRelease" : false,\n     "numPools" : 2,\n     "poolSizes" : [0.3, 0.7]\n   },\n\n   "test_config" : {\n     "numOps" : 100000,\n     "numThreads" : 32,\n     "numKeys" : 1000000,\n     "distribution" :  "range",\n\n     "opDelayBatch" : 1,\n     "opDelayNs" : 200,\n\n     "keySizeRange" : [1, 8, 64],\n     "keySizeRangeProbability" : [0.3, 0.7],\n\n     "valSizeRange" : [1, 32, 10240, 409200],\n     "valSizeRangeProbability" : [0.1, 0.2, 0.7],\n\n     "getRatio" : 0.15,\n     "setRatio" : 0.8,\n     "delRatio" : 0.05,\n     "keyPoolDistribution": [0.4, 0.6],\n     "opPoolDistribution" : [0.5, 0.5]\n   }\n}\n\n')),(0,r.kt)("p",null,"This config file controls the parameters for the cache and the generated synthetic workload in two separate sections."),(0,r.kt)("h2",{id:"tuning-workload-parameters"},"Tuning workload parameters"),(0,r.kt)("p",null,"You can tune the workload parameters by modifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"test_config")," portion of the json file. The workload generator operates over a key space and their associated sizes. It generates cachebench operations to be executed for those keys."),(0,r.kt)("h3",{id:"duration-of-replay"},"Duration of replay"),(0,r.kt)("p",null,"To run cachebench operation for longer, increase the ",(0,r.kt)("inlineCode",{parentName:"p"},"numOps")," appropriately in the config file."),(0,r.kt)("h3",{id:"number-of-benchmark-threads"},"Number of benchmark threads"),(0,r.kt)("p",null,"You can adjust ",(0,r.kt)("inlineCode",{parentName:"p"},"numThreads")," to run the benchmark with more threads. Running with more threads should increase throughput until you run out of cpu or hit other bottlenecks from resource contention. For in-memory workloads, it is not recommended to set this beyond the  hardware concurrency supported on your machine."),(0,r.kt)("h3",{id:"number-of-keys-in-cache"},"Number of keys in cache"),(0,r.kt)("p",null,"To adjust the working set size of the cache, you can increase or decrease the  number of cache keys that the workload picks from."),(0,r.kt)("h3",{id:"operation-ratios"},"Operation ratios"),(0,r.kt)("p",null,"Cachebench picks operation types by its specified popularity ratios. The following list the supported operation types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getRatio"),"\nGenerates a get request resulting in ",(0,r.kt)("inlineCode",{parentName:"li"},"find")," API call."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setRatio"),"\nGenerates a set request by overriding any previous version of the key if it exists. This results in a call to the ",(0,r.kt)("inlineCode",{parentName:"li"},"allocate()")," API, followed by a call to the ",(0,r.kt)("inlineCode",{parentName:"li"},"insertOrReplace()")," API."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"delRatio"),"\nGenerates a remove request to remove a key from the cache."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"adChainedRatio"),"\nGenerates operations that allocate a chained allocation and adds it to the existing key. If the key is not present, it is created."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"loneGetRatio"),"\nGenerates a get request for a key that is definitely not present in the cache to simulate one-hit-wonders or churn.")),(0,r.kt)("p",null,"In conjuction with these operations, ",(0,r.kt)("inlineCode",{parentName:"p"},"enableLookaside")," emulates a behavior where missing keys are set in the cache. When this is used, ",(0,r.kt)("inlineCode",{parentName:"p"},"setRatio")," is usually not configured."),(0,r.kt)("h3",{id:"workload-generator"},"Workload generator"),(0,r.kt)("p",null,"You can configure three types of workload generators through the ",(0,r.kt)("inlineCode",{parentName:"p"},"generator")," parameter by specifying the corresponding identifier string."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"workload"),"\nGenerates keys and popularity ahead of time. This is the generator with the lowest run time overhead and hence is useful for measuring maximum throughput. The generator however consumes memory to keep keys and generated cache operations in memory and is not suitable when your memory footprint needs to be contained."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"online"),"\nGenerates keys and popularity online. Has very low overhead in terms of memory, but consumes marginal CPU to generate synthetic workload."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"replay"),"\nReplays a trace file passed in. Tracefile should contain lines with csv separated key, size, and number of accesses.")),(0,r.kt)("h3",{id:"popularity-and-size-distribution"},"Popularity and Size distribution"),(0,r.kt)("p",null,"cachebench supports generating synthetic workloads using a few techniques. The technique is configured through the ",(0,r.kt)("em",{parentName:"p"},"distribution")," argument. Based on the selected technique there can be additional parameters that can be configured. The supported techniques are"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"default"),"\nGenerates popularity of keys through a discrete distribution specified in  ",(0,r.kt)("em",{parentName:"p"},"popularityBuckets")," and ",(0,r.kt)("em",{parentName:"p"},"popularityWeights")," parameter. Discrete sizes are generated through a discrete distribution specified through ",(0,r.kt)("inlineCode",{parentName:"p"},"valSizeRange")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"valSizeRangeProbability"),". The value size configuration can be provided inline as an array or through a ",(0,r.kt)("inlineCode",{parentName:"p"},"valSizeDistFile")," in json format.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"normal"),"\nUses normal workload distribution for popularity of keys as opposed to discrete popularity buckets. For value sizes, it supports both discrete and continuous value size distribution. To use discrete value size distribution, the ",(0,r.kt)("inlineCode",{parentName:"p"},"valSizeRangeProbabilithy")," should have same number of values as ",(0,r.kt)("inlineCode",{parentName:"p"},"valSizeRange")," array. When ",(0,r.kt)("inlineCode",{parentName:"p"},"valSizeRangeProbabilithy")," contains one less member than ",(0,r.kt)("inlineCode",{parentName:"p"},"valSizeRange"),", we interpret the probability as corresponding to each interval in ",(0,r.kt)("inlineCode",{parentName:"p"},"valSizeRange")," and use a piecewise_constant_distribution."))),(0,r.kt)("p",null,"In all above setups, cachebench overrides the ",(0,r.kt)("inlineCode",{parentName:"p"},"valSizeRange")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"vaSizeRangeProbability")," from inline json array if ",(0,r.kt)("inlineCode",{parentName:"p"},"valSizeDistFile")," is present."),(0,r.kt)("h3",{id:"throttling-the-benchmark"},"Throttling the benchmark"),(0,r.kt)("p",null,"To measure the performance of HW at a certain throughput, cachebench can be artificially throttled by   specifying a non-zero ",(0,r.kt)("inlineCode",{parentName:"p"},"opDelayNs"),", that is applied every ",(0,r.kt)("inlineCode",{parentName:"p"},"opDelayBatch")," worth of operations per thread. To run un-throttled, set ",(0,r.kt)("inlineCode",{parentName:"p"},"opDelayNs")," to zero."),(0,r.kt)("h3",{id:"consistency-checking"},"Consistency checking"),(0,r.kt)("p",null,"You can enable runtime consistency checking of the APIs through cachebench. In this mode, cachebench validates the correctness semantics of API. This is useful when you make a cache to CacheLib and want to validate any data races resulting in incorrect API semantics."),(0,r.kt)("h3",{id:"populating-items"},"Populating items"),(0,r.kt)("p",null,"You can enable ",(0,r.kt)("em",{parentName:"p"},"populateItem")," to fill cache items with random bytes. When consistency mode is enabled, we populate the item automatically with unique values for validation."),(0,r.kt)("h2",{id:"tuning-dram-cache-parameters"},"Tuning DRAM cache parameters"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"cache_config")," section specifies knobs to control how the cache is configured. The following options are available to configure the DRAM cache parameters. DRAM cache parameters come into play when using hybrid cache as well as stand-alone DRAM cache mode."),(0,r.kt)("h3",{id:"dram-cache--size"},"DRAM cache  size"),(0,r.kt)("p",null,"You can set ",(0,r.kt)("inlineCode",{parentName:"p"},"cacheSizeMB")," to specify the size of the DRAM cache."),(0,r.kt)("h3",{id:"allocator-type-and-its-eviction-parameters"},"Allocator type and its eviction parameters"),(0,r.kt)("p",null,"CacheLib supports LruAllocator and Lru2QAllocator to choose from. You can specify this by setting the ",(0,r.kt)("em",{parentName:"p"},"allocator"),' to "LRU" or "LRU-2Q". Based on the type you choose you can configure the corresponding properties of DRAM eviction.'),(0,r.kt)("p",null,"Common options for  LruAllocator and Lru2QAllocator:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lruRefreshSec"),"\nSeconds since last access that initiates a bump on access."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lruRefreshRatio"),"\nLru refresh time specified as a ratio of the eviction age."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lruUpdateOnRead"),"\nControls if read accesses lead to updating LRU position."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lruUpdateOnWrite"),"\nControls if write accesss lead to updating LRU position."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tryLockUpdate"),"\nSkips updating the LRU position on contention.")),(0,r.kt)("p",null,"Options for LruAllocator:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lruIpSpec"),"\nInsertion point expressed as power of two.")),(0,r.kt)("p",null,"Options for Lru2QAllocator:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lru2qHotPct"),"\nPercentage of LRU dedicated for hot items"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lru2qColdPct"),"\nPercentage of LRU dedicated for cold items.")),(0,r.kt)("p",null,"For more details on the semantics of these parameters, see the documentation in ",(0,r.kt)("a",{parentName:"p",href:"eviction_policy"},"Eviction Policy guide"),"."),(0,r.kt)("h3",{id:"pools"},"Pools"),(0,r.kt)("p",null,"The DRAM cache can be split into multiple pools. To create the pools, you need to specify ",(0,r.kt)("inlineCode",{parentName:"p"},"numPools")," to the required number of pools and set ",(0,r.kt)("inlineCode",{parentName:"p"},"poolSizes")," array  to represent  the relative sizes of the pools."),(0,r.kt)("p",null,"When using pools, you can tune the workload to generate a different workload per pool. To split the keys and operations across pools, specify the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Breakdown of keys through ",(0,r.kt)("inlineCode",{parentName:"li"},"keyPoolDistribution")," array where each value represents the relative footprint of keys from ",(0,r.kt)("inlineCode",{parentName:"li"},"numKeys"),"."),(0,r.kt)("li",{parentName:"ul"},"Breakdown of operations per pool through ",(0,r.kt)("inlineCode",{parentName:"li"},"opPoolDistribution")," where each value represents the relative footprint of ",(0,r.kt)("inlineCode",{parentName:"li"},"numOps")," across pools.")),(0,r.kt)("p",null,"You can specify a seperate array of workload config that describes the key, size and popularity distribution per pool through ",(0,r.kt)("inlineCode",{parentName:"p"},"poolDistributionConfig"),". If not specified, the global configuration is applied across all the pools."),(0,r.kt)("h3",{id:"allocation-sizes"},"Allocation sizes"),(0,r.kt)("p",null,"You can specify custom allocation sizes by passing in an ",(0,r.kt)("inlineCode",{parentName:"p"},"allocSizes")," array. If ",(0,r.kt)("inlineCode",{parentName:"p"},"allocSizes")," is not present, we use default allocation sizes with a factor of 1.5, starting from 64 bytes to 1MB. To control allocation sizes through alloc factor, you can specify ",(0,r.kt)("inlineCode",{parentName:"p"},"allocFactor")," as a double and set ",(0,r.kt)("inlineCode",{parentName:"p"},"minAllocSize")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"maxAllocSize"),"."),(0,r.kt)("h3",{id:"access-config-parameters"},"Access config parameters"),(0,r.kt)("p",null,"CacheLib uses a hashtable to index keys. The configuration of the hashtable can have a big impact on throughput. ",(0,r.kt)("inlineCode",{parentName:"p"},"htBucketPower")," controls the number of hashtable buckets and ",(0,r.kt)("inlineCode",{parentName:"p"},"htLockPower")," configures the number of locks.  Usually, these should be configured in conjunction with the observed numItems in DRAM when the cache warms up.  See"),(0,r.kt)("h3",{id:"pool-rebalancing"},"Pool rebalancing"),(0,r.kt)("p",null,"To enable cachelib pool rebalancing techniques, you can set ",(0,r.kt)("inlineCode",{parentName:"p"},"poolRebalanceIntervalSec"),". The default strategy is to randomly release a slab to test for correctness. You can configure this to your preference by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"rebalanceStrategy"),' as "tail-age" or "hits". You can also specify ',(0,r.kt)("inlineCode",{parentName:"p"},"rebalanceMinSlabs")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"rebalanceDiffRatio")," to configure this further per documentation in ",(0,r.kt)("a",{parentName:"p",href:"pool_rebalance_strategy"},"Pool rebalancing guide"),"."),(0,r.kt)("h2",{id:"hybrid-cache-parameters"},"Hybrid cache parameters"),(0,r.kt)("p",null,"Hybrid cache parameters are configured under the ",(0,r.kt)("inlineCode",{parentName:"p"},"cache_config")," section. To enable hybrid cache for cachebench, you need to specify a non-zero value to the ",(0,r.kt)("inlineCode",{parentName:"p"},"nvmCacheSizeMB")," parameter."),(0,r.kt)("h3",{id:"storage-filedevicedirectory-path-info"},"Storage file/device/directory path info"),(0,r.kt)("p",null,"You can configure hybrid cache in multiple modes.  By default, if you set only ",(0,r.kt)("inlineCode",{parentName:"p"},"nvmCacheSizeMB")," and nothing else, cachebench will use an in-memory file device for simplicity. This is often used to test correctness quickly. To use an actual non-volatile medium, you can configure ",(0,r.kt)("inlineCode",{parentName:"p"},"nvmCachePaths"),", which is taken as an array of strings."),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"nvmCachePaths")," is set to a single element array that is a  directory, cachebench will create a suitable file inside the path and clean it up upon exit. Instead if ",(0,r.kt)("inlineCode",{parentName:"p"},"nvmCachePaths")," is single element array referring to a file or a raw device, cachebench will use it as is and leave it as is upon exit.  If the file specified is a regular file and is not to the specified size, CacheLib will try to fallocate to the necessary size. If more than one path is specified, CacheLib will use software RAID-0 across them and treat each file to be of ",(0,r.kt)("inlineCode",{parentName:"p"},"nvmCacheSizeMB"),".  By default, CacheLib uses direct io."),(0,r.kt)("h3",{id:"monitoring-write-amplification"},"Monitoring write amplification"),(0,r.kt)("p",null,"CacheBench can monitor the write-amplification of supported underlying devices if you specify them through ",(0,r.kt)("inlineCode",{parentName:"p"},"writeAmpDeviceList")," as an array of device paths. If the device is unsupported, an exception is logged, but the test proceeds. If this is empty, no monitoring is performed."),(0,r.kt)("h3",{id:"storage-engine-parameters"},"Storage engine parameters"),(0,r.kt)("p",null,"Set the following parameters to control the performance of the hybrid cache storage engine. See ",(0,r.kt)("a",{parentName:"p",href:"HybridCache"},"Hybrid Cache")," for more details."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"navyReaderThreads"),"  and ",(0,r.kt)("inlineCode",{parentName:"li"},"navyWriterThreads"),"\nControl the reader and writer thread pools."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"navyAdmissionWriteRateMB"),"\nThrottle limit for logical write rate to maintain device endurance limit."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"navyMaxConcurrentInserts"),"\nThrottle limit for in-flight hybrid cache writes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"navyParcelMemoryMB"),"\nThrottle limit for the memory footprint of in-flight writes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"navyDataChecksum"),"\nEnables check-summing data in addition to the headers."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"navyEncryption"),"\nEnables transparent device level encryption."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"navyReqOrderShardsPower"),"\nNumber of shards used for request ordering. The default is 21, corresponding to 2 million shards. The more shards, the less false positives and better concurrency. But this plateus beyond a certain number."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"truncateItemToOriginalAllocSizeInNvm"),"\nTruncates item to allocated size to optimize write performance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"deviceMaxWriteSize"),"\nThis controls the largest IO size we will write to the device. Any IO above this size will be split up into multiple IOs.")),(0,r.kt)("h3",{id:"small-item-engine-parameters"},"Small item engine parameters"),(0,r.kt)("p",null,"Use the following options to tune the performance of the Small Item engine (BigHash): BigHash operates a FIFO cache on SSD and is optimized for caching small objects."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"navySmallItemMaxSize"),"\nObject size threshold for small item engine."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"navyBigHashSizePct"),"\nWhen non-zero enables small item engine and its relative size."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"navyBigHashBucketSize"),"\nBucket size for small item engine."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"navyBloomFilterPerBucketSize"),"\nSize in bytes for the bloom filter per bucket.")),(0,r.kt)("h3",{id:"large-item-engine-parameters"},"Large item engine parameters"),(0,r.kt)("p",null,"Use the following options to tune the Large Item engine (BlockCache): Block cache is designed for caching objects that are around or larger than device block size. It can support variety of eviction policies from FIFO/LRU/SegmentedFIFO and can operate with stacked mode or size classes."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"navyBlockSize"),"\nUnderlying device block size for IO alignment."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"navySizeClasses"),"\nBy default, cachebench uses a pre-determined array of sizes. Values are stored in slots rounded up to this size.  The default value is overridden by passing an array of sizes explicitly to control size classes. If an empty array is passed, Navy uses stacked mode."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"navySegmentedFifoSegmentRatio"),"\nBy default Navy uses coarse grained LRU. To use FIFO, this parameter is set to an array with single value. To use segmented FIFO, this parameter is configured to control the number of segments by  specifying their ratios."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"navyHitsReinsertionThreshold"),"\nControl the threshold for reinserting items by their number of hits."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"navyProbabilityReinsertionThreshold"),"\nControl the probability based reinsertion of items."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"navyNumInmemBuffers"),"\nNumber of memory buffers used to optimize write performance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"navyCleanRegions"),"\nWhen un-buffered, the size of the clean regions pool."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"navyRegionSizeMB"),"\nThis controls the region size to use for BlockCache. If not specified, 16MB will be used. See ",(0,r.kt)("a",{parentName:"li",href:"Configure_HybridCache"},"Configure HybridCache")," for more details.")))}d.isMDXComponent=!0}}]);