import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import esTranslations from './locales/es/translation.json';
import enTranslations from './locales/en/translation.json';

// Función segura + normalizar idioma (es-ES → es, en-US → en)
function getSavedLanguage() {
  try {
    const lang = localStorage.getItem('appLanguage') || 'en';
    return lang.split('-')[0]; 
  } catch (e) {
    return 'en';
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
  });

export default i18n;
