import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import { PageLoader } from "@/components/ui/PageLoader";

const Layout = lazy(() =>
  import("@/layout/Layout").then(({ Layout }) => ({ default: Layout }))
);
const HomePage = lazy(() =>
  import("@/pages/home/Home").then(({ HomePage }) => ({ default: HomePage }))
);
const ServicesPage = lazy(() =>
  import("@/pages/services/Services").then(({ ServicesPage }) => ({
    default: ServicesPage,
  }))
);
const ServicePage = lazy(() =>
  import("@/pages/service/Service").then(({ ServicePage }) => ({
    default: ServicePage,
  }))
);
const FeedbacksPage = lazy(() =>
  import("@/pages/feedbacks/FeedbacksPage").then(({ FeedbacksPage }) => ({
    default: FeedbacksPage,
  }))
);
const AboutUsPage = lazy(() =>
  import("@/pages/about-us/AboutUsPage").then(({ AboutUsPage }) => ({
    default: AboutUsPage,
  }))
);
const CategoriesPage = lazy(() =>
  import("@/pages/categories/CategoriesPage").then(({ CategoriesPage }) => ({
    default: CategoriesPage,
  }))
);
const CartPage = lazy(() =>
  import("@/pages/cart/CartPage").then(({ CartPage }) => ({
    default: CartPage,
  }))
);

const KassaPage = lazy(() =>
  import("@/pages/kassa/Kassa").then(({ Kassa }) => ({
    default: Kassa,
  }))
);

const BlogPage = lazy(() =>
  import("@/pages/blog/BlogPage").then(({ BlogPage }) => ({
    default: BlogPage,
  }))
);

const CareerPage = lazy(() =>
  import("@/pages/career/CareerPage").then(({ CareerPage }) => ({
    default: CareerPage,
  }))
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<PageLoader />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "about-us",
        element: (
          <Suspense fallback={<PageLoader />}>
            <AboutUsPage />
          </Suspense>
        ),
      },
      {
        path: "feedbacks",
        element: (
          <Suspense fallback={<PageLoader />}>
            <FeedbacksPage />
          </Suspense>
        ),
      },
      {
        path: "services",
        element: (
          <Suspense fallback={<PageLoader />}>
            <ServicesPage />
          </Suspense>
        ),
      },
      {
        path: "services/:id",
        element: (
          <Suspense fallback={<PageLoader />}>
            <ServicePage />
          </Suspense>
        ),
      },
      {
        path: "categories",
        element: (
          <Suspense fallback={<PageLoader />}>
            <CategoriesPage />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<PageLoader />}>
            <CartPage />
          </Suspense>
        ),
      },
      {
        path: "kassa",
        element: (
          <Suspense fallback={<PageLoader />}>
            <KassaPage />
          </Suspense>
        ),
      },
      {
        path: "blog",
        element: (
          <Suspense fallback={<PageLoader />}>
            <BlogPage />
          </Suspense>
        ),
      },
      {
        path: "career",
        element: (
          <Suspense fallback={<PageLoader />}>
            <CareerPage />
          </Suspense>
        ),
      },
    ],
  },
]);
