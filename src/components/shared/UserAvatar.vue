<script setup lang="ts">
import IconAvatarDefault from '@/components/icons/IconAvatarDefault.vue'
import { useUserStore } from '@/store/UserStore'

const userStore = useUserStore()
const props = defineProps<{
  newAvatar?: string | null
}>()
</script>

<template>
  <img
    v-if="props.newAvatar || userStore.avatar"
    :src="props.newAvatar || userStore.avatar"
    alt="avatar"
    class="size-full rounded-full border border-transparent group-hover:border-crimson group-[.router-link-active]:border-2 group-[.router-link-active]:border-crimson"
  />
  <div
    v-else
    class="bg-linear-diagonal size-full rounded-full flex justify-center items-center border border-lightened group-hover:border-crimson group-[.router-link-active]:border-2 group-[.router-link-active]:border-crimson"
  >
    <IconAvatarDefault class="size-3/4" />
  </div>
</template>
