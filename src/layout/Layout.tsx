import { lazy, Suspense, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import {
	Outlet,
	ScrollRestoration,
	useLocation,
	useNavigate,
	useParams,
} from 'react-router-dom'

const Header = lazy(() =>
	import('./components/header/Header').then(module => ({
		default: module.Header,
	}))
)

const Footer = lazy(() =>
	import('./components/footer/Footer').then(module => ({
		default: module.Footer,
	}))
)

const CookieModal = lazy(() =>
	import('@/components/CookieModal').then(module => ({
		default: module.CookieModal,
	}))
)

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
			<Helmet titleTemplate='AM VVS STOCKHOLM - %s'>
				<html lang={lang} />
				<meta name='language' content={lang} />
				<meta http-equiv='content-language' content={lang} />
			</Helmet>
			<Suspense fallback={null}>
				<Header />
			</Suspense>
			<main className='pt-32 primary-color-bg primary-color-[50] bg-blue-50 bg-clip-padding'>
				<Outlet />
			</main>
			<Suspense fallback={null}>
				<Footer />
			</Suspense>
			<Suspense fallback={null}>
				<CookieModal />
			</Suspense>
			<ScrollRestoration />
		</div>
	)
}
