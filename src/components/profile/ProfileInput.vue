<script setup lang="ts">
import IconEyeSlash from '@/components/icons/IconEyeSlash.vue'
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
    <label :for="props.name" class="mb-2">{{ props.label }}</label>
    <div class="w-max relative">
      <input
        v-model="value"
        :id="props.name"
        :name="props.name"
        :type="showPassword ? 'text' : props.type"
        :placeholder="props.placeholder"
        class="h-12 px-4 bg-gray-light text-black text-xl rounded w-132"
      />
      <IconEyeSlash
        v-if="props.type === 'password'"
        :slash="!showPassword"
        class="absolute top-4 right-3 size-4 cursor-pointer"
        @click="showPassword = !showPassword"
      />
      <p v-if="errorMessage || backendError" class="mt-8 border border-gray-pale p-6 rounded">
        {{ errorMessage || backendError }}
      </p>
    </div>
  </div>
</template>
