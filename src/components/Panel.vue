<script setup lang="ts">
import { type PanelData, type PanelUserEvent, usePanel } from "@/panels"
import { toRef } from "vue"

const emit = defineEmits<{
  (e: "userEvent", id: number, panelType: string, info: PanelUserEvent): void
}>()

const props = defineProps<{
  config?: PanelData
}>()
const panel = usePanel(toRef(props, "config"))

const onUserEvent = (info: PanelUserEvent) => {
  emit(
    "userEvent",
    props.config ? props.config.id : -1,
    props.config ? props.config.type : "<unknown>",
    info
  )
}
</script>

<template>
  <component :is="panel.component" v-if="panel" v-bind="panel.props" @user-event="onUserEvent" />
</template>

<style scoped></style>
