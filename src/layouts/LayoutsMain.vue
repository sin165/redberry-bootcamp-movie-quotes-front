<script setup lang="ts">
import LanguageSwitcher from '@/components/shared/LanguageSwitcher.vue'
import ButtonLogout from '@/components/shared/ButtonLogout.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import IconMenu from '@/components/icons/IconMenu.vue'
import IconGandalf from '@/components/icons/IconGandalf.vue'
import NavigationPanel from '@/components/shared/NavigationPanel.vue'
import { useUserStore } from '@/store/UserStore'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const userStore = useUserStore()
const menuOpen = ref(false)
</script>

<template>
  <div class="fixed w-dvw h-dvh bg-linear-dark-bottom -z-30"></div>
  <div v-if="userStore.email" class="text-white font-neue">
    <header class="fixed h-21.5 w-full bg-night-deep z-40">
      <div
        class="bg-lightened border-b border-night-pale h-full px-9 lg:px-17.5 flex justify-between items-center"
      >
        <div>
          <span class="text-beige font-medium hidden lg:block">MOVIE QUOTES</span>
          <IconMenu class="lg:hidden cursor-pointer" @click="menuOpen = !menuOpen" />
        </div>
        <div class="flex items-center gap-2 lg:gap-4">
          <LanguageSwitcher class="hidden lg:block" />
          <ButtonLogout class="hidden lg:block" />
        </div>
      </div>
    </header>
    <div class="flex">
      <div class="mt-30 ml-17.5 hidden lg:block">
        <div class="sticky top-30 left-0 max-w-72">
          <NavigationPanel />
        </div>
      </div>
      <div class="mt-21.5 lg:mx-17 w-full">
        <main>
          <slot></slot>
        </main>
      </div>
    </div>
    <div v-if="menuOpen" class="lg:hidden">
      <div class="fixed top-0 left-0 z-40 w-dvw h-dvh" @click="menuOpen = false"></div>
      <div
        class="fixed top-0 left-0 z-50 w-96 h-164.5 max-h-dvh bg-night-dark rounded-r-xl py-10 px-11 flex flex-col justify-between"
      >
        <NavigationPanel />
        <div class="flex items-center justify-between">
          <ButtonLogout />
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="userStore.loaded" class="pt-20 px-16 text-center text-white font-neue">
    <IconGandalf class="mx-auto" />
    <h2 class="text-2xl mb-4">You shall not pass!</h2>
    <p class="mb-8">{{ $t('message.you_dont_have_permission') }}</p>
    <RouterLink :to="{ name: 'home' }">
      <BaseButton>{{ $t('button.return_home') }}</BaseButton>
    </RouterLink>
  </div>
</template>
