import json
import os
import re
import multiprocessing
from itertools import product

def Run(args):
    trace = args[0]
    algo = args[1][0]
    cache_size = args[1][1]
    hit_ratio_file = trace + algo + '.hrc'
    data = {}
    data['cache_config'] = {
        'cacheSizeMB': cache_size,
        'poolRebalanceIntervalSec': 0,
        'allocator': algo
    }
    data['test_config'] = {
        'enableLookaside': True,
        'numOps': 400000000,
        "numThreads" : 1,
        "traceFileName" : "/home/hanson/trace-u32-le/" + trace,
        "generator" : "bin-replay"
    }
    config = algo + str(cache_size)
    with open(config + '.json', 'w') as outfile:
        json.dump(data, outfile)

    print("config file: ", config)
    os.system('./cachebench --json_test_config ' + config + '.json' + ' | tee ' + config)

    regex = re.compile("Hit Ratio.*")
    with open(config) as f:
        for line in f:
            result = regex.search(line)
            if (result) :
                hit_ratio  = float(result[0].split(':')[1].strip('%'))
                os.system("echo " + str(cache_size) + "," + str(hit_ratio) + " >>" + hit_ratio_file)

args = []
traces = ["w081"]
algos = ['LRU2Q']
caches = [1024, 2048, 4096, 5120, 6144, 6272, 6400, 6538, 6656, 6784, 6912, 7040, 7168, 7296]
input = list(product(traces, list(product(algos, caches))))
print(input)

pool = multiprocessing.Pool()
pool.map(Run, input)