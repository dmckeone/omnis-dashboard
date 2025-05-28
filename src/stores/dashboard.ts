import { defineStore } from "pinia"
import { computed, type Ref, shallowReactive, toRef } from "vue"

import { useOmnis } from "@/stores/omnis.js"
import type { PanelData } from "@/panels.ts"

export const defaultTheme = "default"

interface Dashboard {
  debug?: boolean
  drag?: boolean
  title?: string
  columns?: number
  rows?: number
  gap?: number
  bottomMargin?: number
  panels?: Array<PanelData>
}

export const useDashboard = defineStore("Dashboard", () => {
  const omnis = useOmnis()
  const data: Ref<Dashboard> = toRef(omnis, "data")

  // DEV NOTE: shallowReactive is required to avoid Pinia's reactive wrapping `panels` (an array container)
  return shallowReactive({
    debug: computed(() => data.value?.debug ?? false),
    drag: computed(() => data.value?.drag ?? false),
    title: computed(() => data.value?.title ?? false),
    columns: computed(() => data.value?.columns ?? 3),
    rows: computed(() => data.value?.rows ?? 3),
    gap: computed(() => data.value?.gap ?? 2),
    bottomMargin: computed(() => data.value?.bottomMargin ?? 0),
    panels: computed({
      get: () => data.value?.panels ?? [],
      set: (newPanels: PanelData[]) => {
        data.value = { ...data.value, panels: newPanels }
        omnis.emitEvent("update-panels", JSON.stringify(newPanels))
      }
    })
  })
})
