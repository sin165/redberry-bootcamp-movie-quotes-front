<script setup lang="ts">
import { useField } from 'vee-validate'
import { ref, watch } from 'vue'

const emit = defineEmits<{
  avatarSelect: [url: string | null]
}>()

const inputElement = ref<HTMLInputElement>()

const {
  value: avatar,
  errorMessage,
  handleChange,
  handleBlur
} = useField<File | null>('avatar', 'image')

watch(avatar, (newAvatar) => {
  if (newAvatar) {
    emit('avatarSelect', URL.createObjectURL(newAvatar))
  }
})

const clearFileInput = () => {
  if (inputElement.value) inputElement.value.value = ''
  handleChange(null)
}

defineExpose({ clearFileInput })
</script>

<template>
  <input
    ref="inputElement"
    type="file"
    name="avatar"
    class="hidden"
    @change="handleChange"
    @blur="handleBlur"
  />
  <p v-if="errorMessage" class="text-sm mt-1">{{ errorMessage }}</p>
</template>
