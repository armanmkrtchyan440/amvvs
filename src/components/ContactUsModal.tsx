import { FC, useCallback, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { ContactForm } from "./ContactForm";

interface IContactUs {
  isOpen?: boolean;
  handleClose: () => void;
}

export const ContactUsModal: FC<IContactUs> = ({
  isOpen = false,
  handleClose,
}) => {
  const handleModalClose = useCallback(() => {
    document.body.classList.remove("modal-opened");
    handleClose();
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return document.body.classList.remove("modal-opened");
    }

    document.body.classList.add("modal-opened");
  }, [isOpen]);

  const modalVariants = useMemo<Variants>(
    () => ({
      initial: { opacity: 0 },
      isOpen: { opacity: 1 },
      exit: { opacity: 0 },
    }),
    []
  );

  const containerVariant = useMemo<Variants>(
    () => ({
      initial: { top: "-50%", transition: { type: "spring" } },
      isOpen: { top: "50%" },
      exit: { top: "-50%" },
    }),
    []
  );

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div
          className="relative z-50"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            initial={"initial"}
            animate={"isOpen"}
            exit={"exit"}
            variants={modalVariants}
            onClick={handleModalClose}
          ></motion.div>
          <motion.div
            id="contact"
            initial={"initial"}
            animate={"isOpen"}
            exit={"exit"}
            className="w-full lg:w-auto p-6 fixed z-10 overflow-y-auto code-section font-['Poppins'] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            variants={containerVariant}
          >
            <div className="lg:container">
              <div className="relative z-10 rounded-3xl bg-white p-6 shadow-[0_0_25px_rgba(0,0,0,0.1)] max-h-screen overflow-auto scrollbar-none">
                <button
                  className="absolute top-3 right-3 z-20 text-[30px] text-gray-700"
                  onClick={handleModalClose}
                >
                  &#10005;
                </button>
                <div className="flex flex-col lg:flex-row lg:space-x-8">
                  {/* <div className="primary-color-bg rounded-3xl p-4 lg:p-8 lg:pt-12 text-white bg-blue-600">
                <div className="mb-4 uppercase">Contact Us</div>
                <div className=" text-4xl font-semibold">
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
              </div> */}
                  <div className="w-full p-6">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.getElementById("modal") as Element
  );
};
