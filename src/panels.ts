import type { Component, ComputedRef, Ref } from "vue"
import type { EChartsOption } from "echarts"
import { computed } from "vue"

import Chart from "./components/Chart.vue"
import Dashboard from "./components/Dashboard.vue"
import DebugPanel from "./components/DebugPanel.vue"
import ErrorPanel from "./components/ErrorPanel.vue"
import LoadingPanel from "./components/LoadingPanel.vue"
import Stats from "./components/Stats.vue"
import type { Stat } from "./components/Stats.vue"

//region types
interface PanelDefinition {
  component: Component
  props: object
}

interface BasePanel {
  id: number
  name: string
  loading?: boolean
  error?: string
}

export interface DashboardPanel<T> extends BasePanel {
  type: "dashboard"
  debug?: boolean
  drag?: boolean
  title?: string
  columns?: number
  rows?: number
  gap?: number
  bottomMargin?: number
  panels?: Array<T>
}

interface DebugPanel extends BasePanel {
  type: "debug"
}

interface ChartPanel extends BasePanel {
  type: "echart"
  option?: EChartsOption
  title?: string
  theme?: string
}

interface LoadingPanel extends BasePanel {
  type: "loading"
}

interface ErrorPanel extends BasePanel {
  type: "error"
  error: string
}

interface StatsPanel extends BasePanel {
  type: "stats"
  title?: string
  stats?: Array<Stat>
}

export type PanelData =
  | ChartPanel
  | DashboardPanel<PanelData>
  | DebugPanel
  | ErrorPanel
  | LoadingPanel
  | StatsPanel
//endregion

//region panels
const panels: { [key: string]: (panel: any) => PanelDefinition } = {}

panels["dashboard"] = function dashboard(panel: DashboardPanel<PanelData>) {
  return {
    component: Dashboard,
    props: {
      debug: panel?.debug,
      drag: false,
      title: panel?.title,
      columns: panel?.columns,
      rows: panel?.rows,
      gap: panel?.gap,
      panels: panel?.panels,
      bottomMargin: panel?.bottomMargin
    }
  }
}

panels["debug"] = function debug(panel: DebugPanel) {
  return { component: DebugPanel, props: { name: panel?.name } }
}

panels["echart"] = function echart(panel: ChartPanel) {
  return {
    component: Chart,
    props: {
      option: panel?.option,
      theme: panel?.theme,
      title: panel?.title
    }
  }
}

panels["error"] = function error(panel: ErrorPanel) {
  return { component: ErrorPanel, props: { error: panel?.error } }
}

panels["loading"] = function loading() {
  return { component: LoadingPanel, props: {} }
}

panels["stats"] = function stats(panel: StatsPanel) {
  return {
    component: Stats,
    props: { title: panel?.title, stats: panel?.stats }
  }
}
//endregion

//region utilities
export function usePanel(panel: Ref<PanelData | undefined>): ComputedRef<PanelDefinition> {
  return computed(() => {
    const itemType = panel.value?.type
    let func = panels["debug"]
    if (itemType != null) {
      func = panels[itemType]
    }
    return func(panel.value)
  })
}

const containers = new Set(["dashboard"])

/**
 * Is Container
 *
 * Detect if an item is a container (and doesn't need styling)
 */
export function isContainer(item: PanelData) {
  return containers.has(item?.type)
}

/**
 * Requires Clip
 *
 * Detect if an item needs clipping  false if it can overflow safely
 */
export function requiresClip(item: PanelData) {
  return !isContainer(item) && item?.type != "echart"
}
//endregion
