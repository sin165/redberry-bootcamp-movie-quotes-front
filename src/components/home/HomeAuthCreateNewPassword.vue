<script setup lang="ts">
import LayoutsAuth from '@/layouts/LayoutsAuth.vue'
import HomeAuthInput from '@/components/home/HomeAuthInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { useForm } from 'vee-validate'
import { useResetPassword } from '@/composables/auth/useResetPassword'

const emit = defineEmits(['loginClick', 'passwordUpdated'])

const { status, loading, updatePassword } = useResetPassword()

const { handleSubmit } = useForm()
const onSubmit = handleSubmit(async (values) => {
  await updatePassword(values)
  if (status.value === 200) {
    emit('passwordUpdated')
  }
})
</script>

<template>
  <LayoutsAuth>
    <div class="mt-17.5">
      <h2 class="text-white text-center font-medium text-2xl leading-7">
        {{ $t('new_password.heading') }}
      </h2>
      <p class="text-gray-dark text-center mt-3">
        {{ $t('new_password.subheading') }}
      </p>
      <form class="mt-8" @submit="onSubmit">
        <div class="space-y-4 mb-6">
          <HomeAuthInput
            name="password"
            :label="$t('password')"
            :placeholder="$t('password')"
            type="password"
            rules="required|lowercase|min:8|max:15"
          />
          <HomeAuthInput
            name="password_confirmation"
            :label="$t('confirm_password')"
            :placeholder="$t('password')"
            type="password"
            rules="required|confirmed:@password"
          />
        </div>
        <BaseButton class="w-full" :loading="loading">{{ $t('button.reset_password') }}</BaseButton>
      </form>
      <button
        class="text-gray-dark text-center mt-8 flex justify-center gap-2 mx-auto pr-3"
        @click="emit('loginClick')"
      >
        <IconBack class="translate-y-1" />
        {{ $t('button.back_to_login') }}
      </button>
    </div>
  </LayoutsAuth>
</template>
