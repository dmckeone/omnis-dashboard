<script setup lang="ts">
import { ref, type Ref, shallowRef } from "vue"
import { examplePanels } from "@/examples"

import Dashboard from "./Dashboard.vue"
import type { PanelData } from "@/panels"

const debug = ref(false)
const rows = ref(3)
const columns = ref(3)
const gap = ref(1)

const panels: Ref<Array<PanelData>> = shallowRef(examplePanels)
</script>

<template>
  <Story auto-props-disabled responsive-disabled :layout="{ type: 'single', iframe: true }">
    <template #controls>
      <HstCheckbox v-model="debug" title="Debug" />
      <HstNumber v-model="columns" title="Columns" />
      <HstNumber v-model="rows" title="Rows" />
      <HstNumber v-model="gap" title="Gap" />
      <HstJson v-model="panels" title="Panels" />
    </template>

    <div class="h-screen">
      <Dashboard
        v-model:panels="panels"
        :debug="debug"
        :rows="rows"
        :columns="columns"
        :gap="gap"
        :margin="2"
        :bottom-margin="40"
      />
    </div>
  </Story>
</template>
