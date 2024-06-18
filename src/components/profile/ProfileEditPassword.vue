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
const { value: password, errorMessage: passwordError } = useField(
  'password',
  'required|lowercase|min:8|max:15'
)
const { value: passwordConfirmation, errorMessage: passwordConfirmationError } = useField(
  'password_confirmation',
  'confirmed:@password'
)

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
      <label for="password">{{ $t('enter_new_pass') }}</label>
      <input
        v-model="password"
        id="password"
        name="password"
        type="password"
        :placeholder="$t('enter_new_pass')"
        class="mt-2 h-12 px-4 bg-gray-light text-black text-xl rounded w-full"
      />
      <p v-if="passwordError" class="mt-8 border border-gray-pale p-6 rounded">
        {{ passwordError }}
      </p>
      <label for="password_confirmation" class="block mt-9">{{ $t('confirm_new_pass') }}</label>
      <input
        v-model="passwordConfirmation"
        id="password_confirmation"
        name="password_confirmation"
        type="password"
        :placeholder="$t('confirm_new_pass')"
        class="mt-2 h-12 px-4 bg-gray-light text-black text-xl rounded w-full"
      />
      <p v-if="passwordConfirmationError" class="mt-8 border border-gray-pale p-6 rounded">
        {{ passwordConfirmationError }}
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
