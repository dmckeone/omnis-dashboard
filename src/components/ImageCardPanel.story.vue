<script setup lang="ts">
import { ref } from "vue"

import { exampleImageCard } from "@/examples"

import ImageCardPanel from "./ImageCardPanel.vue"

const title = ref("Card Title")
const card = ref(exampleImageCard)

const onUserEvent = (info: object) => {
  alert(`User Event: ${JSON.stringify(info)}`)
}
</script>

<template>
  <Story auto-props-disabled :layout="{ type: 'single', iframe: true }">
    <template #controls>
      <HstText v-model="title" title="Title" />
      <HstJson v-model="card" title="Card" />
    </template>

    <div class="size-full">
      <ImageCardPanel :id="1" :title="title" :card="card" @user-event="onUserEvent" />
    </div>
  </Story>
</template>
