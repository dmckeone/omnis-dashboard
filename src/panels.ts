import type { Component, ComputedRef, Ref } from "vue"
import type { EChartsOption } from "echarts"
import { computed } from "vue"

import Chart from "./components/Chart.vue"
import Dashboard from "./components/Dashboard.vue"
import DebugPanel from "./components/DebugPanel.vue"
import ErrorPanel from "./components/ErrorPanel.vue"
import ImageCardPanel from "./components/ImageCard.vue"
import LoadingPanel from "./components/LoadingPanel.vue"
import Stats from "./components/Stats.vue"
import type { Stat } from "./components/Stats.vue"
import type { ImageCardUserEvent } from "./components/ImageCard.vue"

//region types
interface PanelDefinition {
  component: Component
  props: object
}

interface BasePanel {
  id: number
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
  theme?: string
}

interface DebugPanel extends BasePanel {
  type: "debug"
  name?: string
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

interface ImageCardPanel extends BasePanel {
  type: "image-card"
  title?: string
  imageUrl?: string
  imageAlt?: string
  description?: string
  buttonTitle?: string
}

// All panel data
export type PanelData =
  | ChartPanel
  | DashboardPanel<PanelData>
  | DebugPanel
  | ErrorPanel
  | LoadingPanel
  | StatsPanel
  | ImageCardPanel

// All data return from unique panel user events
export type PanelUserEvent = ImageCardUserEvent
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
      bottomMargin: panel?.bottomMargin,
      theme: panel?.theme
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

panels["image-card"] = function stats(panel: ImageCardPanel) {
  return {
    component: ImageCardPanel,
    props: {
      title: panel?.title,
      imageUrl: panel?.imageUrl,
      imageAlt: panel?.imageAlt,
      description: panel?.description,
      buttonTitle: panel?.buttonTitle
    }
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
    if (func) {
      return func(panel.value)
    } else {
      return {
        id: -1,
        component: ErrorPanel,
        props: { error: "Invalid panel type" }
      }
    }
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
