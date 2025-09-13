import React from 'react';
import { motion } from 'framer-motion';
import HeroCarousel from '../CarruselInicio/HeroCarrusel';
import './inicio.css';
import Nosotros from '../Nosotros/QuienesSomos';
import Servicios from '../Servicios/Servicios';
import Contacto from '../Contacto/Contacto';
import Footer from '../Footer/footer';
import Introduccion from '../introduccion/introduccion';

export default function Inicio() {
  // Variants para animaciones
  const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="inicio-wrapper">
      {/* Background carousel */}
      <HeroCarousel />

      <Introduccion />

      {/* Section animations */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInLeft}
      >
        <Nosotros />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInRight}
      >
        <Servicios />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <Contacto />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInDown}
      >
        <Footer />
      </motion.div>
    </div>
  );
}
