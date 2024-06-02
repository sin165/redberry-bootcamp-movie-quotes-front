<script setup lang="ts">
import LayoutsAuth from '@/layouts/LayoutsAuth.vue'
</script>

<template>
  <LayoutsAuth>
    <div
      class="mt-20 pt-17.5 px-10 pb-24 rounded-0.5xl bg-linear-diagonal text-white lg:bg-none lg:p-0"
    >
      <div class="flex justify-center mb-4"><slot name="icon"></slot></div>
      <h2 class="font-medium text-2xl text-center"><slot name="title"></slot></h2>
      <p class="text-center my-6"><slot name="text"></slot></p>
      <div class="flex justify-center"><slot name="button"></slot></div>
    </div>
  </LayoutsAuth>
</template>
