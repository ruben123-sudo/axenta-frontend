import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone, FaCheckCircle } from "react-icons/fa";
import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import './formulario.css';

const API_BASE_URL = "https://axenta-backend.onrender.com/api/servicios/";

export default function Formulario() {
  const { nombreServicio } = useParams();
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    telefono: "",
    email: "",
    servicio: nombreServicio || "",
  });

  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : name === "email" ? value.toLowerCase() : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_BASE_URL}inscripciones/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      let data;
      try { data = await res.json(); } catch { data = { detail: res.statusText }; }

      if (!res.ok) {
        setAlert({ show: true, message: t('registration_error'), type: 'danger' });
        return;
      }

      setAlert({ show: true, message: t('registration_success'), type: 'success' });

      setFormData({
        nombre: "",
        apellidos: "",
        telefono: "",
        email: "",
        servicio: nombreServicio || "",
      });

    } catch (error) {
      setAlert({ show: true, message: t('connection_error'), type: 'danger' });
    }
  };

  useEffect(() => {
    if (alert.show) {
      const timer = setTimeout(() => setAlert({ ...alert, show: false }), 4000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  // Variantes de animación
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">

          {alert.show && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Card className={`mb-3 border-${alert.type} text-${alert.type}`}>
                <Card.Body className="d-flex align-items-center">
                  {alert.type === 'success' ? <FaCheckCircle className="me-2" /> : <FaEnvelope className="me-2" />}
                  <span className="mensaje">{alert.message}</span>
                </Card.Body>
              </Card>
            </motion.div>
          )}

          <motion.form
            className="card shadow-lg p-4 formulario-card"
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-center mb-4">{t('registration_form')}</h2>

            <div className="input-group mb-3">
              <span className="input-group-text"><FaUser /></span>
              <input
                type="text"
                name="nombre"
                placeholder={t('first_name')}
                value={formData.nombre}
                onChange={handleChange}
                required
                maxLength="50"
                className="form-control"
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text"><FaUser /></span>
              <input
                type="text"
                name="apellidos"
                placeholder={t('last_name')}
                value={formData.apellidos}
                onChange={handleChange}
                required
                maxLength="100"
                className="form-control"
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text"><FaPhone /></span>
              <input
                type="tel"
                name="telefono"
                placeholder={t('phone')}
                value={formData.telefono}
                onChange={handleChange}
                required
                pattern="^\+?[0-9]{9,15}$"
                title="Introduce un número de teléfono válido (9 a 15 dígitos, con o sin +)"
                className="form-control"
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text"><FaEnvelope /></span>
              <input
                type="email"
                name="email"
                placeholder={t('email')}
                value={formData.email}
                onChange={handleChange}
                required
                title="Introduce un correo electrónico válido"
                className="form-control"
              />
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary w-100 d-flex justify-content-center align-items-center boton-animado"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCheckCircle className="me-2" /> {t('sign_up')}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
