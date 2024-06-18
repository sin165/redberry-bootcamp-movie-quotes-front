<script setup lang="ts">
import IconReturn from '@/components/icons/IconReturn.vue'
import IconUpdatedSuccessfully from '@/components/icons/IconUpdatedSuccessfully.vue'
import IconX from '@/components/icons/IconX.vue'
import UserAvatar from '@/components/shared/UserAvatar.vue'
import ProfileEditAvatar from '@/components/profile/ProfileEditAvatar.vue'
import ProfileEditName from '@/components/profile/ProfileEditName.vue'
import ProfileEditPassword from '@/components/profile/ProfileEditPassword.vue'
import { useUserStore } from '@/store/UserStore'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

type ModalName = 'editName' | 'editPassword' | 'success'
const currentModal = ref<ModalName | null>(null)
const userStore = useUserStore()
</script>

<template>
  <div class="lg:hidden">
    <div class="py-4 px-8">
      <RouterLink v-if="!currentModal" :to="{ name: 'feed' }"><IconReturn /></RouterLink>
      <IconReturn v-else @click="currentModal = null" class="cursor-pointer" />
    </div>
    <div
      v-if="!currentModal || currentModal === 'success'"
      class="rounded-xl bg-night-faded p-6 pl-8 pb-40"
    >
      <div class="size-47 rounded-full mx-auto mb-2">
        <UserAvatar />
      </div>
      <ProfileEditAvatar />
      <div>
        <h3>{{ $t('name') }}</h3>
        <div class="flex justify-between mt-1 pb-4 border-b border-gray-pale-50 mb-8">
          <p class="text-lg">{{ userStore.name }}</p>
          <button @click="currentModal = 'editName'">{{ $t('button.edit') }}</button>
        </div>
        <h3>{{ $t('email') }}</h3>
        <div class="mt-1 pb-4 border-b border-gray-pale-50 mb-8">
          <p class="text-lg">{{ userStore.email }}</p>
        </div>
        <h3>{{ $t('password') }}</h3>
        <div class="flex justify-between mt-1 pb-4 border-b border-gray-pale-50 mb-8">
          <p class="text-lg">••••••••••••</p>
          <button @click="currentModal = 'editPassword'">{{ $t('button.edit') }}</button>
        </div>
      </div>
    </div>
    <ProfileEditName
      v-if="currentModal === 'editName'"
      @cancel="currentModal = null"
      @updated="currentModal = 'success'"
    />
    <ProfileEditPassword
      v-if="currentModal === 'editPassword'"
      @cancel="currentModal = null"
      @updated="currentModal = 'success'"
    />
    <div v-if="currentModal === 'success'" class="fixed top-32 w-full">
      <div
        class="bg-[#D1E7DD] text-[#0F5132] mx-4 p-4 pb-5 rounded flex justify-between items-center"
      >
        <div class="flex justify-start items-center gap-2">
          <IconUpdatedSuccessfully />
          <p class="mt-1">{{ $t('changes_updated') }}</p>
        </div>
        <IconX class="text-gray-dark cursor-pointer" @click="currentModal = null" />
      </div>
    </div>
  </div>
</template>
