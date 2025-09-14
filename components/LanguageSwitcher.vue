<template>
  <div class="flex items-center space-x-2">
    <button
      v-for="locale in availableLocales"
      :key="locale.code"
      @click="switchLanguage(locale.code)"
      :class="[
        'px-3 py-1 rounded text-sm font-medium transition-colors',
        locale.code === $i18n.locale
          ? 'bg-blue-600 text-white'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      ]"
    >
      {{ locale.name }}
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const { $i18n } = useNuxtApp()
const availableLocales = computed(() => $i18n.locales.value)

const switchLanguage = (locale) => {
  $i18n.setLocale(locale)
}
</script>
