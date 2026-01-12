"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import AnimatedMenuOverlay from "../animations/animatedmenuoverlay";
import styles from "../../styles/Navbar.module.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = useMemo(
    () => [
      { id: "hero", label: "Inicio" },
      { id: "aboutus", label: "Sobre mí" },
      { id: "section-practiceareas", label: "Servicios" },
      { id: "faq", label: "Preguntas Frecuentes" },
      { id: "contact", label: "Contacto" },
    ],
    []
  );

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      if (window.scrollY === 0) {
        setActiveSection("hero");
        return;
      }

      const midpoint = window.scrollY + window.innerHeight / 2;

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (midpoint >= top && midpoint < bottom) {
            setActiveSection(navLinks[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => scrollToSection("hero")}
        className={styles.floatingLeftLogo}
      >
        <div className={styles.leftIconWrapper}>
          <Image
            src="/icons/LogoC2.png"
            alt="Logo izquierdo"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </button>

      <div className={styles.floatingCenterLogo}>
        <div className={styles.centerIconWrapper}>
          <Image
            src="/icons/LogoVersionA1.png"
            alt="Logo central"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>

      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.container}>
          <div className={styles.links}>
            {navLinks.map((link) => (
              <button
                key={link.id}
                className={[
                  styles.navLink,
                  activeSection === link.id ? styles.activeLink : "",
                ].join(" ")}
                onClick={() => scrollToSection(link.id)}
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            className={styles.menuButton}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Abrir menú"
          >
            ☰
          </button>
        </div>

        {isOpen && (
          <AnimatedMenuOverlay
            onClose={() => setIsOpen(false)}
            scrollToSection={scrollToSection}
            navLinks={navLinks.map(({ id, label }) => ({
              href: id,
              label,
            }))}
            activeSection={activeSection}
          />
        )}
      </nav>
    </>
  );
};

export default Navbar;
