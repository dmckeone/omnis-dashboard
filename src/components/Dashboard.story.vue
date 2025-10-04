<script setup lang="ts">
import { ref, type Ref, shallowRef } from "vue"
import { examplePanels } from "@/examples"

import Dashboard from "./Dashboard.vue"
import type { PanelData, PanelUserEvent } from "@/panels"

const debug = ref(false)
const rows = ref(3)
const columns = ref(3)
const gap = ref(1)
const theme = ref("light")

const panels: Ref<Array<PanelData>> = shallowRef(examplePanels)

const onUserEvent = (id: number, panelType: string, info: PanelUserEvent) => {
  const payload = { id, "panel-type": panelType, ...info }
  alert(`User Event: ${JSON.stringify(payload)}`)
}
</script>

<template>
  <Story auto-props-disabled :layout="{ type: 'single', iframe: true }">
    <template #controls>
      <HstCheckbox v-model="debug" title="Debug" />
      <HstNumber v-model="columns" title="Columns" />
      <HstNumber v-model="rows" title="Rows" />
      <HstNumber v-model="gap" title="Gap" />
      <HstSelect
        v-model="theme"
        title="Theme"
        :options="[
          'light',
          'dark',
          'cupcake',
          'bumblebee',
          'emerald',
          'corporate',
          'synthwave',
          'retro',
          'cyberpunk',
          'valentine',
          'halloween',
          'garden',
          'forest',
          'aqua',
          'lofi',
          'pastel',
          'fantasy',
          'wireframe',
          'black',
          'luxury',
          'dracula',
          'cmyk',
          'autumn',
          'business',
          'acid',
          'lemonade',
          'night',
          'coffee',
          'winter',
          'dim',
          'nord',
          'sunset',
          'caramellatte',
          'abyss',
          'silk'
        ]"
      />
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
        :theme="theme"
        @user-event="onUserEvent"
      />
    </div>
  </Story>
</template>
