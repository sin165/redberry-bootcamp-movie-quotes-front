<script setup lang="ts">
import LayoutsAuth from '@/layouts/LayoutsAuth.vue'
import HomeAuthInput from '@/components/home/HomeAuthInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import IconBack from '@/components/icons/IconBack.vue'
import { useForm } from 'vee-validate'
import { useForgotPassword } from '@/composables/auth/useForgotPassword'

const emit = defineEmits<{
  loginClick: []
  passwordResetEmailSent: [email: string]
}>()

const { status, loading, backendError, sendLink } = useForgotPassword()

const { handleSubmit } = useForm()
const onSubmit = handleSubmit(async (values) => {
  if (backendError.value) return
  await sendLink(values)
  if (status.value === 200) {
    emit('passwordResetEmailSent', values.email)
  }
})
</script>

<template>
  <LayoutsAuth>
    <div class="mt-17.5">
      <h2 class="text-white text-center font-medium text-2xl leading-7">Forgot password?</h2>
      <p class="text-gray-dark text-center mt-3">
        Enter the email and we’ll send an email with instructions to reset your password
      </p>
      <form class="mt-8 space-y-4" @submit="onSubmit">
        <HomeAuthInput
          name="email"
          label="Email"
          placeholder="Enter your email"
          type="email"
          rules="required|email"
          :backendError="backendError"
          @input="backendError = ''"
        />
        <BaseButton class="w-full" :loading="loading">Send instructions</BaseButton>
      </form>
      <button
        class="text-gray-dark text-center mt-8 flex justify-center gap-2 mx-auto pr-3"
        @click="emit('loginClick')"
      >
        <IconBack class="translate-y-1" />
        Back to login
      </button>
    </div>
  </LayoutsAuth>
</template>
