<script setup lang="ts">
import { reactive } from "vue"

import { exampleImageCard } from "@/examples"

import ImageCardPanel from "./ImageCard.vue"

const props = reactive(exampleImageCard)

const onUserEvent = (info: object) => {
  alert(`User Event: ${JSON.stringify(info)}`)
}
</script>

<template>
  <Story auto-props-disabled :layout="{ type: 'single', iframe: true }">
    <template #controls>
      <HstText v-model="props.title" title="Title" />
      <HstText v-model="props.imageUrl" title="ImageUrl" />
      <HstText v-model="props.imageAlt" title="ImageAlt" />
      <HstText v-model="props.description" title="Description" />
      <HstText v-model="props.buttonTitle" title="ButtonTitle" />
    </template>

    <div class="size-full">
      <ImageCardPanel
        :id="1"
        :title="props.title"
        :imageUrl="props.imageUrl"
        :imageAlt="props.imageAlt"
        :description="props.description"
        :buttonTitle="props.buttonTitle"
        @user-event="onUserEvent"
      />
    </div>
  </Story>
</template>
