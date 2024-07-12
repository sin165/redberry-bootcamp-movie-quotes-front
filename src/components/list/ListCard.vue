<script setup lang="ts">
import IconQuote from '@/components/icons/IconQuote.vue'
import type { Movie } from '@/types'

const props = defineProps<{
  movie: Movie
}>()
</script>

<template>
  <article class="">
    <img
      :src="props.movie.poster"
      :alt="props.movie.title + ' poster'"
      class="w-full lg:w-110 h-75 lg:h-93 object-cover mb-3 rounded-xl"
    />
    <h3 class="text-2xl font-medium mb-4">{{ props.movie.title }} ({{ props.movie.year }})</h3>
    <p class="flex justify-start items-center gap-3">
      <span class="text-xl font-medium translate-y-0.5">0</span>
      <IconQuote />
    </p>
  </article>
</template>
