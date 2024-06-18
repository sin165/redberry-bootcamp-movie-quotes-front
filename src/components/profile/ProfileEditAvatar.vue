<script setup lang="ts">
import { useUpdateProfile } from '@/composables/useUpdateProfile'
import { useForm } from 'vee-validate'
import { useField } from 'vee-validate'
import { ref, watch } from 'vue'
const { handleSubmit } = useForm()

const inputElement = ref<HTMLInputElement>()
const { update } = useUpdateProfile()
const { value: avatar, errorMessage, handleChange } = useField('avatar', 'image')

watch(avatar, (newAvatar) => {
  if (newAvatar) {
    submit()
  }
})

const submit = handleSubmit((values) => {
  update(values)
})
</script>

<template>
  <form>
    <label class="mx-auto block mt-2 mb-10 text-xl w-max cursor-pointer text-center">
      {{ $t('upload_new_photo') }}
      <input ref="inputElement" type="file" name="avatar" class="hidden" @change="handleChange" />
      <p v-if="errorMessage" class="text-sm mt-1">{{ errorMessage }}</p>
    </label>
  </form>
</template>
