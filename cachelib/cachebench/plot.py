#/usr/bin/python3
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
    
def Plot(trace_name, padding, ylabel):    
    fig, ax = plt.subplots(figsize=(4, 3.6), sharex=True, squeeze=True)
    for algo in algorithms:
        filename = trace_name + algo + ".hrc"
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
        
    # ax.legend(algorithms, fontsize=9, edgecolor='k',facecolor='w', framealpha=0, mode="expand", ncol=2, bbox_to_anchor=(-0.01, 0.865, 1.03, 0.1))
    ax.legend(algorithms, fontsize=9, fancybox=True, framealpha=0.5, edgecolor='k')

    # set y ticks
    # ymin, ymax = ax.get_ylim()
    # ax.set_ylim([0.1, ymax*1.18])
    # for label in ax.yaxis.get_ticklabels()[-3:]: # hidden last ticklabel
    #     label.set_visible(False)
    # ax.tick_params(axis="y", direction="inout", pad=padding)
    # for label in ax.yaxis.get_ticklabels():
    #     label.set_horizontalalignment('left')
    
        
    # set x ticks
    # ax.set_xlim([-5, 42])
    ax.set_ylabel("Miss Ratio (%)", fontsize=16)
    ax.set_xlabel("Cache Size (MB)", fontsize=16)

    # hide top edge
    # ax.spines['top'].set_visible(False)
        
    plt.xticks(rotation = 45)
    ax.yaxis.grid(linewidth=0.5, linestyle='--')
    fig.savefig(trace_name + ".pdf", bbox_inches='tight', pad_inches=0.05)

Plot("w081", 0, 0)


