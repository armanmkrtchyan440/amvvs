import { useQuery } from "@tanstack/react-query";
import { ServiceItem } from "./components/ServiceItem";
import { getCategories, getServices } from "@/api/api";
import { Loading } from "@/components/ui/Loading";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
// import Select from "react-select";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const ServicesPage = () => {
  const { t } = useTranslation(undefined, { keyPrefix: "services" });
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState<string>(
    searchParams.get("category") || "all"
  );

  const { data, isLoading } = useQuery({
    queryKey: ["services", category],
    queryFn: () => getServices(category),
    refetchOnWindowFocus: false,
  });

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    refetchOnWindowFocus: false,
  });

  // const options = useMemo(() => {
  //   const opts = categories?.data.flatMap(({ attributes }) => ({
  //     value: attributes.slug,
  //     label: attributes.name,
  //   }));

  //   opts?.unshift({ label: "All", value: "" });

  //   return opts;
  // }, [isCategoriesFetched]);

  const handleCategoryChange = useCallback(
    (value: string) => {
      searchParams.set("category", value as string);
      setCategory(value);
      setSearchParams(searchParams, { replace: true });
    },
    [searchParams, setSearchParams]
  );

  return (
    <section className="code-section bg-white py-20 font-['Poppins']">
      <div className="container px-4 sm:px-12 xl:px-32">
        <h2
          id="services-header"
          className="mb-8 text-center text-3xl font-bold xl:text-4xl 2xl:text-5xl"
        >
          {t("title")}
        </h2>
        {isLoading && <Loading />}

        {!isLoading && (
          <>
            {/* <Select
              className="my-4 z-20"
              placeholder={"Select Category"}
              options={options}
              defaultValue={options?.find(
                (option) => option.value === category
              )}
              onChange={(option) => {
                searchParams.set("category", option?.value as string);
                setCategory(option?.value as string);
                setSearchParams(searchParams, { replace: true });
              }}
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary: "rgb(37 99 235 / var(--tw-bg-opacity))",
                },
                spacing: { ...theme.spacing, baseUnit: 5 },
              })}
            /> */}
            <Select onValueChange={handleCategoryChange} value={category}>
              <SelectTrigger className="my-4">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={"all"}>All</SelectItem>
                {categories?.data.map(({ id, attributes }) => (
                  <SelectItem key={id} value={attributes.slug}>
                    {attributes.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="relative z-10 grid grid-cols-1 grid-flow-row gap-8 md:grid-cols-3 items-stretch">
              {data?.data?.map((service) => (
                <ServiceItem key={service.id} {...service.attributes} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};
