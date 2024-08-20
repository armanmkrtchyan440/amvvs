import { getCategories, getServices } from "@/api/api"
import { Loading } from "@/components/ui/Loading"
import { useQuery } from "@tanstack/react-query"
import { useTranslation } from "react-i18next"
import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import { ServiceItem } from "./components/ServiceItem"
// import Select from "react-select";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { useCallback, useEffect, useMemo, useState } from "react"

export const ServicesPage = () => {
	const { t } = useTranslation(undefined, { keyPrefix: "services" })
	const [searchParams, setSearchParams] = useSearchParams()
	const [category, setCategory] = useState<string>(
		searchParams.get("category") || "all"
	)
	const { lang } = useParams()

	const { data, isLoading } = useQuery({
		queryKey: ["services", lang],
		queryFn: () => getServices(category, lang as string),
		refetchOnWindowFocus: false,
	})

	const { data: categories, refetch } = useQuery({
		queryKey: ["categories"],
		queryFn: () => getCategories(lang as string),
		refetchOnWindowFocus: false,
	})

	const navigate = useNavigate()

	const handleCategoryChange = useCallback(
		(value: string) => {
			searchParams.set("category", value as string)
			setCategory(value)
			setSearchParams(searchParams, { replace: true })
		},
		[searchParams, setSearchParams]
	)

	const filteredServices = useMemo(
		() =>
			data?.data?.filter(
				service =>
					service.attributes.category.data.attributes.slug == category ||
					category == "all"
			),
		[category, data]
	)

	useEffect(() => {
		const categoryItem = categories?.data.find(
			categoryItem => categoryItem.attributes.slug == category
		)?.attributes

		console.log(categoryItem)

		if (categoryItem?.locale && lang != categoryItem?.locale) {
			const slug = categoryItem.localizations.data[0].attributes.slug
			setCategory(slug)
			refetch()
			navigate(`/${lang}/services?category=${slug}`, { replace: true })
		}
	}, [lang])

	return (
		<section className="code-section bg-white py-20 font-['Poppins']">
			<div className="container px-4 sm:px-12 ">
				<h2
					id="services-header"
					className="mb-8 text-center text-3xl font-bold xl:text-4xl 2xl:text-5xl"
				>
					{t("title")}
				</h2>
				{isLoading && <Loading />}

				{!isLoading && (
					<>
						<Select onValueChange={handleCategoryChange} value={category}>
							<SelectTrigger className="my-4">
								<SelectValue placeholder="" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value={"all"}>All</SelectItem>
								{categories?.data?.map(({ id, attributes }) => (
									<SelectItem key={id} value={attributes.slug}>
										{attributes.name}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
						<div className="relative z-10 grid grid-cols-1 grid-flow-row gap-8 md:grid-cols-3 items-stretch">
							{filteredServices?.map(service => (
								<ServiceItem key={service.id} {...service.attributes} />
							))}
						</div>
					</>
				)}
			</div>
		</section>
	)
}
