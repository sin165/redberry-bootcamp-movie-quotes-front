import { ref } from 'vue'
import { useFetch } from '@/composables/useFetch'

export function useRegister() {
  const { data, status, loading, formValues, executeFetch } = useFetch('/register', 'POST', true)
  const backendNameError = ref('')
  const backendEmailError = ref('')

  const register = async (values: Record<string, unknown>) => {
    formValues.value = values
    await executeFetch()
    if (status.value === 422) {
      backendNameError.value = data.value.errors.name ? data.value.errors.name[0] : ''
      backendEmailError.value = data.value.errors.email ? data.value.errors.email[0] : ''
    }
  }

  return { status, loading, backendNameError, backendEmailError, register }
}
