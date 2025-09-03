import React from 'react';
import { Button, Container } from 'react-bootstrap';
import HeroCarousel from '../CarruselInicio/HeroCarrusel'; // Asegúrate de tener este componente
import './inicio.css'; // Para estilos personalizados
import Nosotros from '../Nosotros/QuienesSomos';
import Servicios from '../Servicios/Servicios';
import Contacto from '../Contacto/Contacto';
import Footer from '../Footer/footer';

export default function Inicio() {
  return (
    <div className="inicio-wrapper">
      {/* Carrusel de fondo */}
      <HeroCarousel />
      <Nosotros />
      <Servicios />
      <Contacto />
      <Footer />
    </div>
  );
}
