<script setup lang="ts">
import IconGoogle from '@/components/icons/IconGoogle.vue'
import { useFetch } from '@/composables/useFetch'

const props = defineProps<{
  sign: 'up' | 'in'
}>()

const { data, executeFetch } = useFetch('/google/redirect')

const handleClick = async () => {
  await executeFetch()
  window.location.href = data.value.url
}
</script>

<template>
  <button
    class="flex items-center justify-center gap-1 w-full rounded text-white mt-4 h-9.5 border border-gray-light"
    @click="handleClick"
  >
    <IconGoogle class="mb-1" />
    {{ $t(`button.google_sign_${props.sign}`) }}
  </button>
</template>
