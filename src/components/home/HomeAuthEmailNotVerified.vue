<script setup lang="ts">
import LayoutsAuthNotice from '@/layouts/LayoutsAuthNotice.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import IconWarning from '@/components/icons/IconWarning.vue'
import { useFetch } from '@/composables/useFetch'

const emit = defineEmits(['sent'])

const props = defineProps<{
  email: string
  expired?: boolean
}>()

const { status, loading, formValues, executeFetch } = useFetch(
  '/email/verification-notification',
  'POST',
  true
)
formValues.value.email = props.email

const resendEmail = async () => {
  await executeFetch()
  if (status.value === 200) emit('sent')
}
</script>

<template>
  <LayoutsAuthNotice>
    <template v-slot:icon><IconWarning /></template>
    <template v-slot:title>{{ expired ? 'Link expired!' : 'Account not active!' }}</template>
    <template v-slot:text>{{
      expired
        ? 'Login link has expired, because you haven’t used it'
        : 'You need to verify your email before you can log in.'
    }}</template>
    <template v-slot:button>
      <BaseButton :loading="loading" @click="resendEmail">Request another link</BaseButton>
    </template>
  </LayoutsAuthNotice>
</template>
