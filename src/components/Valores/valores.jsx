// src/components/Valores/Valores.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaBalanceScale, FaHandsHelping, FaBolt, FaHeart } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./valores.css";

export default function Valores() {
  const { t } = useTranslation();

  const valores = [
    {
      titulo: "valor1_title",
      descripcion: "valor1_text",
      icono: <FaBalanceScale size={50} className="valor-icon" />,
      color: "#0d6efd",
    },
    {
      titulo: "valor2_title",
      descripcion: "valor2_text",
      icono: <FaHandsHelping size={50} className="valor-icon" />,
      color: "#198754",
    },
    {
      titulo: "valor3_title",
      descripcion: "valor3_text",
      icono: <FaBolt size={50} className="valor-icon" />,
      color: "#ffc107",
    },
    {
      titulo: "valor4_title",
      descripcion: "valor4_text",
      icono: <FaHeart size={50} className="valor-icon" />,
      color: "#dc3545",
    },
  ];

  return (
    <section className="valores py-5">
      <Container>
        <h2 className="text-center mb-5 fw-bold">{t("valores_title")}</h2>
        <Row className="g-4">
          {valores.map((valor, index) => (
            <Col md={6} lg={3} key={index}>
              <Card className="text-center shadow-sm h-100 p-4 valor-card">
                <div style={{ color: valor.color }}>{valor.icono}</div>
                <Card.Body>
                  <Card.Title className="fw-bold">{t(valor.titulo)}</Card.Title>
                  <Card.Text>{t(valor.descripcion)}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
