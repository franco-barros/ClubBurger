"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ImageCarousel from "../imagecarrousel";
import styles from "../../styles/hero/Hero.module.css";

const Hero: React.FC = () => {
  const router = useRouter();

  return (
    <section id="hero" className={styles.hero}>
      <ImageCarousel />

      <div className={styles.overlay} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={styles.content}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={styles.heroLogoWrapper}
        >
          <Image
            src="/icons/LogoHamburguesas.png"
            alt="Logo Hamburguesería"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </motion.div>

        <p className={styles.phrase}>
          Hamburguesas artesanales, jugosas y hechas al momento
        </p>

        <div className={styles.buttons}>
          <button
            onClick={() => router.push("/order")}
            className={`${styles.btn} ${styles.btnPrimary}`}
            type="button"
          >
            Ordenar ahora
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
