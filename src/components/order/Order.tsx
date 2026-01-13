"use client";

import { products } from "@/data/products";

// COMPONENTES (uno por uno, sin index)
import { ProductCard } from "./productcard";
import { ProductModal } from "./productmodal";
import { CartModal } from "./cartmodal";
import { CartFloatingButton } from "./cartfloatingbutton";

// CONTEXT
import { CartProvider } from "./context/CartContext";

const Order = () => {
  return (
    <CartProvider>
      <section>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

        {/* UI flotante */}
        <CartFloatingButton />
        <CartModal />
        <ProductModal />
      </section>
    </CartProvider>
  );
};

export default Order;
