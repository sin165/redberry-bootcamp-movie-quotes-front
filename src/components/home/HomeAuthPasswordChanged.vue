<script setup lang="ts">
import LayoutsAuthNotice from '@/layouts/LayoutsAuthNotice.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import IconSuccess from '@/components/icons/IconSuccess.vue'

const emit = defineEmits(['loginClick'])
</script>

<template>
  <LayoutsAuthNotice>
    <template v-slot:icon><IconSuccess /></template>
    <template v-slot:title>{{ $t('message.success') }}</template>
    <template v-slot:text>{{ $t('message.password_changed') }}</template>
    <template v-slot:button>
      <BaseButton @click="emit('loginClick')">{{ $t('button.log_in') }}</BaseButton>
    </template>
  </LayoutsAuthNotice>
</template>
