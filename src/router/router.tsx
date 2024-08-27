import { PageLoader } from "@/components/ui/PageLoader"
import { ErrorPage } from "@/pages/ErrorPage"
import { NotFoundPage } from "@/pages/NotFoundPage"
import { lazy, Suspense } from "react"
import { createBrowserRouter, Navigate } from "react-router-dom"

const Layout = lazy(() =>
	import("@/layout/Layout").then(({ Layout }) => ({ default: Layout }))
)
const HomePage = lazy(() =>
	import("@/pages/home/Home").then(({ HomePage }) => ({ default: HomePage }))
)
const ServicesPage = lazy(() =>
	import("@/pages/services/Services").then(({ ServicesPage }) => ({
		default: ServicesPage,
	}))
)
const ServicePage = lazy(() =>
	import("@/pages/service/Service").then(({ ServicePage }) => ({
		default: ServicePage,
	}))
)
const FeedbacksPage = lazy(() =>
	import("@/pages/feedbacks/FeedbacksPage").then(({ FeedbacksPage }) => ({
		default: FeedbacksPage,
	}))
)
const AboutUsPage = lazy(() =>
	import("@/pages/about-us/AboutUsPage").then(({ AboutUsPage }) => ({
		default: AboutUsPage,
	}))
)
const CategoriesPage = lazy(() =>
	import("@/pages/categories/CategoriesPage").then(({ CategoriesPage }) => ({
		default: CategoriesPage,
	}))
)
const CartPage = lazy(() =>
	import("@/pages/cart/CartPage").then(({ CartPage }) => ({
		default: CartPage,
	}))
)

const KassaPage = lazy(() =>
	import("@/pages/kassa/Kassa").then(({ Kassa }) => ({
		default: Kassa,
	}))
)

// const BlogPage = lazy(() =>
// 	import("@/pages/blog/BlogPage").then(({ BlogPage }) => ({
// 		default: BlogPage,
// 	}))
// )

const CareerPage = lazy(() =>
	import("@/pages/career/CareerPage").then(({ CareerPage }) => ({
		default: CareerPage,
	}))
)

const QuotePage = lazy(() =>
	import("@/pages/quote/QuotePage").then(({ QuotePage }) => ({
		default: QuotePage,
	}))
)

export const router = createBrowserRouter([
	{
		path: "/:lang",
		element: (
			<Suspense fallback={<PageLoader />}>
				<Layout />
			</Suspense>
		),
		errorElement: <ErrorPage />,
		children: [
			{
				path: "",
				element: (
					<Suspense fallback={<PageLoader />}>
						<HomePage />
					</Suspense>
				),
				errorElement: <ErrorPage />,
			},
			{
				path: "about-us",
				element: (
					<Suspense fallback={<PageLoader />}>
						<AboutUsPage />
					</Suspense>
				),
				errorElement: <ErrorPage />,
			},
			{
				path: "feedbacks",
				element: (
					<Suspense fallback={<PageLoader />}>
						<FeedbacksPage />
					</Suspense>
				),
				errorElement: <ErrorPage />,
			},
			{
				path: "services",
				element: (
					<Suspense fallback={<PageLoader />}>
						<ServicesPage />
					</Suspense>
				),
				errorElement: <ErrorPage />,
			},
			{
				path: "services/:id",
				element: (
					<Suspense fallback={<PageLoader />}>
						<ServicePage />
					</Suspense>
				),
				errorElement: <ErrorPage />,
			},
			{
				path: "categories",
				element: (
					<Suspense fallback={<PageLoader />}>
						<CategoriesPage />
					</Suspense>
				),
				errorElement: <ErrorPage />,
			},
			{
				path: "cart",
				element: (
					<Suspense fallback={<PageLoader />}>
						<CartPage />
					</Suspense>
				),
				errorElement: <ErrorPage />,
			},
			{
				path: "kassa",
				element: (
					<Suspense fallback={<PageLoader />}>
						<KassaPage />
					</Suspense>
				),
				errorElement: <ErrorPage />,
			},
			// {
			// 	path: "blog",
			// 	element: (
			// 		<Suspense fallback={<PageLoader />}>
			// 			<BlogPage />
			// 		</Suspense>
			// 	),
			// 	errorElement: <ErrorPage />,
			// },
			{
				path: "career",
				element: (
					<Suspense fallback={<PageLoader />}>
						<CareerPage />
					</Suspense>
				),
				errorElement: <ErrorPage />,
			},
			{
				path: "quote",
				element: (
					<Suspense fallback={<PageLoader />}>
						<QuotePage />
					</Suspense>
				),
				errorElement: <ErrorPage />,
			},
			{
				path: "*",
				element: <NotFoundPage />,
			},
		],
	},
	{
		path: "*",
		element: <Navigate to={"/sv"} />,
	},
])
