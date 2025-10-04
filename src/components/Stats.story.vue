<script setup lang="ts">
import { ref } from "vue"

import { exampleStats } from "@/examples"

import Stats from "./Stats.vue"

const title = ref("Last 30 Days")
const stats = ref(exampleStats)
</script>

<template>
  <Story auto-props-disabled :layout="{ type: 'single', iframe: true }">
    <template #controls>
      <HstText v-model="title" title="Title" />
      <HstJson v-model="stats" title="Stats" />
    </template>

    <Stats :title="title" :stats="stats" />
  </Story>
</template>
