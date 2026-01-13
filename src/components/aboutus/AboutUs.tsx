"use client";

import React from "react";
import Image from "next/image";
import styles from "../../styles/about/AboutUs.module.css";
import { FadeInOnScroll } from "../shared/fadeInonscroll";
import { SlideInFromLeft } from "../shared/slideInfromleft";
import { SlideInFromRight } from "../shared/slideInfromright";
import { Utensils } from "lucide-react";

const AboutUs: React.FC = () => {
  return (
    <section id="aboutus" className={styles.aboutSection}>
      <FadeInOnScroll>
        {/* BADGE */}
        <div className={styles.badgeWrapper}>
          <span className={styles.badge}>
            <Utensils size={18} style={{ marginRight: "0.4rem" }} />
            Nuestra historia
          </span>
        </div>

        <div className={styles.layout}>
          <SlideInFromLeft>
            <div className={styles.imageBlock}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/Hamburguesas3.png"
                  alt="Nuestro local"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  sizes="(max-width: 768px) 220px, 260px"
                />
              </div>

              <p className={styles.imageCaption}>Hamburguesas artesanales</p>
            </div>
          </SlideInFromLeft>

          <SlideInFromRight>
            <div className={styles.infoWrapper}>
              <div className={styles.textWrapper}>
                <p>
                  Somos una <strong>hamburguesería artesanal</strong> apasionada
                  por el buen comer. Cada hamburguesa que sale de nuestra cocina
                  está hecha al momento, con ingredientes frescos y recetas
                  propias que buscan un solo objetivo:{" "}
                  <strong>que vuelvas por otra</strong>.
                </p>

                <p>
                  Creemos en la <strong>calidad, el sabor auténtico</strong> y
                  en una experiencia simple pero inolvidable, desde el primer
                  bocado hasta la última papa.
                </p>

                <div className={styles.iconWrapper}>
                  <div className={styles.logoWrapper}>
                    <Image
                      src="/icons/LogoHamburguesas.png"
                      alt="Icono hamburguesería"
                      fill
                      sizes="60px"
                      className={styles.decorationIcon}
                    />
                  </div>
                </div>
              </div>
            </div>
          </SlideInFromRight>
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default AboutUs;
