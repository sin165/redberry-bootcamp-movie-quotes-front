<script setup lang="ts">
const props = defineProps<{
  small?: boolean
  loading?: boolean
}>()
</script>

<template>
  <button
    class="block rounded mx-auto px-3.25 lg:px-4.25 border text-white"
    :class="{
      'bg-crimson-800 border-crimson-200 shadow-pink': props.loading,
      'bg-crimson border-transparent hover:bg-crimson-700 active:bg-crimson-800': !props.loading,
      'h-9.5 lg:h-12 lg:text-xl': !props.small,
      'h-8 lg:h-9.5': props.small
    }"
  >
    <slot></slot>
  </button>
</template>
