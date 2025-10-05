<script setup lang="ts">
export interface ImageCard {
  title: string
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

const props = defineProps<ImageCard>()
</script>

<template>
  <div class="@container h-full card bg-base-100">
    <figure v-if="props.imageUrl">
      <img :src="props.imageUrl" :alt="props.imageAlt" />
    </figure>
    <div class="card-body">
      <h2 v-if="props.title" class="card-title">{{ props.title }}</h2>
      <p v-if="props.description">
        {{ props.description }}
      </p>
      <div v-if="props.buttonTitle" class="card-actions justify-end">
        <button class="btn btn-primary" @click="emit('userEvent', { action: 'click' })">
          {{ props.buttonTitle }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
