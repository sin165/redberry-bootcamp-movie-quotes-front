<script setup lang="ts">
import { useUserStore } from '@/store/UserStore'
const userStore = useUserStore()
</script>

<template>
  <div class="fixed w-dvw h-dvh bg-linear-dark-bottom -z-30"></div>
  <div class="text-white font-neue">
    <header class="h-21.5 w-full bg-night-deep">
      <div
        class="bg-lightened border-b border-night-pale h-full px-17.5 flex justify-between items-center"
      >
        <div>
          <span class="text-beige font-medium">MOVIE QUOTES</span>
        </div>
        <div>
          <button class="h-8 border border-white rounded px-3.25 py-auto lg:h-9.5">Log out</button>
        </div>
      </div>
    </header>
    <nav class="fixed top-30 left-17.5">
      <a class="flex gap-6">
        <div class="size-15"></div>
        <div>
          <h2 class="text-2xl">{{ userStore.getName }}</h2>
          <p>Edit your profile</p>
        </div>
      </a>
    </nav>
    <main>
      <slot></slot>
    </main>
  </div>
</template>
