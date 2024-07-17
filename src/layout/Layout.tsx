import { Outlet, ScrollRestoration } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

export const Layout = () => {
  return (
    <div>
      <Header />
      <main className="pt-32 primary-color-bg primary-color-[50] bg-blue-50 bg-clip-padding">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};
