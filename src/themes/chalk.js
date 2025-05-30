import { registerTheme } from "echarts"

registerTheme("chalk", {
  color: ["#fc97af", "#87f7cf", "#f7f494", "#72ccff", "#f7c5a0", "#d4a4eb", "#d2f5a6", "#76f2f2"],
  backgroundColor: "rgba(41,52,65,1)",
  textStyle: {},
  title: {
    textStyle: {
      color: "#ffffff"
    },
    subtextStyle: {
      color: "#dddddd"
    }
  },
  line: {
    itemStyle: {
      normal: {
        borderWidth: "4"
      }
    },
    lineStyle: {
      normal: {
        width: "3"
      }
    },
    symbolSize: "0",
    symbol: "circle",
    smooth: true
  },
  radar: {
    itemStyle: {
      normal: {
        borderWidth: "4"
      }
    },
    lineStyle: {
      normal: {
        width: "3"
      }
    },
    symbolSize: "0",
    symbol: "circle",
    smooth: true
  },
  bar: {
    itemStyle: {
      normal: {
        barBorderWidth: 0,
        barBorderColor: "#ccc"
      },
      emphasis: {
        barBorderWidth: 0,
        barBorderColor: "#ccc"
      }
    }
  },
  pie: {
    itemStyle: {
      normal: {
        borderWidth: 0,
        borderColor: "#ccc"
      },
      emphasis: {
        borderWidth: 0,
        borderColor: "#ccc"
      }
    }
  },
  scatter: {
    itemStyle: {
      normal: {
        borderWidth: 0,
        borderColor: "#ccc"
      },
      emphasis: {
        borderWidth: 0,
        borderColor: "#ccc"
      }
    }
  },
  boxplot: {
    itemStyle: {
      normal: {
        borderWidth: 0,
        borderColor: "#ccc"
      },
      emphasis: {
        borderWidth: 0,
        borderColor: "#ccc"
      }
    }
  },
  parallel: {
    itemStyle: {
      normal: {
        borderWidth: 0,
        borderColor: "#ccc"
      },
      emphasis: {
        borderWidth: 0,
        borderColor: "#ccc"
      }
    }
  },
  sankey: {
    itemStyle: {
      normal: {
        borderWidth: 0,
        borderColor: "#ccc"
      },
      emphasis: {
        borderWidth: 0,
        borderColor: "#ccc"
      }
    }
  },
  funnel: {
    itemStyle: {
      normal: {
        borderWidth: 0,
        borderColor: "#ccc"
      },
      emphasis: {
        borderWidth: 0,
        borderColor: "#ccc"
      }
    }
  },
  gauge: {
    itemStyle: {
      normal: {
        borderWidth: 0,
        borderColor: "#ccc"
      },
      emphasis: {
        borderWidth: 0,
        borderColor: "#ccc"
      }
    }
  },
  candlestick: {
    itemStyle: {
      normal: {
        color: "#fc97af",
        color0: "transparent",
        borderColor: "#fc97af",
        borderColor0: "#87f7cf",
        borderWidth: "2"
      }
    }
  },
  graph: {
    itemStyle: {
      normal: {
        borderWidth: 0,
        borderColor: "#ccc"
      }
    },
    lineStyle: {
      normal: {
        width: "1",
        color: "#ffffff"
      }
    },
    symbolSize: "0",
    symbol: "circle",
    smooth: true,
    color: ["#fc97af", "#87f7cf", "#f7f494", "#72ccff", "#f7c5a0", "#d4a4eb", "#d2f5a6", "#76f2f2"],
    label: {
      normal: {
        textStyle: {
          color: "#293441"
        }
      }
    }
  },
  map: {
    itemStyle: {
      normal: {
        areaColor: "#f3f3f3",
        borderColor: "#999999",
        borderWidth: 0.5
      },
      emphasis: {
        areaColor: "rgba(255,178,72,1)",
        borderColor: "#eb8146",
        borderWidth: 1
      }
    },
    label: {
      normal: {
        textStyle: {
          color: "#893448"
        }
      },
      emphasis: {
        textStyle: {
          color: "rgb(137,52,72)"
        }
      }
    }
  },
  geo: {
    itemStyle: {
      normal: {
        areaColor: "#f3f3f3",
        borderColor: "#999999",
        borderWidth: 0.5
      },
      emphasis: {
        areaColor: "rgba(255,178,72,1)",
        borderColor: "#eb8146",
        borderWidth: 1
      }
    },
    label: {
      normal: {
        textStyle: {
          color: "#893448"
        }
      },
      emphasis: {
        textStyle: {
          color: "rgb(137,52,72)"
        }
      }
    }
  },
  categoryAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: "#666666"
      }
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: "#333"
      }
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: "#aaaaaa"
      }
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: ["#e6e6e6"]
      }
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"]
      }
    }
  },
  valueAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: "#666666"
      }
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: "#333"
      }
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: "#aaaaaa"
      }
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: ["#e6e6e6"]
      }
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"]
      }
    }
  },
  logAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: "#666666"
      }
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: "#333"
      }
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: "#aaaaaa"
      }
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: ["#e6e6e6"]
      }
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"]
      }
    }
  },
  timeAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: "#666666"
      }
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: "#333"
      }
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: "#aaaaaa"
      }
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: ["#e6e6e6"]
      }
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"]
      }
    }
  },
  toolbox: {
    iconStyle: {
      normal: {
        borderColor: "#999999"
      },
      emphasis: {
        borderColor: "#666666"
      }
    }
  },
  legend: {
    textStyle: {
      color: "#999999"
    }
  },
  tooltip: {
    axisPointer: {
      lineStyle: {
        color: "#cccccc",
        width: 1
      },
      crossStyle: {
        color: "#cccccc",
        width: 1
      }
    }
  },
  timeline: {
    lineStyle: {
      color: "#87f7cf",
      width: 1
    },
    itemStyle: {
      normal: {
        color: "#87f7cf",
        borderWidth: 1
      },
      emphasis: {
        color: "#f7f494"
      }
    },
    controlStyle: {
      normal: {
        color: "#87f7cf",
        borderColor: "#87f7cf",
        borderWidth: 0.5
      },
      emphasis: {
        color: "#87f7cf",
        borderColor: "#87f7cf",
        borderWidth: 0.5
      }
    },
    checkpointStyle: {
      color: "#fc97af",
      borderColor: "rgba(252,151,175,0.3)"
    },
    label: {
      normal: {
        textStyle: {
          color: "#87f7cf"
        }
      },
      emphasis: {
        textStyle: {
          color: "#87f7cf"
        }
      }
    }
  },
  visualMap: {
    color: ["#fc97af", "#87f7cf"]
  },
  dataZoom: {
    backgroundColor: "rgba(255,255,255,0)",
    dataBackgroundColor: "rgba(114,204,255,1)",
    fillerColor: "rgba(114,204,255,0.2)",
    handleColor: "#72ccff",
    handleSize: "100%",
    textStyle: {
      color: "#333333"
    }
  },
  markPoint: {
    label: {
      normal: {
        textStyle: {
          color: "#293441"
        }
      },
      emphasis: {
        textStyle: {
          color: "#293441"
        }
      }
    }
  }
})
