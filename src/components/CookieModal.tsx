import { MouseEventHandler, useCallback } from "react"
import { useCookies } from "react-cookie"
import { useTranslation } from "react-i18next"

export const CookieModal = () => {
	const [cookies, setCookie] = useCookies(["cookie-data"])
	const { t } = useTranslation(undefined, { keyPrefix: "cookie" })

	const handleBtnClick = useCallback<
		MouseEventHandler<HTMLButtonElement>
	>(() => {
		const date = new Date()
		const days = 365
		date.setTime(+date + days * 86400000) //24 * 60 * 60 * 1000

		setCookie("cookie-data", true, {
			domain: window.location.hostname,
			expires: date,
		})
	}, [setCookie])

	if (cookies["cookie-data"]) {
		return
	}

	return (
		<div className="fixed bottom-0 w-full py-4 bg-gray-600 text-white z-30">
			<div className="container flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
				<span>{t("text")}</span>
				<button
					onClick={handleBtnClick}
					className="primary-color-bg rounded px-5 py-1 text-white bg-blue-600 hover:bg-blue-500 transition"
				>
					{t("button-text")}
				</button>
			</div>
		</div>
	)
}
