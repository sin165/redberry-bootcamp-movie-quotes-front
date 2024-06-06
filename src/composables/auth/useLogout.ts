import { useFetch } from '@/composables/useFetch'
import { useUserStore } from '@/store/UserStore'
import { useRouter } from 'vue-router'

export function useLogout() {
  const { status, loading, executeFetch } = useFetch('/logout', 'POST', true)
  const userStore = useUserStore()
  const router = useRouter()

  const logout = async () => {
    await executeFetch()
    if (status.value === 200) {
      userStore.clearUser()
      router.push({ name: 'home' })
    }
  }

  return { logout, loading }
}
