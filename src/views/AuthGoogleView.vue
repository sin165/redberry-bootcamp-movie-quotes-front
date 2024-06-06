<script setup lang="ts">
import { useFetch } from '@/composables/useFetch'
import { useUserStore } from '@/store/UserStore'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
const { data, queryParams, executeFetch } = useFetch('/google/callback')
queryParams.value = route.query as Record<string, string>

const login = async () => {
  await executeFetch()
  userStore.setUser(data.value.user.name, data.value.user.email)
  router.push({ name: 'home' })
}

login()
</script>

<template>
  <p>please wait...</p>
</template>
