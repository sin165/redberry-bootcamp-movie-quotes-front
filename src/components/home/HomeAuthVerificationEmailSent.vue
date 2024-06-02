<script setup lang="ts">
import LayoutsAuthNotice from '@/layouts/LayoutsAuthNotice.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import IconSent from '@/components/icons/IconSent.vue'

const props = defineProps<{
  email: string
}>()
const emailUrl = 'https://' + props.email.split('@')[1]
</script>

<template>
  <LayoutsAuthNotice>
    <template v-slot:icon><IconSent /></template>
    <template v-slot:title>Thank you!</template>
    <template v-slot:text>
      Please check your email and follow the instructions to activate your account.
    </template>
    <template v-slot:button>
      <a :href="emailUrl"><BaseButton>Go to my email</BaseButton></a>
    </template>
  </LayoutsAuthNotice>
</template>
