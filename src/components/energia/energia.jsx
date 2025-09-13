// Energy.jsx
import React from "react";
import "./energia.css";
import solarPanels from "../assets/solar.jpg";
import bessBatteries from "../assets/bess-batteries.png";
import greenEnergy from "../assets/green-energy.png";
import companyLogo from "../assets/Logo.png"; // 👈 importa el logo
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Energy = () => {
  const { t } = useTranslation();

  return (
    <section id="energy" className="py-5 bg-light">
      <div className="container text-center">
        {/* Título */}
        <h2 className="display-5 fw-bold text-primary mb-3">
          {t("energy.title")}
        </h2>

        {/* Logo debajo del título */}
        <img
          src={companyLogo}
          alt="Company Logo"
          className="mb-4"
          style={{ maxWidth: "150px" }}
        />

        <p className="lead text-muted mb-5">{t("energy.description")}</p>

        {/* Lista */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-8">
            <ul className="list-group list-group-flush text-start shadow-sm rounded bg-white">
              <li className="list-group-item">{t("energy.items.0")}</li>
              <li className="list-group-item">{t("energy.items.1")}</li>
              <li className="list-group-item">{t("energy.items.2")}</li>
              <li className="list-group-item">{t("energy.items.3")}</li>
              <li className="list-group-item">{t("energy.items.4")}</li>
            </ul>
          </div>
        </div>

        {/* 📷 Imágenes */}
        <div className="energy-images mb-5">
          <img src={solarPanels} alt={t("energy.images.solar")} />
          <img src={bessBatteries} alt={t("energy.images.bess")} />
          <img src={greenEnergy} alt={t("energy.images.green")} />
        </div>

        {/* 📞 Call to Action */}
        <Link to="/contacto" className="btn btn-primary btn-lg px-4">
          {t("energy.cta")}
        </Link>
      </div>
    </section>
  );
};

export default Energy;
