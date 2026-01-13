"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/practicearea/PracticeAreas.module.css";
import { Layers, Flame, Truck, UtensilsCrossed, Star } from "lucide-react";
import { FaCheck } from "react-icons/fa";
import PracticeAreasMobile from "./practiceareasmobile";
import { FadeInOnScroll } from "../shared/fadeInonscroll";

interface PracticeArea {
  id: string;
  title: string;
  items: string[];
  icon?: React.ReactNode;
}

const practiceAreas: PracticeArea[] = [
  {
    id: "1",
    title: "Hamburguesas Artesanales",
    items: [
      "Carne 100% vacuna seleccionada",
      "Pan artesanal horneado a diario",
      "Hamburguesas simples, dobles y triples",
      "Opciones smash y clásicas",
      "Recetas originales de la casa",
    ],
    icon: <Flame size={26} />,
  },
  {
    id: "2",
    title: "Papas & Acompañamientos",
    items: [
      "Papas clásicas y rústicas",
      "Papas con cheddar y bacon",
      "Aros de cebolla crocantes",
      "Salsas caseras",
    ],
    icon: <UtensilsCrossed size={26} />,
  },
  {
    id: "3",
    title: "Combos Imperdibles",
    items: [
      "Hamburguesa + papas + bebida",
      "Combos individuales y para compartir",
      "Promos semanales",
    ],
    icon: <Star size={26} />,
  },
  {
    id: "4",
    title: "Delivery & Take Away",
    items: [
      "Pedidos rápidos y seguros",
      "Retiro por el local",
      "Envíos en la zona",
      "Empaques pensados para mantener el sabor",
    ],
    icon: <Truck size={26} />,
  },
];

const PracticeAreas: React.FC = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="section-practiceareas" className={styles.practiceAreasSection}>
      <FadeInOnScroll>
        <div className={styles.badgeWrapper}>
          <span className={styles.badge}>
            <Layers size={18} />
            Nuestra propuesta
          </span>
        </div>

        <p className={styles.description}>
          Ingredientes de calidad, recetas propias y una experiencia pensada
          para disfrutar hamburguesas hechas al momento, como tienen que ser.
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll delay={0.15}>
        {isMobile ? (
          <PracticeAreasMobile practiceAreas={practiceAreas} />
        ) : (
          <div className={styles.editorialLayout}>
            {/* Imagen editorial */}
            <div className={styles.editorialImage}>
              <Image
                src="/images/Hamburguesas3.png"
                alt="Hamburguesa artesanal premium"
                fill
                priority
              />
            </div>

            {/* Contenido */}
            <div className={styles.editorialContent}>
              {practiceAreas.map((area) => (
                <div key={area.id} className={styles.editorialBlock}>
                  <div className={styles.editorialHeader}>
                    {area.icon}
                    <h4>{area.title}</h4>
                  </div>

                  <ul>
                    {area.items.map((item, index) => (
                      <li key={index}>
                        <FaCheck size={12} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </FadeInOnScroll>
    </section>
  );
};

export default PracticeAreas;
