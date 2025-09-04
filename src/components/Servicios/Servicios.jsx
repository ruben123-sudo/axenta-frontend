// Servicios.jsx
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaUsers, FaTruck, FaUtensils } from 'react-icons/fa';
import PorQueElegirnos from '../Aptitudes/PorqueElegirnos';
import ActividadesSecundarias from './servicios_secundarios';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Servicios.css';

export default function Servicios() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const serviciosPrincipales = [
    { id: 1, icon: <FaUsers size={50} color="#0d6efd" />, title: 'servicio1_title', desc: 'servicio1_text' },
    { id: 2, icon: <FaTruck size={50} color="#0d6efd" />, title: 'servicio3_title', desc: 'servicio3_text' },
    { id: 3, icon: <FaUtensils size={50} color="#0d6efd" />, title: 'servicio4_title', desc: 'servicio4_text' }
  ];

  const handleInscribirmeClick = (servicioTitle) => {
    navigate(`/inscripcion/${t(servicioTitle)}`);
  };

  // Variants de animación
  const variants = {
    hiddenLeft: { opacity: 0, x: -100 },
    hiddenRight: { opacity: 0, x: 100 },
    hiddenUp: { opacity: 0, y: 50 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <Container className="servicios-section servicios-altura">
      <h2 className="text-center mb-5 fw-bold">{t('servicios_title')}</h2>
      <Row className="g-4">
        {serviciosPrincipales.map((servicio, idx) => {
          // Alternar dirección de entrada
          const animationVariant =
            idx === 0 ? 'hiddenLeft' : idx === 1 ? 'hiddenRight' : 'hiddenUp';

          return (
            <Col md={6} lg={4} key={idx}>
              <motion.div
                initial={animationVariant}
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants}
              >
                <Card className="h-100 shadow-sm text-center servicio-card py-4">
                  <div className="mb-3">{servicio.icon}</div>
                  <Card.Title className="fw-bold">{t(servicio.title)}</Card.Title>
                  <Card.Text className="justificado">{t(servicio.desc)}</Card.Text>
                  <div className="text-center mt-3">
                    <Button
                      variant="primary"
                      onClick={() => handleInscribirmeClick(servicio.title)}
                    >
                      {t('Sign up') || 'Inscribirme'}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </Col>
          );
        })}
      </Row>

      <ActividadesSecundarias />
      <PorQueElegirnos />
    </Container>
  );
}
