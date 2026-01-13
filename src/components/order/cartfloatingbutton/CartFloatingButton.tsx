"use client";

import React, { useState } from "react";
import styles from "../../../styles/order/components/CartFloatingButton.module.css";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

const CartFloatingButton = () => {
  const { totalItems } = useCart();
  const [open, setOpen] = useState(false);

  if (totalItems === 0) return null;

  return (
    <button
      className={styles.floatingButton}
      onClick={() => setOpen(true)}
      aria-label="Abrir carrito"
    >
      <ShoppingCart size={22} />
      <span className={styles.badge}>{totalItems}</span>
    </button>
  );
};

export default CartFloatingButton;
