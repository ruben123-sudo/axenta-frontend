import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckoutForm";
import "./pagos.css";
import axios from "axios";

// Clave publicable live de Stripe
const stripePromise = loadStripe(
  "pk_live_51S68TXF89JSLrpFM9exc5JkdVdQbKyfke4djNsVkgJKcrq9A5YTKzUfN2tpkRtf4aGwDnRQTRsCmVfZ99XcjsctZ00vkqRqxzK"
);

export default function PaymentCompany({ onPaymentSuccess }) {
  const { t } = useTranslation();
  const [clientSecret, setClientSecret] = useState(null);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // Crear PaymentIntent en el backend
  const handleStartPayment = async () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError(t("payment_error_invalid_email"));
      return;
    }

    try {
      const res = await axios.post(
        "https://axenta-backend.onrender.com/api/payments/create-payment/",
        {
          form_type: "company",
          form_id: 1,
          email,
          amount: 200, // Ajusta el importe según tu servicio
        }
      );
      setClientSecret(res.data.clientSecret);
      setError("");
    } catch (err) {
      console.error(err);
      setError(t("payment_error_start_failed"));
    }
  };

  return (
    <div className="payment-container secure">
      <h3>{t("company_payment_title")}</h3>

      <div className="payment-form">
        {/* Input de correo */}
        <h2>{t("payment_enter_email")}</h2>
        <input
          type="email"
          placeholder={t("payment_email_placeholder")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control mb-3"
        />
        {error && <p className="text-danger">{error}</p>}

        {/* Botón único de pago */}
        {!clientSecret && (
          <button onClick={handleStartPayment} className="btn btn-success mb-3">
            {t("company_payment_button")}
          </button>
        )}

        {/* Formulario de tarjeta */}
        {clientSecret && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm
              clientSecret={clientSecret}
              onSuccess={onPaymentSuccess}
              email={email}
            />
          </Elements>
        )}
      </div>

      {/* Términos */}
      <p className="small-text">
        {t("company_payment_text")}{" "}
        <a href="/terms-employers" target="_blank" rel="noopener noreferrer">
          {t("terms_link_text")}
        </a>
      </p>

      <div className="secure-footer">
        <p>{t("payment_secure_notice")}</p>
      </div>
    </div>
  );
}
