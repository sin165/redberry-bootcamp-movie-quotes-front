import { getCookie } from '@/utils/getCookie'
import { ref } from 'vue'

const backendUrl = import.meta.env.VITE_BACKEND_URL

export function useFetch(path: string, method = 'GET', withXSRF = false) {
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
        'Content-type': 'application/json',
        Accept: 'application/json'
      }
    }

    const body = JSON.stringify(formValues.value)
    if (body) {
      options.body = body
    }

    if (!path.startsWith('http')) {
      path = `${backendUrl}/api${path}`
    }

    const url = new URL(path)
    url.search = new URLSearchParams(queryParams.value).toString()

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
