<script setup lang="ts">
import { useDashboard } from "@/stores/dashboard"
import Dashboard from "./components/Dashboard.vue"
import Panel from "./components/Panel.vue"
import { useOmnis } from "@/stores/omnis.ts"
import type { PanelUserEvent } from "@/panels.ts"

const omnis = useOmnis()
const dashboard = useDashboard()

const onUserEvent = (id: number, panelType: string, info: PanelUserEvent) => {
  const payload = { id, "panel-type": panelType, ...info }
  omnis.emitEvent("user-event", JSON.stringify(payload))
}
</script>

<template>
  <div class="h-full min-h-screen" :data-theme="dashboard.theme">
    <div class="h-[97vh] m-2">
      <div v-if="!dashboard.panels || dashboard.panels.length === 0">No Panels</div>
      <Panel
        v-if="dashboard.columns === 1 && dashboard.rows === 1 && dashboard.panels.length === 1"
        :config="dashboard.panels[0]"
        @user-event="onUserEvent"
      />
      <Dashboard
        v-else
        v-model:panels="dashboard.panels"
        :debug="dashboard.debug"
        :columns="dashboard.columns"
        :rows="dashboard.rows"
        :bottom-margin="40"
        :theme="dashboard.theme"
        @user-event="onUserEvent"
      />
    </div>
  </div>
</template>
