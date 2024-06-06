<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useCheckUser } from './composables/auth/useCheckUser'

useCheckUser()
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>
