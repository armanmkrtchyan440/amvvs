import { getCategories, getServices } from "@/api/api";
import { Loading } from "@/components/ui/Loading";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { ServiceItem } from "./components/ServiceItem";
// import Select from "react-select";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";

export const ServicesPage = () => {
  const { t } = useTranslation(undefined, { keyPrefix: "services" });
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSelectOpened, setIsSelectOpened] = useState<boolean>(false);
  const [category, setCategory] = useState<string>(
    searchParams.get("category") || "all"
  );
  const { lang } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["services", lang],
    queryFn: () => getServices(lang as string),
    refetchOnWindowFocus: false,
  });

  const { data: categories, refetch } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(lang as string),
    refetchOnWindowFocus: false,
  });

  const navigate = useNavigate();

  const handleCategoryChange = useCallback(
    (value: string) => {
      setCategory(value);
      searchParams.set("category", value == "all" ? "" : value);
      setSearchParams(searchParams, { replace: true });
    },
    [searchParams, setSearchParams]
  );

  const filteredServices = useMemo(
    () =>
      data?.data?.filter(
        (service) =>
          service.attributes.category.data.attributes.slug == category ||
          category == "all"
      ),
    [category, data]
  );

  useEffect(() => {
    const categoryItem = categories?.data.find(
      (categoryItem) => categoryItem.attributes.slug == category
    )?.attributes;

    refetch();

    if (categoryItem?.locale && lang != categoryItem?.locale) {
      const slug = categoryItem.localizations.data[0].attributes.slug;
      navigate(`/${lang}/services?category=${slug}`, { replace: true });
      setCategory(slug);
    }
  }, [lang]);

  return (
    <section className="code-section bg-white py-20 font-['Poppins']">
      <Helmet>
        <title>{t("title")}</title>
      </Helmet>
      <div className="container px-4 sm:px-12 ">
        <div>
          <h2
            id="services-header"
            className="mb-8 text-center text-3xl font-bold xl:text-4xl 2xl:text-5xl"
          >
            {t("title")}
          </h2>
          <p className="text-center text-gray-700">{t("description1")}</p>
          <p className="mb-8 text-center text-gray-700">{t("description2")}</p>
        </div>
        {isLoading && <Loading />}

        {!isLoading && (
          <>
            <Select
              open={isSelectOpened}
              onOpenChange={() => {
                setTimeout(() => {
                  setIsSelectOpened((prev) => !prev);
                }, 0);
              }}
              onValueChange={handleCategoryChange}
              value={category}
            >
              <SelectTrigger className="my-4">
                <SelectValue placeholder="" />
              </SelectTrigger>

              <SelectContent className="z-[100]">
                <SelectItem
                  value={"all"}
                  onPointerUp={(event) => event.stopPropagation()}
                  onClick={(event) => event.stopPropagation()}
                >
                  {t("all")}
                </SelectItem>
                {categories?.data?.map(({ id, attributes }) => (
                  <SelectItem
                    key={id}
                    value={attributes.slug}
                    onPointerUp={(event) => event.stopPropagation()}
                    onClick={(event) => event.stopPropagation()}
                  >
                    {attributes.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="relative z-10 grid grid-cols-1 grid-flow-row gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
              {filteredServices?.map((service) => (
                <ServiceItem key={service.id} {...service.attributes} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};
