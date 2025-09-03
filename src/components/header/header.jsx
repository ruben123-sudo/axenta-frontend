import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import logo from '../assets/Logo.png'; 
import './header.css';

export default function Header() {
  const { t } = useTranslation();
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`custom-navbar ${shrink ? 'shrink' : ''}`}
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src={logo}
            width={50}
            height={50}
            className="d-inline-block align-top me-2"
            alt="Axenta Logo"
          />
          <span className="fw-bold small-text">
            {t('company_name')}
          </span>
        </Navbar.Brand>

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
