"use client";

import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { Menu } from "lucide-react";
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

  const handleClose = useCallback(() => {
    setAnimate(false);
    setTimeout(onClose, 500);
  }, [onClose]);

  // ESC para cerrar
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };

    globalThis.addEventListener("keydown", handleKey);
    return () => globalThis.removeEventListener("keydown", handleKey);
  }, [handleClose]);

  const overlayContent = (
    <button
      type="button"
      className={styles.menuOverlayContainer}
      onClick={handleClose}
      aria-label="Cerrar menú"
    >
      <dialog
        open
        className={`${styles.animatedMenu} ${
          animate ? styles.open : styles.closing
        }`}
        onClick={(e) => e.stopPropagation()}
        aria-labelledby="menu-title"
      >
        <button
          type="button"
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
                type="button"
                onClick={() => {
                  scrollToSection(href);
                  handleClose();
                }}
                className={`${styles.menuItem} ${
                  isActive ? styles.activeItem : ""
                }`}
              >
                {isActive && <Menu size={18} className={styles.activeIcon} />}
                {label}
              </button>
            );
          })}
        </div>
      </dialog>
    </button>
  );

  return createPortal(overlayContent, document.body);
};

export default AnimatedMenuOverlay;
