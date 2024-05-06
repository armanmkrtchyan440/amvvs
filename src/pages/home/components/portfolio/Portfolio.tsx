import { useQuery } from "@tanstack/react-query";
import { getOurProjects } from "@/api/api";
import { PortfolioItem } from "./PortfolioItem";
import { Loading } from "@/components/ui/Loading";

export const Portfolio = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["our-projects"],
    queryFn: getOurProjects,
    refetchOnWindowFocus: false,
  });

  return (
    <section
      id="portfolio"
      className="primary-color-bg primary-color-[50] code-section relative font-['Poppins'] md:mb-36 md:h-[700px] bg-blue-50"
    >
      <div className="mx-auto px-4 pb-32 lg:container sm:px-12 xl:px-32">
        <div className="relative z-10">
          <div className="pt-24">
            <div
              id="portfolio-small-heading"
              className="primary-color-text mb-4 text-center text-sm lg:text-left text-blue-600"
            >
              Completed Works
            </div>
            <h1
              id="portfolio-header-text"
              className="mb-8 text-center text-3xl font-bold lg:text-left lg:text-4xl xl:text-5xl"
            >
              Our Recent Projects
            </h1>
            <p
              id="portfolio-subtext"
              className="mb-8 text-center text-lg font-thin text-gray-700 lg:text-left"
            >
              Discover our craftsmanship through our portfolio showcasing a
              selection of our most recent and notable plumbing endeavors.
            </p>
          </div>
        </div>
        {isLoading && <Loading />}
        {!isLoading && (
          <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {data?.data?.map((project) => (
              <PortfolioItem key={project.id} {...project.attributes} />
            ))}
          </div>
        )}
      </div>
      <div className="absolute bottom-0 top-0 h-full w-full overflow-hidden">
        <div className="primary-color-border primary-color-[100] absolute -left-40 -top-40 h-[400px] w-[400px] rounded-full border-[60px] border-blue-100"></div>
        <div className="primary-color-border primary-color-[100] absolute -right-60 bottom-0 h-[400px] w-[400px] rounded-full border-[60px] border-blue-100"></div>
      </div>
    </section>
  );
};
