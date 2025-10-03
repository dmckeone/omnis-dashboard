<script setup lang="ts">
import { ref } from "vue"

import { exampleTrafficSourcesChart } from "@/examples"
import { themes } from "@/echart-themes"

import Chart from "./Chart.vue"

const title = ref("")
const option = ref(exampleTrafficSourcesChart)
const theme = ref("default")
</script>

<template>
  <Story auto-props-disabled responsive-disabled>
    <div class="h-screen">
      <Chart :title="title" :option="option" :theme="theme" />
    </div>

    <template #controls>
      <HstText v-model="title" title="Title" />
      <HstJson v-model="option" title="Options" />
      <HstSelect v-model="theme" title="Theme" :options="themes" />
    </template>
  </Story>
</template>

<style scoped></style>
