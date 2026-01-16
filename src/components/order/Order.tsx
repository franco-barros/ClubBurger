"use client";

import { products } from "@/data/products";

// COMPONENTES
import { ProductsGrid } from "./productsgrid";
import { ProductModal } from "./productmodal";
import { CartModal } from "./cartmodal";
import { CartFloatingButton } from "./cartfloatingbutton";

// CONTEXT
import { CartProvider } from "./context/CartContext";

const Order = () => {
  return (
    <CartProvider>
      <section>
        <ProductsGrid products={products} />

        {/* UI flotante */}
        <CartFloatingButton />
        <CartModal />
        <ProductModal />
      </section>
    </CartProvider>
  );
};

export default Order;
