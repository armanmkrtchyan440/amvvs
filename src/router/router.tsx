import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { HomePage } from "../pages/home/Home";
import { ServicesPage } from "@/pages/services/Services";
import { ServicePage } from "@/pages/service/Service";
import { FeedbacksPage } from "@/pages/feedbacks/FeedbacksPage";
import { AboutUsPage } from "@/pages/about-us/AboutUsPage";
import { CategoriesPage } from "@/pages/categories/CategoriesPage";
import { CartPage } from "@/pages/cart/CartPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "about-us",
        element: <AboutUsPage />,
      },
      {
        path: "feedbacks",
        element: <FeedbacksPage />,
      },
      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "services/:id",
        element: <ServicePage />,
      },
      {
        path: "categories",
        element: <CategoriesPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
]);
