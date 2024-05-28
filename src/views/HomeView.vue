<script setup lang="ts">
import HomeContent from '@/components/home/HomeContent.vue'
import HomeAuthRegister from '@/components/home/HomeAuthRegister.vue'
import { ref } from 'vue'

const registerOpen = ref(false)
</script>

<template>
  <div class="relative bg-black min-h-dvh">
    <HomeContent
      @register-click="registerOpen = true"
      :class="{ 'hidden lg:block': registerOpen }"
    />
    <HomeAuthRegister v-if="registerOpen" @close="registerOpen = false" />
  </div>
</template>
