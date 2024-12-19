import { CookieModal } from '@/components/CookieModal'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import {
	Outlet,
	ScrollRestoration,
	useLocation,
	useNavigate,
	useParams,
} from 'react-router-dom'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'

export const Layout = () => {
	const location = useLocation()
	const navigate = useNavigate()
	const { lang } = useParams()

	useEffect(() => {
		const paths = location.pathname.split('/')
		const localePath = paths[1]

		console.log(localePath)

		if (localePath != 'en' && localePath !== 'se') {
			paths[1] = 'sv'
			navigate(paths.join('/') + location.search, { replace: true })
		}
	}, [])

	return (
		<div className='overflow-hidden'>
			<Header />
			<Helmet titleTemplate='AM VVS STOCKHOLM - %s'>
				<html lang={lang} />
				<meta name='language' content={lang} />
				<meta http-equiv='content-language' content={lang} />
			</Helmet>
			<main className='pt-32 primary-color-bg primary-color-[50] bg-blue-50 bg-clip-padding'>
				<Outlet />
			</main>
			<Footer />
			<CookieModal />
			<ScrollRestoration />
		</div>
	)
}
