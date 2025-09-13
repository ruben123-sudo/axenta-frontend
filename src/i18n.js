import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import esTranslations from './locales/es/translation.json';
import enTranslations from './locales/en/translation.json';

// Función segura + normalizar idioma (es-ES → es, en-US → en)
function getSavedLanguage() {
  try {
    const lang = localStorage.getItem('appLanguage') || 'es'; // 👈 español primero
    return lang.split('-')[0];
  } catch (e) {
    return 'es'; // 👈 fallback en español
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
    lng: savedLanguage,   // idioma inicial → español si no hay nada guardado
    fallbackLng: 'es',    // 👈 español como idioma de respaldo
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
