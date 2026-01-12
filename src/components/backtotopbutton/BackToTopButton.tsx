"use client";

import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import styles from "../../styles/utils/BackToTopButton.module.css";

const BackToTopButton = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={styles.backToTopButton}
      onClick={handleScrollTop}
      aria-label="Volver arriba"
    >
      <FaArrowUp className={styles.icon} />
    </motion.button>
  );
};

export default BackToTopButton;
