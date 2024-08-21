import { Animate } from "@/components/animate"
import { LinkButton } from "@/components/ui/LinkButton"
import { useTranslation } from "react-i18next"
import { useParams } from "react-router-dom"
import { businessManImg, heroImg, serviceImg } from "./images/homeImg"

export const HomePage = () => {
	const { t } = useTranslation(undefined, { keyPrefix: "home" })

	const { lang } = useParams()

	return (
		<>
			<section className="primary-color-bg primary-color-[50] code-section relative font-['Poppins'] bg-blue-50">
				<div className="container relative z-10 lg:pb-32">
					<div className="relative z-10 flex flex-col items-center lg:flex-row">
						<div className="mt-12 w-full lg:mt-24 lg:w-[55%] lg:pr-14">
							<Animate type="left-to-right">
								<h1 className="mb-8 text-center font-bold lg:text-left flex flex-col gap-5">
									<span className="text-gray-700 text-xl xl:text-2xl 2xl:text-3xl">
										{t("hero.title.line1")}
									</span>
									<span className="primary-color-text text-blue-600 text-3xl xl:text-5xl 2xl:text-6xl">
										{t("hero.title.line2")}
									</span>
								</h1>
							</Animate>
							<Animate type="left-to-right">
								<p className="mb-8 text-center text-gray-700 lg:text-left">
									{t("hero.description")}
								</p>
							</Animate>
							<Animate
								type="left-to-right"
								className="mb-12 text-center lg:text-left"
							>
								<LinkButton
									href={`/${lang}/services`}
									className="px-5 text-xs uppercase"
								>
									{t("service")}
								</LinkButton>
							</Animate>
						</div>
						<Animate
							type="right-to-left"
							className="relative mt-12 hidden w-full overflow-visible lg:block lg:w-[45%] lg:p-6"
						>
							<div className="primary-color-border absolute bottom-0 left-0 h-0 w-0 border-[100px] border-transparent border-b-blue-600 border-l-blue-600"></div>
							<div className="absolute -right-9 top-16 h-[145px] w-[190px] bg-[radial-gradient(#cccccc_3px,transparent_3px)] [background-size:16px_16px]"></div>
							<img
								src={heroImg}
								alt="Hero"
								className="seo-image relative mt-8 aspect-square w-full rounded-2xl object-cover lg:mt-0"
								data-media='{"id":"4CNNH2KEjhc","src":"unsplash","type":"image"}'
							/>
						</Animate>
					</div>
				</div>
				<div className="primary-color-border primary-color-[100] absolute -left-56 -top-24 h-[400px] w-[400px] rounded-full border-[60px] border-blue-100"></div>
				<div className="absolute bottom-0 top-0 hidden h-full w-full overflow-hidden lg:block">
					<div className="primary-color-border primary-color-[100] absolute -right-60 bottom-14 h-[400px] w-[400px] rounded-full border-[60px] border-blue-100"></div>
				</div>
			</section>
			<section
				id="services"
				className="code-section bg-white py-20 font-['Poppins']"
			>
				<div className="container">
					<Animate type="left-to-right">
						<h2 className="mb-8 text-center text-3xl font-bold xl:text-4xl 2xl:text-5xl">
							{t("services.title")}
						</h2>
					</Animate>
					<Animate type="right-to-left">
						<h3 className="mx-auto mb-12 w-3/4 text-center font-thin text-gray-700">
							{t("services.description")}
						</h3>
					</Animate>

					<div className="flex flex-row">
						<Animate type="left-to-right" className="hidden w-[30%] xl:block">
							<img
								src={serviceImg}
								alt="Hero"
								className="relative mt-8 h-full rounded-2xl object-cover lg:mt-0"
							/>
						</Animate>
						<div className="grid w-full grid-cols-1 gap-y-12 md:grid-cols-3 xl:w-[70%]">
							<Animate
								type="left-to-right"
								className="flex-1 bg-white px-8 text-center md:max-w-xs"
							>
								<div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-100 text-4xl text-blue-500">
									<i className="fa-duotone fa-wrench"></i>
								</div>
								<h4 className="mb-4 text-2xl font-semibold">
									{t("services.service1.title")}
								</h4>
								<p className="text-gray-700">
									{t("services.service1.description")}
								</p>
							</Animate>
							<Animate
								type="top-to-bottom"
								className="flex-1 bg-white px-8 text-center md:max-w-xs"
							>
								<div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-orange-100 text-4xl text-orange-500">
									<i className="fa-duotone fa-water"></i>
								</div>
								<h4 className="mb-4 text-2xl font-semibold">
									{t("services.service2.title")}
								</h4>
								<p id="service-2-text" className="text-gray-700">
									{t("services.service2.description")}
								</p>
							</Animate>
							<Animate
								type="right-to-left"
								className="flex-1 bg-white px-8 text-center md:max-w-xs"
							>
								<div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-rose-100 text-4xl text-rose-500">
									<i className="fa-duotone fa-sink"></i>
								</div>
								<h4 className="mb-2 text-2xl font-semibold">
									{t("services.service3.title")}
								</h4>
								<p className="text-gray-700">
									{t("services.service3.description")}
								</p>
							</Animate>
							<Animate
								type="left-to-right"
								className="flex-1 bg-white px-8 text-center md:max-w-xs"
							>
								<div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-teal-100 text-4xl text-teal-500">
									<i className="fa-duotone fa-pipe"></i>
								</div>
								<h4 className="mb-2 text-2xl font-semibold">
									{t("services.service4.title")}
								</h4>
								<p className="break-words text-gray-700">
									{t("services.service4.description")}
								</p>
							</Animate>
							<Animate
								type="bottom-to-top"
								className="flex-1 bg-white px-8 text-center md:max-w-xs"
							>
								<div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-stone-100 text-4xl text-stone-500">
									<i className="fa-duotone fa-shower"></i>
								</div>
								<h4 className="mb-2 text-2xl font-semibold">
									{t("services.service5.title")}
								</h4>
								<p className="text-gray-700">
									{t("services.service5.description")}
								</p>
							</Animate>
							<Animate
								type="right-to-left"
								className="flex-1 bg-white px-8 text-center md:max-w-xs"
							>
								<div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-violet-100 text-4xl text-violet-500">
									<i className="fa-duotone fa-tools"></i>
								</div>
								<h4 className="mb-2 text-2xl font-semibold">
									{t("services.service6.title")}
								</h4>
								<p className="text-gray-700">
									{t("services.service6.description")}
								</p>
							</Animate>
						</div>
					</div>
				</div>
			</section>
			<section className="code-section font-['Poppins']" id="tkoswo">
				<div className="container pb-20 lg:pt-32">
					<div id="call-to-action" className="">
						<div className="primary-color-bg relative flex flex-1 items-center justify-center rounded-3xl md:h-[535px] bg-blue-600">
							<div className="flex h-full w-full flex-row">
								<div className="relative flex w-full flex-col overflow-hidden rounded-3xl py-24 pl-12 pr-12 text-white md:w-1/2 lg:pl-36">
									<div className="primary-color-border primary-color-[-100] absolute -left-16 -top-16 h-[300px] w-[300px] rounded-full border-[50px] border-blue-500"></div>
									<div className="relative z-10 text-center md:text-left">
										<Animate type="left-to-right" className="mb-4 text-sm">
											{t("call-to-action.subheader")}
										</Animate>
										<Animate
											type="left-to-right"
											className="mb-4 text-3xl font-bold lg:text-4xl xl:text-5xl"
										>
											{t("call-to-action.header")}
										</Animate>
										<Animate type="left-to-right" className="mb-12 text-base">
											{t("call-to-action.subtext")}
										</Animate>
										<Animate type="left-to-right">
											<LinkButton
												href={`/${lang}/quote`}
												className="bg-white px-8 py-4 text-sm font-semibold text-blue-600 hover:bg-gray-100 uppercase"
											>
												{t("quote")}
											</LinkButton>
										</Animate>
									</div>
								</div>
								<div className="relative hidden md:block md:w-1/2">
									<div className="absolute bottom-0 lg:h-[110%] xl:left-12 xl:h-[125%]">
										<div className="absolute right-0 top-48 h-[145px] w-[150px] bg-[radial-gradient(#cccccc,transparent_3px)] [background-size:16px_16px] 2xl:-right-9 2xl:w-[190px]"></div>
										<Animate
											type="right-to-left"
											className="dont-replace relative z-20 h-full"
										>
											<img
												className="h-full"
												src={businessManImg}
												alt="Business Owner"
											/>
										</Animate>
									</div>
									<div className="absolute h-full w-full overflow-hidden rounded-3xl">
										<div className="primary-color-border primary-color-[-100] absolute -bottom-16 -right-16 h-[300px] w-[300px] rounded-full border-[50px] border-blue-500"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
