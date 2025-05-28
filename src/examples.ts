import { type EChartsOption } from "echarts"
import type { PanelData } from "@/panels"
import type { Stat } from "@/components/Stats.vue"

export const exampleStats: Array<Stat> = [
  {
    name: "Total Subscribers",
    type: "integer",
    current: 71897,
    previous: 70946
  },
  {
    name: "Avg. Open Rate",
    type: "percent",
    current: 0.5816,
    previous: 0.5614
  },
  {
    name: "Avg. Click Rate",
    type: "percent",
    current: 0.2457,
    previous: 0.2862
  }
]

export const exampleBarChart: EChartsOption = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "bar"
    }
  ]
}

export const exampleLineChart: EChartsOption = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: "line"
    }
  ]
}

export const exampleTrafficSourcesChart: EChartsOption = {
  title: {
    text: "Traffic Sources",
    left: "center"
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    orient: "vertical",
    left: "left",
    data: ["Direct", "Email", "Ad Networks", "Video Ads", "Search Engines"]
  },
  series: [
    {
      name: "Traffic Sources",
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [
        { value: 335, name: "Direct" },
        { value: 310, name: "Email" },
        { value: 234, name: "Ad Networks" },
        { value: 135, name: "Video Ads" },
        { value: 1548, name: "Search Engines" }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0
        }
      }
    }
  ]
}

export const examplePanels: Array<PanelData> = [
  { id: 1, name: "Widget 1", type: "stats", title: "Last 30 Days", stats: exampleStats },
  {
    id: 2,
    name: "Widget 2",
    type: "echart",
    option: exampleTrafficSourcesChart,
    theme: "infographic"
  },
  {
    id: 3,
    name: "Widget 3",
    type: "dashboard",
    rows: 2,
    columns: 2,
    panels: [
      { id: 1, name: "Widget 1", type: "debug" },
      { id: 2, name: "Widget 2", type: "echart", option: exampleBarChart, theme: "shine" },
      { id: 3, name: "Widget 3", type: "loading" },
      { id: 4, name: "Widget 4", type: "echart", option: exampleBarChart, theme: "wonderland" }
    ]
  },
  { id: 4, name: "Widget 4", type: "echart", option: exampleTrafficSourcesChart, theme: "roma" },
  { id: 5, name: "Widget 5", type: "loading" },
  { id: 6, name: "Widget 6", type: "echart", option: exampleTrafficSourcesChart, theme: "vintage" },
  { id: 7, name: "Widget 7", type: "error", error: "Error: Uh oh!" },
  { id: 8, name: "Widget 8", type: "echart", option: exampleTrafficSourcesChart },
  { id: 9, name: "Widget 9", type: "echart", option: exampleLineChart }
]
