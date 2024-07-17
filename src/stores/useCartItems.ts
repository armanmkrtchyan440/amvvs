import { IService } from "@/api/api";
import { t } from "i18next";
import { toast } from "react-toastify";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type CartItemType = {
  id: number;
  quantity: number;
} & IService;

export type CartItemsFunctions = {
  addCartItem: (id: number, cartItem: IService) => void;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
  deleteCartItem: (id: number) => void;
};

export type RotFunctions = {
  toggleRot: () => void;
};

const cartItems: CartItemType[] =
  JSON.parse(localStorage.getItem("cartItems") as string) || [];

export const useCartItems = create<
  { cartItems: CartItemType[]; rot: boolean } & CartItemsFunctions &
    RotFunctions
>()(
  devtools((set, get) => ({
    cartItems,
    rot: true,

    toggleRot() {
      set((state) => ({ rot: !state.rot }));
    },

    addCartItem(id, cartItem) {
      const cart = get().cartItems.find((cart) => cart.id === id);

      toast.clearWaitingQueue();

      if (cart) {
        cart.quantity++;
        toast(t("carts.increase", { name: cart.name }));
        localStorage.setItem("cartItems", JSON.stringify(get().cartItems));
        return set({ cartItems: [...get().cartItems] }, false, "addCartItem");
      }

      toast(t("carts.add", { name: cartItem.name }));

      set(
        {
          cartItems: [...get().cartItems, { id, ...cartItem, quantity: 1 }],
        },
        false,
        "addCartItem"
      );

      localStorage.setItem("cartItems", JSON.stringify(get().cartItems));
    },

    incrementQuantity(id) {
      const cart = get().cartItems.find((cart) => cart.id === id);

      if (!cart) {
        return;
      }

      toast.clearWaitingQueue();
      toast(t("carts.increase", { name: cart.name }));

      cart.quantity++;
      set({ cartItems: [...get().cartItems] }, false, "incrementQuantity");
      localStorage.setItem("cartItems", JSON.stringify(get().cartItems));
    },

    decrementQuantity(id) {
      const cart = get().cartItems.find((cart) => cart.id === id);

      if (!cart) {
        return;
      }

      if (cart.quantity <= 1) {
        console.log(cart);

        get().deleteCartItem(cart.id);
        return;
      }

      cart.quantity--;

      toast(t("carts.decrease", { name: cart.name }));

      set({ cartItems: [...get().cartItems] }, false, "decrementQuantity");
      localStorage.setItem("cartItems", JSON.stringify(get().cartItems));
    },

    deleteCartItem(id) {
      set((state) => ({
        cartItems: state.cartItems.filter((cart) => cart.id !== id),
      }));

      localStorage.setItem("cartItems", JSON.stringify(get().cartItems));
    },
  }))
);
