import { createI18n } from 'vue-i18n'
import en from '@/views/Dashboard/lang/en.js'
import vi from '@/views/Dashboard/lang/vi.js'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    vi
  }
})

export default i18n
