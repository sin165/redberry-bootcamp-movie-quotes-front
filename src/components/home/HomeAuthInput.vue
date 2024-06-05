<script setup lang="ts">
import { useField } from 'vee-validate'

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

const { value, errorMessage } = useField(props.name, props.rules)
</script>

<template>
  <div>
    <label :for="props.name" class="text-white">{{ props.label }}</label>
    <input
      v-model="value"
      :id="props.name"
      :name="props.name"
      :type="props.type"
      :placeholder="props.placeholder"
      class="bg-gray-light rounded w-full h-9.5 px-3.25 outline-none focus:shadow-outline mt-2"
      :class="{ 'border border-crimson': errorMessage }"
    />
    <p v-if="errorMessage || backendError" class="text-crimson-500 text-sm mt-1">
      {{ errorMessage || backendError }}
    </p>
  </div>
</template>
