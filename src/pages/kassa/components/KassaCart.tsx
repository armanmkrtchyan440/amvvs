import { useCartItems } from "@/stores/useCartItems"
import { calculateRot } from "@/utils/calculateRot"
import { useMemo } from "react"
import { useTranslation } from "react-i18next"
import { KassaItem } from "./KassaItem"

export const KassaCart = () => {
	const { t } = useTranslation(undefined, { keyPrefix: "carts" })

	const { cartItems, rot, toggleRot } = useCartItems()

	const subtotal = useMemo(() => {
		const total = cartItems.reduce(
			(prev, cart) =>
				prev +
				cart.price * cart.quantity +
				cart.bortforsling * cart.bortforslingQuantity,
			0
		)
		return rot ? calculateRot(total) : total
	}, [cartItems, rot])

	if (!cartItems.length) {
		return
	}

	return (
		<div className="mt-4">
			{cartItems.map(cart => (
				<KassaItem key={cart.id} {...cart} />
			))}

			<div className="border-y py-3">
				<label
					htmlFor="one"
					className="flex w-max gap-4 justify-between items-center"
				>
					<input
						id="one"
						type="checkbox"
						checked={rot}
						onChange={() => toggleRot()}
					/>
					<span>{t("rot-deduction")}</span>
				</label>
			</div>
			<table className="w-full max-w-60 my-3">
				<tr>
					<th className="text-left text-lg font-bold">{t("sub-total")}</th>
					<td rowSpan={2} className="text-2xl font-bold text-right">
						{subtotal}kr
					</td>
				</tr>
				<tr>
					<td className="text-left text-sm opacity-50 leading-none">
						{cartItems.length} {t("items")}
					</td>
				</tr>
			</table>
		</div>
	)
}
