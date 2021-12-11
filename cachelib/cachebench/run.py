#/usr/bin/python3

# This script reads the trace files in binary format and replays them using four different 
# replacement algorithms. Please copy this file along with `config.json` to path:
# build-cachelib/cachebench, then change `trace_path` to the folder that contains 
# the trace files and run `python3 run.py`.

import json
import os
import re
import multiprocessing
from itertools import product
import csv
import pandas as pd
import matplotlib.pyplot as plt
import matplotlib.ticker as mticker
import mpl_toolkits.axisartist as axisartist
import numpy as np
from matplotlib.ticker import (MultipleLocator, FormatStrFormatter,
                               AutoMinorLocator)

# import matplotlib as mpl
plt.rcParams['axes.linewidth'] = 2

algorithms = ['LRU', 'LRU2Q', 'TinyLFU', 'Lirs']

# modify it to your path
trace_path = "/home/hanson/trace-u32-le/"

markers= {
    'LRU'     : 'x',     
    'LRU2Q'   : '|',
    'TinyLFU' : '^',
    'Lirs'    : 'o'
}

dashes= {
    'LRU'     : [2, 2],
    'LRU2Q'   : [2, 2],
    'TinyLFU' : [2, 2],
    'Lirs'    : [2, 0],
}

colors= {
    'LRU'     : '#f7cd6b',     
    'LRU2Q'   : '#F37F82',
    'TinyLFU' : '#999999',
    'Lirs'    : '#3182BD'
}
    
def Plot(trace_name):    
    fig, ax = plt.subplots(figsize=(4, 3.6), sharex=True, squeeze=True)
    for algo in algorithms:
        filename = "results/" + trace_name + algo + ".hrc"
        df = pd.read_csv(filename, header=None)
        df.columns = ['size', 'hit']
        df['hit'] = 100 - df['hit']
        df.sort_values(by=['size'], inplace= True)
        # df.sort_index()
        print(df)
        
        df.plot(
            ax=ax, 
            x='size',
            y='hit',
            linewidth=2,
            fontsize=14,
            marker=markers[algo],
            dashes=dashes[algo],
            markersize=8,
            fillstyle='none',
            color=colors[algo])
        
    ax.legend(algorithms, fontsize=9, edgecolor='k',facecolor='w', framealpha=0, mode="expand", ncol=4, bbox_to_anchor=(-0.01, 0.9, 1.03, 0.1))
    # ax.legend(algorithms, fontsize=9, fancybox=True, framealpha=0.5, edgecolor='k')

    # set ticks
    ymin, ymax = ax.get_ylim()
    ax.set_ylim([ymin, ymax*1.05])
    ax.set_ylabel("Miss Ratio (%)", fontsize=16)
    ax.set_xlabel("Cache Size (MB)", fontsize=16)
    ax.set_title(trace_name)

    # hide top edge
    # ax.spines['top'].set_visible(False)
        
    plt.xticks(rotation = 45)
    ax.yaxis.grid(linewidth=0.5, linestyle='--')
    fig.savefig(trace_name + ".pdf", bbox_inches='tight', pad_inches=0.05)

def Run(args):
    trace = args[0]
    algo = args[1][0]
    cache_size = args[1][1]
    hit_ratio_file = "results/" + trace + algo + '.hrc'
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
        "traceFileName" : trace_path + trace,
        "generator" : "bin-replay"
    }
    config = "data/" + trace + algo + str(cache_size)
    with open(config + '.json', 'w') as outfile:
        json.dump(data, outfile)

    print("config file: ", config)
    os.system('./cachebench --json_test_config ' + config + '.json' + ' | tee ' + config + '.raw')

    regex = re.compile("Hit Ratio.*")
    with open(config + ".raw") as f:
        for line in f:
            result = regex.search(line)
            if (result) :
                hit_ratio  = float(result[0].split(':')[1].strip('%'))
                os.system("echo " + str(cache_size) + "," + str(hit_ratio) + " >>" + hit_ratio_file)

json_config_file = open('config.json')
configs = json.load(json_config_file)
os.system("mkdir data")
os.system("mkdir results")

for config in configs['traces']:
    trace = [config['trace']]
    sizes = [int(i) for i in config['sizes']]
    input = list(product(trace, list(product(algorithms, sizes))))
    
    print(input)
    os.system("rm data/" + trace[0] + "*")
    os.system("rm results/" + trace[0] + "*")
    pool = multiprocessing.Pool()
    pool.map(Run, input)

    Plot(trace[0])

