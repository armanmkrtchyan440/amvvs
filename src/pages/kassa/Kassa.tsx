import { QuoteForm } from "@/pages/kassa/components/QuoteForm";
import { KassaCart } from "./components/KassaCart";
import { useTranslation } from "react-i18next";

export const Kassa = () => {
  const { t } = useTranslation(undefined, { keyPrefix: "kassa" });

  return (
    <div className="code-section bg-white py-20 font-['Poppins']">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-2xl font-bold">{t("title")}</h2>
            <KassaCart />
          </div>

          <div>
            <QuoteForm />
          </div>
        </div>
      </div>
    </div>
  );
};
