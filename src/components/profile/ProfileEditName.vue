<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue'
import { useForm } from 'vee-validate'
import { useField } from 'vee-validate'
import { ref } from 'vue'
import { useUpdateProfile } from '@/composables/useUpdateProfile'

const emit = defineEmits(['cancel', 'updated'])

const confirmationOpen = ref(false)
const { loading, update } = useUpdateProfile()
const { values, handleSubmit } = useForm()
const { value, errorMessage } = useField('name', 'required|lowercase|min:3|max:15')

const onSubmit = handleSubmit(() => {
  confirmationOpen.value = true
})

const confirm = async () => {
  await update(values)
  emit('updated')
}
</script>

<template>
  <form v-if="confirmationOpen === false" @submit="onSubmit">
    <div class="rounded-xl bg-night-faded py-20 px-8">
      <label for="name">{{ $t('enter_new_name') }}</label>
      <input
        v-model="value"
        id="name"
        name="name"
        type="text"
        :placeholder="$t('enter_new_name')"
        class="mt-2 h-12 px-4 bg-gray-light text-black text-xl rounded w-full"
      />
      <p v-if="errorMessage" class="mt-8 border border-gray-pale p-6 rounded">
        {{ errorMessage }}
      </p>
    </div>
    <div class="p-8 flex justify-between">
      <button type="button" class="px-4 mr-2" @click="emit('cancel')">
        {{ $t('button.cancel') }}
      </button>
      <div>
        <BaseButton type="submit">{{ $t('button.edit') }}</BaseButton>
      </div>
    </div>
  </form>
  <div v-else class="rounded-xl mx-8 bg-linear-diagonal">
    <div class="text-center border-b border-gray-pale-50 pt-17 pb-11">
      {{ $t('are_you_sure_to_make_changes') }}
    </div>
    <div class="pt-5 px-5 pb-4 flex justify-between">
      <button type="button" class="px-4 mr-2" @click="confirmationOpen = false">
        {{ $t('button.cancel') }}
      </button>
      <div>
        <BaseButton type="button" :loading="loading" @click="confirm">{{
          $t('button.confirm')
        }}</BaseButton>
      </div>
    </div>
  </div>
</template>
