import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import esTranslations from './locales/es/translation.json';
import enTranslations from './locales/en/translation.json';

// Función segura para leer localStorage (Safari iOS puede bloquearlo)
function getSavedLanguage() {
  try {
    return localStorage.getItem('appLanguage') || 'en';
  } catch (e) {
    return 'en'; // fallback si Safari bloquea localStorage
  }
}

const savedLanguage = getSavedLanguage();

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: esTranslations },
      en: { translation: enTranslations },
    },
    lng: savedLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage'],
      lookupLocalStorage: 'appLanguage',
      caches: ['localStorage'],
    },
  });

export default i18n;
