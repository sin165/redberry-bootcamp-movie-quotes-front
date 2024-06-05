<script setup lang="ts">
import HomeContent from '@/components/home/HomeContent.vue'
import HomeAuthRegister from '@/components/home/HomeAuthRegister.vue'
import HomeAuthLogin from '@/components/home/HomeAuthLogin.vue'
import HomeAuthEmailNotVerified from '@/components/home/HomeAuthEmailNotVerified.vue'
import HomeAuthVerificationEmailSent from '@/components/home/HomeAuthVerificationEmailSent.vue'
import HomeAuthAccountActivated from '@/components/home/HomeAuthAccountActivated.vue'
import HomeAuthForgotPassword from '@/components/home/HomeAuthForgotPassword.vue'
import HomeAuthPasswordResetEmailSent from '@/components/home/HomeAuthPasswordResetEmailSent.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useFetch } from '@/composables/useFetch'

type ModalName =
  | 'login'
  | 'register'
  | 'emailNotVerified'
  | 'verificationEmailSent'
  | 'accountActivated'
  | 'forgotPassword'
  | 'passwordResetEmailSent'

const currentModal = ref<ModalName | null>(null)
const route = useRoute()
const linkExpired = ref(false)
const emailAddress = ref('')

const handleEmailNotVerified = (email: string) => {
  emailAddress.value = email
  currentModal.value = 'emailNotVerified'
}

const handleRegistered = (email: string) => {
  emailAddress.value = email
  currentModal.value = 'verificationEmailSent'
}

const handlePasswordResetEmailSent = (email: string) => {
  emailAddress.value = email
  currentModal.value = 'passwordResetEmailSent'
}

const verifyEmail = async () => {
  if (route.query.verify_url && route.query.email) {
    const { status, executeFetch } = useFetch(route.query.verify_url.toString())
    await executeFetch()
    if (status.value === 200) {
      currentModal.value = 'accountActivated'
    } else {
      emailAddress.value = route.query.email.toString()
      linkExpired.value = true
      currentModal.value = 'emailNotVerified'
    }
  }
}

verifyEmail()
</script>

<template>
  <div class="relative bg-black min-h-dvh">
    <HomeContent
      :class="{ 'hidden lg:block': currentModal !== null }"
      @register-click="currentModal = 'register'"
      @login-click="currentModal = 'login'"
    />
    <HomeAuthRegister
      v-if="currentModal === 'register'"
      @close="currentModal = null"
      @login-click="currentModal = 'login'"
      @registered="handleRegistered"
    />
    <HomeAuthLogin
      v-if="currentModal === 'login'"
      @close="currentModal = null"
      @register-click="currentModal = 'register'"
      @forgot-password-click="currentModal = 'forgotPassword'"
      @email-not-verified="handleEmailNotVerified"
    />
    <HomeAuthEmailNotVerified
      v-if="currentModal === 'emailNotVerified'"
      :email="emailAddress"
      :expired="linkExpired"
      @close="currentModal = null"
      @sent="currentModal = 'verificationEmailSent'"
    />
    <HomeAuthVerificationEmailSent
      v-if="currentModal === 'verificationEmailSent'"
      :email="emailAddress"
      @close="currentModal = null"
    />
    <HomeAuthAccountActivated
      v-if="currentModal === 'accountActivated'"
      @close="currentModal = null"
      @login-click="currentModal = 'login'"
    />
    <HomeAuthForgotPassword
      v-if="currentModal === 'forgotPassword'"
      @close="currentModal = null"
      @login-click="currentModal = 'login'"
      @password-reset-email-sent="handlePasswordResetEmailSent"
    />
    <HomeAuthPasswordResetEmailSent
      v-if="currentModal === 'passwordResetEmailSent'"
      :email="emailAddress"
      @close="currentModal = null"
      @skip="currentModal = null"
    />
  </div>
</template>
