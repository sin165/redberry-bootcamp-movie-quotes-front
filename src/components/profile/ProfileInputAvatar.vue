<script setup lang="ts">
import { useField } from 'vee-validate'
import { ref } from 'vue'

const emit = defineEmits<{
  avatarSelect: [url: string | null]
}>()

const inputElement = ref<HTMLInputElement>()

const { value: avatar, errorMessage, handleChange } = useField('avatar')

const handleAvatarChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0] || null
  handleChange(file)
  if (avatar.value instanceof File) {
    emit('avatarSelect', URL.createObjectURL(avatar.value))
  } else {
    emit('avatarSelect', null)
  }
}

const clearFileInput = () => {
  if (inputElement.value) inputElement.value.value = ''
  handleChange(null)
}

defineExpose({ clearFileInput })
</script>

<template>
  <input ref="inputElement" type="file" name="avatar" class="hidden" @change="handleAvatarChange" />
  <p v-if="errorMessage">{{ errorMessage }}</p>
</template>
