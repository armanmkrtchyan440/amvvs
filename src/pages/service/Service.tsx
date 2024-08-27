import { getService } from "@/api/api"
import { Loading } from "@/components/ui/Loading"
import { AddCartItemType, useCartItems } from "@/stores/useCartItems"
import { calculateRot } from "@/utils/calculateRot"
import { useQuery } from "@tanstack/react-query"
import { useCallback, useEffect, useMemo, useState } from "react"
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"
import Markdown from "react-markdown"
import { useNavigate, useParams } from "react-router-dom"
import remarkGfm from "remark-gfm"

export const ServicePage = () => {
	const { t } = useTranslation(undefined, { keyPrefix: "service" })
	const { addCartItem } = useCartItems()
	const { lang, id } = useParams()
	const { data, isLoading, isError } = useQuery({
		queryKey: ["service", id],
		queryFn: () => getService(id, lang),
		refetchOnWindowFocus: false,
		retry: false,
		throwOnError: true,
	})

	const navigate = useNavigate()

	const [bortforslingCount, setBortforslingCount] = useState<number>(0)

	const price = useMemo(
		() =>
			(data?.data?.attributes?.price as number) +
			(data?.data.attributes.bortforsling as number) * bortforslingCount,
		[data, bortforslingCount]
	)

	const handleAddToCart = useCallback(() => {
		addCartItem(
			data?.data.id as number,
			{
				...data?.data.attributes,
				bortforslingQuantity: bortforslingCount,
			} as AddCartItemType
		)
	}, [addCartItem, data, bortforslingCount])

	const handleMinusBortforslingCount = useCallback(() => {
		setBortforslingCount(prev => (prev > 0 ? prev - 1 : prev))
	}, [])

	const handlePlusBortforslingCount = useCallback(() => {
		setBortforslingCount(prev => prev + 1)
	}, [])

	useEffect(() => {
		if (
			data?.data?.attributes?.locale &&
			lang != data?.data?.attributes?.locale
		) {
			console.log(data?.data?.attributes.localizations.data)
			navigate(
				`/${lang}/services/${data.data?.attributes.localizations.data[0].attributes.slug}`,
				{ replace: true }
			)
		}
	}, [data, lang, navigate])

	return (
		<section className="code-section bg-white py-20 font-['Poppins'] min-h-96">
			<div className="mx-auto px-4 sm:px-12 xl:px-32 min-h-">
				{isLoading && <Loading />}

				{!isLoading && !isError && (
					<div className="flex flex-col md:flex-row -mx-4">
						<Helmet>
							<title>{data?.data.attributes.name}</title>
							<meta
								name="description"
								content={data?.data.attributes.description}
							/>
							<meta property="og:title" content={data?.data.attributes.name} />
							<meta
								name="og:description"
								content={data?.data.attributes.description}
							/>
							<meta
								property="og:image"
								content={data?.data.attributes.img.data.attributes.url}
							/>
							<meta
								property="twitter:title"
								content={data?.data.attributes.name}
							/>
							<meta
								property="twitter:description"
								content={data?.data.attributes.description}
							/>
							<meta
								property="twitter:image"
								content={data?.data.attributes.img.data.attributes.url}
							/>
						</Helmet>
						<div className="md:flex-1 px-4">
							<div className="h-[460px] rounded-lg">
								<img
									className="w-full h-full object-cover"
									src={
										import.meta.env.VITE_BASE_URL +
										data?.data?.attributes?.img.data.attributes.url
									}
									alt="Product Image"
								/>
							</div>
						</div>
						<div className="md:flex-1 px-4 flex flex-col justify-between">
							<div>
								<h2 className="text-2xl font-bold mb-2">
									{data?.data.attributes.name}
								</h2>
								<Markdown
									remarkPlugins={[remarkGfm]}
									components={{
										ul: props => (
											<ul {...props} className="list-disc list-inside ml-4" />
										),
										ol: props => (
											<ol
												{...props}
												className="list-decimal list-inside ml-4"
											/>
										),
										a: props => (
											<a
												{...props}
												className="text-blue-600 hover:text-blue-500 transition"
											/>
										),
										h2: props => (
											<h2 {...props} className="text-xl font-bold" />
										),
										h3: props => (
											<h3 {...props} className="text-lg font-bold" />
										),
										h4: props => (
											<h4 {...props} className="text-base font-bold" />
										),
										h5: props => (
											<h5 {...props} className="text-sm font-bold" />
										),
										h6: props => (
											<h6 {...props} className="text-xs font-bold" />
										),
									}}
								>
									{data?.data.attributes.description}
								</Markdown>
							</div>
							<div className="flex flex-col gap-5">
								<div>
									<div className="w-min flex justify-between items-center py-4 gap-2 ml-auto">
										<div>
											<h3>{t("removal")}</h3>
											<span>
												{calculateRot(
													data?.data.attributes.bortforsling as number
												)}
												:-/st
											</span>
										</div>
										<div className="flex justify-center items-center gap-5">
											<button
												className="quantity-button"
												onClick={handleMinusBortforslingCount}
											>
												-
											</button>
											<span>{bortforslingCount}</span>
											<button
												className="quantity-button"
												onClick={handlePlusBortforslingCount}
											>
												+
											</button>
										</div>
									</div>
								</div>
								<div className="flex justify-between items-center">
									<h3 className="text-lg">{calculateRot(price)} kr</h3>
									<div>
										<button
											className="primary-color-bg rounded px-8 py-3 text-white bg-blue-600 hover:bg-blue-500"
											onClick={handleAddToCart}
										>
											{t("add-to-cart")}
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</section>
	)
}
