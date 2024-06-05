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
    <template v-slot:title>Check your email!</template>
    <template v-slot:text> We have sent a password recover instructions to your email. </template>
    <template v-slot:button>
      <a :href="emailUrl"><BaseButton>Go to my email</BaseButton></a>
    </template>
    <template v-slot:extra>
      <button
        class="text-gray-dark text-center mt-8 flex justify-center gap-2 mx-auto pr-3"
        @click="emit('skip')"
      >
        Skip, I'll confirm later
      </button>
    </template>
  </LayoutsAuthNotice>
</template>
