import { getCategories } from "@/api/api"
import { Loading } from "@/components/ui/Loading"
import { useQuery } from "@tanstack/react-query"
import { useTranslation } from "react-i18next"
import { useParams } from "react-router-dom"
import { CategoryItem } from "./components/CategoryItem"

export const CategoriesPage = () => {
	const { t } = useTranslation(undefined, { keyPrefix: "categories" })
	const { lang } = useParams()

	const { data, isLoading } = useQuery({
		queryKey: ["categories", lang],
		queryFn: () => getCategories(lang as string),
		refetchOnWindowFocus: false,
	})

	return (
		<section className="code-section bg-white py-20 font-['Poppins']">
			<div className="container">
				<h2
					id="services-header"
					className="mb-8 text-center text-3xl font-bold xl:text-4xl 2xl:text-5xl"
				>
					{t("title")}
				</h2>
				{isLoading && <Loading />}

				{!isLoading && (
					<div className="relative z-10 grid grid-cols-1 grid-flow-row gap-8 md:grid-cols-3 items-stretch">
						{data?.data?.map(category => (
							<CategoryItem key={category.id} {...category.attributes} />
						))}
					</div>
				)}
			</div>
		</section>
	)
}
