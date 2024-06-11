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
    <template v-slot:title>
      {{ expired ? $t('message.link_expired') : $t('message.account_not_active') }}
    </template>
    <template v-slot:text>
      {{ expired ? $t('message.link_expired_full') : $t('message.account_not_active_full') }}
    </template>
    <template v-slot:button>
      <BaseButton :loading="loading" @click="resendEmail">
        {{ $t('button.request_another_link') }}
      </BaseButton>
    </template>
  </LayoutsAuthNotice>
</template>
