import React, { useState } from 'react';
import { Container, Row, Col, Form, Alert } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './trabajadores.css';

const API_BASE_URL = "https://axenta-backend.onrender.com/api/workers/";

export default function Trabajadores() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Estados del formulario
  const [fullName, setFullName] = useState('');
  const [nationality, setNationality] = useState('');
  const [profession, setProfession] = useState('');
  const [experience, setExperience] = useState('');
  const [languages, setLanguages] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [availability, setAvailability] = useState('');
  const [cvFile, setCvFile] = useState(null);
  const [observations, setObservations] = useState('');
  const [rgpdConsent, setRgpdConsent] = useState(false);

  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [rgpdError, setRgpdError] = useState('');

  // Validación de email
  const validarEmail = (email) => {
    if (email !== email.toLowerCase()) return t('email_uppercase_error');
    const regex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!regex.test(email)) return t('email_format_error');
    return '';
  };

  // Envío del formulario
  const enviarFormulario = async (e) => {
    e.preventDefault();

    const emailValidationMsg = validarEmail(email);
    if (emailValidationMsg) {
      setEmailError(emailValidationMsg);
      return;
    } else setEmailError('');

    if (!rgpdConsent) {
      setRgpdError("Debes aceptar la política RGPD");
      return;
    } else setRgpdError('');

    const formData = new FormData();
    formData.append('full_name', fullName);
    formData.append('nationality', nationality);
    formData.append('profession', profession);
    formData.append('experience', experience);
    formData.append('languages', languages);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('location', location);
    formData.append('availability', availability);
    if (cvFile) formData.append('cv', cvFile);
    formData.append('observations', observations);

    try {
      const res = await fetch(API_BASE_URL, {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        // Resetear formulario
        setFullName('');
        setNationality('');
        setProfession('');
        setExperience('');
        setLanguages('');
        setEmail('');
        setPhone('');
        setLocation('');
        setAvailability('');
        setCvFile(null);
        setObservations('');
        setRgpdConsent(false);

        // Redirigir a /thanks
        navigate('/thanks');
      } else {
        setError(true);
        setTimeout(() => setError(false), 3000);
      }
    } catch (err) {
      console.error(err);
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.2 },
    }),
  };

  return (
    <Container className="trabajadores-section">
      <motion.h2
        className="text-center titulo mb-5 fw-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t('workers_title')}
      </motion.h2>

      <Row>
        <Col md={8} className="mx-auto">
          {error && <Alert variant="danger">{t('contact_error')}</Alert>}
          {emailError && <Alert variant="warning">{emailError}</Alert>}
          {rgpdError && <Alert variant="warning">{rgpdError}</Alert>}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Form onSubmit={enviarFormulario}>
              <Form.Group className="mb-3">
                <Form.Label>{t('form_name')}</Form.Label>
                <Form.Control type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>{t('nationality')}</Form.Label>
                <Form.Control type="text" value={nationality} onChange={(e) => setNationality(e.target.value)} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>{t('profession')}</Form.Label>
                <Form.Control type="text" value={profession} onChange={(e) => setProfession(e.target.value)} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>{t('experience')}</Form.Label>
                <Form.Control type="number" value={experience} onChange={(e) => setExperience(e.target.value)} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>{t('languages')}</Form.Label>
                <Form.Control type="text" value={languages} onChange={(e) => setLanguages(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>{t('form_email')}</Form.Label>
                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>{t('phone')}</Form.Label>
                <Form.Control type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>{t('location1')}</Form.Label>
                <Form.Control type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>{t('availability')}</Form.Label>
                <Form.Control type="date" value={availability} onChange={(e) => setAvailability(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>{t('cv')}</Form.Label>
                <Form.Control type="file" onChange={(e) => setCvFile(e.target.files[0])} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>{t('observations1')}</Form.Label>
                <Form.Control as="textarea" rows={3} value={observations} onChange={(e) => setObservations(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3 form-check">
                <Form.Check type="checkbox" label={t('rgpd_consent')} checked={rgpdConsent} onChange={(e) => setRgpdConsent(e.target.checked)} required />
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
      </Row>
    </Container>
  );
}
