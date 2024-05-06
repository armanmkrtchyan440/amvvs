import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { HomePage } from "../pages/home/Home";
import { ServicesPage } from "@/pages/services/Services";
import { ServicePage } from "@/pages/service/Service";

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
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "services/:id",
        element: <ServicePage />,
      },
    ],
  },
]);
