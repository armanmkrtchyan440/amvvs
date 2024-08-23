import { HTMLProps, forwardRef } from "react"
import { Link } from "react-router-dom"
import { twMerge } from "tailwind-merge"

interface ILinkButtonProps extends HTMLProps<HTMLAnchorElement> {}

export const LinkButton = forwardRef<HTMLAnchorElement, ILinkButtonProps>(
	({ children, className = "", href, ...props }, ref) => {
		return (
			<Link
				{...props}
				to={href as string}
				className={twMerge(
					"primary-color-bg rounded px-8 py-3 text-white bg-blue-600 hover:bg-blue-500 transition",
					className
				)}
				ref={ref}
			>
				{children}
			</Link>
		)
	}
)
