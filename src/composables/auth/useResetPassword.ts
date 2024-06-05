import { useFetch } from '@/composables/useFetch'
import { useRoute } from 'vue-router'

export function useResetPassword() {
  const { status, loading, formValues, executeFetch } = useFetch('/reset-password', 'POST', true)
  const route = useRoute()

  const updatePassword = async (values: Record<string, unknown>) => {
    formValues.value = values
    formValues.value.token = route.query.password_reset_token
    formValues.value.email = route.query.email
    await executeFetch()
  }

  return { status, loading, updatePassword }
}
