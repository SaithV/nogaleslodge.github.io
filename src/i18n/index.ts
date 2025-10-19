import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en/common.json'
import es from './locales/es/common.json'

const stored = (typeof window !== 'undefined' && localStorage.getItem('lng')) || undefined

i18n.use(initReactI18next).init({
  lng: stored || 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  resources: {
    en: { common: en },
    es: { common: es },
  },
  ns: ['common'],
  defaultNS: 'common',
})

export default i18n
