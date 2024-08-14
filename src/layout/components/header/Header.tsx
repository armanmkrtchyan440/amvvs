import { useCartItems } from "@/stores/useCartItems"
import { useCallback, useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { FaCartShopping } from "react-icons/fa6"
import { Link, NavLink } from "react-router-dom"
import sakervatten from "../img/sakervatten.png"

export const Header = () => {
	const { t } = useTranslation(undefined, { keyPrefix: "header" })
	const { cartItems } = useCartItems()
	const headerRef = useRef<HTMLElement>(null)
	const [isNavOpen, setIsNavOpen] = useState(false)

	const handleScroll = useCallback(() => {
		if (window.scrollY >= 50) {
			headerRef.current?.classList.add("py-2")
		} else {
			headerRef.current?.classList.remove("py-2")
		}
	}, [])

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return (
		<header
			id="top"
			className="fixed top-0 z-30 w-full primary-color-bg primary-color-[50] code-section font-['Poppins'] bg-blue-50 py-10 transition-spacing ease-in-out"
			ref={headerRef}
		>
			<nav className="container relative z-10">
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
						<div>
							<img src={sakervatten} className="w-16" alt="" />
						</div>
						<NavLink to="/" className="nav-link">
							{t("home")}
						</NavLink>
						<NavLink to="/about-us" className="nav-link">
							{t("about-us")}
						</NavLink>
						<NavLink to="/contacts" className="nav-link">
							{t("contact-us")}
						</NavLink>
						<NavLink to="/categories" className="nav-link">
							{t("categories")}
						</NavLink>
						<NavLink to="/services" className="nav-link">
							{t("services")}
						</NavLink>
						<NavLink to="/blog" className="nav-link">
							{t("blog")}
						</NavLink>
						<NavLink to="/feedbacks" className="nav-link">
							{t("feedback")}
						</NavLink>
					</div>
					<div
						id="nav-cta"
						className="hidden items-center space-x-4 text-sm md:flex lg:text-base"
					>
						<div id="nav-cta-button">
							{/* <Button variant="modal" className="text-xs uppercase">
                {t("contact-us")}
              </Button> */}
							<Link to={"/cart"} className="relative">
								<span className="flex justify-center items-center absolute -top-1 -right-1 w-4 h-4 bg-blue-600 rounded-full text-[8px] text-white">
									{cartItems.length}
								</span>
								<FaCartShopping className="text-4xl" />
							</Link>
						</div>
					</div>
					<div
						id="mobile-menu-icon"
						className="flex items-center md:hidden"
						onClick={() => setIsNavOpen(prev => !prev)}
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
						<NavLink to="/" className="nav-link">
							{t("home")}
						</NavLink>
						<NavLink to="/about-us" className="nav-link">
							{t("about-us")}
						</NavLink>
						<NavLink to="/contacts" className="nav-link">
							{t("contact-us")}
						</NavLink>
						<NavLink to="/categories" className="nav-link">
							{t("categories")}
						</NavLink>
						<NavLink to="/services" className="nav-link">
							{t("services")}
						</NavLink>
						<NavLink to="/blog" className="nav-link">
							{t("blog")}
						</NavLink>
						<NavLink to="/feedback" className="nav-link">
							{t("feedback")}
						</NavLink>
					</div>
				</div>
			</nav>
		</header>
	)
}
