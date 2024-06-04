<script setup lang="ts">
import HomeContent from '@/components/home/HomeContent.vue'
import HomeAuthRegister from '@/components/home/HomeAuthRegister.vue'
import HomeAuthLogin from '@/components/home/HomeAuthLogin.vue'
import HomeAuthEmailNotVerified from '@/components/home/HomeAuthEmailNotVerified.vue'
import HomeAuthVerificationEmailSent from '@/components/home/HomeAuthVerificationEmailSent.vue'
import HomeAuthAccountActivated from '@/components/home/HomeAuthAccountActivated.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useFetch } from '@/composables/useFetch'

const route = useRoute()
const registerOpen = ref(false)
const loginOpen = ref(false)
const emailNotVerifiedOpen = ref(false)
const verificationEmailSentOpen = ref(false)
const accountActivatedOpen = ref(false)
const linkExpired = ref(false)
const emailAddress = ref('')

const switchToLogin = () => {
  loginOpen.value = true
  registerOpen.value = false
  accountActivatedOpen.value = false
}

const switchToRegister = () => {
  registerOpen.value = true
  loginOpen.value = false
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

const handleSent = () => {
  verificationEmailSentOpen.value = true
  emailNotVerifiedOpen.value = false
}

const verifyEmail = async () => {
  if (route.query.verify_url && route.query.email) {
    const { status, executeFetch } = useFetch(route.query.verify_url.toString())
    await executeFetch()
    if (status.value === 200) {
      accountActivatedOpen.value = true
    } else {
      emailAddress.value = route.query.email.toString()
      linkExpired.value = true
      emailNotVerifiedOpen.value = true
    }
  }
}

verifyEmail()
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
      @login-click="switchToLogin"
      @registered="handleRegistered"
    />
    <HomeAuthLogin
      v-if="loginOpen"
      @close="loginOpen = false"
      @register-click="switchToRegister"
      @email-not-verified="handleEmailNotVerified"
    />
    <HomeAuthEmailNotVerified
      v-if="emailNotVerifiedOpen"
      :email="emailAddress"
      :expired="linkExpired"
      @close="emailNotVerifiedOpen = false"
      @sent="handleSent"
    />
    <HomeAuthVerificationEmailSent
      v-if="verificationEmailSentOpen"
      :email="emailAddress"
      @close="verificationEmailSentOpen = false"
    />
    <HomeAuthAccountActivated
      v-if="accountActivatedOpen"
      @close="accountActivatedOpen = false"
      @login-click="switchToLogin"
    />
  </div>
</template>
