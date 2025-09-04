import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaBroom } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Servicios.css';

export default function SecondaryServices() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Only secondary services
  const secondaryServices = [
    { id: 1, icon: <FaBroom size={50} color="#6c757d" />, title: 'servicio2_title', desc: 'servicio2_text' }
  ];

  const handleSignUpClick = (serviceTitle) => {
    navigate(`/inscripcion/${t(serviceTitle)}`);
  };

  // Variantes de animación
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.3 }
    })
  };

  return (
    <Container className="servicios-section mt-5">
      <motion.h2
        className="text-center mb-5 fw-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t('Secondary services')}
      </motion.h2>

      <Row className="g-4 justify-content-center">
        {secondaryServices.map((service, idx) => (
          <Col md={6} lg={4} key={idx}>
            <motion.div
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Card className="h-100 shadow-sm text-center servicio-card py-4">
                <div className="mb-3">{service.icon}</div>
                <Card.Title className="fw-bold">{t(service.title)}</Card.Title>
                <Card.Text className='justificado'>{t(service.desc)}</Card.Text>
                <div className="text-center mt-3">
                  <Button variant="secondary" onClick={() => handleSignUpClick(service.title)}>
                    {t('Sign up') || 'Sign up'}
                  </Button>
                </div>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
