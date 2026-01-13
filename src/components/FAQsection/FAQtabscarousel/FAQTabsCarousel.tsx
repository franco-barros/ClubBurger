"use client";

import React, { useState } from "react";
import styles from "../../../styles/faqsection/FAQTabsCarousel.module.css";
import { ChevronDown } from "lucide-react";
import { FadeInOnScroll } from "../../shared/fadeInonscroll";

const faqItems = [
  {
    category: "Pedidos",
    questions: [
      {
        question: "¿Cómo puedo hacer un pedido?",
        answer:
          "Podés pedir directamente desde nuestra web o por WhatsApp. Elegís tu hamburguesa, el combo y listo.",
      },
      {
        question: "¿Puedo personalizar mi hamburguesa?",
        answer:
          "Sí, podés sumar ingredientes o quitar los que no te gusten. Queremos que la disfrutes a tu manera.",
      },
      {
        question: "¿Aceptan pedidos grandes o para eventos?",
        answer:
          "Sí, realizamos pedidos especiales con anticipación. Contactanos y lo armamos juntos.",
      },
    ],
  },
  {
    category: "Productos",
    questions: [
      {
        question: "¿Qué tipo de carne usan?",
        answer:
          "Usamos carne 100% vacuna seleccionada, preparada a diario para garantizar sabor y calidad.",
      },
      {
        question: "¿El pan es artesanal?",
        answer:
          "Sí, trabajamos con pan artesanal horneado todos los días especialmente para nuestras hamburguesas.",
      },
      {
        question: "¿Tienen opciones vegetarianas?",
        answer:
          "Estamos incorporando opciones sin carne y alternativas especiales. Consultanos por disponibilidad.",
      },
    ],
  },
  {
    category: "Delivery",
    questions: [
      {
        question: "¿Hacen envíos a domicilio?",
        answer:
          "Sí, realizamos delivery en la zona para que disfrutes nuestras hamburguesas donde estés.",
      },
      {
        question: "¿Puedo retirar el pedido en el local?",
        answer:
          "Claro, podés hacer tu pedido y pasar a retirarlo cuando esté listo.",
      },
      {
        question: "¿Cómo llega el pedido?",
        answer:
          "Utilizamos empaques diseñados para conservar el sabor, la textura y la temperatura.",
      },
    ],
  },
  {
    category: "Experiencia",
    questions: [
      {
        question: "¿Qué hace especiales a sus hamburguesas?",
        answer:
          "La combinación de ingredientes de calidad, recetas propias y preparación al momento.",
      },
      {
        question: "¿Las hamburguesas se hacen en el momento?",
        answer:
          "Sí, todas nuestras hamburguesas se cocinan al momento para asegurar frescura y sabor.",
      },
      {
        question: "¿Tienen promociones o combos?",
        answer:
          "Sí, ofrecemos combos y promociones especiales que se actualizan periódicamente.",
      },
    ],
  },
];

const FAQTabsCarousel: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setActiveQuestion((prev) => (prev === idx ? null : idx));
  };

  return (
    <>
      <div className={styles.tabList}>
        {faqItems.map((item, i) => (
          <button
            key={item.category}
            className={`${styles.tabItem} ${
              i === activeCategory ? styles.tabItemActive : ""
            }`}
            onClick={() => {
              setActiveCategory(i);
              setActiveQuestion(null);
            }}
          >
            <span>{item.category}</span>
          </button>
        ))}
      </div>

      <div className={styles.questionList}>
        {faqItems[activeCategory].questions.map((item, index) => {
          const open = activeQuestion === index;

          return (
            <FadeInOnScroll key={item.question} delay={index * 0.15}>
              <button
                className={styles.questionItem}
                onClick={() => toggle(index)}
              >
                <div className={styles.questionHeader}>
                  <span
                    className={open ? styles.answerText : styles.questionText}
                  >
                    {open ? item.answer : item.question}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`${styles.chevron} ${
                      open ? styles.chevronOpen : ""
                    }`}
                  />
                </div>
              </button>
            </FadeInOnScroll>
          );
        })}
      </div>
    </>
  );
};

export default FAQTabsCarousel;
