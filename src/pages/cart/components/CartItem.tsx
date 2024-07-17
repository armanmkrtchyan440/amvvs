import { CartItemType, useCartItems } from "@/stores/useCartItems";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { FC, useMemo } from "react";
import { calculateRot } from "@/utils/calculateRot";
import { useTranslation } from "react-i18next";

export const CartItem: FC<CartItemType> = ({ id, name, price, quantity }) => {
  const { t } = useTranslation(undefined, { keyPrefix: "carts" });

  const { incrementQuantity, decrementQuantity, deleteCartItem, rot } =
    useCartItems();

  const rotPrice = useMemo(() => (rot ? calculateRot(price) : price), [rot]);
  const rotTotalPrice = useMemo(() => rotPrice * quantity, [rot, quantity]);

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
            onClick={() => decrementQuantity(id)}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            className="quantity-button"
            onClick={() => incrementQuantity(id)}
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
          <RiDeleteBin7Fill onClick={() => deleteCartItem(id)} />
        </button>
      </td>
    </tr>
  );
};
