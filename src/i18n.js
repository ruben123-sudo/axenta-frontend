import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import esTranslations from './locales/es/translation.json';
import enTranslations from './locales/en/translation.json';

// Función segura para leer y normalizar idioma
function getSavedLanguage() {
  try {
    const lang = localStorage.getItem('appLanguage') || 'es'; // español por defecto
    return lang.split('-')[0]; // "es-ES" -> "es"
  } catch (e) {
    return 'es'; // fallback si Safari bloquea localStorage
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
    lng: savedLanguage,   // idioma inicial
    fallbackLng: 'en',    // si falta traducción en español, usar inglés
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
