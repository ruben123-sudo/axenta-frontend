import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Inicio from './components/inicio/Inicio';
import QuienesSomos from './components/Nosotros/QuienesSomos';
import Servicios from './components/Servicios/Servicios';
import Contacto from './components/Contacto/Contacto';
import Formulario from './components/formulario/formulario';
import Empresa from './components/empresa/Empresa';
import Trabajadores from './components/Trabajadores/Trabajadores';
import Thanks from './components/agradecimiento/thanks';
import WhatsappButton from './components/whatsapp/whatsapp';
import TermsWorkers from './components/terminos/terminosTrabajadores/terminos';
import TermsEmployers from './components/terminos/terminosEmpresa/terminos';
import PaymentCompany from './components/pagos/pagoEmpresa/pagos';
import PaymentWorker from './components/pagos/pagoTrabajadores/pagos';
import ProtectedRoute from './ProtectedRoute'; // <-- importamos el componente

function App() {
  const isAllowed = true; // Aquí defines tu lógica de autorización
  // Por ejemplo, puedes usar un estado, contexto o localStorage

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />

        {/* Inscripción libre (gratuita) */}
        <Route path="/inscripcion/:nombreServicio" element={<Formulario />} />

        {/* Formularios de empresa y trabajador protegidos */}
        <Route
          path="/employers"
          element={
            <ProtectedRoute isAllowed={isAllowed}>
              <Empresa />
            </ProtectedRoute>
          }
        />
        <Route
          path="/workers"
          element={
            <ProtectedRoute isAllowed={isAllowed}>
              <Trabajadores />
            </ProtectedRoute>
          }
        />

        {/* Rutas de agradecimiento y términos */}
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/terms-workers" element={<TermsWorkers />} />
        <Route path="/terms-employers" element={<TermsEmployers />} />

        {/* 🔹 Rutas de pagos */}
        <Route path="/pago/empresa" element={<PaymentCompany />} />
        <Route path="/pago/trabajador" element={<PaymentWorker />} />
      </Routes>
      <WhatsappButton />
    </Router>
  );
}

export default App;
