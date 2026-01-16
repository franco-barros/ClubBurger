"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ChevronRight } from "lucide-react";
import styles from "../../../styles/animations/AnimatedMenuOverlay.module.css";

interface AnimatedMenuOverlayProps {
  onClose: () => void;
  scrollToSection: (id: string) => void;
  navLinks: { href: string; label: string }[];
  activeSection: string;
}

const AnimatedMenuOverlay: React.FC<AnimatedMenuOverlayProps> = ({
  onClose,
  scrollToSection,
  navLinks,
  activeSection,
}) => {
  const [animate, setAnimate] = useState(true);

  const handleClose = () => {
    setAnimate(false);
    setTimeout(onClose, 500);
  };

  // cerrar con ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const overlayContent = (
    <div className={styles.menuOverlayContainer} onClick={handleClose}>
      <div
        className={`${styles.animatedMenu} ${
          animate ? styles.open : styles.closing
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="Cerrar menú"
        >
          &times;
        </button>

        <div className={styles.menuItemsContainer}>
          {navLinks.map(({ href, label }) => {
            const isActive = activeSection === href;

            return (
              <button
                key={href}
                onClick={() => {
                  scrollToSection(href);
                  handleClose();
                }}
                className={`${styles.menuItem} ${
                  isActive ? styles.activeItem : ""
                }`}
              >
                {isActive && (
                  <ChevronRight size={18} className={styles.activeIcon} />
                )}
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  return createPortal(overlayContent, document.body);
};

export default AnimatedMenuOverlay;
