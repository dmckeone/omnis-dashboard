<script setup lang="ts">
import { useDashboard } from "@/stores/dashboard"
import Dashboard from "./components/Dashboard.vue"
import Panel from "./components/Panel.vue"

const dashboard = useDashboard()
</script>

<template>
  <div class="h-[97vh] m-2">
    <div v-if="!dashboard.panels || dashboard.panels.length === 0">No Panels</div>
    <Panel
      v-if="dashboard.columns === 1 && dashboard.rows === 1 && dashboard.panels.length === 1"
      :config="dashboard.panels[0]"
    />
    <Dashboard
      v-else
      v-model:panels="dashboard.panels"
      :debug="dashboard.debug"
      :columns="dashboard.columns"
      :rows="dashboard.rows"
      :bottom-margin="40"
    />
  </div>
</template>
