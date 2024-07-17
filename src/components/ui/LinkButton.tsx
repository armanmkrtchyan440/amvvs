import { HTMLProps, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ILinkButtonProps extends HTMLProps<HTMLAnchorElement> {}

export const LinkButton = forwardRef<HTMLAnchorElement, ILinkButtonProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <a
        {...props}
        className={twMerge(
          "primary-color-bg rounded px-8 py-3 text-white bg-blue-600 hover:bg-blue-500",
          className
        )}
        ref={ref}
      >
        {children}
      </a>
    );
  }
);
