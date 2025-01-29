import type { ICategory } from "@/api/api";
import type { FC } from "react";
import { Link, useParams } from "react-router-dom";

export const CategoryItem: FC<ICategory> = ({ name, img, slug }) => {
  const { lang } = useParams();
  return (
    <article>
      <Link
        to={`/${lang}/services?category=${slug}`}
        className="flex flex-col rounded-3xl shadow-lg transition-shadow hover:shadow-xl h-full"
      >
        <div className="relative aspect-square h-[400px] overflow-hidden rounded-t-3xl">
          <img
            loading="lazy"
            className="h-full w-full object-cover"
            src={import.meta.env.VITE_BASE_URL + img?.data?.attributes?.url}
            alt={name}
          />
        </div>
        <div className="rounded-b-3xl bg-white p-6">
          <h2 className="text-2xl font-bold">{name}</h2>
        </div>
      </Link>
    </article>
  );
};
