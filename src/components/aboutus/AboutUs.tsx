"use client";

import React from "react";
import Image from "next/image";
import styles from "../../styles/about/AboutUs.module.css";
import { FadeInOnScroll } from "../shared/fadeInonscroll";
import { SlideInFromLeft } from "../shared/slideInfromleft";
import { SlideInFromRight } from "../shared/slideInfromright";
import { User } from "lucide-react";

const AboutUs: React.FC = () => {
  return (
    <section id="aboutus" className={styles.aboutSection}>
      <FadeInOnScroll>
        {/* BADGE */}
        <div className={styles.badgeWrapper}>
          <span className={styles.badge}>
            <User size={18} style={{ marginRight: "0.4rem" }} />
            Sobre mí
          </span>
        </div>

        <div className={styles.layout}>
          <SlideInFromLeft>
            <div className={styles.imageBlock}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/paulamartinez1.png"
                  alt="Foto Paula"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  sizes="(max-width: 768px) 220px, 260px"
                />
              </div>

              <p className={styles.imageCaption}>Contadora</p>
            </div>
          </SlideInFromLeft>

          <SlideInFromRight>
            <div className={styles.infoWrapper}>
              <div className={styles.textWrapper}>
                <p>
                  Soy <strong>Paula Martínez</strong>, Contadora Pública con más
                  de seis años de experiencia en el ámbito contable,
                  administrativo y en gestión de recursos humanos. Me
                  especializo en{" "}
                  <strong>
                    {" "}
                    asesoría impositiva y contable , gestión laboral,
                    certificaciones contables y asesoría en inicio de negocios{" "}
                  </strong>{" "}
                  acompañando a empresas, profesionales y emprendedores en la
                  organización financiera y toma de decisiones.
                </p>

                <p>
                  Trabajo con <strong>compromiso, precisión y cercanía</strong>{" "}
                  para brindar un servicio confiable y orientado a resultados
                  sostenibles.
                </p>

                <div className={styles.iconWrapper}>
                  <div className={styles.logoWrapper}>
                    <Image
                      src="/icons/LogoA2.png"
                      alt="Icono decorativo"
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
