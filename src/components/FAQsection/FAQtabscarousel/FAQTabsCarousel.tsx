"use client";

import React, { useState } from "react";
import styles from "../../../styles/faqsection/FAQTabsCarousel.module.css";
import { ChevronDown } from "lucide-react";
import { FadeInOnScroll } from "../../shared/fadeInonscroll";

const faqItems = [
  {
    category: "General",
    questions: [
      {
        question: "¿Qué servicios ofrece el estudio contable?",
        answer:
          "Brindamos asesoramiento integral en materia impositiva, laboral, contable y societaria.",
      },
      {
        question: "¿Realizan alta y liquidación del servicio domestico?",
        answer: "Si, generamos la inscripción y analizamos cada caso",
      },
      {
        question: "¿Cómo puedo solicitar una consulta?",
        answer:
          "Podés contactarnos por WhatsApp, correo electrónico o completando el formulario en la web.",
      },
    ],
  },
  {
    category: "Monotributo",
    questions: [
      {
        question: "¿Cómo me doy de alta en el Monotributo?",
        answer:
          "Realizamos el alta completa, asignación de categoría y configuración de facturación.",
      },
      {
        question: "¿Cada cuánto se hace la recategorización?",
        answer:
          "Dos veces al año: en enero y julio, según los ingresos y actividad facturada.",
      },
      {
        question: "¿Qué pasa si me recategorizan de oficio?",
        answer:
          "Podemos revisar el caso y realizar el descargo si corresponde, para corregir la categoría.",
      },
    ],
  },
  {
    category: "Sociedades",
    questions: [
      {
        question: "¿Qué tipo de sociedad me conviene?",
        answer:
          "Depende del proyecto: SAS, SRL y SA son las más comunes. Analizamos tu situación y te asesoramos.",
      },
      {
        question: "¿Ustedes realizan constitución de empresas?",
        answer:
          "Sí, gestionamos todo el proceso: estatuto, inscripción, CUIT, libros contables y alta impositiva.",
      },
      {
        question: "¿Hacen balances y certificaciones contables?",
        answer:
          "Sí, elaboramos balances anuales, informes contables y certificaciones para bancos o ARCA.",
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
