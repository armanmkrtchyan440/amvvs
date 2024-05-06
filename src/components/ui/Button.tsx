import { HTMLProps, MouseEventHandler, forwardRef, useState } from "react";
import { ContactUsModal } from "../ContactUsModal";
import { twMerge } from "tailwind-merge";

interface IButtonProps extends HTMLProps<HTMLButtonElement> {
  type?: "reset" | "submit" | "button";
  variant?: "default" | "modal";
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      children,
      onClick = () => {},
      className = "",
      variant = "default",
      ...props
    },
    ref
  ) => {
    const [isModalOpened, setIsModalOpened] = useState(false);

    const handleModalOpen: MouseEventHandler<HTMLButtonElement> = (e) => {
      onClick(e);
      if (variant === "modal") {
        setIsModalOpened(true);
      }
    };

    const handleModalClose = () => {
      setIsModalOpened(false);
    };

    return (
      <>
        <button
          {...props}
          className={twMerge(
            "primary-color-bg rounded px-8 py-3 text-white bg-blue-600 hover:bg-blue-500",
            className
          )}
          ref={ref}
          onClick={handleModalOpen}
        >
          {children}
        </button>
        <ContactUsModal isOpen={isModalOpened} handleClose={handleModalClose} />
      </>
    );
  }
);
