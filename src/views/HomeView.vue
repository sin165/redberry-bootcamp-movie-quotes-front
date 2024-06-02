<script setup lang="ts">
import HomeContent from '@/components/home/HomeContent.vue'
import HomeAuthRegister from '@/components/home/HomeAuthRegister.vue'
import HomeAuthLogin from '@/components/home/HomeAuthLogin.vue'
import HomeAuthEmailNotVerified from '@/components/home/HomeAuthEmailNotVerified.vue'
import HomeAuthVerificationEmailSent from '@/components/home/HomeAuthVerificationEmailSent.vue'
import { ref } from 'vue'

const registerOpen = ref(false)
const loginOpen = ref(false)
const emailNotVerifiedOpen = ref(false)
const verificationEmailSentOpen = ref(false)
const emailAddress = ref('')

const switchBetweenLoginAndRegister = () => {
  loginOpen.value = !loginOpen.value
  registerOpen.value = !registerOpen.value
}

const handleEmailNotVerified = (email: string) => {
  loginOpen.value = false
  emailAddress.value = email
  emailNotVerifiedOpen.value = true
}

const handleRegistered = (email: string) => {
  registerOpen.value = false
  emailAddress.value = email
  verificationEmailSentOpen.value = true
}
</script>

<template>
  <div class="relative bg-black min-h-dvh">
    <HomeContent
      :class="{ 'hidden lg:block': registerOpen }"
      @register-click="registerOpen = true"
      @login-click="loginOpen = true"
    />
    <HomeAuthRegister
      v-if="registerOpen"
      @close="registerOpen = false"
      @login-click="switchBetweenLoginAndRegister"
      @registered="handleRegistered"
    />
    <HomeAuthLogin
      v-if="loginOpen"
      @close="loginOpen = false"
      @register-click="switchBetweenLoginAndRegister"
      @email-not-verified="handleEmailNotVerified"
    />
    <HomeAuthEmailNotVerified
      v-if="emailNotVerifiedOpen"
      :email="emailAddress"
      @close="emailNotVerifiedOpen = false"
    />
    <HomeAuthVerificationEmailSent
      v-if="verificationEmailSentOpen"
      :email="emailAddress"
      @close="verificationEmailSentOpen = false"
    />
  </div>
</template>
