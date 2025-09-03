// src/components/PorQueElegirnos/PorQueElegirnos.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './PorqueElegirnos.css';

export default function PorQueElegirnos() {
  const { t } = useTranslation();

  const beneficios = [
    'beneficio1',
    'beneficio2',
    'beneficio3',
    'beneficio4'
  ];

  return (
    <section className="por-que-elegirnos py-5">
      <Container>
        <h2 className="text-center mb-5 fw-bold">{t('porque_title')}</h2>
        <Row className="g-4 justify-content-center">
          {beneficios.map((item, index) => (
            <Col md={6} lg={3} key={index}>
              <Card className="text-center shadow-sm border-0 h-100 p-3 bg-white">
                <FaCheckCircle size={50} color="#0d6efd" className="mb-3" />
                <Card.Body>
                  <Card.Text className="fw-bold">{t(item)}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
