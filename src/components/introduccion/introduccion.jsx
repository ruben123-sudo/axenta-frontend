import React from "react";
import { Container, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./introduccion.css";

export default function Introduccion() {
  const { t } = useTranslation();

  return (
    <div className="introduccion-section text-center d-flex align-items-center">
      <Container>
        <h1 className="introduccion-title mb-3">{t("intro_title")}</h1>
        <p className="introduccion-subtitle mb-4">{t("intro_subtitle")}</p>
        <div className="d-flex justify-content-center gap-3">
          {/* Ahora redirige a pagos de empresa */}
          <Button
            href="/pago/empresa"
            size="lg"
            className="btn-intro"
          >
            {t("intro_hire")}
          </Button>

          {/* Ahora redirige a pagos de trabajador */}
          <Button
            href="/pago/trabajador"
            size="lg"
            variant="outline-light"
            className="btn-intro-alt"
          >
            {t("intro_find")}
          </Button>
        </div>
      </Container>
    </div>
  );
}
