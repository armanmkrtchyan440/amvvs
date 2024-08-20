import { CartItemType, useCartItems } from "@/stores/useCartItems"
import { calculateRot } from "@/utils/calculateRot"
import { FC, useMemo } from "react"
import { useTranslation } from "react-i18next"

export const MobileCartItem: FC<CartItemType> = ({
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
		<div className="border-t">
			<div className="flex justify-between items-center py-4">
				<div>
					<h3>{name}</h3>
					<span>
						{rotTotalPrice}:- {rot && t("after-rot")}
					</span>
				</div>
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
			</div>
		</div>
	)
}
