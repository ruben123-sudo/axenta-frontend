import axios from 'axios';
import fs from 'fs';

// URL de LibreTranslate pública (gratis, sin clave)
const API_URL = 'https://libretranslate.de/translate';

// Idiomas que quieres generar
const TARGET_LANGS = ['en', 'fr']; // inglés y francés

// Textos en español
const TEXTS_ES = {
  inicio_bienvenida: "Bienvenido a nuestra clínica",
  nosotros_titulo: "Quiénes somos",
  contacto_titulo: "Contacto",
  servicios_titulo: "Nuestros servicios"
};

// Función para traducir un texto
async function traducir(texto, idioma) {
  const response = await axios.post(API_URL, {
    q: texto,
    source: 'es',
    target: idioma,
    format: 'text'
  });
  return response.data.translatedText;
}

// Generar archivos JSON para cada idioma
async function generarJSON() {
  for (let lang of TARGET_LANGS) {
    const result = {};
    for (let clave in TEXTS_ES) {
      result[clave] = await traducir(TEXTS_ES[clave], lang);
    }
    // Crear carpeta si no existe
    if (!fs.existsSync(`./src/locales/${lang}`)) {
      fs.mkdirSync(`./src/locales/${lang}`, { recursive: true });
    }
    fs.writeFileSync(`./src/locales/${lang}/translation.json`, JSON.stringify(result, null, 2));
    console.log(`Archivo de traducción generado para ${lang}`);
  }
}

generarJSON();
