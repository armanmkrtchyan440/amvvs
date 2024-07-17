import { IService, getService } from "@/api/api";
import { Loading } from "@/components/ui/Loading";
import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { Rules } from "./components/Rules";
import { useTranslation } from "react-i18next";
import { useCartItems } from "@/stores/useCartItems";

export const ServicePage = () => {
  const { t } = useTranslation(undefined, { keyPrefix: "service" });
  const { addCartItem } = useCartItems();
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["service", id],
    queryFn: getService,
    refetchOnWindowFocus: false,
  });

  const handleAddToCart = useCallback(() => {
    addCartItem(data?.data.id as number, data?.data.attributes as IService);
  }, [data]);

  return (
    <section className="code-section bg-white py-20 font-['Poppins'] min-h-96">
      <div className="mx-auto px-4 sm:px-12 xl:px-32 min-h-">
        {isLoading && <Loading />}

        {!isLoading && (
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg">
                <img
                  className="w-full h-full object-cover"
                  src={
                    import.meta.env.VITE_BASE_URL +
                    data?.data?.attributes?.img.data.attributes.url
                  }
                  alt="Product Image"
                />
              </div>
            </div>
            <div className="md:flex-1 px-4 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  {data?.data.attributes.name}
                </h2>
                <p className="text-sm mt-2">
                  {data?.data.attributes.description}
                </p>
                <Rules />
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-lg">{data?.data.attributes.price} kr</h3>
                <div>
                  <button
                    className="primary-color-bg rounded px-8 py-3 text-white bg-blue-600 hover:bg-blue-500"
                    onClick={handleAddToCart}
                  >
                    {t("add-to-cart")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
