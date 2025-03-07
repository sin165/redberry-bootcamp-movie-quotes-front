<script setup lang="ts">
import LayoutsAuth from '@/layouts/LayoutsAuth.vue'
import HomeAuthInput from '@/components/home/HomeAuthInput.vue'
import HomeAuthButtonGoogle from '@/components/home/HomeAuthButtonGoogle.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { useForm } from 'vee-validate'
import { useRegister } from '@/composables/auth/useRegister'

const emit = defineEmits<{
  loginClick: []
  registered: [email: string]
}>()

const { status, loading, backendNameError, backendEmailError, register } = useRegister()

const { handleSubmit } = useForm()
const onSubmit = handleSubmit(async (values) => {
  if (backendEmailError.value || backendNameError.value) return
  await register(values)
  if (status.value === 201) {
    emit('registered', values.email)
  }
})
</script>

<template>
  <LayoutsAuth>
    <div class="mt-17.5">
      <h2 class="text-white text-center font-medium text-2xl leading-7">
        {{ $t('register.heading') }}
      </h2>
      <p class="text-gray-dark text-center mt-3">{{ $t('register.subheading') }}</p>
      <form class="mt-8" @submit="onSubmit">
        <div class="space-y-4 mb-6">
          <HomeAuthInput
            name="name"
            :label="$t('name')"
            :placeholder="$t('enter_your_name')"
            rules="required|lowercase|min:3|max:15"
            :backendError="backendNameError"
            @input="backendNameError = ''"
          />
          <HomeAuthInput
            name="email"
            :label="$t('email')"
            :placeholder="$t('enter_your_email')"
            type="email"
            rules="required|email"
            :backendError="backendEmailError"
            @input="backendEmailError = ''"
          />
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
            :placeholder="$t('confirm_password')"
            type="password"
            rules="required|confirmed:@password"
          />
        </div>
        <BaseButton class="w-full" :loading="loading">{{ $t('button.get_started') }}</BaseButton>
      </form>
      <HomeAuthButtonGoogle sign="up" />
      <p class="text-gray-dark text-center mt-8">
        {{ $t('register.already_have_an_account') }}
        <button class="text-blue-link underline" @click="emit('loginClick')">
          {{ $t('button.log_in') }}
        </button>
      </p>
    </div>
  </LayoutsAuth>
</template>
