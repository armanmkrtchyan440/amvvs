import { IOurProjects } from "@/api/api";
import { FC } from "react";

export const PortfolioItem: FC<IOurProjects> = ({ name, description, img }) => {
  return (
    <div className="flex flex-col rounded-3xl shadow-lg">
      <div className="relative aspect-square h-[400px] overflow-hidden rounded-t-3xl">
        <img
          className="h-full w-full object-cover"
          src={`${import.meta.env.VITE_BASE_URL}${img?.data?.attributes?.url}`}
          alt={name}
          data-media='{"id":"IYE0ImQlY90","src":"unsplash","type":"image"}'
        />
      </div>
      <div className="rounded-b-3xl bg-white p-6">
        <div id="portfolio-1-header" className="text-2xl font-bold">
          {name}
        </div>
        <div
          id="portfolio-1-subtext"
          className="text-lg font-thin text-gray-600"
        >
          {description}
        </div>
      </div>
    </div>
  );
};
