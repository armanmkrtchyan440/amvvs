import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCartItems } from "@/stores/useCartItems";
import {
  MouseEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa6";
import { RiShoppingBag3Fill } from "react-icons/ri";
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import sakervatten from "../img/sakervatten.png";

export const Header = () => {
  const { t, i18n } = useTranslation(undefined, { keyPrefix: "header" });
  const { cartItems } = useCartItems();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { lang } = useParams();
  const headerRef = useRef<HTMLElement>(null);

  const cartCount = useMemo(
    () => cartItems.reduce((prev, next) => prev + next.quantity, 0),
    [cartItems],
  );

  const handleChangeLanguage = useCallback(
    (lang: string) => {
      const pathArr = location.pathname.split("/");
      pathArr[1] = lang;
      navigate(pathArr.join("/") + location.search, { replace: true });
    },
    [location, navigate],
  );

  const handleNavOpen = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (e) => {
      e.stopPropagation();
      setIsNavOpen((prev) => !prev);
    },
    [],
  );

  useEffect(() => {
    setIsNavOpen(false);
  }, [location]);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [i18n, lang, navigate]);

  return (
    <header
      id="top"
      className="fixed top-0 z-30 w-full primary-color-bg primary-color-[50] code-section font-['Poppins'] bg-blue-50 transition-spacing ease-in-out"
      ref={headerRef}
    >
      <div className="bg-white">
        <div className="container flex justify-between items-center py-2">
          <div className="flex items-center gap-2">
            <a
              href="https://www.facebook.com/profile.php?id=61556048230860"
              target="_blank"
              className="flex flex-row items-center gap-2"
              aria-label="AM VVS STOCKHOLM"
            >
              <div className="flex items-center justify-center rounded-full p-2">
                <FaFacebookF size={16} color="#2563eb" />
              </div>
              <p className="text-sm items-center hidden md:flex">
                AM VVS STOCKHOLM
              </p>
            </a>
            <a
              href="https://www.instagram.com/am_vvs_stochkolm"
              target="_blank"
              className="flex flex-row items-center gap-2"
              aria-label={"am_vvs_stochkolm"}
            >
              <div className="flex items-center justify-center rounded-full p-2">
                <FaInstagram size={16} color="#2563eb" />
              </div>
              <p className="text-sm items-center hidden md:flex">
                am_vvs_stochkolm
              </p>
            </a>
            <a
              href="mailto:info@amvvsbygg.se"
              className="flex flex-row items-center"
              aria-label={"info@amvvsbygg.se"}
            >
              <div className="flex items-center justify-center rounded-full p-2">
                {/* <i className="primary-color-text fa-regular fa-envelope text-sm text-blue-600"></i> */}
                <FaEnvelope size={16} color="#2563eb" />
              </div>
              <div
                id="footer-email"
                className="items-center text-sm hidden md:flex"
              >
                <p>info@amvvsbygg.se</p>
              </div>
            </a>
          </div>
          <div className="flex gap-4">
            <a
              href="tel:+46859115333"
              className="flex flex-row items-center"
              aria-label="08-591 153 33"
            >
              <div className="flex items-center justify-center rounded-full p-2">
                {/* <i className="primary-color-text fa-regular fa-phone text-sm text-blue-600"></i> */}
                <FaPhone size={16} color="#2563eb" />
              </div>
              <p id="footer-phone-number" className="text-sm flex items-center">
                08-591 153 33
              </p>
            </a>
          </div>
        </div>
      </div>
      <nav className="container relative z-10 py-2">
        <div className="flex items-center justify-between">
          <div className="w-40">
            <Link
              to={`/${lang}`}
              className="w-full"
              aria-label={window.location.hostname}
            >
              <img
                loading="lazy"
                src="/FinalLogo.png"
                // className='w-16'
                alt="AM VVS OCH BYGG ABB"
                width={190}
                height={90.06}
              />
            </Link>
          </div>
          <div className="hidden items-center space-x-8 text-sm lg:flex lg:text-base">
            <a
              href="https://sakervatten.se/company/1233072/am-vvs-och-bygg-STOCKHOLM/"
              target="_blank"
            >
              <img
                loading="lazy"
                src={sakervatten}
                className="w-16"
                alt="Sakervatten"
              />
            </a>
            <NavLink end to={`/${lang}`} className="nav-link" hrefLang={lang}>
              {t("home")}
            </NavLink>
            <NavLink to={`/${lang}/about-us`} className="nav-link">
              {t("about-us")}
            </NavLink>
            <NavLink to={`/${lang}/quote`} className="nav-link">
              {t("quote")}
            </NavLink>
            <NavLink to={`/${lang}/categories`} className="nav-link">
              {t("categories")}
            </NavLink>
            <NavLink to={`/${lang}/services`} className="nav-link">
              {t("services")}
            </NavLink>
            {/* <NavLink to={`/${lang}/blog`} className="nav-link">
							{t("blog")}
						</NavLink> */}
            <NavLink to={`/${lang}/feedbacks`} className="nav-link">
              {t("feedback")}
            </NavLink>
            <NavLink to={`/${lang}/career`} className="nav-link">
              {t("career")}
            </NavLink>
            <Select onValueChange={handleChangeLanguage} value={lang}>
              <SelectTrigger className="w-8 h-min p-0 bg-transparent">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent className="min-w-0" aria-label="Language">
                <SelectItem value="en" className="w-16">
                  <img
                    loading="lazy"
                    src="/great-britain-flag.webp"
                    alt="Great Britain Dlag"
                  />
                </SelectItem>
                <SelectItem value="sv" className="w-16">
                  <img
                    loading="lazy"
                    src="/sweden-flag.webp"
                    alt="Swedan Flag"
                  />
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div
            id="nav-cta"
            className="hidden items-center space-x-4 text-sm lg:flex lg:text-base"
          >
            <div id="nav-cta-button">
              {/* <Button variant="modal" className="text-xs uppercase">
                {t("contact-us")}
              </Button> */}
              <Link to={`/${lang}/cart`} className="relative">
                <span className="flex justify-center items-center absolute -top-1 -right-1 w-4 h-4 bg-blue-600 rounded-full text-[10px] text-white">
                  {cartCount}
                </span>
                <RiShoppingBag3Fill className="text-3xl" />
              </Link>
            </div>
          </div>
          <div
            id="mobile-menu-icon"
            className="flex items-center gap-5 lg:hidden"
          >
            <Select onValueChange={handleChangeLanguage} value={lang}>
              <SelectTrigger className="w-8 h-min p-0 bg-transparent">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent className="min-w-0">
                <SelectItem value="en" className="w-16">
                  <img
                    loading="lazy"
                    src="/great-britain-flag.webp"
                    alt="Great Britain Flag"
                  />
                </SelectItem>
                <SelectItem value="sv" className="w-16">
                  <img
                    loading="lazy"
                    src="/sweden-flag.webp"
                    alt="Swedan Flag"
                  />
                </SelectItem>
              </SelectContent>
            </Select>
            <div id="nav-cta" className="flex items-center space-x-4 text-sm">
              <div id="nav-cta-button">
                {/* <Button variant="modal" className="text-xs uppercase">
                {t("contact-us")}
              </Button> */}
                <Link to={`/${lang}/cart`} className="relative">
                  <span className="flex justify-center items-center absolute -top-1 -right-1 w-4 h-4 bg-blue-600 rounded-full text-[10px] text-white">
                    {cartCount}
                  </span>
                  <RiShoppingBag3Fill className="text-3xl" />
                </Link>
              </div>
            </div>
            <button
              className="text-gray-800"
              aria-label="Navigation Dropdown Menu"
              onClick={handleNavOpen}
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
          className={`mt-4 ${!isNavOpen ? "hidden" : ""} lg:hidden`}
        >
          <div className="absolute w-full left-0 z-10 flex flex-col space-y-2 bg-white pb-4 text-center text-lg">
            <NavLink end to={`/${lang}/`} className="nav-link">
              {t("home")}
            </NavLink>
            <NavLink to={`/${lang}/about-us`} className="nav-link">
              {t("about-us")}
            </NavLink>
            <NavLink to={`/${lang}/quote`} className="nav-link">
              {t("quote")}
            </NavLink>
            <NavLink to={`/${lang}/categories`} className="nav-link">
              {t("categories")}
            </NavLink>
            <NavLink to={`/${lang}/services`} className="nav-link">
              {t("services")}
            </NavLink>
            {/* <NavLink to={`/${lang}/blog`} className="nav-link">
							{t("blog")}
						</NavLink> */}
            <NavLink to={`/${lang}/feedbacks`} className="nav-link">
              {t("feedback")}
            </NavLink>
            <NavLink to={`/${lang}/career`} className="nav-link">
              {t("career")}
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};
