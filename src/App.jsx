import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Inicio from './components/inicio/Inicio';
import QuienesSomos from './components/Nosotros/QuienesSomos';
import Servicios from './components/Servicios/Servicios';
import Contacto from './components/Contacto/Contacto';
import Formulario from './components/formulario/formulario';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/inscripcion/:nombreServicio" element={<Formulario />} />


        {/* Puedes agregar más rutas aquí */}
      </Routes>
    </Router>
  );
}

export default App;
