<script setup lang="ts">
const props = defineProps({ name: String })
</script>
<template>
  <div class="h-full w-full flex items-center justify-center bg-red-300">
    <p class="font-bold text-black">{{ props.name }}</p>
  </div>
</template>
