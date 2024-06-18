<script setup lang="ts">
type Props = {
  type?: string
  label: string
  value: string
  edit?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  type: 'text'
})

const emit = defineEmits(['edit'])
</script>

<template>
  <div>
    <p class="mb-2">{{ props.label }}</p>
    <div>
      <input
        disabled
        :type="props.type"
        :value="props.value"
        class="h-12 px-4 bg-gray-light text-black text-xl rounded w-132 cursor-not-allowed"
      />
      <button v-if="props.edit" type="button" class="ml-8" @click="emit('edit')">
        {{ $t('button.edit') }}
      </button>
    </div>
  </div>
</template>
