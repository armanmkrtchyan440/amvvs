import { CartItemType, useCartItems } from "@/stores/useCartItems";
import { calculateRot } from "@/utils/calculateRot";
import { FC, useMemo } from "react";
import { useTranslation } from "react-i18next";

export const KassaItem: FC<CartItemType> = ({ id, name, price, quantity }) => {
  const { t } = useTranslation(undefined, { keyPrefix: "carts" });

  const { incrementQuantity, decrementQuantity, rot } = useCartItems();

  const rotPrice = useMemo(() => (rot ? calculateRot(price) : price), [rot]);
  const rotTotalPrice = useMemo(() => rotPrice * quantity, [rot, quantity]);

  return (
    <div className="flex justify-between items-center border-t py-4">
      <div>
        <h3>{name}</h3>
        <span>
          {rotTotalPrice}- {rot && t("after-rot")}
        </span>
      </div>
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
    </div>
  );
};
