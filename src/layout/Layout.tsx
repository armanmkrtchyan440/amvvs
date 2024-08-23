import { CookieModal } from "@/components/CookieModal"
import { useEffect } from "react"
import { Helmet } from "react-helmet"
import {
	Outlet,
	ScrollRestoration,
	useLocation,
	useNavigate,
	useParams,
} from "react-router-dom"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"

const locales = ["en", "sv"]

export const Layout = () => {
	const location = useLocation()
	const navigate = useNavigate()
	const { lang } = useParams()

	useEffect(() => {
		const paths = location.pathname.split("/")
		const localePath = paths[1]

		console.log(localePath)

		if (localePath != "en" && localePath !== "se") {
			paths[1] = "sv"
			navigate(paths.join("/") + location.search, { replace: true })
		}
	}, [])

	return (
		<div className="overflow-hidden">
			<Header />
			<Helmet titleTemplate="AM VVS AB - %s">
				<html lang={lang} />
				<title>Professionella VVS-tjänster i Stockholm</title>
				<meta
					name="description"
					content="Expertlösningar inom VVS för hem och företag. Kvalitetsservice, effektiv installation av varmvattenberedare och skräddarsydda badrumsrenoveringar i Stockholm."
				/>
				<meta
					property="og:title"
					content="AM VVS AB - Professionella VVS-tjänster i Stockholm"
				/>
				<meta
					property="og:description"
					content="Expertlösningar inom VVS för hem och företag. Kvalitetsservice, effektiv installation av varmvattenberedare och skräddarsydda badrumsrenoveringar i Stockholm."
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content="AM VVS AB - Professionella VVS-tjänster i Stockholm"
				/>
				<meta
					name="twitter:description"
					content="Expertlösningar inom VVS för hem och företag. Kvalitetsservice, effektiv installation av varmvattenberedare och skräddarsydda badrumsrenoveringar i Stockholm."
				/>
				<meta property="og:image" content="/hero.jpg" />
				<meta name="twitter:image" content="/hero.jpg" />

				{locales.map(locale => (
					<link
						rel={"alternate"}
						href={`${import.meta.env.VITE_SITE_URL}/${locale}`}
						hrefLang={locale}
						key={locale}
					/>
				))}
			</Helmet>
			<main className="pt-32 primary-color-bg primary-color-[50] bg-blue-50 bg-clip-padding">
				<Outlet />
			</main>
			<Footer />
			<CookieModal />
			<ScrollRestoration />
		</div>
	)
}
