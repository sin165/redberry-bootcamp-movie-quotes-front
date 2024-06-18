<script setup lang="ts">
import UserAvatar from '@/components/shared/UserAvatar.vue'
import IconHouse from '@/components/icons/IconHouse.vue'
import IconCamera from '@/components/icons/IconCamera.vue'
import { useUserStore } from '@/store/UserStore'

const userStore = useUserStore()
</script>

<template>
  <nav>
    <RouterLink :to="{ name: 'profile' }" class="group flex gap-5 lg:gap-6 items-center">
      <div class="size-10 lg:size-15 shrink-0">
        <UserAvatar />
      </div>
      <div class="overflow-hidden">
        <h2 class="text-xl lg:text-2xl break-words">
          {{ userStore.name }}
        </h2>
        <p class="text-sm lg:text-base text-gray-light">
          {{ $t('button.edit_profile') }}
        </p>
      </div>
    </RouterLink>
    <RouterLink
      :to="{ name: 'feed' }"
      class="group flex items-center gap-5 lg:gap-6 mt-10 w-max hover:text-gray-dark"
    >
      <div class="w-10 lg:w-15">
        <IconHouse class="ml-2 group-[.router-link-active]:text-crimson" />
      </div>
      <h2 class="text-xl lg:text-2xl group-[.router-link-active]:text-white">
        {{ $t('button.news_feed') }}
      </h2>
    </RouterLink>
    <a class="group flex items-center gap-5 lg:gap-6 mt-11 w-max hover:text-gray-dark">
      <div class="w-10 lg:w-15">
        <IconCamera class="ml-2 group-[.router-link-active]:text-crimson" />
      </div>
      <h2 class="text-xl lg:text-2xl group-[.router-link-active]:text-white">
        {{ $t('button.list_of_movies') }}
      </h2>
    </a>
  </nav>
</template>
