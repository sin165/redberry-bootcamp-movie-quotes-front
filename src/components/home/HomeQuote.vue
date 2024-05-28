<script setup lang="ts">
const props = defineProps<{
  quote: string
  movie: string
}>()
</script>

<template>
  <blockquote class="flex text-white ml-9 mr-6 lg:ml-42.5 z-30 font-montserrat">
    <div class="w-6 lg:w-17 mt-3 lg:mt-10 shrink-0">
      <div class="w-4.25 lg:w-13 border-b border-white"></div>
    </div>
    <div>
      <p class="text-xl font-bold lg:text-5.2xl">“{{ props.quote }}”</p>
      <footer class="mt-2 lg:mt-4 font-bold text-almost-white lg:text-3xl">
        {{ props.movie }}
      </footer>
    </div>
  </blockquote>
</template>
