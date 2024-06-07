<script setup lang="ts">
import IconEyeSlash from '@/components/icons/IconEyeSlash.vue'
import IconInvalid from '@/components/icons/IconInvalid.vue'
import { useField } from 'vee-validate'
import { ref } from 'vue'

type Props = {
  name: string
  type?: string
  label: string
  placeholder?: string
  rules?: string
  backendError?: string
}
const props = withDefaults(defineProps<Props>(), {
  type: 'text'
})

const showPassword = ref(false)

const { value, errorMessage } = useField(props.name, props.rules)
</script>

<template>
  <div>
    <label :for="props.name" class="text-white">{{ props.label }}</label>
    <div class="relative">
      <input
        v-model="value"
        :id="props.name"
        :name="props.name"
        :type="showPassword ? 'text' : props.type"
        :placeholder="props.placeholder"
        class="bg-gray-light rounded w-full h-9.5 px-3.25 outline-none focus:shadow-outline mt-2"
        :class="{ 'border border-crimson': errorMessage }"
      />
      <IconEyeSlash
        v-if="props.type === 'password'"
        :slash="!showPassword"
        class="absolute top-5 right-3 size-4 cursor-pointer"
        @click="showPassword = !showPassword"
      />
      <IconInvalid
        v-if="errorMessage"
        class="absolute top-5 size-4"
        :class="{ 'right-8': props.type === 'password', 'right-3': props.type !== 'password' }"
      />
    </div>
    <p v-if="errorMessage || backendError" class="text-crimson-500 text-sm mt-1">
      {{ errorMessage || backendError }}
    </p>
  </div>
</template>
