<script setup lang="ts">
import IconX from '@/components/icons/IconX.vue'
const emit = defineEmits(['close'])
</script>

<template>
  <div>
    <div class="bg-darkened fixed top-0 left-0 w-lvw h-lvh z-40" @click="emit('close')"></div>
    <div
      class="bg-linear-dark-bottom lg:bg-night pb-8 absolute top-0 left-1/2 -translate-x-1/2 w-107 max-w-full h-full lg:w-150 lg:top-52.5 lg:h-fit z-50 px-8.5 lg:px-30 lg:rounded-0.5xl lg:pb-13 font-neue overflow-scroll lg:overflow-auto"
    >
      <slot></slot>
      <IconX
        class="absolute top-8 right-6 cursor-pointer lg:hidden text-gray-light"
        @click="emit('close')"
      />
    </div>
  </div>
</template>
