<script setup lang="ts">
import LayoutsAuthNotice from '@/layouts/LayoutsAuthNotice.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import IconWarning from '@/components/icons/IconWarning.vue'

const props = defineProps<{
  email: string
}>()

const resendEmail = () => {
  console.log(props.email)
}
</script>

<template>
  <LayoutsAuthNotice>
    <template v-slot:icon><IconWarning /></template>
    <template v-slot:title>Account not active!</template>
    <template v-slot:text>You need to verify your email before you can log in.</template>
    <template v-slot:button>
      <BaseButton @click="resendEmail">Request another link</BaseButton>
    </template>
  </LayoutsAuthNotice>
</template>
