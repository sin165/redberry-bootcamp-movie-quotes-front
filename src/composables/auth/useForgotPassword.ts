import { useFetch } from '@/composables/useFetch'
import { ref } from 'vue'

export function useForgotPassword() {
  const { data, status, loading, formValues, executeFetch } = useFetch(
    '/forgot-password',
    'POST',
    true
  )
  const backendError = ref('')

  const sendLink = async (values: Record<string, unknown>) => {
    formValues.value = values
    await executeFetch()
    if (status.value === 422) {
      backendError.value = data.value.errors.email ? data.value.errors.email[0] : ''
    }
  }

  return { status, loading, backendError, sendLink }
}
