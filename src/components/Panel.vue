<script setup lang="ts">
import { type PanelData, usePanel } from "@/panels"
import { toRef } from "vue"

const props = defineProps<{
  config?: PanelData
}>()
const panel = usePanel(toRef(props, "config"))
</script>

<template>
  <component :is="panel.component" v-if="panel" v-bind="panel.props" />
</template>

<style scoped></style>
