import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import logo from '../assets/Logo.png';
import './header.css';

export default function Header() {
  const { t } = useTranslation();
  const [shrink, setShrink] = useState(false);
  const [language, setLanguage] = useState(i18n.language || 'en');

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => setShrink(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cambiar idioma
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    try {
      localStorage.setItem('appLanguage', lang);
    } catch (e) {
      console.warn("localStorage no disponible en este navegador (Safari privado).");
    }
  };

  return (
    <Navbar
      expand="lg"
      className={`custom-navbar ${shrink ? 'shrink' : ''}`}
      fixed="top"
    >
      <Container className="d-flex align-items-center justify-content-between">
        {/* Logo y título */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src={logo}
            width={50}
            height={50}
            className="d-inline-block align-top me-2"
            alt="Axenta Logo"
          />
          <span className="fw-bold fuente-nombre">{t('company_name')}</span>
        </Navbar.Brand>

        {/* Selector de idioma */}
        <div className="d-flex align-items-center idiomas me-1">
          <span
            className={`lang-btn ${language === 'es' ? 'active' : ''}`}
            onClick={() => changeLanguage('es')}
          >
            ES
          </span>
          <span
            className={`lang-btn ms-2 ${language === 'en' ? 'active' : ''}`}
            onClick={() => changeLanguage('en')}
          >
            EN
          </span>
        </div>

        {/* Menú de enlaces */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link href="/">{t('nav_home')}</Nav.Link>
            <Nav.Link href="/quienes-somos">{t('nav_about')}</Nav.Link>
            <Nav.Link href="/servicios">{t('nav_services')}</Nav.Link>
            <Nav.Link href="/contacto">{t('nav_contact')}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
