import { Button } from "@/components/ui/Button";
import { businessManImg, heroImg, serviceImg } from "./images/homeImg";
import { useTranslation } from "react-i18next";
import { Variants, motion } from "framer-motion";
import {
  leftToRightVariant,
  rightToLeftVariant,
  showVariant,
} from "@/constants";

export const HomePage = () => {
  const { t } = useTranslation(undefined, { keyPrefix: "home" });

  return (
    <>
      <section
        className="primary-color-bg primary-color-[50] code-section relative font-['Poppins'] bg-blue-50"
        id="btu4i"
      >
        <div className="container relative z-10 mx-auto px-4 sm:px-12 lg:pb-32 xl:px-32">
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
                <div id="hero-action-1">{t("hero.title.line1")}</div>
                <div
                  id="hero-action-2"
                  className="primary-color-text text-blue-600"
                >
                  {t("hero.title.line2")}
                </div>
                <div id="hero-action-3">{t("hero.title.line3")}</div>
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
                <Button variant="modal" className="px-5 text-xs uppercase">
                  {t("quote")}
                </Button>
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
        <div className="container mx-auto px-4 sm:px-12 xl:px-32">
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
        <div className="container mx-auto px-4 pb-20 sm:px-12 lg:pt-32 xl:px-32">
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
                    <Button
                      variant="modal"
                      className="bg-white px-8 py-4 text-sm font-semibold text-blue-600 hover:bg-gray-100"
                    >
                      {t("contact-us")}
                    </Button>
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
      {/* <Portfolio /> */}
      {/* <section
        id="testimonials"
        className="code-section relative bg-white font-['Poppins']"
      >
        <div className="container relative z-10 mx-auto px-4 pb-12 pt-16 sm:px-12 lg:pb-24 xl:px-32">
          <h2
            id="testimonials-header"
            className="mb-6 text-center text-3xl font-bold xl:text-4xl 2xl:text-5xl"
          >
            {t("testimonials.header")}
          </h2>
          <h3
            id="testimonials-subtext"
            className="mx-auto mb-16 w-3/4 text-center font-thin text-gray-700"
          >
            {t("testimonials.subtext")}
          </h3>
          <div className="relative w-full">
            <div className="primary-color-bg primary-color-[100] absolute h-full w-full -rotate-3 transform rounded-3xl bg-blue-100"></div>
            <div className="relative z-10 w-full rounded-3xl bg-white py-24 shadow-[0_0_25px_rgba(0,0,0,0.1)]">
              <div className="absolute -top-12 left-12">
                <i className="primary-color-text primary-color-[100] fa-solid fa-quote-left text-8xl text-blue-100"></i>
              </div>
              <div className="absolute -bottom-12 right-12">
                <i className="primary-color-text primary-color-[100] fa-solid fa-quote-right text-8xl text-blue-100"></i>
              </div>
              <div className="flex flex-col items-center justify-end relative sm:flex-row">
                <div className="w-[50%] sm:w-[25%]">
                  <div className="relative mx-auto aspect-square max-h-[300px]">
                    <div className="primary-color-border absolute left-6 top-6 h-full w-full rounded-br-2xl border-2 border-blue-600"></div>
                    <div className="primary-color-border absolute bottom-6 right-6 h-full w-full rounded-tl-2xl border-2 border-blue-600"></div>
                    <img
                      src={testimonialImg}
                      alt="Hero"
                      className="testimonial-image dont-replace relative mt-8 h-full rounded-2xl object-cover lg:mt-0"
                      data-media='{"id":"p5i7uyPuHto","src":"unsplash","type":"image"}'
                    />
                  </div>
                </div>
                <div className="sm:w-[65%]">
                  <div className="relative flex h-full flex-col justify-center p-12">
                    <div
                      id="testimonial-topic"
                      className="mb-4 text-3xl font-bold"
                    >
                      {t("testimonials.topic")}
                    </div>
                    <div id="testimonial-quote" className="mb-4 text-base">
                      "{t("testimonials.quote")}"
                    </div>
                    <div
                      id="testimonial-name"
                      className="mb-4 text-base font-bold"
                    >
                      {t("testimonials.name")}
                    </div>
                  </div>
                </div>
                <div className="static sm:absolute right-4 bottom-0">
                  <a
                    href="https://www.google.com/maps/place/AM+VVS+och+Bygg+AB/@59.3173583,18.0486904,17z/data=!4m8!3m7!1s0x465f77578d328231:0x829dfa0691113d97!8m2!3d59.3173556!4d18.0512653!9m1!1b1!16s%2Fg%2F11v3yvm7d5?hl=ru&entry=ttu"
                    target="_blank"
                    className="primary-color-bg rounded px-8 py-3 text-white bg-blue-600 hover:bg-blue-500"
                  >
                    {t("testimonials.link")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section
        id="about"
        className="code-section relative bg-white font-['Poppins']"
      >
        <div className="container relative z-10 mx-auto px-4 sm:px-12 lg:pb-12 xl:px-32">
          <div className="relative z-10 flex flex-col items-center lg:flex-row">
            <div className="mt-12 w-full lg:mt-24 lg:w-[55%] lg:pr-14">
              <h1
                id="about-header-text"
                className="mb-8 text-center text-4xl font-bold lg:text-left xl:text-5xl 2xl:text-6xl"
              >
                {t("about.header")}
              </h1>
              <p
                id="about-first-paragraph"
                className="mb-8 text-center text-gray-700 lg:text-left"
              >
                {t("about.paragraph1")}
              </p>
              <div
                id="about-checkmark-list"
                className="mb-8 pl-0 md:pl-8 text-center text-gray-700 lg:text-left"
              >
                <ul>
                  <li className="mb-4 flex flex-row">
                    <i
                      className="fa fa-check mr-4 mt-1 text-green-500"
                      aria-hidden="true"
                    ></i>
                    <span id="about-checkmark-list-item-1">
                      {t("about.list.item1")}
                    </span>
                  </li>
                  <li className="mb-4 flex flex-row">
                    <i
                      className="fa fa-check mr-4 mt-1 text-green-500"
                      aria-hidden="true"
                    ></i>
                    <span id="about-checkmark-list-item-2">
                      {t("about.list.item2")}
                    </span>
                  </li>
                  <li className="mb-4 flex flex-row">
                    <i
                      className="fa fa-check mr-4 mt-1 text-green-500"
                      aria-hidden="true"
                    ></i>
                    <span id="about-checkmark-list-item-3">
                      {t("about.list.item3")}
                    </span>
                  </li>
                </ul>
              </div>
              <p
                id="about-second-paragraph"
                className="mb-12 text-center text-gray-700 lg:text-left"
              >
                {t("about.paragraph2")}
              </p>
            </div>
            <div className="relative mt-12 hidden w-full overflow-visible lg:block lg:w-[45%] lg:p-6">
              <div className="primary-color-border absolute bottom-0 left-0 h-0 w-0 border-[100px] border-transparent border-b-blue-600 border-l-blue-600"></div>
              <div className="absolute -right-9 top-16 h-[145px] w-[190px] bg-[radial-gradient(#cccccc_3px,transparent_3px)] [background-size:16px_16px]"></div>
              <img
                src={aboutUsBigImg}
                alt="Hero"
                className="relative mt-8 aspect-square w-full rounded-2xl object-cover lg:mt-0"
                data-media='{"id":"IxfhMTROke8","src":"unsplash","type":"image"}'
              />
              <div className="absolute bottom-0 right-0 z-10 aspect-square w-[45%] rounded-2xl bg-white p-6">
                <img
                  src={aboutUsSmallImg}
                  alt="Hero"
                  className="relative mt-8 h-full object-cover lg:mt-0"
                  data-media='{"id":"TtN_obfWlGw","src":"unsplash","type":"image"}'
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section id="contact" className="code-section font-['Poppins']">
        <div className="mx-auto px-4 py-20 lg:container sm:px-12 xl:px-32">
          <div className="relative z-10 rounded-3xl bg-white p-6 shadow-[0_0_25px_rgba(0,0,0,0.1)]">
            <div className="flex flex-col lg:flex-row lg:space-x-8">
              <div className="primary-color-bg rounded-3xl p-8 pt-12 text-white bg-blue-600">
                <div className="mb-4 uppercase">Contact Us</div>
                <div className="mb-6 text-4xl font-semibold">
                  <i className="fas fa-comment-dots" aria-hidden="true"></i>
                  Let's talk
                </div>
                <div className="hidden py-4 lg:block">
                  <div className="mb-6 flex flex-row space-x-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white p-6">
                      <i className="fa-duotone fa-location-dot text-3xl"></i>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-2xl font-semibold">Our Location</div>
                      <div id="contact-location" className="">
                        Stockholm, Sweden
                      </div>
                    </div>
                  </div>
                  <div className="mb-6 flex flex-row space-x-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white p-6">
                      <i className="fa-duotone fa-envelope text-3xl"></i>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-2xl font-semibold">
                        Email Address
                      </div>
                      <div id="contact-email" className="">
                        <a
                          href="/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="4f2c20213b2e2c3b0f2e2239393c2e2d612c2022"
                        >
                          [email &#160;protected]
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row space-x-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white p-6">
                      <i className="fa-duotone fa-phone text-3xl"></i>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-2xl font-semibold">Telephone</div>
                      <div id="contact-phone-number" className="">
                        +46 123 456 789
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full p-6">
                <form id="contact-us-form">
                  <div className="flex flex-col space-y-4 md:space-y-12">
                    <div className="flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
                      <div className="w-full">
                        <div>
                          <label
                            htmlFor="first-name"
                            className="font-medium text-gray-700"
                          >
                            First Name
                          </label>
                        </div>
                        <div>
                          <input
                            id="first-name"
                            name="first-name"
                            type="text"
                            className="w-full border border-white border-b-gray-300 p-2"
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <div>
                          <label
                            htmlFor="last-name"
                            className="font-medium text-gray-700"
                          >
                            Last Name
                          </label>
                        </div>
                        <div>
                          <input
                            id="last-name"
                            name="last-name"
                            type="text"
                            className="w-full border border-white border-b-gray-300 p-2"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
                      <div className="w-full">
                        <div>
                          <label
                            htmlFor="email"
                            className="font-medium text-gray-700"
                          >
                            Email Address
                          </label>
                        </div>
                        <div>
                          <input
                            id="email"
                            type="email"
                            name="email"
                            className="w-full border border-white border-b-gray-300 p-2"
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <div>
                          <label
                            htmlFor="phone"
                            className="font-medium text-gray-700"
                          >
                            Phone
                          </label>
                        </div>
                        <div>
                          <input
                            id="phone"
                            type="phone"
                            name="phone"
                            className="w-full border border-white border-b-gray-300 p-2"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <div>
                        <label
                          htmlFor="message"
                          className="font-medium text-gray-700"
                        >
                          Message
                        </label>
                      </div>
                      <div>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="w-full border border-white border-b-gray-300 p-2"
                        ></textarea>
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="primary-color-bg items-center rounded px-8 py-3 text-sm font-semibold uppercase text-white bg-blue-600 hover:bg-blue-500"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};
