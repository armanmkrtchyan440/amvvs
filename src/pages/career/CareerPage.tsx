import { getJobs } from "@/api/api"
import { Loading } from "@/components/ui/Loading"
import { useQuery } from "@tanstack/react-query"
import { useTranslation } from "react-i18next"
import { CareerForm } from "./components/CareerForm"

export const CareerPage = () => {
	const { t } = useTranslation(undefined, { keyPrefix: "career" })

	const { data, isLoading } = useQuery({
		queryKey: ["categories"],
		queryFn: getJobs,
		refetchOnWindowFocus: false,
	})

	return (
		<section className="code-section bg-white py-20 font-['Poppins']">
			<div className="container">
				<div>
					<h2
						id="career-header"
						className="mb-4 text-center text-3xl font-bold xl:text-4xl 2xl:text-5xl"
					>
						{t("title")}
					</h2>
					<p className="mb-8 text-center text-gray-700">{t("description")}</p>
				</div>
				{isLoading && <Loading />}

				{!isLoading && !!data?.data?.length && (
					<section className="mb-12">
						<h2 className="text-2xl font-bold mb-8">
							{t("current-job-openings.title")}
						</h2>
						{data?.data?.map(({ id, attributes }) => (
							<div key={id} className="mb-8 p-6 border rounded-lg shadow-lg">
								<h3 className="text-xl font-semibold mb-2">
									{attributes.title}
								</h3>
								<p className="mb-4 text-gray-700">{attributes.description}</p>
								<h4 className="font-semibold">
									{t("current-job-openings.requirements")}:
								</h4>
								<ul className="list-disc list-inside ml-4">
									{attributes?.requirements?.map((req, idx) => (
										<li key={idx}>{req}</li>
									))}
								</ul>
							</div>
						))}
					</section>
				)}

				<section className="mb-12">
					<h2 className="text-2xl font-bold mb-6">
						{t("why-work-with-us.title")}
					</h2>
					<ul className="list-disc list-inside ml-4">
						<li>{t("why-work-with-us.salary-benefits")}</li>
						<li>{t("why-work-with-us.career-advancement")}</li>
						<li>{t("why-work-with-us.friendly")}</li>
						<li>{t("why-work-with-us.training")}</li>
					</ul>
				</section>
				<CareerForm />
			</div>
		</section>
	)
}
