import { Outlet, ScrollRestoration } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { useLocation } from "react-router-dom";

export const Layout = () => {
  const location = useLocation();
  console.log(location);

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
