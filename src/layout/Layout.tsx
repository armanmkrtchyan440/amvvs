import { Outlet, ScrollRestoration } from "react-router-dom"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"

export const Layout = () => {
	return (
		<div className="overflow-hidden">
			<Header />
			<main className="pt-32 primary-color-bg primary-color-[50] bg-blue-50 bg-clip-padding">
				<Outlet />
			</main>
			<Footer />
			<ScrollRestoration />
		</div>
	)
}
