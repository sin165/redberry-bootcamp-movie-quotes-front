import { useFetch } from '@/composables/useFetch'
import { useUserStore } from '@/store/UserStore'
import { ref } from 'vue'

export function useLogin() {
  const { data, status, loading, formValues, executeFetch } = useFetch('/login', 'POST', true)
  const errorMessage = ref('')
  const userStore = useUserStore()

  const login = async (values: Record<string, unknown>) => {
    formValues.value = values
    await executeFetch()
    if (status.value === 401) {
      errorMessage.value = data.value.message
    } else if (status.value === 200) {
      userStore.setUser(data.value.user.name, data.value.user.email)
    }
  }

  return { data, status, loading, errorMessage, login }
}
