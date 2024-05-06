import { Outlet, ScrollRestoration } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

export const Layout = () => {
  return (
    <div>
      <Header />
      <main className="pt-32">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};
