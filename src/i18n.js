import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import esTranslations from './locales/es/translation.json';
import enTranslations from './locales/en/translation.json';

// Leer idioma guardado en localStorage o usar 'en' por defecto
const savedLanguage = localStorage.getItem('appLanguage') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: esTranslations },
      en: { translation: enTranslations },
    },
    lng: savedLanguage,       // idioma inicial (solo lo que guardamos)
    fallbackLng: 'en',        // idioma de respaldo
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage'],           // solo mirar localStorage
      lookupLocalStorage: 'appLanguage', // clave en localStorage
      caches: ['localStorage'],
    },
  });

export default i18n;
