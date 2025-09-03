// src/components/Footer/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './footer.css';
import logo from '../assets/Logo.png';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer bg-light py-4 mt-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
            <img src={logo} alt={t('footer_logo_alt')} className="footer-logo" />
          </Col>
          <Col md={6} className="text-center text-md-end">
            <small className="text-muted">
              © {new Date().getFullYear()} Axenta Global. {t('footer_rights')}
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
