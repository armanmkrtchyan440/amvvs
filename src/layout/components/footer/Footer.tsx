import { useTranslation } from "react-i18next"
import {
	FaEnvelope,
	FaFacebookF,
	FaInstagram,
	FaLocationDot,
	FaPhone,
} from "react-icons/fa6"
import { Link, NavLink, useParams } from "react-router-dom"
import id06Logo from "../img/id06.png"
import sakervattenLogo from "../img/sakervatten.png"
import tryggHansaLogo from "../img/trygg-hansa.png"

export const Footer = () => {
	const { t } = useTranslation(undefined, { keyPrefix: "footer" })
	const { lang } = useParams()

	return (
		<footer
			className={`primary-color-bg primary-color-[50] code-section relative overflow-hidden py-16 font-['Poppins'] bg-blue-50`}
			id="o1xja"
		>
			<div id="footer" className="container relative pb-0 pt-36">
				<div className="primary-color-border primary-color-[100] absolute -left-80 -top-14 h-[400px] w-[400px] rounded-full border-[60px] border-blue-100"></div>
				<div className="primary-color-border primary-color-[100] absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full border-[60px] border-blue-100"></div>
				<div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden"></div>
				<div className="relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
					<div className="mb-8 flex flex-col space-y-4">
						<Link
							to={`/${lang}`}
							className="w-40"
							aria-label={location.hostname}
						>
							<img src="/logo-black.png" alt="" />
						</Link>
						<div
							id="footer-name-subtext"
							className="text-gray-700 2xl:pr-[30%]"
						>
							{t("name-subtext")}
						</div>
					</div>
					<div id="footer-nav-links" className="mb-8 flex flex-col space-y-4">
						<div className="mb-8 text-lg font-semibold">{t("navigation")}</div>
						<div className="grid grid-cols-2 gap-y-3 gap-x-10">
							<NavLink end to={`/${lang}/`} className="nav-link">
								{t("nav-links.home")}
							</NavLink>
							<NavLink to={`/${lang}/about-us`} className="nav-link">
								{t("nav-links.aboutUs")}
							</NavLink>
							<NavLink to={`/${lang}/quote`} className="nav-link">
								{t("nav-links.quote")}
							</NavLink>
							<NavLink to={`/${lang}/categories`} className="nav-link">
								{t("nav-links.categories")}
							</NavLink>
							<NavLink to={`/${lang}/services`} className="nav-link">
								{t("nav-links.services")}
							</NavLink>
							{/* <NavLink to={`/${lang}/blog`} className="nav-link">
								{t("nav-links.blog")}
							</NavLink> */}
							<NavLink to={`/${lang}/feedbacks`} className="nav-link">
								{t("nav-links.feedback")}
							</NavLink>
							<NavLink to={`/${lang}/career`} className="nav-link">
								{t("nav-links.career")}
							</NavLink>
						</div>
					</div>

					<div className="mb-8 flex flex-col space-y-4">
						<div className="mb-8 text-lg font-semibold">{t("contact-us")}</div>
						<div className="flex flex-col gap-2 items-start">
							<div className="flex flex-row items-center gap-2">
								<div className="flex items-center justify-center rounded-full p-2">
									{/* <i className="primary-color-text fa-regular fa-phone text-sm text-blue-600"></i> */}
									<FaPhone size={16} color="#2563eb" />
								</div>
								<div className="flex flex-col gap-2">
									<a
										href="tel:+46859115333"
										id="footer-phone-number"
										className="text-sm flex items-center"
									>
										+46 859 115 333
									</a>
									<a
										href="tel:+46728529999"
										id="footer-phone-number"
										className="text-sm flex items-center"
									>
										+46 728 529 999
									</a>
								</div>
							</div>
							<div className="flex flex-row items-center gap-2">
								<div className="flex items-center justify-center rounded-full p-2">
									{/* <i className="primary-color-text fa-regular fa-envelope text-sm text-blue-600"></i> */}
									<FaEnvelope size={16} color="#2563eb" />
								</div>
								<div id="footer-email" className="flex items-center text-sm">
									<a href="mailto:info@amvvsbygg.se">info@amvvsbygg.se</a>
								</div>
							</div>
							<div className="flex flex-row items-center gap-2">
								<div className="flex items-center justify-center rounded-full p-2">
									{/* <i className="primary-color-text fa-regular fa-location-dot text-sm text-blue-600"></i> */}
									<FaLocationDot size={16} color="#2563eb" />
								</div>
								<a
									href="https://maps.app.goo.gl/5UvEmjwZwRwaTgpY7"
									target="_blank"
									className="text-sm flex items-center"
								>
									{t("address")}
								</a>
							</div>
							<div className="flex flex-row items-center gap-2">
								<div className="flex items-center justify-center rounded-full p-2">
									<FaFacebookF size={16} color="#2563eb" />
								</div>
								<a
									href="https://www.facebook.com/profile.php?id=61556048230860"
									target="_blank"
									className="text-sm flex items-center"
								>
									AM VVS AB
								</a>
							</div>
							<div className="flex flex-row items-center gap-2">
								<div className="flex items-center justify-center rounded-full p-2">
									<FaInstagram size={16} color="#2563eb" />
								</div>
								<a
									href="https://www.instagram.com/am_vvs_ab"
									target="_blank"
									className="text-sm flex items-center"
								>
									am_vvs_ab
								</a>
							</div>
						</div>
					</div>
					<div className="mb-8 flex flex-col space-y-4 text-gray-700">
						<a
							href="https://sakervatten.se/company/1233072/am-vvs-och-bygg-ab/"
							target="_blank"
							aria-label="sakervatten.se"
						>
							<img src={sakervattenLogo} className="w-20" />
						</a>
						<img src={tryggHansaLogo} className="w-36" />
						<img src={id06Logo} className="w-36" />
					</div>
				</div>
				<p
					id="footer-copyright"
					className="relative z-10 mt-24 text-center text-lg text-gray-600"
				>
					{t("copyright")}
				</p>
			</div>
		</footer>
	)
}
