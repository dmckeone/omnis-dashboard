<script setup lang="ts">
import { VueDraggable } from "vue-draggable-plus"
import { computed, ref } from "vue"
import { useResizeObserver } from "@vueuse/core"

import Panel from "./Panel.vue"
import { isContainer, requiresClip, type PanelData, type PanelUserEvent } from "@/panels"

//region props
const props = withDefaults(
  defineProps<{
    panels: Array<PanelData>
    debug?: boolean
    drag?: boolean
    columns?: number
    rows?: number
    title?: string
    gap?: number
    bottomMargin?: number
    theme?: string
  }>(),
  {
    debug: false,
    drag: true,
    columns: 2,
    rows: 2,
    title: "",
    gap: 2,
    bottomMargin: 0,
    theme: "light"
  }
)
//endregion

//region events
const emit = defineEmits<{
  (e: "userEvent", id: number, panelType: string, info: PanelUserEvent): void
  (e: "update:panels", newPanels: Array<PanelData>): void
}>()

/**
 * Emit any drag'n'drop change back to the caller via v-model
 */
function movePanels(newPanels: Array<PanelData>) {
  emit("update:panels", newPanels)
}

const onUserEvent = (id: number, panelType: string, info: PanelUserEvent) => {
  emit("userEvent", id, panelType, info)
}
//endregion

//region resize observers
// Element references
const titleElement = ref(null)
const containerElement = ref(null)

// Section Heights
const DEFAULT_TITLE_HEIGHT = 50
const titleHeight = ref(0)
const DEFAULT_CONTAINER_HEIGHT = 50
const containerHeight = ref(0)

useResizeObserver(titleElement, (entries) => {
  const entry = entries[0]
  if (entry) {
    const { height } = entry.contentRect
    titleHeight.value = Math.min(Math.max(height, 0), document.documentElement.clientHeight)
  } else {
    titleHeight.value = DEFAULT_TITLE_HEIGHT
  }
})

useResizeObserver(containerElement, (entries) => {
  const entry = entries[0]
  if (entry) {
    const { height } = entry.contentRect
    containerHeight.value = Math.min(Math.max(height, 0), document.documentElement.clientHeight)
  } else {
    containerHeight.value = DEFAULT_CONTAINER_HEIGHT
  }
})
//endregion

//region validation
// Clamp columns and rows to 1x1 minimum and 4x4 maximum
const columns = computed(() => {
  if (props.columns <= 0) {
    return 1
  } else if (props.columns > 4) {
    return 4
  } else {
    return props.columns
  }
})

const rows = computed(() => {
  if (props.rows <= 0) {
    return 1
  } else if (props.rows > 4) {
    return 4
  } else {
    return props.rows
  }
})

// Clamp gap to 1 minimum and 4 maximum (what's supported by CSS grid)
const gap = computed(() => {
  if (props.gap <= 0) {
    return 1
  } else if (props.gap > 4) {
    return 4
  } else {
    return props.gap
  }
})
//endregion

//region panel layout
// Determine panel size
const marginPx = computed(() => gap.value * 4)
const marginHeight = computed(() => marginPx.value * (rows.value - 1))
const availableHeight = computed(
  () => containerHeight.value - titleHeight.value - marginHeight.value - props.bottomMargin
)
const panelHeight = computed(() => {
  const height = Math.floor(availableHeight.value / rows.value)
  return `${height}px`
})

// Dynamic grid columns, based on column count
const gridClasses = computed(() => ({
  "grid-cols-1": columns.value === 1,
  "grid-cols-2": columns.value === 2,
  "grid-cols-3": columns.value === 3,
  "grid-cols-4": columns.value === 4,
  "grid-cols-5": columns.value === 5,
  "grid-cols-6": columns.value === 6,
  "grid-cols-7": columns.value === 7,
  "grid-cols-8": columns.value === 8,
  "grid-cols-9": columns.value === 9,
  "grid-cols-10": columns.value === 10,
  "grid-cols-11": columns.value === 11,
  "grid-cols-12": columns.value === 12,

  "gap-1": gap.value === 1,
  "gap-2": gap.value === 2,
  "gap-3": gap.value === 3,
  "gap-4": gap.value === 4
}))
//endregion
</script>

<template>
  <div
    ref="containerElement"
    class="size-full"
    :class="{ 'bg-yellow-100': props.debug }"
    :data-theme="props.theme"
  >
    <div ref="titleElement">
      <h2 class="text-2xl font-semibold text-center">{{ props.title }}</h2>
    </div>
    <VueDraggable
      :disabled="!drag"
      :model-value="props.panels"
      class="grid"
      :class="gridClasses"
      @update:model-value="movePanels"
    >
      <TransitionGroup name="grid">
        <div
          v-for="panel in props.panels"
          :key="panel.id"
          class="panel-height"
          :class="{
            'bg-neutral-100/75 rounded-xl border-gray-200 shadow-md border': !isContainer(panel),
            'overflow-clip': requiresClip(panel),
            'overflow-visible': !requiresClip(panel)
          }"
        >
          <Panel :id="panel.id" :config="panel" @user-event="onUserEvent" />
        </div>
      </TransitionGroup>
    </VueDraggable>
  </div>
</template>

<style scoped>
.panel-height {
  height: v-bind(panelHeight);
}

/* Sometimes shows as unused, but is derived from TransitionGroup's name= */
.grid-move {
  transition: all 0.3s;
}
</style>
