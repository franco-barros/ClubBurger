"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/ImageCarousel.module.css";

const images = [
  "/images/Hamburguesas.png",
  "/images/Hamburguesas1.png",
  "/images/Hamburguesas2.png",
  "/images/Hamburguesas3.png",
];

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carousel}>
      <div className={styles.inner}>
        <div className={styles.item}>
          <Image
            src={images[currentIndex]}
            alt={`Imagen ${currentIndex + 1}`}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
