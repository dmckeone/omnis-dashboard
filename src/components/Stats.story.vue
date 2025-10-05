<script setup lang="ts">
import { reactive } from "vue"

import { exampleStats } from "@/examples"

import Stats from "./Stats.vue"

const props = reactive(exampleStats)
</script>

<template>
  <Story auto-props-disabled :layout="{ type: 'single', iframe: true }">
    <template #controls>
      <HstText v-model="props.title" title="Title" />
      <HstJson v-model="props.stats" title="Stats" />
    </template>

    <Stats :title="props.title" :stats="props.stats" />
  </Story>
</template>
