"use client";

import React from "react";
import styles from "../../../styles/order/components/ProductCard.module.css";
import { Product } from "@/types/types";
import { useCart } from "../context/CartContext";
import { Eye, Flame } from "lucide-react";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { openProduct } = useCart();

  return (
    <article className={styles.card} onClick={() => openProduct(product)}>
      {/* HEADER */}
      <div className={styles.header}>
        <h3 className={styles.title}>
          <Flame size={16} className={styles.titleIcon} />
          {product.name}
        </h3>
      </div>

      {/* DESCRIPTION */}
      {product.description && (
        <p className={styles.description}>{product.description}</p>
      )}

      {/* FOOTER */}
      <div className={styles.footer}>
        <span className={styles.price}>${product.price.toLocaleString()}</span>

        <button className={styles.addButton} type="button">
          <Eye size={16} />
          Ver detalle
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
