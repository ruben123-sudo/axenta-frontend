import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

export default function CheckoutForm({ clientSecret, onSuccess, email }) {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    const card = elements.getElement(CardElement);
    const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card,
        billing_details: { email },
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      try {
        // Llamada al backend para enviar correo y registrar pago
        await axios.post(
          "https://axenta-backend.onrender.com/api/payments/confirm-payment/",
          {
            payment_intent_id: paymentIntent.id,
            email,
          }
        );

        onSuccess(paymentIntent); // callback en el frontend
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Error confirmando el pago en el servidor.");
        setLoading(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={{ hidePostalCode: true }} />
      {error && <p className="text-danger">{error}</p>}
      <button type="submit" className="btn btn-primary mt-3" disabled={!stripe || loading}>
        {loading ? "Procesando..." : "Confirmar pago"}
      </button>
    </form>
  );
}
