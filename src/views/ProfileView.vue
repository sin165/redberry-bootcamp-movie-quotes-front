<script setup lang="ts">
import LayoutsMain from '@/layouts/LayoutsMain.vue'
import ProfileDesktop from '@/components/profile/ProfileDesktop.vue'
import ProfileMobile from '@/components/profile/ProfileMobile.vue'
</script>

<template>
  <LayoutsMain>
    <div>
      <ProfileDesktop />
      <ProfileMobile />
    </div>
  </LayoutsMain>
</template>
