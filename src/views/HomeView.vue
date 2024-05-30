<script setup lang="ts">
import HomeContent from '@/components/home/HomeContent.vue'
import HomeAuthRegister from '@/components/home/HomeAuthRegister.vue'
import HomeAuthLogin from '@/components/home/HomeAuthLogin.vue'
import { ref } from 'vue'

const registerOpen = ref(false)
const loginOpen = ref(false)

const switchBetweenLoginAndRegister = () => {
  loginOpen.value = !loginOpen.value
  registerOpen.value = !registerOpen.value
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
    />
    <HomeAuthLogin
      v-if="loginOpen"
      @close="loginOpen = false"
      @register-click="switchBetweenLoginAndRegister"
    />
  </div>
</template>
