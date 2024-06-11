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
    <template v-slot:title>{{ $t('thank_you') }}</template>
    <template v-slot:text>
      {{ $t('check_your_email') }}
    </template>
    <template v-slot:button>
      <a :href="emailUrl">
        <BaseButton>{{ $t('button.go_to_my_email') }}</BaseButton>
      </a>
    </template>
  </LayoutsAuthNotice>
</template>
