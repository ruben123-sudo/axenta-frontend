import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaUsers, FaBroom, FaTruck, FaUtensils } from 'react-icons/fa';
import PorQueElegirnos from '../Aptitudes/PorqueElegirnos';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './Servicios.css';

export default function Servicios() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const servicios = [
    { id: 1, icon: <FaUsers size={50} color="#0d6efd" />, title: 'servicio1_title', desc: 'servicio1_text' },
    { id: 2, icon: <FaBroom size={50} color="#0d6efd" />, title: 'servicio2_title', desc: 'servicio2_text' },
    { id: 3, icon: <FaTruck size={50} color="#0d6efd" />, title: 'servicio3_title', desc: 'servicio3_text' },
    { id: 4, icon: <FaUtensils size={50} color="#0d6efd" />, title: 'servicio4_title', desc: 'servicio4_text' }
  ];

  const handleInscribirmeClick = (servicioTitle) => {
    // Navegamos usando el título traducido como nombre del servicio
    navigate(`/inscripcion/${t(servicioTitle)}`);
  };

  return (
    <Container className="servicios-section servicios-altura">
      <h2 className="text-center mb-5 fw-bold">{t('servicios_title')}</h2>
      <Row className="g-4">
        {servicios.map((servicio, idx) => (
          <Col md={6} lg={3} key={idx}>
            <Card className="h-100 shadow-sm text-center servicio-card py-4">
              <div className="mb-3">{servicio.icon}</div>
              <Card.Title className="fw-bold">{t(servicio.title)}</Card.Title>
              <Card.Text className='justificado'>{t(servicio.desc)}</Card.Text>
              <div className="text-center mt-3">
                <Button variant="primary" onClick={() => handleInscribirmeClick(servicio.title)}>
                  {t('Sign up') || 'Inscribirme'}
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <PorQueElegirnos />
    </Container>
  );
}
