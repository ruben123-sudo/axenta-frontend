import React from "react";
import { useTranslation } from "react-i18next";
import "./terminos.css";

export default function TermsWorkers() {
  const { t } = useTranslation();

  return (
    <div className="container terminos-container">
      <h2 className="mb-3">{t("terms_workers_title")}</h2>
      <p>{t("terms_workers_intro")}</p>

      <h4>{t("terms_workers_1_title")}</h4>
      <p>{t("terms_workers_1_text")}</p>

      <h4>{t("terms_workers_2_title")}</h4>
      <ul>
        {t("terms_workers_2_list", { returnObjects: true }).map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <h4>{t("terms_workers_3_title")}</h4>
      <ul>
        {t("terms_workers_3_list", { returnObjects: true }).map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <h4>{t("terms_workers_4_title")}</h4>
      <p>{t("terms_workers_4_text")}</p>

      <h4>{t("terms_workers_5_title")}</h4>
      <p>{t("terms_workers_5_text")}</p>

      <h4>{t("terms_workers_6_title")}</h4>
      <p>{t("terms_workers_6_text")}</p>

      <h4>{t("terms_workers_7_title")}</h4>
      <p>{t("terms_workers_7_text")}</p>

      {/* 🔹 Nueva sección: Política de reembolso / Refund Policy */}
      <h4>{t("refund_policy_title")}</h4>
      <p>{t("refund_policy_intro")}</p>
      <ul>
        <li>{t("refund_policy_point_1")}</li>
        <li>{t("refund_policy_point_2")}</li>
        <li>{t("refund_policy_point_3")}</li>
        <li>{t("refund_policy_point_4")}</li>
        <li>{t("refund_policy_point_5")}</li>
      </ul>
      <p>{t("refund_policy_conclusion")}</p>
    </div>
  );
}
