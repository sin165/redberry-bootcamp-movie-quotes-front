<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue'
import IconGandalf from '@/components/icons/IconGandalf.vue'
import { useFetch } from '@/composables/useFetch'
import { useUserStore } from '@/store/UserStore'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()
const userStore = useUserStore()
const { status, loading, executeFetch } = useFetch('/logout', 'POST', true)
const logout = async () => {
  await executeFetch()
  if (status.value === 200) {
    userStore.clearUser()
    router.push({ name: 'home' })
  }
}
</script>

<template>
  <div class="fixed w-dvw h-dvh bg-linear-dark-bottom -z-30"></div>
  <div v-if="userStore.email" class="text-white font-neue">
    <header class="h-21.5 w-full bg-night-deep">
      <div
        class="bg-lightened border-b border-night-pale h-full px-17.5 flex justify-between items-center"
      >
        <div>
          <span class="text-beige font-medium">MOVIE QUOTES</span>
        </div>
        <div>
          <button
            :disabled="loading"
            class="h-8 border border-white rounded px-3.25 py-auto lg:h-9.5"
            @click="logout"
          >
            Log out
          </button>
        </div>
      </div>
    </header>
    <nav class="fixed top-30 left-17.5">
      <a class="flex gap-6">
        <div class="size-15"></div>
        <div>
          <h2 class="text-2xl">{{ userStore.name }}</h2>
          <p>Edit your profile</p>
        </div>
      </a>
    </nav>
    <main>
      <slot></slot>
    </main>
  </div>
  <div v-else-if="userStore.loaded" class="pt-20 px-16 text-center text-white font-neue">
    <IconGandalf class="mx-auto" />
    <h2 class="text-2xl mb-4">You shall not pass!</h2>
    <p class="mb-8">Sorry, but you don’t have permission to access this page</p>
    <RouterLink :to="{ name: 'home' }">
      <BaseButton>Return home</BaseButton>
    </RouterLink>
  </div>
</template>
