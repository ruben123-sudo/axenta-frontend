import React, { useState } from 'react';
import { Container, Row, Col, Form, Alert } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './empresa.css';

const API_BASE_URL = "https://axenta-backend.onrender.com/api/employers/";


export default function Empresa() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    company_name: '',
    contact_person: '',
    email: '',
    phone: '',
    location: '',
    job_position: '',
    num_workers: '',
    contract_duration: '',
    observations: ''
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState('');

  const validarEmail = (email) => {
    if (email !== email.toLowerCase()) return t('email_uppercase_error');
    const regex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!regex.test(email)) return t('email_format_error');
    return '';
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const enviarFormulario = async (e) => {
    e.preventDefault();

    const emailValidationMsg = validarEmail(formData.email);
    if (emailValidationMsg) {
      setEmailError(emailValidationMsg);
      return;
    } else setEmailError('');

    try {
      const res = await fetch(API_BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setError(false);
        setFormData({
          company_name: '',
          contact_person: '',
          email: '',
          phone: '',
          location: '',
          job_position: '',
          num_workers: '',
          contract_duration: '',
          observations: ''
        });
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.3 } })
  };

  return (
    <Container className="empresa-section py-5">
      <motion.h2
        className="text-center mb-4 fw-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t('employers_title')}
      </motion.h2>

      <p className="text-center mb-5">{t('employers_text')}</p>

      <Row>
        <Col md={8} className="mx-auto">
          {success && <Alert variant="success">{t('form_sent')}</Alert>}
          {error && <Alert variant="danger">{t('contact_error')}</Alert>}
          {emailError && <Alert variant="warning">{emailError}</Alert>}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0}
          >
            <Form onSubmit={enviarFormulario}>
              <Form.Group className="mb-3">
                <Form.Label>{t('company_name_label')}</Form.Label>
                <Form.Control
                  type="text"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>{t('contact_person')}</Form.Label>
                <Form.Control
                  type="text"
                  name="contact_person"
                  value={formData.contact_person}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>{t('email')}</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>{t('phone')}</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>{t('location')}</Form.Label>
                <Form.Control
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder={t('location_placeholder')}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>{t('job_position')}</Form.Label>
                <Form.Control
                  type="text"
                  name="job_position"
                  value={formData.job_position}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>{t('num_workers')}</Form.Label>
                <Form.Control
                  type="number"
                  name="num_workers"
                  value={formData.num_workers}
                  onChange={handleChange}
                  min="1"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>{t('contract_duration')}</Form.Label>
                <Form.Control
                  type="text"
                  name="contract_duration"
                  value={formData.contract_duration}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>{t('observations')}</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="observations"
                  value={formData.observations}
                  onChange={handleChange}
                />
              </Form.Group>

              <motion.button
                type="submit"
                className="btn btn-primary w-100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('form_submit')}
              </motion.button>
            </Form>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}
