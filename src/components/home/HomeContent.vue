<script setup lang="ts">
import LanguageSwitcher from '@/components/shared/LanguageSwitcher.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import HomeContentQuote from '@/components/home/HomeContentQuote.vue'
const emit = defineEmits(['loginClick', 'registerClick'])
</script>

<template>
  <div class="max-w-107 mx-auto lg:max-w-480 bg-linear-dark-bottom relative">
    <header class="fixed w-full z-40">
      <div
        class="flex justify-between items-center pt-6 px-4 text-white max-w-107 lg:max-w-480 lg:px-17.5"
      >
        <div class="">
          <span class="text-beige font-medium font-neue">MOVIE QUOTES</span>
        </div>
        <div class="flex items-center gap-2 lg:gap-4 text-sm lg:text-base">
          <LanguageSwitcher />
          <div class="flex lg:flex-row-reverse gap-2 lg:gap-4">
            <button
              class="h-8 border border-white rounded px-3.25 py-auto lg:h-9.5"
              @click="emit('loginClick')"
            >
              Log in
            </button>
            <BaseButton :small="true" @click="emit('registerClick')">Sign up</BaseButton>
          </div>
        </div>
      </div>
    </header>
    <main class="">
      <div class="">
        <div class="h-121.25 lg:h-202"></div>
        <div class="relative">
          <img src="@/assets/images/image1sm.png" alt="scene from Interstellar" class="lg:hidden" />
          <img
            src="@/assets/images/image1lg.png"
            alt="scene from Interstellar"
            class="hidden lg:block"
          />
          <HomeContentQuote
            class="absolute top-37% lg:top-34.33% max-w-82 lg:max-w-208"
            quote="You have to leave somethig behind to go forward"
            movie="Interstellar, 2014"
          />
        </div>
        <div class="relative h-fit">
          <img
            src="@/assets/images/image3sm.png"
            alt="scene from The Royal Tenenbaums"
            class="lg:hidden"
          />
          <img
            src="@/assets/images/image3lg.png"
            alt="scene from The Royal Tenenbaums"
            class="hidden lg:block"
          />
          <div class="bg-linear-dark-top hidden lg:block size-full absolute top-0"></div>
          <HomeContentQuote
            class="absolute top-32% lg:top-41% max-w-78 lg:max-w-265"
            quote="I think we’re just gonna have to be secretly in love with each other and leave it at that"
            movie="The Royal Tenenbaums, 2001"
          />
        </div>
        <div class="relative">
          <img
            src="@/assets/images/image2sm.png"
            alt="scene from The Lord of the Rings"
            class="lg:hidden"
          />
          <img
            src="@/assets/images/image2lg.png"
            alt="scene from The Lord of the Rings"
            class="hidden lg:block"
          />
          <HomeContentQuote
            class="absolute top-35% lg:top-54% max-w-82 lg:max-w-265"
            quote="I see in your eyes the same fear that would take the heart of me...."
            movie="The Lord of the Rings, 2003"
          />
        </div>
      </div>
      <div class="">
        <div class="bg-linear-dark-middle h-271 w-full absolute top-0 left-0"></div>

        <div
          class="bg-linear-dark-left h-full w-full absolute top-0 left-0 lg:bg-linear-dark-left-half"
        ></div>
      </div>
      <div class="absolute top-48 w-full">
        <div class="max-w-107 lg:max-w-480">
          <h1
            class="text-2xl leading-9 font-bold text-center max-w-75 mx-auto font-montserrat text-beige lg:text-6xl lg:max-w-177.5 lg:leading-normal"
          >
            Find any quote in millions of movie lines
          </h1>
          <BaseButton class="mt-8" @click="emit('registerClick')"> Get started </BaseButton>
        </div>
      </div>
    </main>
    <footer class="h-8 w-full bg-linear-dark-bottom lg:h-12">
      <div class="relative">
        <p
          class="absolute top-2.5 left-8.5 lg:top-3.5 lg:left-17.5 text-beige text-xs font-medium uppercase"
        >
          © 2022 movie quotes. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>
