"use client";

import React from "react";
import styles from "../../../styles/order/components/CartFloatingButton.module.css";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

const CartFloatingButton = () => {
  const { totalItems, openCart } = useCart();

  if (totalItems === 0) return null;

  return (
    <button
      className={styles.button}
      onClick={openCart}
      aria-label="Abrir carrito"
    >
      <ShoppingCart size={22} className={styles.icon} />

      <span className={styles.count}>{totalItems}</span>
    </button>
  );
};

export default CartFloatingButton;
