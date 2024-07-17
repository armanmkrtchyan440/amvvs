import { getServicesNames } from "@/api/api";
import { Loading } from "@/components/ui/Loading";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

export const Footer = () => {
  const { t } = useTranslation(undefined, { keyPrefix: "footer" });
  const { data, isLoading } = useQuery({
    queryKey: ["footer-services", "5"],
    queryFn: getServicesNames,
    refetchOnWindowFocus: false,
  });
  return (
    <footer
      className={`primary-color-bg primary-color-[50] code-section relative overflow-hidden py-16 font-['Poppins'] bg-blue-50`}
      id="o1xja"
    >
      <div id="footer" className="container relative pb-0 pt-36">
        <div className="primary-color-border primary-color-[100] absolute -left-80 -top-14 h-[400px] w-[400px] rounded-full border-[60px] border-blue-100"></div>
        <div className="primary-color-border primary-color-[100] absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full border-[60px] border-blue-100"></div>
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden"></div>
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          <div className="mb-8 flex flex-col space-y-4">
            <a id="footer-brand-name" href="/" className="w-52">
              <img src="/logo-black.png" alt="" />
            </a>
            <div
              id="footer-name-subtext"
              className="text-gray-700 2xl:pr-[30%]"
            >
              {t("name-subtext")}
            </div>
          </div>
          <div id="footer-nav-links" className="mb-8 flex flex-col space-y-4">
            <div className="mb-8 text-2xl font-semibold">Navigation</div>
            <NavLink to="/" className="nav-link">
              {t("nav-links.home")}
            </NavLink>
            <NavLink to="/about-us" className="nav-link">
              {t("nav-links.aboutUs")}
            </NavLink>
            <NavLink to="/categories" className="nav-link">
              {t("nav-links.categories")}
            </NavLink>
            <NavLink to="/services" className="nav-link">
              {t("nav-links.services")}
            </NavLink>
            <NavLink to="/blog" className="nav-link">
              {t("nav-links.blog")}
            </NavLink>
            <NavLink to="/feedbacks" className="nav-link">
              {t("nav-links.feedback")}
            </NavLink>
            <NavLink to="/career" className="nav-link">
              {t("nav-links.career")}
            </NavLink>
          </div>
          <div className="mb-8 flex flex-col space-y-4">
            <div className="mb-8 text-2xl font-semibold">Services</div>
            <div
              id="footer-services"
              className="flex flex-col space-y-4 text-gray-700"
            >
              {isLoading && <Loading />}
              {!isLoading &&
                data?.data.map((service) => (
                  <NavLink
                    to={`/services/${service.attributes.slug}`}
                    className={"nav-link"}
                    key={service.id}
                  >
                    {service.attributes.name}
                  </NavLink>
                ))}
            </div>
          </div>
          <div
            id="footer-contact-info"
            className="mb-8 flex flex-col space-y-4"
          >
            <div className="mb-8 text-2xl font-semibold">{t("contact-us")}</div>
            <div className="flex flex-row">
              <div className="flex h-10 w-10 items-center justify-center rounded-full p-2">
                <i className="primary-color-text fa-regular fa-phone text-xl text-blue-600"></i>
              </div>
              <a
                href="tel:+46728529999"
                id="footer-phone-number"
                className="flex items-center"
              >
                +46 728 529 999
              </a>
            </div>
            <div className="flex flex-row">
              <div className="flex h-10 w-10 items-center justify-center rounded-full p-2">
                <i className="primary-color-text fa-regular fa-envelope text-xl text-blue-600"></i>
              </div>
              <div id="footer-email" className="flex items-center">
                <a href="mailto:info@amvvsbygg.se">info@amvvsbygg.se</a>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex h-10 w-10 items-center justify-center rounded-full p-2">
                <i className="primary-color-text fa-regular fa-location-dot text-xl text-blue-600"></i>
              </div>
              <div id="footer-location" className="flex items-center">
                {t("address")}
              </div>
            </div>
          </div>
        </div>
        <p
          id="footer-copyright"
          className="relative z-10 mt-24 text-center text-lg text-gray-600"
        >
          {t("copyright")}
        </p>
      </div>
    </footer>
  );
};
