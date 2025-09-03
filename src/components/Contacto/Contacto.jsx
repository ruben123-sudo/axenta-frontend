// src/components/Contacto/Contacto.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
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
    if (email !== email.toLowerCase()) {
      return t('email_uppercase_error');
    }
    const regex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!regex.test(email)) {
      return t('email_format_error');
    }
    return '';
  };

  const enviarFormulario = async (e) => {
    e.preventDefault();

    const emailValidationMsg = validarEmail(correo);
    if (emailValidationMsg) {
      setEmailError(emailValidationMsg);
      return;
    } else {
      setEmailError('');
    }

    try {
    const res = await fetch(`${API_BASE_URL}mensajes/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, correo, mensaje }),
    });

    if (res.ok) {
      setSuccess(true);
      setError(false);
      setNombre('');
      setCorreo('');
      setMensaje('');
      setTimeout(() => setSuccess(false), 3000);
    } else {
      setError(true);
      setSuccess(false);
      setTimeout(() => setError(false), 3000);
    }
  } catch (err) {
    console.error(err);
    setError(true);
    setSuccess(false);
    setTimeout(() => setError(false), 3000);
  }
};

  return (
    <Container className="contacto-section">
      <h2 className="text-center mb-5 fw-bold">{t('contact_title')}</h2>
      <Row>
        <Col md={6}>
          {success && <Alert variant="success">{t('contact_success')}</Alert>}
          {error && <Alert variant="danger">{t('contact_error')}</Alert>}
          {emailError && <Alert variant="warning">{emailError}</Alert>}

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

            <Button type="submit" variant="primary">{t('form_submit')}</Button>
          </Form>
        </Col>

        <Col md={6} className="mt-4 mt-md-0">
          <h5>{t('company_info')}</h5>
          <p>📍 Jaén, Andalucía, España</p>
          <p>📞 <a href="tel:+34643373883">+34 643 373 883</a></p>
          <p>📧 <a href="axentaglobal.es@gmail.com">axentaglobal.es@gmail.com</a></p>

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
        </Col>
      </Row>
    </Container>
  );
}
