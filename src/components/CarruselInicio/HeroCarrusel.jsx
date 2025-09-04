import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import fondoTrabajadores from '../assets/fondo-trabajadores.jpg';
import fondoObra from '../assets/fondo-obra.jpg';
import fondoLimpieza from '../assets/fondo-limpieza.jpg';
import fondoLogistica from '../assets/fondo-logistica.jpg';
import fondoHosteleria from '../assets/fondo-hosteleria.jpg';
import './HeroCarrusel.css';

export default function HeroCarousel() {
  const { t } = useTranslation();

  const slides = [
    { img: fondoTrabajadores, title: 'hero_slide1_title', subtitle: 'hero_slide1_subtitle' },
    { img: fondoObra, title: 'hero_slide2_title', subtitle: 'hero_slide2_subtitle' },
    { img: fondoLimpieza, title: 'hero_slide3_title', subtitle: 'hero_slide3_subtitle' },
    { img: fondoLogistica, title: 'hero_slide4_title', subtitle: 'hero_slide4_subtitle' },
    { img: fondoHosteleria, title: 'hero_slide5_title', subtitle: 'hero_slide5_subtitle' }
  ];

  // Variantes de animación para contenido
  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div>
      <Carousel className='scroll' fade interval={2600} controls={false} indicators={true}>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div
              className="carousel-background"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="carousel-content text-center">
                <motion.h1
                  initial="hidden"
                  animate="visible"
                  variants={contentVariants}
                >
                  {t(slide.title)}
                </motion.h1>
                <motion.p
                  initial="hidden"
                  animate="visible"
                  variants={contentVariants}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {t(slide.subtitle)}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.6 } }}
                >
                  <Button href="/servicios" variant="primary" size="lg">
                    {t('contact_button')}
                  </Button>
                </motion.div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
