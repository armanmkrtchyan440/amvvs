import { IService } from "@/api/api"
import { calculateRot } from "@/utils/calculateRot"
import { FC } from "react"
import { Link, useParams } from "react-router-dom"

export const ServiceItem: FC<IService> = ({ name, price, img, slug }) => {
	// const { t } = useTranslation(undefined, { keyPrefix: "service" })

	const { lang } = useParams()

	return (
		<article className="flex flex-col rounded-3xl shadow-lg hover:shadow-xl">
			<Link to={`/${lang}/services/${slug}`} className="flex flex-col h-full">
				<div className="relative aspect-square h-[400px] overflow-hidden rounded-t-3xl">
					<img
						className="h-full w-full object-cover"
						src={import.meta.env.VITE_BASE_URL + img?.data?.attributes?.url}
						alt={name}
						loading="lazy"
					/>
				</div>
				<div className="rounded-b-3xl bg-white p-6">
					<h2 className="text-2xl font-bold">{name}</h2>
				</div>
				<div className="p-6 mt-auto">
					<div className="w-full h-0.5 bg-gray-300"></div>
					<div className="flex justify-between items-center mt-6">
						<h3 className="text-lg">{calculateRot(price)} kr</h3>
						{/* <Link
						to={`/services/${slug}`}
						className="primary-color-bg rounded px-8 py-3 text-white bg-blue-600 hover:bg-blue-500"
					>
						{t("view-service")}
					</Link> */}
					</div>
				</div>
			</Link>
		</article>
	)
}
