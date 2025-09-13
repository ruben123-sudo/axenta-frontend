// src/pages/Thanks.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 IMPORTANTE
import logo from "../assets/Logo.png"; // ajusta la ruta
import "./thanks.css";

export default function Thanks() {
  const [lang, setLang] = useState("es");
  const navigate = useNavigate(); // 👈 inicializar hook

  useEffect(() => {
    const browserLang = navigator.language.startsWith("en") ? "en" : "es";
    setLang(browserLang);

    // 👇 Redirigir a inicio después de 6s
    const timer = setTimeout(() => {
      navigate("/");
    }, 6000);

    return () => clearTimeout(timer); // limpiar si se desmonta el componente
  }, [navigate]);

  const messages = {
    en: {
      title: "Thank you!",
      text: "We have received your request. An Axenta consultant will contact you soon by email or WhatsApp.",
    },
    es: {
      title: "¡Gracias!",
      text: "Hemos recibido tu solicitud. Un asesor de Axenta se pondrá en contacto contigo pronto por email o WhatsApp.",
    },
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-4 gracias">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white shadow-xl rounded-2xl p-10 max-w-lg text-center border border-gray-100"
      >
        {/* Logo de la empresa */}
        <motion.img
          src={logo}
          alt="Axenta Logo"
          className="img" // 👈 logo pequeño
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        />

        {/* Texto */}
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4 tracking-tight">
          {messages[lang].title}
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          {messages[lang].text}
        </p>

        {/* Botón volver al inicio (opcional, por si no quiere esperar) */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          {lang === "en" ? "Back to Home" : "Volver al inicio"}
        </motion.a>
      </motion.div>
    </div>
  );
}
