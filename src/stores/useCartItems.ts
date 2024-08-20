import { IService } from "@/api/api"
import { t } from "i18next"
import { toast } from "react-toastify"
import { create } from "zustand"
import { devtools } from "zustand/middleware"

export type CartItemType = {
	id: number
	uid: number
	quantity: number
	bortforslingQuantity: number
} & IService

export type AddCartItemType = Omit<CartItemType, "id" | "quantity" | "uid">

export type CartItemsFunctions = {
	addCartItem: (id: number, cartItem: AddCartItemType) => void
	incrementQuantity: (id: number) => void
	decrementQuantity: (id: number) => void
	incrementBortforslingQuantity: (id: number) => void
	decrementBortforslingQuantity: (id: number) => void
	deleteCartItem: (id: number) => void
}

export type RotFunctions = {
	toggleRot: () => void
}

const cartItems: CartItemType[] =
	JSON.parse(localStorage.getItem("cartItems") as string) || []

export const useCartItems = create<
	{ cartItems: CartItemType[]; rot: boolean } & CartItemsFunctions &
		RotFunctions
>()(
	devtools((set, get) => ({
		cartItems,
		rot: true,

		toggleRot() {
			set(state => ({ rot: !state.rot }))
		},

		addCartItem(id, cartItem) {
			toast.clearWaitingQueue()

			toast(t("carts.add", { name: cartItem.name }))

			set(
				{
					cartItems: [
						...get().cartItems,
						{ id, ...cartItem, uid: Date.now(), quantity: 1 },
					],
				},
				false,
				"addCartItem"
			)

			localStorage.setItem("cartItems", JSON.stringify(get().cartItems))
		},

		incrementQuantity(id) {
			const cart = get().cartItems.find(cart => cart.uid === id)

			if (!cart) {
				return
			}

			toast.clearWaitingQueue()
			toast(t("carts.increase", { name: cart.name }))

			cart.quantity++
			set({ cartItems: [...get().cartItems] }, false, "incrementQuantity")
			localStorage.setItem("cartItems", JSON.stringify(get().cartItems))
		},

		decrementQuantity(id) {
			const cart = get().cartItems.find(cart => cart.uid === id)

			if (!cart) {
				return
			}

			if (cart.quantity <= 1) {
				console.log(cart)

				get().deleteCartItem(cart.uid)
				return
			}

			cart.quantity--

			toast(t("carts.decrease", { name: cart.name }))

			set({ cartItems: [...get().cartItems] }, false, "decrementQuantity")
			localStorage.setItem("cartItems", JSON.stringify(get().cartItems))
		},

		incrementBortforslingQuantity(id) {
			const cart = get().cartItems.find(cart => cart.uid === id)

			if (!cart) {
				return
			}

			toast.clearWaitingQueue()
			toast(t("carts.increase", { name: cart.name }))

			cart.bortforslingQuantity++
			set({ cartItems: [...get().cartItems] }, false, "incrementQuantity")
			localStorage.setItem("cartItems", JSON.stringify(get().cartItems))
		},

		decrementBortforslingQuantity(id) {
			const cart = get().cartItems.find(cart => cart.uid === id)

			if (!cart) {
				return
			}

			if (cart.quantity <= 0) {
				return
			}

			cart.bortforslingQuantity--

			toast(t("carts.decrease", { name: cart.name }))

			set({ cartItems: [...get().cartItems] }, false, "decrementQuantity")
			localStorage.setItem("cartItems", JSON.stringify(get().cartItems))
		},

		deleteCartItem(id) {
			set(state => ({
				cartItems: state.cartItems.filter(cart => cart.uid !== id),
			}))

			localStorage.setItem("cartItems", JSON.stringify(get().cartItems))
		},
	}))
)
