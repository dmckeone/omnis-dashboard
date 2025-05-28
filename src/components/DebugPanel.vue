<script setup lang="ts">
const props = defineProps({ name: String })
</script>
<template>
  <div class="flex h-full bg-red-300">
    <div class="m-auto">
      <span class="font-semibold">{{ props.name }}</span>
    </div>
  </div>
</template>
