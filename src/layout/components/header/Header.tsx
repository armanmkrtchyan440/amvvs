import { Button } from "@/components/ui/Button";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Header = () => {
  const { t } = useTranslation(undefined, { keyPrefix: "header" });

  const headerRef = useRef<HTMLElement>(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY >= 50) {
      headerRef.current?.classList.add("py-2");
    } else {
      headerRef.current?.classList.remove("py-2");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="top"
      className="fixed top-0 z-30 w-full primary-color-bg primary-color-[50] code-section font-['Poppins'] bg-blue-50 py-10 transition-spacing ease-in-out"
      ref={headerRef}
    >
      <nav className="container relative z-10 mx-auto px-4 sm:px-12 xl:px-32">
        <div className="flex items-center justify-between">
          <div className="w-52">
            <Link id="nav-name-text" to="/" className="">
              <img src="/logo-black.png" alt="" />
            </Link>
          </div>
          <div
            id="nav-links"
            className="hidden items-center space-x-8 text-sm md:flex lg:text-base"
          >
            <Link to="/" className="text-gray-800">
              {t("home")}
            </Link>
            <Link to="/services" className="text-gray-800">
              {t("services")}
            </Link>
            <Link to="/#about" className="text-gray-800">
              {t("about-us")}
            </Link>
            {/* <Link to="/#portfolio" className="text-gray-800">
              {t("portfolio")}
            </Link> */}
            <Link to="/#testimonials" className="text-gray-800">
              {t("feedback")}
            </Link>
          </div>
          <div
            id="nav-cta"
            className="hidden items-center space-x-4 text-sm md:flex lg:text-base"
          >
            <div id="nav-cta-button">
              <Button variant="modal" className="text-xs uppercase">
                {t("contact-us")}
              </Button>
            </div>
          </div>
          <div
            id="mobile-menu-icon"
            className="flex items-center md:hidden"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <button
              className="text-gray-800"
              aria-label="Navigation Dropdown Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-menu"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
        <div
          id="nav-links-mobile"
          className={`mt-4 ${!isNavOpen ? "hidden" : ""} md:hidden`}
        >
          <div className="absolute w-full left-0 z-10 flex flex-col space-y-2 bg-white pb-4 text-center text-lg">
            <Link to="/" className="text-gray-800">
              {t("home")}
            </Link>
            <Link to="/services" className="text-gray-800">
              {t("services")}
            </Link>
            <Link to="/#about" className="text-gray-800">
              {t("about-us")}
            </Link>
            {/* <Link to="/#portfolio" className="text-gray-800">
              {t("portfolio")}
            </Link> */}
            <Link to="/#testimonials" className="text-gray-800">
              {t("feedback")}
            </Link>
            <div id="nav-mobile-cta-button" className="flex-col space-y-2 pt-4">
              <div>
                <Button variant="modal" className="text-xs uppercase">
                  {t("contact-us")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
