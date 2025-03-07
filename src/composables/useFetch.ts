import { getCookie } from '@/utils/getCookie'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const backendUrl = import.meta.env.VITE_BACKEND_URL

export function useFetch(path: string, method = 'GET', withXSRF = false) {
  const { locale } = useI18n()
  const data = ref<any>(null)
  const status = ref<number | null>(null)
  const error = ref<string | null>(null)
  const loading = ref<boolean>(false)
  const formValues = ref<Record<string, unknown>>({})
  const queryParams = ref<Record<string, string>>({})

  const executeFetch = async () => {
    loading.value = true
    error.value = null

    const options: RequestInit = {
      method,
      credentials: 'include',
      headers: {
        'Accept-Language': locale.value,
        Accept: 'application/json'
      }
    }

    if (JSON.stringify(formValues.value) !== '{}') {
      const formData = new FormData()
      for (const key in formValues.value) {
        if (!formValues.value[key]) continue
        formData.append(key, formValues.value[key] as Blob | string)
      }
      options.body = formData
    }

    if (!path.startsWith('http')) {
      path = `${backendUrl}/api${path}`
    }

    const url = new URL(path)
    if (JSON.stringify(queryParams.value) !== '{}') {
      url.search = new URLSearchParams(queryParams.value).toString()
    }

    try {
      if (withXSRF) {
        await fetch(`${backendUrl}/sanctum/csrf-cookie`, {
          credentials: 'include'
        })
        ;(options.headers as Record<string, string>)['X-XSRF-TOKEN'] = getCookie('XSRF-TOKEN')
      }

      const response = await fetch(url.toString(), options)
      const responseData = await response.json()

      data.value = responseData
      status.value = response.status
    } catch (err) {
      error.value = (err as Error).message
    }
    loading.value = false
  }

  return { data, status, error, loading, formValues, queryParams, executeFetch }
}
