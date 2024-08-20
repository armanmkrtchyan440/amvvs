import { useTranslation } from "react-i18next"
import { aboutUsBigImg, aboutUsSmallImg } from "./images/aboutImg"

export const AboutUsPage = () => {
	const { t } = useTranslation(undefined, { keyPrefix: "home" })

	return (
		<section
			id="about"
			className="code-section relative bg-white font-['Poppins']"
		>
			<div className="container relative z-10 lg:pb-12">
				<div className="relative z-10 flex flex-col items-center lg:flex-row">
					<div className="mt-12 w-full lg:mt-24 lg:w-[55%] lg:pr-14">
						<h1
							id="about-header-text"
							className="mb-8 text-center text-4xl font-bold lg:text-left xl:text-5xl 2xl:text-6xl"
						>
							{t("about.header")}
						</h1>
						<p
							id="about-first-paragraph"
							className="mb-8 text-center text-gray-700 lg:text-left"
						>
							{t("about.paragraph1")}
						</p>
						<div
							id="about-checkmark-list"
							className="mb-8 pl-0 md:pl-8 text-center text-gray-700 lg:text-left"
						>
							<ul>
								<li className="mb-4 flex flex-row">
									<i
										className="fa fa-check mr-4 mt-1 text-green-500"
										aria-hidden="true"
									></i>
									<span id="about-checkmark-list-item-1">
										{t("about.list.item1")}
									</span>
								</li>
								<li className="mb-4 flex flex-row">
									<i
										className="fa fa-check mr-4 mt-1 text-green-500"
										aria-hidden="true"
									></i>
									<span id="about-checkmark-list-item-2">
										{t("about.list.item2")}
									</span>
								</li>
								<li className="mb-4 flex flex-row">
									<i
										className="fa fa-check mr-4 mt-1 text-green-500"
										aria-hidden="true"
									></i>
									<span id="about-checkmark-list-item-3">
										{t("about.list.item3")}
									</span>
								</li>
							</ul>
						</div>
						<p
							id="about-second-paragraph"
							className="mb-12 text-center text-gray-700 lg:text-left"
						>
							{t("about.paragraph2")}
						</p>
						{/* <div
                id="about-cta-button"
                className="mb-12 text-center lg:text-left"
              >
                <Button variant="modal" className="px-8 py-4 font-semibold">
                  Learn More
                </Button>
              </div> */}
					</div>
					<div className="relative mt-12 hidden w-full overflow-visible lg:block lg:w-[45%] lg:p-6">
						<div className="primary-color-border absolute bottom-0 left-0 h-0 w-0 border-[100px] border-transparent border-b-blue-600 border-l-blue-600"></div>
						<div className="absolute -right-9 top-16 h-[145px] w-[190px] bg-[radial-gradient(#cccccc_3px,transparent_3px)] [background-size:16px_16px]"></div>
						<img
							src={aboutUsBigImg}
							alt="Hero"
							className="relative mt-8 aspect-square w-full rounded-2xl object-cover lg:mt-0"
							data-media='{"id":"IxfhMTROke8","src":"unsplash","type":"image"}'
						/>
						<div className="absolute bottom-0 right-0 z-10 aspect-square w-[45%] rounded-2xl bg-white p-6">
							<img
								src={aboutUsSmallImg}
								alt="Hero"
								className="relative mt-8 h-full object-cover lg:mt-0"
								data-media='{"id":"TtN_obfWlGw","src":"unsplash","type":"image"}'
							/>
						</div>
					</div>
				</div>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.9340437397946!2d18.048690376685133!3d59.31735831197937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77e7e3617c21%3A0xf7efd85149cba2ce!2zSG9ybnNnYXRhbiA3OSwgMTE4IDQ5IFN0b2NraG9sbSwg0KjQstC10YbQuNGP!5e0!3m2!1sru!2sam!4v1724022133109!5m2!1sru!2sam"
					width="100%"
					height="450"
					style={{ border: 0 }}
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					className="mt-10"
				></iframe>
			</div>
		</section>
	)
}
