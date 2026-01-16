"use client";

import React, { useState } from "react";
import styles from "../../../styles/order/components/CartModal.module.css";
import {
  X,
  Minus,
  Plus,
  Send,
  ShoppingCart,
  Trash2,
  User,
  MessageSquare,
  Banknote,
} from "lucide-react";
import { useCart } from "../context/CartContext";

const CartModal = () => {
  const {
    items,
    addItem,
    removeItem,
    clearCart,
    totalPrice,
    closeCart,
    isCartOpen,
  } = useCart();

  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<
    "Efectivo" | "Transferencia"
  >("Efectivo");

  // 🚨 CLAVE: el carrito solo se muestra si está abierto
  if (!isCartOpen) return null;

  const sendToWhatsApp = () => {
    const now = new Date();
    const date = now.toLocaleDateString("es-AR");
    const time = now.toLocaleTimeString("es-AR", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const message = `
🍔 *NUEVO PEDIDO — HAMBURGUESERÍA*

👤 *Cliente:* ${name || "No especificado"}
💳 *Pago:* ${paymentMethod}
🕒 ${date} · ${time}

${items
  .map(
    (item) =>
      `• ${item.quantity}x ${item.name} — $${item.price * item.quantity}`
  )
  .join("\n")}

${notes ? `\n📝 *Observaciones:*\n${notes}` : ""}

------------------------
💰 *Total: $${totalPrice}*

📍 Pedido enviado desde la web
`;

    const phone = "5492645878987";
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phone}?text=${encodedMessage}`;

    window.open(url, "_blank");

    clearCart();
    closeCart();
  };

  return (
    <div className={styles.overlay} onClick={closeCart}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* ---------- HEADER ---------- */}
        <header className={styles.header}>
          <div className={styles.title}>
            <ShoppingCart size={20} />
            <h3>Tu pedido</h3>
          </div>

          <button
            className={styles.closeButton}
            onClick={closeCart}
            aria-label="Cerrar carrito"
          >
            <X size={20} />
          </button>
        </header>

        {/* ---------- CUSTOMER INFO ---------- */}
        <div className={styles.form}>
          <label className={styles.field}>
            <User size={16} />
            <input
              type="text"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label className={styles.field}>
            <MessageSquare size={16} />
            <textarea
              placeholder="Observaciones (sin cebolla, punto de cocción, etc.)"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
            />
          </label>

          <div className={styles.payment}>
            <span>
              <Banknote size={16} />
              Forma de pago
            </span>

            <div className={styles.paymentOptions}>
              <button
                type="button"
                className={
                  paymentMethod === "Efectivo"
                    ? styles.paymentActive
                    : styles.paymentButton
                }
                onClick={() => setPaymentMethod("Efectivo")}
              >
                Efectivo
              </button>

              <button
                type="button"
                className={
                  paymentMethod === "Transferencia"
                    ? styles.paymentActive
                    : styles.paymentButton
                }
                onClick={() => setPaymentMethod("Transferencia")}
              >
                Transferencia
              </button>
            </div>
          </div>
        </div>

        {/* ---------- ITEMS ---------- */}
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.id} className={styles.item}>
              <span className={styles.itemName}>{item.name}</span>

              <div className={styles.controls}>
                <button
                  className={styles.controlButton}
                  onClick={() => removeItem(item.id)}
                >
                  <Minus size={14} />
                </button>

                <span className={styles.quantity}>{item.quantity}</span>

                <button
                  className={styles.controlButton}
                  onClick={() => addItem(item)}
                >
                  <Plus size={14} />
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* ---------- FOOTER ---------- */}
        <footer className={styles.footer}>
          <div className={styles.total}>
            Total: <span>${totalPrice}</span>
          </div>

          <div className={styles.actions}>
            <button
              className={styles.clearButton}
              onClick={clearCart}
              type="button"
            >
              <Trash2 size={16} />
              Vaciar
            </button>

            <button className={styles.sendButton} onClick={sendToWhatsApp}>
              <Send size={16} />
              Enviar por WhatsApp
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CartModal;
