"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "../../../styles/practicearea/PracticeAreasMobile.module.css";

interface PracticeArea {
  id: string;
  title: string;
  items: string[];
  icon?: React.ReactNode;
}

interface Props {
  practiceAreas: PracticeArea[];
}

const PracticeAreasMobile: React.FC<Props> = ({ practiceAreas }) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1, spacing: 18 },
  });

  return (
    <div ref={sliderRef} className={`keen-slider ${styles.sliderMobile}`}>
      {practiceAreas.map((area) => (
        <div key={area.id} className={`keen-slider__slide ${styles.slide}`}>
          <article className={styles.areaCard}>
            {area.icon && <div className={styles.iconWrapper}>{area.icon}</div>}

            <h4>{area.title}</h4>

            <ul className={styles.itemList}>
              {area.items.slice(0, 4).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      ))}
    </div>
  );
};

export default PracticeAreasMobile;
