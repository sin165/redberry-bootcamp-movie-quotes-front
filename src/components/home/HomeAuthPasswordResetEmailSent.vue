<script setup lang="ts">
import LayoutsAuthNotice from '@/layouts/LayoutsAuthNotice.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import IconSent from '@/components/icons/IconSent.vue'

const emit = defineEmits(['skip'])

const props = defineProps<{
  email: string
}>()
const emailUrl = 'https://' + props.email.split('@')[1]
</script>

<template>
  <LayoutsAuthNotice>
    <template v-slot:icon><IconSent /></template>
    <template v-slot:title>{{ $t('message.check_your_email') }}</template>
    <template v-slot:text>{{ $t('message.password_reset_instructions_sent') }}</template>
    <template v-slot:button>
      <a :href="emailUrl">
        <BaseButton>{{ $t('button.go_to_my_email') }}</BaseButton>
      </a>
    </template>
    <template v-slot:extra>
      <button
        class="text-gray-dark text-center mt-8 flex justify-center gap-2 mx-auto pr-3"
        @click="emit('skip')"
      >
        {{ $t('button.confirm_later') }}
      </button>
    </template>
  </LayoutsAuthNotice>
</template>
