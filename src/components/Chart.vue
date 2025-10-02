<script setup lang="ts">
import VChart from "vue-echarts"
import { computed, ref } from "vue"
import { useResizeObserver } from "@vueuse/core"

const panelElement = ref(null)
const panelHeight = ref(0)

useResizeObserver(panelElement, (entries) => {
  const entry = entries[0]
  if (!entry) {
    return
  }
  const { height } = entry.contentRect
  panelHeight.value = height
})

const titleElement = ref(null)
const titleHeight = ref(0)

useResizeObserver(titleElement, (entries) => {
  const entry = entries[0]
  if (!entry) {
    return
  }
  const { height } = entry.contentRect
  titleHeight.value = height
})

const chartHeight = computed(() => {
  const height = panelHeight.value - titleHeight.value
  return `${height}px`
})

const props = defineProps({ title: String, option: Object, theme: String })

// eCharts requires some extra spacing information to ensure that it takes up the whole container
const gridMargin = ref(20)
const option = computed(() => {
  const newOption = { ...props.option }

  // Inject grid spacing
  newOption["grid"] = newOption["grid"] ?? {}

  // Ensure that labels don't overflow
  newOption["grid"]["containLabel"] = true

  // 20px margin around grid drawing area
  newOption["grid"]["top"] = gridMargin.value
  newOption["grid"]["left"] = gridMargin.value
  newOption["grid"]["bottom"] = gridMargin.value
  newOption["grid"]["right"] = gridMargin.value

  return newOption
})
</script>

<template>
  <div ref="panelElement" class="h-full w-full">
    <p v-if="props.title" ref="titleElement" class="text-center">
      {{ props.title }}
    </p>
    <VChart class="chart" :option="option" :theme="props.theme" autoresize />
  </div>
</template>

<style scoped>
.chart {
  width: 100%;
  height: v-bind(chartHeight);
}
</style>
