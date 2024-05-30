<script setup lang="ts">
import LayoutsAuth from '@/layouts/LayoutsAuth.vue'
import HomeAuthInput from '@/components/home/HomeAuthInput.vue'
import BaseButton from '../base/BaseButton.vue'
import { useForm } from 'vee-validate'

const emit = defineEmits(['loginClick'])

const { handleSubmit } = useForm()
const onSubmit = handleSubmit((values) => {
  console.log(values)
})
</script>

<template>
  <LayoutsAuth>
    <div class="mt-17.5">
      <h2 class="text-white text-center font-medium text-2xl leading-7">Create an account</h2>
      <p class="text-gray-dark text-center mt-3">Start your journey!</p>
      <form class="mt-8" @submit="onSubmit">
        <div class="space-y-4 mb-6">
          <HomeAuthInput
            name="name"
            label="Name"
            placeholder="Enter your name"
            rules="required|lowercase|min:3|max:15"
          />
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
          <HomeAuthInput
            name="password_confirmation"
            label="Confirm password"
            placeholder="Password"
            type="password"
            rules="required|confirmed:@password"
          />
        </div>
        <BaseButton class="w-full">Get started</BaseButton>
      </form>
      <p class="text-gray-dark text-center mt-8">
        Already have an account?
        <button class="text-blue-link underline" @click="emit('loginClick')">Log in</button>
      </p>
    </div>
  </LayoutsAuth>
</template>
