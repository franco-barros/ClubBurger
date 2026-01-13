"use client";

import React from "react";
import styles from "../../../styles/order/components/CartModal.module.css";
import { X, Minus, Plus, Send } from "lucide-react";
import { useCart } from "../context/CartContext";

const CartModal = () => {
  const { items, addItem, removeItem, clearCart, totalPrice } = useCart();

  if (items.length === 0) return null;

  const sendToWhatsApp = () => {
    const message = items
      .map(
        (item) =>
          `${item.quantity}x ${item.name} - $${item.price * item.quantity}`
      )
      .join("%0A");

    const total = `%0A%0ATotal: $${totalPrice}`;

    const phone = "549XXXXXXXXXX"; // ← tu número
    const url = `https://wa.me/${phone}?text=${message}${total}`;

    window.open(url, "_blank");
    clearCart();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <header className={styles.header}>
          <h3>Tu pedido</h3>
          <button onClick={clearCart}>
            <X size={20} />
          </button>
        </header>

        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.id} className={styles.item}>
              <span>{item.name}</span>

              <div className={styles.controls}>
                <button onClick={() => removeItem(item.id)}>
                  <Minus size={14} />
                </button>

                <span>{item.quantity}</span>

                <button onClick={() => addItem(item)}>
                  <Plus size={14} />
                </button>
              </div>
            </li>
          ))}
        </ul>

        <footer className={styles.footer}>
          <span>Total: ${totalPrice}</span>

          <button className={styles.sendButton} onClick={sendToWhatsApp}>
            <Send size={16} />
            Enviar por WhatsApp
          </button>
        </footer>
      </div>
    </div>
  );
};

export default CartModal;
