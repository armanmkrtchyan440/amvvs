import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"
import { reviewImg } from "./images/feedbacksImg"

export const FeedbacksPage = () => {
	const { t } = useTranslation(undefined, { keyPrefix: "home" })

	return (
		<section
			id="testimonials"
			className="code-section relative bg-white font-['Poppins']"
		>
			<Helmet>
				<title>{t("testimonials.header")}</title>
			</Helmet>
			<div className="container relative z-10 pb-12 pt-16 lg:pb-24">
				<h2
					id="testimonials-header"
					className="mb-6 text-center text-3xl font-bold xl:text-4xl 2xl:text-5xl"
				>
					{t("testimonials.header")}
				</h2>
				<h3
					id="testimonials-subtext"
					className="mx-auto mb-16 w-3/4 text-center font-thin text-gray-700"
				>
					{t("testimonials.subtext")}
				</h3>
				<div className="relative w-full">
					<div className="primary-color-bg primary-color-[100] absolute h-full w-full -rotate-3 transform rounded-3xl bg-blue-100"></div>
					<div className="relative z-10 w-full rounded-3xl bg-white py-24 shadow-[0_0_25px_rgba(0,0,0,0.1)]">
						<div className="absolute -top-12 left-12">
							<i className="primary-color-text primary-color-[100] fa-solid fa-quote-left text-8xl text-blue-100"></i>
						</div>
						<div className="absolute -bottom-12 right-12">
							<i className="primary-color-text primary-color-[100] fa-solid fa-quote-right text-8xl text-blue-100"></i>
						</div>
						<div className="flex flex-col items-center justify-end relative sm:flex-row">
							<div className="w-[50%] sm:w-[25%]">
								<div className="relative mx-auto aspect-square max-h-[300px]">
									<div className="primary-color-border absolute left-6 top-6 h-full w-full rounded-br-2xl border-2 border-blue-600"></div>
									<div className="primary-color-border absolute bottom-6 right-6 h-full w-full rounded-tl-2xl border-2 border-blue-600"></div>
									<img
										src={reviewImg}
										alt="Hero"
										className="testimonial-image dont-replace relative mt-8 h-full rounded-2xl object-cover lg:mt-0"
										data-media='{"id":"p5i7uyPuHto","src":"unsplash","type":"image"}'
									/>
								</div>
							</div>
							<div className="sm:w-[65%]">
								<div className="relative flex h-full flex-col justify-center p-12">
									<div
										id="testimonial-topic"
										className="mb-4 text-3xl font-bold"
									>
										{t("testimonials.topic")}
									</div>
									<div id="testimonial-quote" className="mb-4 text-base">
										"{t("testimonials.quote")}"
									</div>
									<div
										id="testimonial-name"
										className="mb-4 text-base font-bold"
									>
										{t("testimonials.name")}
									</div>
								</div>
							</div>
							<div className="static sm:absolute right-4 bottom-0">
								<a
									href="https://search.google.com/local/reviews?placeid=ChIJMYIyjVd3X0YRlz0RkQb6nYI"
									target="_blank"
									className="primary-color-bg rounded px-8 py-3 text-white bg-blue-600 hover:bg-blue-500"
								>
									{t("testimonials.link")}
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
