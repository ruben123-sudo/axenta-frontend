// src/components/Footer/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './footer.css';
import logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer bg-light py-5 mt-5 border-top">
      <Container>
        <Row className="mb-4 align-items-center">
          {/* Logo */}
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <img src={logo} alt={t('footer_logo_alt')} className="footer-logo mb-2" />
          </Col>

          {/* Datos de la empresa */}
          <Col md={4} className="text-center mb-3 mb-md-0">
            <h6 className="fw-bold">Axenta Global Energy & Service S.L.</h6>
            <p className="mb-1">📍 Jaén, Andalucía, España</p>
            <p className="mb-1">NIF: B22903462</p>
          </Col>

          {/* Contacto */}
          <Col md={4} className="text-center text-md-end">
            <p className="mb-1">📞 <a href="tel:+34643373883">(+34) 643 373 883</a></p>
            <p className="mb-1">📧 <a href="mailto:axentaglobal.es@gmail.com">axentaglobal.es@gmail.com</a></p>
          </Col>
        </Row>

        {/* Botones de términos */}
        <Row className="mb-3">
          <Col className="text-center footer-buttons">
            <Link to="/terms-employers" className="me-2 footer-link">
              {t('terms_company') || 'Términos de empresa'}
            </Link>
            <Link to="/terms-workers" className="footer-link">
              {t('terms_workers') || 'Términos de trabajadores'}
            </Link>
          </Col>
        </Row>

        {/* Copyright */}
        <Row>
          <Col className="text-center">
            <small className="text-muted">
              © {new Date().getFullYear()} Axenta Global. {t('footer_rights') || 'Todos los derechos reservados.'}
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
