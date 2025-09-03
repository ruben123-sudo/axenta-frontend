import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

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

  return (
    <div>
      <Carousel fade interval={2600} controls={false} indicators={true}>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div
              className="carousel-background"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="carousel-content text-center">
                <h1>{t(slide.title)}</h1>
                <p>{t(slide.subtitle)}</p>
                <Button href="/servicios" variant="primary" size="lg">
                  {t('contact_button')}
                </Button>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
