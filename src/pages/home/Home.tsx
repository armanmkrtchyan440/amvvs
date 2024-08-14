import { businessManImg, heroImg, serviceImg } from "./images/homeImg";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  leftToRightVariant,
  rightToLeftVariant,
  showVariant,
} from "@/constants";
import { LinkButton } from "@/components/ui/LinkButton";

export const HomePage = () => {
  const { t } = useTranslation(undefined, { keyPrefix: "home" });

  return (
    <>
      <section
        className="primary-color-bg primary-color-[50] code-section relative font-['Poppins'] bg-blue-50"
        id="btu4i"
      >
        <div className="container relative z-10  lg:pb-32">
          <div className="relative z-10 flex flex-col items-center lg:flex-row">
            <div className="mt-12 w-full lg:mt-24 lg:w-[55%] lg:pr-14">
              <motion.h1
                initial={"initial"}
                whileInView={"isOpen"}
                viewport={{ once: true }}
                variants={leftToRightVariant}
                id="hero-text"
                className="mb-8 text-center text-4xl font-bold lg:text-left xl:text-5xl 2xl:text-6xl"
              >
                {/* <div id="hero-action-1">{t("hero.title.line1")}</div> */}
                <div
                  id="hero-action-2"
                  className="primary-color-text text-blue-600"
                >
                  {t("hero.title.line2")}
                </div>
                {/* <div id="hero-action-3">{t("hero.title.line3")}</div> */}
              </motion.h1>
              <motion.p
                initial={"initial"}
                whileInView={"isOpen"}
                viewport={{ once: true }}
                variants={leftToRightVariant}
                id="hero-subtext"
                className="mb-8 text-center text-gray-700 lg:text-left"
              >
                {t("hero.description")}
              </motion.p>
              <motion.div
                initial={"initial"}
                whileInView={"isOpen"}
                viewport={{ once: true }}
                variants={leftToRightVariant}
                id="hero-cta-button"
                className="mb-12 text-center lg:text-left"
              >
                <LinkButton href="/services" className="px-5 text-xs uppercase">
                  {t("quote")}
                </LinkButton>
              </motion.div>
            </div>
            <motion.div
              initial={"initial"}
              whileInView={"isOpen"}
              viewport={{ once: true }}
              variants={rightToLeftVariant}
              className="relative mt-12 hidden w-full overflow-visible lg:block lg:w-[45%] lg:p-6"
            >
              <div className="primary-color-border absolute bottom-0 left-0 h-0 w-0 border-[100px] border-transparent border-b-blue-600 border-l-blue-600"></div>
              <div className="absolute -right-9 top-16 h-[145px] w-[190px] bg-[radial-gradient(#cccccc_3px,transparent_3px)] [background-size:16px_16px]"></div>
              <img
                src={heroImg}
                alt="Hero"
                className="seo-image relative mt-8 aspect-square w-full rounded-2xl object-cover lg:mt-0"
                data-media='{"id":"4CNNH2KEjhc","src":"unsplash","type":"image"}'
              />
            </motion.div>
          </div>
        </div>
        <div className="primary-color-border primary-color-[100] absolute -left-56 -top-24 h-[400px] w-[400px] rounded-full border-[60px] border-blue-100"></div>
        <div className="absolute bottom-0 top-0 hidden h-full w-full overflow-hidden lg:block">
          <div className="primary-color-border primary-color-[100] absolute -right-60 bottom-14 h-[400px] w-[400px] rounded-full border-[60px] border-blue-100"></div>
        </div>
      </section>
      <section
        id="services"
        className="code-section bg-white py-20 font-['Poppins']"
      >
        <div className="container">
          <motion.h2
            initial={"initial"}
            whileInView={"isOpen"}
            viewport={{ once: true }}
            variants={leftToRightVariant}
            id="services-header"
            className="mb-8 text-center text-3xl font-bold xl:text-4xl 2xl:text-5xl"
          >
            {t("services.title")}
          </motion.h2>
          <motion.h3
            initial={"initial"}
            whileInView={"isOpen"}
            viewport={{ once: true }}
            variants={rightToLeftVariant}
            id="services-subtext"
            className="mx-auto mb-12 w-3/4 text-center font-thin text-gray-700"
          >
            {t("services.description")}
          </motion.h3>
          <div className="flex flex-row">
            <div className="hidden w-[30%] xl:block">
              <img
                src={serviceImg}
                alt="Hero"
                className="relative mt-8 h-full rounded-2xl object-cover lg:mt-0"
                data-media='{"id":"C-oYJoIfgCs","src":"unsplash","type":"image"}'
              />
            </div>
            <div className="grid w-full grid-cols-1 gap-y-12 md:grid-cols-3 xl:w-[70%]">
              <motion.div
                initial={"initial"}
                whileInView={"isOpen"}
                viewport={{ once: true }}
                variants={showVariant}
                transition={{ ease: "easeOut", duration: 2 }}
                id="service-1"
                className="flex-1 bg-white px-8 text-center md:max-w-xs"
              >
                <div
                  id="service-1-icon"
                  className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-100 text-4xl text-blue-500"
                >
                  <i className="fa-duotone fa-wrench"></i>
                </div>
                <h4
                  id="service-1-header"
                  className="mb-4 text-2xl font-semibold"
                >
                  {t("services.service1.title")}
                </h4>
                <p id="service-1-text" className="text-gray-700">
                  {t("services.service1.description")}
                </p>
              </motion.div>
              <motion.div
                initial={"initial"}
                whileInView={"isOpen"}
                viewport={{ once: true }}
                variants={showVariant}
                transition={{ ease: "easeOut", duration: 2.2 }}
                id="service-2"
                className="flex-1 bg-white px-8 text-center md:max-w-xs"
              >
                <div
                  id="service-2-icon"
                  className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-orange-100 text-4xl text-orange-500"
                >
                  <i className="fa-duotone fa-water"></i>
                </div>
                <h4
                  id="service-2-header"
                  className="mb-4 text-2xl font-semibold"
                >
                  {t("services.service2.title")}
                </h4>
                <p id="service-2-text" className="text-gray-700">
                  {t("services.service2.description")}
                </p>
              </motion.div>
              <motion.div
                initial={"initial"}
                whileInView={"isOpen"}
                viewport={{ once: true }}
                variants={showVariant}
                transition={{ ease: "easeOut", duration: 2.4 }}
                id="service-3"
                className="flex-1 bg-white px-8 text-center md:max-w-xs"
              >
                <div
                  id="service-3-icon"
                  className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-rose-100 text-4xl text-rose-500"
                >
                  <i className="fa-duotone fa-sink"></i>
                </div>
                <h4
                  id="service-3-header"
                  className="mb-2 text-2xl font-semibold"
                >
                  {t("services.service3.title")}
                </h4>
                <p id="service-3-text" className="text-gray-700">
                  {t("services.service3.description")}
                </p>
              </motion.div>
              <motion.div
                initial={"initial"}
                whileInView={"isOpen"}
                viewport={{ once: true }}
                variants={showVariant}
                transition={{ ease: "easeOut", duration: 2.6 }}
                id="service-4"
                className="flex-1 bg-white px-8 text-center md:max-w-xs"
              >
                <div
                  id="service-4-icon"
                  className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-teal-100 text-4xl text-teal-500"
                >
                  <i className="fa-duotone fa-pipe"></i>
                </div>
                <h4
                  id="service-4-header"
                  className="mb-2 text-2xl font-semibold"
                >
                  {t("services.service4.title")}
                </h4>
                <p id="service-4-text" className="break-words text-gray-700">
                  {t("services.service4.description")}
                </p>
              </motion.div>
              <motion.div
                initial={"initial"}
                whileInView={"isOpen"}
                viewport={{ once: true }}
                variants={showVariant}
                transition={{ ease: "easeOut", duration: 2.8 }}
                id="service-5"
                className="flex-1 bg-white px-8 text-center md:max-w-xs"
              >
                <div
                  id="service-5-icon"
                  className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-stone-100 text-4xl text-stone-500"
                >
                  <i className="fa-duotone fa-shower"></i>
                </div>
                <h4
                  id="service-5-header"
                  className="mb-2 text-2xl font-semibold"
                >
                  {t("services.service5.title")}
                </h4>
                <p id="service-5-text" className="text-gray-700">
                  {t("services.service5.description")}
                </p>
              </motion.div>
              <motion.div
                initial={"initial"}
                whileInView={"isOpen"}
                viewport={{ once: true }}
                variants={showVariant}
                transition={{ ease: "easeOut", duration: 3 }}
                id="service-6"
                className="flex-1 bg-white px-8 text-center md:max-w-xs"
              >
                <div
                  id="service-6-icon"
                  className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-violet-100 text-4xl text-violet-500"
                >
                  <i className="fa-duotone fa-tools"></i>
                </div>
                <h4
                  id="service-6-header"
                  className="mb-2 text-2xl font-semibold"
                >
                  {t("services.service6.title")}
                </h4>
                <p id="service-6-text" className="text-gray-700">
                  {t("services.service6.description")}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section className="code-section font-['Poppins']" id="tkoswo">
        <div className="container pb-20 lg:pt-32">
          <div id="call-to-action" className="">
            <div className="primary-color-bg relative flex flex-1 items-center justify-center rounded-3xl md:h-[535px] bg-blue-600">
              <div className="flex h-full w-full flex-row">
                <div className="relative flex w-full flex-col overflow-hidden rounded-3xl py-24 pl-12 pr-12 text-white md:w-1/2 lg:pl-36">
                  <div className="primary-color-border primary-color-[-100] absolute -left-16 -top-16 h-[300px] w-[300px] rounded-full border-[50px] border-blue-500"></div>
                  <div className="relative z-10 text-center md:text-left">
                    <div id="call-to-action-subheader" className="mb-4 text-sm">
                      {t("call-to-action.subheader")}
                    </div>
                    <div
                      id="call-to-action-header"
                      className="mb-4 text-3xl font-bold lg:text-4xl xl:text-5xl"
                    >
                      {t("call-to-action.header")}
                    </div>
                    <div
                      id="call-to-action-subtext"
                      className="mb-12 text-base"
                    >
                      {t("call-to-action.subtext")}
                    </div>
                    {/* <a
                      id="call-to-action-button"
                      href="/#contact"
                      className="primary-color-text items-center rounded bg-white px-8 py-4 text-sm font-semibold hover:bg-gray-100 text-blue-600"
                    >
                      <span id="call-to-action-button-text">Contact Us</span>
                    </a> */}
                    <LinkButton
                      href="/services"
                      className="bg-white px-8 py-4 text-sm font-semibold text-blue-600 hover:bg-gray-100"
                    >
                      {t("quote")}
                    </LinkButton>
                  </div>
                </div>
                <div className="relative hidden md:block md:w-1/2">
                  <div className="absolute bottom-0 lg:h-[110%] xl:left-12 xl:h-[125%]">
                    <div className="absolute right-0 top-48 h-[145px] w-[150px] bg-[radial-gradient(#cccccc,transparent_3px)] [background-size:16px_16px] 2xl:-right-9 2xl:w-[190px]"></div>
                    <img
                      className="dont-replace relative z-20 h-full"
                      src={businessManImg}
                      alt="Business Owner"
                    />
                  </div>
                  <div className="absolute h-full w-full overflow-hidden rounded-3xl">
                    <div className="primary-color-border primary-color-[-100] absolute -bottom-16 -right-16 h-[300px] w-[300px] rounded-full border-[50px] border-blue-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
