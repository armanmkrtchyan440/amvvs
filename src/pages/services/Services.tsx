import { useQuery } from "@tanstack/react-query";
import { ServiceItem } from "./components/ServiceItem";
import { getServices } from "@/api/api";
import { Loading } from "@/components/ui/Loading";
import { useTranslation } from "react-i18next";

export const ServicesPage = () => {
  const { t } = useTranslation(undefined, { keyPrefix: "services" });
  const { data, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
    refetchOnWindowFocus: false,
  });
  return (
    <>
      <section className="code-section bg-white py-20 font-['Poppins']">
        <div className="container mx-auto px-4 sm:px-12 xl:px-32">
          <h2
            id="services-header"
            className="mb-8 text-center text-3xl font-bold xl:text-4xl 2xl:text-5xl"
          >
            {t("title")}
          </h2>
          {isLoading && <Loading />}

          {!isLoading && (
            <div className="relative z-10 grid grid-cols-1 grid-flow-row gap-8 md:grid-cols-3 items-stretch">
              {data?.data?.map((service) => (
                <ServiceItem key={service.id} {...service.attributes} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};
