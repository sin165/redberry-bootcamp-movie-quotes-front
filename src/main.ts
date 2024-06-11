import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import ka from '@/locales/ka.json'

import App from './App.vue'
import router from './router'

import '@/plugins/vee-validate/rules'
import '@/plugins/vee-validate/messages'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: localStorage.getItem('locale') || 'en',
  fallbackLocale: 'en',
  messages: { en, ka }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
