<script setup lang="ts">
import { useUpdateProfile } from '@/composables/useUpdateProfile'
import { useForm } from 'vee-validate'
import { useField } from 'vee-validate'
import { ref, watch } from 'vue'
const { handleSubmit } = useForm()

const inputElement = ref<HTMLInputElement>()
const { update } = useUpdateProfile()
const { value: avatar, errorMessage, handleChange } = useField('avatar')

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
    <label class="mx-auto block mt-2 mb-10 text-xl w-max cursor-pointer">
      {{ $t('upload_new_photo') }}
      <input ref="inputElement" type="file" name="avatar" class="hidden" @change="handleChange" />
    </label>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </form>
</template>
