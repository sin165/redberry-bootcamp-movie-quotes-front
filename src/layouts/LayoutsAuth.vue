<script setup lang="ts">
const emit = defineEmits(['close'])
</script>

<template>
  <div @wheel.prevent @scroll.prevent>
    <div class="bg-darkened fixed top-0 left-0 w-lvw h-lvh z-40" @click="emit('close')"></div>
    <div
      class="bg-linear-dark-bottom lg:bg-night fixed top-0 left-1/2 -translate-x-1/2 w-107 max-w-full h-full lg:w-150 lg:top-52.5 lg:h-fit z-50 px-8.5 lg:px-30 lg:rounded-0.5xl lg:pb-13 font-neue"
    >
      <slot></slot>
    </div>
  </div>
</template>
