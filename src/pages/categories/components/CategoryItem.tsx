import { ICategory } from "@/api/api";
import { FC } from "react";
import { Link } from "react-router-dom";

export const CategoryItem: FC<ICategory> = ({
  name,
  description,
  img,
  slug,
}) => {
  return (
    <article>
      <Link
        to={`/services?category=${slug}`}
        className="flex flex-col rounded-3xl shadow-lg transition-shadow hover:shadow-xl"
      >
        <div className="relative aspect-square h-[400px] overflow-hidden rounded-t-3xl">
          <img
            className="h-full w-full object-cover"
            src={import.meta.env.VITE_BASE_URL + img?.data?.attributes?.url}
            alt={name}
          />
        </div>
        <div className="rounded-b-3xl bg-white p-6">
          <h2 className="text-2xl font-bold text-center">{name}</h2>
          <div className="text-lg font-thin text-gray-600">{description}</div>
        </div>
      </Link>
    </article>
  );
};
