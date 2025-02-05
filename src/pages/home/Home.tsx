import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { lazy, Suspense } from 'react'
import { Loader } from 'lucide-react'

const HeroSection = lazy(() =>
	import('./components/HeroSection').then(module => ({
		default: module.HeroSection,
	}))
)

const ServiceSection = lazy(() =>
	import('./components/ServiceSection').then(module => ({
		default: module.ServiceSection,
	}))
)

const CallToActionSection = lazy(() =>
	import('./components/CallToActionSection').then(module => ({
		default: module.CallToActionSection,
	}))
)

const TestimonialsSection = lazy(() =>
	import('./components/TestimonialsSection').then(module => ({
		default: module.TestimonialsSection,
	}))
)

export const HomePage = () => {
	const { t } = useTranslation(undefined, { keyPrefix: 'home' })

	return (
		<>
			<Helmet>
				<title>{t('meta.title')}</title>
			</Helmet>
			<Suspense fallback={<Loader />}>
				<HeroSection />
			</Suspense>
			<Suspense fallback={<Loader />}>
				<ServiceSection />
			</Suspense>
			<Suspense fallback={<Loader />}>
				<CallToActionSection />
			</Suspense>
			<Suspense fallback={<Loader />}>
				<TestimonialsSection />
			</Suspense>
		</>
	)
}
