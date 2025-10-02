<script setup lang="ts">
const props = defineProps<{ error: string }>()
</script>

<template>
  <div class="size-full flex items-center justify-center">
    <p class="font-bold text-error">{{ props.error }}</p>
  </div>
</template>

<style scoped></style>
