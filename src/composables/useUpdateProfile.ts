import { useFetch } from '@/composables/useFetch'
import { useUserStore } from '@/store/UserStore'

export function useUpdateProfile() {
  const { data, status, loading, formValues, executeFetch } = useFetch('/profile', 'POST', true)
  const userStore = useUserStore()

  const update = async (values: Record<string, unknown>) => {
    formValues.value = values
    await executeFetch()
    if (status.value === 200) {
      userStore.setUser(data.value.name, data.value.email, data.value.avatar)
    }
  }

  return { status, loading, update }
}
