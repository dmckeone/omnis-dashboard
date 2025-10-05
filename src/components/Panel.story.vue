<script setup lang="ts">
import { exampleTrafficSourcesChart, exampleStats, exampleImageCard } from "@/examples"

import Panel from "./Panel.vue"
import type { PanelUserEvent } from "@/panels.ts"

const onUserEvent = (id: number, panelType: string, info: PanelUserEvent) => {
  const payload = { id, "panel-type": panelType, ...info }
  alert(`User Event: ${JSON.stringify(payload)}`)
}
</script>

<template>
  <Story auto-props-disabled :layout="{ type: 'single', iframe: true }">
    <Variant title="Loading">
      <div class="h-screen">
        <Panel :config="{ id: 1, type: 'loading' }" @user-event="onUserEvent" />
      </div>
    </Variant>
    <Variant title="Error">
      <Panel
        :config="{ id: 1, type: 'error', error: 'Error: Something did not work' }"
        @user-event="onUserEvent"
      />
    </Variant>
    <Variant title="Chart">
      <div class="h-screen">
        <Panel
          :config="{ id: 1, type: 'echart', option: exampleTrafficSourcesChart }"
          @user-event="onUserEvent"
        />
      </div>
    </Variant>
    <Variant title="Debug">
      <div class="h-screen">
        <Panel :config="{ id: 1, type: 'debug' }" @user-event="onUserEvent" />
      </div>
    </Variant>
    <Variant title="Dashboard">
      <div class="h-screen">
        <Panel
          :config="{
            id: 1,
            type: 'dashboard',
            rows: 2,
            columns: 2,
            panels: [
              { id: 1, type: 'debug' },
              { id: 2, type: 'debug' },
              { id: 3, type: 'debug' },
              { id: 4, type: 'debug' }
            ]
          }"
          @user-event="onUserEvent"
        />
      </div>
    </Variant>
    <Variant title="Stats">
      <div class="h-screen">
        <Panel
          :config="{
            id: 1,
            type: 'stats',
            ...exampleStats
          }"
          @user-event="onUserEvent"
        />
      </div>
    </Variant>
    <Variant title="Image Card">
      <div class="h-screen">
        <Panel
          :config="{
            id: 1,
            type: 'image-card',
            ...exampleImageCard
          }"
          @user-event="onUserEvent"
        />
      </div>
    </Variant>
  </Story>
</template>
