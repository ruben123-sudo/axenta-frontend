import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./whatsapp.css"; // estilos flotantes

export default function WhatsappButton() {
  return (
    <div className="whatsapp-container">
      <div className="whatsapp-btn d-flex align-items-center justify-content-center">
        <a
          href="https://wa.me/34643373883"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-decoration-none d-flex align-items-center justify-content-center"
        >
          <FaWhatsapp className="fs-3" />
        </a>
      </div>
    </div>
  );
}
