import { getRules } from "@/api/api";
import { Loading } from "@/components/ui/Loading";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

export const Rules = () => {
  const { t } = useTranslation(undefined, { keyPrefix: "service" });

  const { data, isLoading } = useQuery({
    queryKey: ["rules"],
    queryFn: getRules,
    refetchOnWindowFocus: false,
  });

  if (!data?.data.length) {
    return;
  }

  return (
    <div className="mt-2">
      {isLoading && <Loading className="w-4 h-4" />}
      {!isLoading && (
        <>
          <h3 className="font-semibold">{t("rules-title")}</h3>
          <ul className="list-disc list-inside ml-4">
            {data?.data.map(({ id, attributes }) => {
              return <li key={id}>{attributes.rule}</li>;
            })}
          </ul>
        </>
      )}
    </div>
  );
};
