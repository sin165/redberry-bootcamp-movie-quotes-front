<script setup lang="ts">
import LayoutsAuth from '@/layouts/LayoutsAuth.vue'
import HomeAuthInput from '@/components/home/HomeAuthInput.vue'
import HomeAuthButtonGoogle from '@/components/home/HomeAuthButtonGoogle.vue'
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
      <h2 class="text-white text-center font-medium text-2xl leading-7">
        {{ $t('login.heading') }}
      </h2>
      <p class="text-gray-dark text-center mt-3">{{ $t('login.subheading') }}</p>
      <form class="mt-8 space-y-4" @submit="onSubmit">
        <HomeAuthInput
          name="email"
          :label="$t('email')"
          :placeholder="$t('enter_your_email')"
          type="email"
          rules="required|email"
        />
        <HomeAuthInput
          name="password"
          :label="$t('password')"
          :placeholder="$t('password')"
          type="password"
          rules="required|lowercase|min:8|max:15"
        />
        <div class="flex justify-between">
          <label class="flex gap-2 items-center">
            <input v-model="remember" v-bind="rememberAttrs" type="checkbox" class="size-4 mb-1" />
            <span class="text-white">{{ $t('remember_me') }}</span>
          </label>
          <button
            type="button"
            class="text-blue-link underline"
            @click="emit('forgotPasswordClick')"
          >
            {{ $t('button.forgot_password') }}
          </button>
        </div>
        <p v-if="errorMessage" class="text-crimson-500 text-sm mt-1">{{ errorMessage }}</p>
        <BaseButton type="submit" class="w-full" :loading="loading">
          {{ $t('button.sign_in') }}
        </BaseButton>
      </form>
      <HomeAuthButtonGoogle sign="in" />
      <p class="text-gray-dark text-center mt-8">
        {{ $t('login.dont_have_an_account') }}
        <button class="text-blue-link underline" @click="emit('registerClick')">
          {{ $t('button.sign_up') }}
        </button>
      </p>
    </div>
  </LayoutsAuth>
</template>
