import { useFetch } from '@/composables/useFetch'
import { useUserStore } from '@/store/UserStore'
import { useRoute, useRouter } from 'vue-router'

export function useCheckUser() {
  const { data, status, executeFetch } = useFetch('/user')
  const userStore = useUserStore()
  const router = useRouter()
  const route = useRoute()

  const fetchUser = async () => {
    await executeFetch()
    if (status.value === 200) {
      userStore.setUser(data.value.name, data.value.email, data.value.avatar)
      if (route.name === 'home') {
        router.push({ name: 'feed' })
      }
    } else {
      userStore.setLoaded()
    }
  }

  fetchUser()
}
