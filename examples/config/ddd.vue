<template>
  <div>{{ dd }} {{ isDraggable }}</div>
</template>

<script setup>
defineProps({
  dd: [String, Number],
  isDraggable: Boolean
})
</script>

<style lang="scss" scoped></style>
