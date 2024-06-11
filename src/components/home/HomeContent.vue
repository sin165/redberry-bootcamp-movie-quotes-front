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
              {{ $t('button.log_in') }}
            </button>
            <BaseButton :small="true" @click="emit('registerClick')">
              {{ $t('button.sign_up') }}
            </BaseButton>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div>
        <div class="h-121.25 lg:h-202"></div>
        <div class="relative">
          <img
            src="@/assets/images/image1sm.png"
            :alt="$t('home.interstellar.alt')"
            class="lg:hidden"
          />
          <img
            src="@/assets/images/image1lg.png"
            :alt="$t('home.interstellar.alt')"
            class="hidden lg:block"
          />
          <HomeContentQuote
            class="absolute top-37% lg:top-34.33% max-w-82 lg:max-w-208"
            :quote="$t('home.interstellar.quote')"
            :movie="$t('home.interstellar.title')"
          />
        </div>
        <div class="relative h-fit">
          <img
            src="@/assets/images/image3sm.png"
            :alt="$t('home.royal_tenenbaums.alt')"
            class="lg:hidden"
          />
          <img
            src="@/assets/images/image3lg.png"
            :alt="$t('home.royal_tenenbaums.alt')"
            class="hidden lg:block"
          />
          <div class="bg-linear-dark-top hidden lg:block size-full absolute top-0"></div>
          <HomeContentQuote
            class="absolute top-32% lg:top-41% max-w-78 lg:max-w-265"
            :quote="$t('home.royal_tenenbaums.quote')"
            :movie="$t('home.royal_tenenbaums.title')"
          />
        </div>
        <div class="relative">
          <img src="@/assets/images/image2sm.png" :alt="$t('home.lotr.alt')" class="lg:hidden" />
          <img
            src="@/assets/images/image2lg.png"
            :alt="$t('home.lotr.alt')"
            class="hidden lg:block"
          />
          <HomeContentQuote
            class="absolute top-35% lg:top-54% max-w-82 lg:max-w-265"
            :quote="$t('home.lotr.quote')"
            :movie="$t('home.lotr.title')"
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
            {{ $t('home.find_any_quote') }}
          </h1>
          <BaseButton class="mt-8" @click="emit('registerClick')">
            {{ $t('button.get_started') }}
          </BaseButton>
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
