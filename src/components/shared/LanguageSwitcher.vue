<script setup lang="ts">
import IconDropdown from '@/components/icons/IconDropdown.vue'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()
const localeNames: Record<string, string> = { en: 'Eng', ka: 'ქარ' }
const open = ref(false)

const changeLocale = (locale: string) => {
  open.value = false
  if (i18n.locale.value !== locale) {
    localStorage.setItem('locale', locale)
    location.reload()
  }
}
</script>

<template>
  <div class="relative">
    <button class="flex gap-2 items-center px-3.25" @click="open = !open">
      {{ localeNames[$i18n.locale] }} <IconDropdown />
    </button>
    <div
      class="absolute top-7 left-3.25 bg-night-faded border border-gray-dark p-2.5 rounded"
      :class="{ hidden: !open }"
    >
      <button
        v-for="locale in $i18n.availableLocales"
        :key="`locale-${locale}`"
        class="block text-gray-dark hover:text-gray-light cursor-pointer"
        @click="changeLocale(locale)"
      >
        {{ localeNames[locale] }}
      </button>
    </div>
  </div>
</template>
