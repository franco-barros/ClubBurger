"use client";

import React from "react";
import styles from "../../../styles/order/components/ProductCard.module.css";
import { Product } from "@/types/types";
import { useCart } from "../context/CartContext";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { openProduct } = useCart();

  return (
    <article className={styles.card} onClick={() => openProduct(product)}>
      <h3 className={styles.title}>{product.name}</h3>

      {product.description && (
        <p className={styles.description}>{product.description}</p>
      )}

      <div className={styles.footer}>
        <span className={styles.price}>${product.price.toLocaleString()}</span>

        <button className={styles.addButton} type="button">
          Ver detalle
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
