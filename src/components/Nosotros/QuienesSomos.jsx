import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Valores from '../Valores/valores';
import './QuienesSomos.css';
import GallerySection from '../galeria/galeria';
import { motion } from 'framer-motion';

export default function QuienesSomos() {
  const { t } = useTranslation();

  const cards = [
    { title: 'card1_title', text: 'card1_text' },
    { title: 'card2_title', text: 'card2_text' },
    { title: 'card3_title', text: 'card3_text' },
    { title: 'card4_title', text: 'card4_text' }
  ];

  const companyInfo = t('company_infoo', { returnObjects: true });

  // Variantes de animación
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.2 }
    })
  };

  return (
    <div className="quienes-somos">
      <Container>
        {/* Título y slogan */}
        <motion.h2
          className="text-center mb-4 fw-bold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {t('section_title')}
        </motion.h2>

        <motion.h1
          className="text-center fs-3 mb-4"
          dangerouslySetInnerHTML={{ __html: t('slogan') }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        />

        <motion.p
          className="descripcion mb-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {t('section_description')}
        </motion.p>

        {/* Company Info */}
        <Row className="justify-content-center my-5">
          {companyInfo.map((info, index) => (
            <Col key={index} xs={6} md={3} className="mb-3">
              <motion.div
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Card className="h-100 text-center border-0 shadow-sm p-3 info-card">
                  <Card.Body>
                    <Card.Title className="fw-bold text-primary">{info.label}</Card.Title>
                    <Card.Text className="fs-5">{info.value}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        <GallerySection />

        {/* Cards */}
        <Row className="justify-content-center">
          {cards.map((card, index) => (
            <Col key={index} md={6} lg={3} className="mb-4">
              <motion.div
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Card className="h-100 text-center shadow-sm p-3">
                  <Card.Body>
                    <Card.Title>{t(card.title)}</Card.Title>
                    <Card.Text>{t(card.text)}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Servicios Secundarios */}
        <motion.div
          className="secondary-services my-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-center mb-3">{t('secondary_services_title')}</h3>
          <p className="text-center mb-4">{t('secondary_services_intro')}</p>
          <ul className="list-unstyled text-center">
            {t('secondary_services_list', { returnObjects: true }).map((service, index) => (
              <motion.li
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="mb-2"
              >
                • {service}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Valores */}
        <Valores />
      </Container>
    </div>
  );
}
