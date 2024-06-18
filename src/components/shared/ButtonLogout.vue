<script setup lang="ts">
import { useFetch } from '@/composables/useFetch'
import { useUserStore } from '@/store/UserStore'
import { useRouter } from 'vue-router'

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
  <button
    :disabled="loading"
    class="h-8 border border-white rounded px-3.25 py-auto lg:h-9.5"
    @click="logout"
  >
    {{ $t('button.logout') }}
  </button>
</template>
