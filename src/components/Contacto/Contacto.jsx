import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './Contacto.css';

const API_BASE_URL = "https://axenta-backend.onrender.com/api/contacto/";

export default function Contacto() {
  const { t } = useTranslation();
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState('');

  const validarEmail = (email) => {
    if (email !== email.toLowerCase()) return t('email_uppercase_error');
    const regex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!regex.test(email)) return t('email_format_error');
    return '';
  };

  const enviarFormulario = async (e) => {
    e.preventDefault();

    const emailValidationMsg = validarEmail(correo);
    if (emailValidationMsg) {
      setEmailError(emailValidationMsg);
      return;
    } else setEmailError('');

    try {
      const res = await fetch(`${API_BASE_URL}mensajes/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, correo, mensaje }),
      });

      if (res.ok) {
        setSuccess(true); setError(false);
        setNombre(''); setCorreo(''); setMensaje('');
        setTimeout(() => setSuccess(false), 3000);
      } else {
        setError(true); setSuccess(false);
        setTimeout(() => setError(false), 3000);
      }
    } catch (err) {
      console.error(err);
      setError(true); setSuccess(false);
      setTimeout(() => setError(false), 3000);
    }
  };

  // Variantes de animación
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.3 } })
  };

  return (
    <Container className="contacto-section">
      <motion.h2
        className="text-center titulo mb-5 fw-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t('contact_title')}
      </motion.h2>

      <Row>
        <Col md={6}>
          {success && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Alert variant="success">{t('contact_success')}</Alert>
            </motion.div>
          )}
          {error && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Alert variant="danger">{t('contact_error')}</Alert>
            </motion.div>
          )}
          {emailError && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Alert variant="warning">{emailError}</Alert>
            </motion.div>
          )}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0}
          >
            <Form onSubmit={enviarFormulario}>
              <Form.Group className="mb-3">
                <Form.Label>{t('form_name')}</Form.Label>
                <Form.Control
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>{t('form_email')}</Form.Label>
                <Form.Control
                  type="email"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>{t('form_message')}</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  required
                />
              </Form.Group>

              <motion.button
                type="submit"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('form_submit')}
              </motion.button>
            </Form>
          </motion.div>
        </Col>

        <Col md={6} className="mt-4 mt-md-0">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={1}
          >
            <h5>{t('company_info')}</h5>
            <p>📍 Jaén, Andalucía, España</p>
            <p>📞 <a href="tel:+34643373883">+34 643 373 883</a></p>
            <p>📧 <a href="mailto:axentaglobal.es@gmail.com">axentaglobal.es@gmail.com</a></p>

            <div className="map-container mt-3">
              <iframe
                title={t('map_title')}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.793153992983!2d-3.794201684691027!3d37.77914987972647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6e7e0a6edbc8ff%3A0x82f1e1ff3bda8a8d!2sJa%C3%A9n!5e0!3m2!1ses!2ses!4v1693683320000!5m2!1ses!2ses"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}
