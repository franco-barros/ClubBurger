"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import styles from "../../styles/utils/WhatsappButton.module.css";

interface WhatsappButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsappButton: React.FC<WhatsappButtonProps> = ({
  phoneNumber,
  message = "Hola, me gustaría más información.",
}) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <motion.a
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton}
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className={styles.icon} />
    </motion.a>
  );
};

export default WhatsappButton;
