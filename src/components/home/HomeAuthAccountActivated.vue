<script setup lang="ts">
import LayoutsAuthNotice from '@/layouts/LayoutsAuthNotice.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import IconSuccess from '@/components/icons/IconSuccess.vue'

const emit = defineEmits(['loginClick'])
</script>

<template>
  <LayoutsAuthNotice>
    <template v-slot:icon><IconSuccess /></template>
    <template v-slot:title>{{ $t('thank_you') }}</template>
    <template v-slot:text>{{ $t('account_activated') }}</template>
    <template v-slot:button>
      <BaseButton @click="emit('loginClick')">Log in</BaseButton>
    </template>
  </LayoutsAuthNotice>
</template>
