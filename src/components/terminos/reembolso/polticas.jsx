import React from "react";
import { useTranslation } from "react-i18next";

export default function TermsAndConditions() {
  const { t } = useTranslation();

  return (
    <div className="terms-container">
      <h2>{t("terms_title")}</h2>

      {/* Sección de términos generales */}
      <section className="terms-section">
        <h3>{t("terms_general_title")}</h3>
        <p>{t("terms_general_text")}</p>
      </section>

      {/* Nueva sección: Política de reembolso */}
      <section className="terms-section">
        <h3>{t("refund_policy_title")}</h3>
        <p>{t("refund_policy_intro")}</p>
        <ul>
          <li>{t("refund_policy_point_1")}</li>
          <li>{t("refund_policy_point_2")}</li>
          <li>{t("refund_policy_point_3")}</li>
          <li>{t("refund_policy_point_4")}</li>
          <li>{t("refund_policy_point_5")}</li>
        </ul>
        <p>{t("refund_policy_conclusion")}</p>
      </section>
    </div>
  );
}
