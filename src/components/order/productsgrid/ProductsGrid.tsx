"use client";

import React from "react";
import { Product } from "@/types/types";
import { ProductCard } from "../productcard";
import styles from "@/styles/order/components/ProductsGrid.module.css";

interface Props {
  products: Product[];
}

const ProductsGrid: React.FC<Props> = ({ products }) => {
  return (
    <section className={styles.productsGrid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductsGrid;
