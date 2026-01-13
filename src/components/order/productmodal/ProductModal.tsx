"use client";

import { motion, AnimatePresence } from "framer-motion";
import styles from "../../../styles/order/components/ProductModal.module.css";
import { useCart } from "../context/CartContext";

const ProductModal = () => {
  const { selectedProduct, closeProduct, addItem } = useCart();

  if (!selectedProduct) return null;

  const handleAdd = () => {
    addItem(selectedProduct);
    closeProduct();
  };

  return (
    <AnimatePresence>
      <motion.div
        className={styles.overlay}
        onClick={closeProduct}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className={styles.modal}
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <h2 className={styles.title}>{selectedProduct.name}</h2>

          <p className={styles.description}>{selectedProduct.description}</p>

          <p className={styles.price}>
            ${selectedProduct.price.toLocaleString()}
          </p>

          <div className={styles.actions}>
            <button className={styles.secondary} onClick={closeProduct}>
              Cancelar
            </button>

            <button className={styles.primary} onClick={handleAdd}>
              Agregar al carrito
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductModal;
