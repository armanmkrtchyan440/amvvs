import { Variants } from "framer-motion";

export const leftToRightVariant: Variants = {
  initial: { opacity: 0, x: -500, transition: { ease: "easeOut" } },
  isOpen: { opacity: 1, x: 0 },
};

export const rightToLeftVariant: Variants = {
  initial: { opacity: 0, x: 500, transition: { ease: "easeOut" } },
  isOpen: { opacity: 1, x: 0 },
};

export const showVariant: Variants = {
  initial: { opacity: 0, transition: { ease: "easeOut" } },
  isOpen: { opacity: 1 },
};
