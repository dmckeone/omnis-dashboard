<script setup lang="ts">
import { type Ref, toRef } from "vue"

export interface ImageCard {
  imageUrl?: string
  imageAlt?: string
  description?: string
  buttonTitle?: string
}

export interface ImageCardUserEvent {
  action: "click"
}

const emit = defineEmits<{
  (e: "userEvent", info: ImageCardUserEvent): void
}>()

const props = defineProps<{
  title: string
  card: ImageCard
}>()

const card: Ref<ImageCard> = toRef(props, "card")
</script>

<template>
  <div class="@container h-full card bg-base-100">
    <figure v-if="card.imageUrl">
      <img :src="card.imageUrl" :alt="card.imageAlt" />
    </figure>
    <div class="card-body">
      <h2 v-if="props.title" class="card-title">{{ props.title }}</h2>
      <p v-if="card.description">
        {{ card.description }}
      </p>
      <div v-if="card.buttonTitle" class="card-actions justify-end">
        <button class="btn btn-primary" @click="emit('userEvent', { action: 'click' })">
          {{ card.buttonTitle }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
