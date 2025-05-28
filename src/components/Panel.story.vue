<script setup lang="ts">
import { exampleTrafficSourcesChart, exampleStats } from "@/examples"

import Panel from "./Panel.vue"
</script>

<template>
  <Story auto-props-disabled responsive-disabled :layout="{ type: 'single', iframe: true }">
    <Variant title="Loading">
      <div class="h-screen">
        <Panel :config="{ id: 1, name: 'Widget 1', type: 'loading' }" />
      </div>
    </Variant>
    <Variant title="Error">
      <Panel
        :config="{ id: 1, name: 'Widget 1', type: 'error', error: 'Error: Something did not work' }"
      />
    </Variant>
    <Variant title="Chart">
      <div class="h-screen">
        <Panel
          :config="{ id: 1, name: 'Widget 1', type: 'echart', option: exampleTrafficSourcesChart }"
        />
      </div>
    </Variant>
    <Variant title="Debug">
      <div class="h-screen">
        <Panel :config="{ id: 1, name: 'Widget 1', type: 'debug' }" />
      </div>
    </Variant>
    <Variant title="Dashboard">
      <div class="h-screen">
        <Panel
          :config="{
            id: 1,
            name: 'Widget 1',
            type: 'dashboard',
            rows: 2,
            columns: 2,
            panels: [
              { id: 1, name: 'Widget 1', type: 'debug' },
              { id: 2, name: 'Widget 2', type: 'debug' },
              { id: 3, name: 'Widget 3', type: 'debug' },
              { id: 4, name: 'Widget 4', type: 'debug' }
            ]
          }"
        />
      </div>
    </Variant>
    <Variant title="Stats">
      <div class="h-screen">
        <Panel
          :config="{
            id: 1,
            name: 'Widget 1',
            type: 'stats',
            title: 'Last 30 Days',
            stats: exampleStats
          }"
        />
      </div>
    </Variant>
  </Story>
</template>
