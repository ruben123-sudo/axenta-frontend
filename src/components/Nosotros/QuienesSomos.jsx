import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Valores from '../Valores/valores';
import './QuienesSomos.css';

export default function QuienesSomos() {
  const { t } = useTranslation();

  const cards = [
    { title: 'card1_title', text: 'card1_text' },
    { title: 'card2_title', text: 'card2_text' },
    { title: 'card3_title', text: 'card3_text' },
    { title: 'card4_title', text: 'card4_text' }
  ];

  return (
    <div className="quienes-somos">
      <Container>
        {/* Título y descripción */}
        <h2 className="text-center mb-4 fw-bold">{t('section_title')}</h2>
        <h1
          className="text-center fs-3 mb-4"
          dangerouslySetInnerHTML={{ __html: t('slogan') }}
        />
        <p className="descripcion mb-5">{t('section_description')}</p>

        {/* Cards */}
        <Row className="justify-content-center">
          {cards.map((card, index) => (
            <Col key={index} md={6} lg={3} className="mb-4">
              <Card className="h-100 text-center shadow-sm p-3">
                <Card.Body>
                  <Card.Title>{t(card.title)}</Card.Title>
                  <Card.Text>{t(card.text)}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Servicios Secundarios */}
        <div className="secondary-services my-5">
          <h3 className="text-center mb-3">{t('secondary_services_title')}</h3>
          <p className="text-center mb-4">{t('secondary_services_intro')}</p>
          <ul className="list-unstyled text-center">
            {t('secondary_services_list', { returnObjects: true }).map((service, index) => (
              <li key={index} className="mb-2">• {service}</li>
            ))}
          </ul>
        </div>

        {/* Valores */}
        <Valores />
      </Container>
    </div>
  );
}
