import { CartItemType, useCartItems } from "@/stores/useCartItems"
import { calculateRot } from "@/utils/calculateRot"
import { FC, useMemo } from "react"
import { useTranslation } from "react-i18next"
import { RiDeleteBin7Fill } from "react-icons/ri"

export const CartItem: FC<CartItemType> = ({
	name,
	price,
	quantity,
	uid,
	bortforsling,
	bortforslingQuantity,
}) => {
	const { t } = useTranslation(undefined, { keyPrefix: "carts" })

	const { incrementQuantity, decrementQuantity, deleteCartItem, rot } =
		useCartItems()

	const rotPrice = useMemo(
		() =>
			rot
				? calculateRot(price + bortforsling * bortforslingQuantity)
				: price + bortforsling * bortforslingQuantity,
		[rot, price, bortforsling, bortforslingQuantity]
	)

	const rotTotalPrice = useMemo(() => rotPrice * quantity, [rotPrice, quantity])

	return (
		<tr>
			<td>{name}</td>
			<td>
				{rotPrice}:- {rot && t("after-rot")}
			</td>
			<td>
				<div className="flex justify-center items-center gap-5">
					<button
						className="quantity-button"
						onClick={() => decrementQuantity(uid)}
					>
						-
					</button>
					<span>{quantity}</span>
					<button
						className="quantity-button"
						onClick={() => incrementQuantity(uid)}
					>
						+
					</button>
				</div>
			</td>
			<td>
				{rotTotalPrice}:- {rot && t("after-rot")}
			</td>
			<td>
				<button className="w-10 h-10 flex justify-center items-center mx-auto">
					<RiDeleteBin7Fill onClick={() => deleteCartItem(uid)} />
				</button>
			</td>
		</tr>
	)
}
