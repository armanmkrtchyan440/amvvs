import { getBlogs, getCategories } from "@/api/api";
import { Loading } from "@/components/ui/Loading";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { BlogItem } from "./components/BlogItem";

export const BlogPage = () => {
  const { t } = useTranslation(undefined, { keyPrefix: "blog" });

  const { data, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
    refetchOnWindowFocus: false,
  });

  return (
    <section className="code-section bg-white py-20 font-['Poppins']">
      <div className="container">
        <h2
          id="blog-header"
          className="mb-8 text-center text-3xl font-bold xl:text-4xl 2xl:text-5xl"
        >
          {t("title")}
        </h2>
        {isLoading && <Loading />}

        {!isLoading && (
          <div className="relative z-10 grid grid-cols-1 grid-flow-row gap-8 md:grid-cols-2 items-stretch">
            {data?.data?.map((blog) => (
              <BlogItem key={blog.id} {...blog.attributes} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
