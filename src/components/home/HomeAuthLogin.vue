<script setup lang="ts">
import LayoutsAuth from '@/layouts/LayoutsAuth.vue'
import HomeAuthInput from '@/components/home/HomeAuthInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { useForm } from 'vee-validate'
import { useLogin } from '@/composables/auth/useLogin'

const emit = defineEmits<{
  registerClick: []
  forgotPasswordClick: []
  emailNotVerified: [email: string]
}>()

const { data, status, loading, errorMessage, login } = useLogin()

const { handleSubmit, defineField } = useForm()
const [remember, rememberAttrs] = defineField('remember')
const onSubmit = handleSubmit(async (values) => {
  await login(values)
  if (status.value === 403 && data.value.email) {
    emit('emailNotVerified', data.value.email)
  }
})
</script>

<template>
  <LayoutsAuth>
    <div class="mt-17.5">
      <h2 class="text-white text-center font-medium text-2xl leading-7">Log in to your account</h2>
      <p class="text-gray-dark text-center mt-3">Welcome back! Please enter your details.</p>
      <form class="mt-8 space-y-4" @submit="onSubmit">
        <HomeAuthInput
          name="email"
          label="Email"
          placeholder="Enter your email"
          type="email"
          rules="required|email"
        />
        <HomeAuthInput
          name="password"
          label="Password"
          placeholder="Password"
          type="password"
          rules="required|lowercase|min:8|max:15"
        />
        <div class="flex justify-between">
          <label class="flex gap-2 items-center">
            <input v-model="remember" v-bind="rememberAttrs" type="checkbox" class="size-4 mb-1" />
            <span class="text-white">Remember me</span>
          </label>
          <button @click.prevent="emit('forgotPasswordClick')" class="text-blue-link underline">
            Forgot password
          </button>
        </div>
        <p v-if="errorMessage" class="text-crimson-500 text-sm mt-1">{{ errorMessage }}</p>
        <BaseButton class="w-full" :loading="loading">Sign in</BaseButton>
      </form>
      <p class="text-gray-dark text-center mt-8">
        Don't have an account
        <button class="text-blue-link underline" @click="emit('registerClick')">Sign up</button>
      </p>
    </div>
  </LayoutsAuth>
</template>
