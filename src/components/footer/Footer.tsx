"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "../../styles/Footer.module.css";

const Footer = () => {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  const isHome = pathname === "/";

  if (isAdmin) return null;

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sections = [
    { id: "hero", label: "Inicio" },
    { id: "aboutus", label: "Sobre Nosotros" },
    { id: "contact", label: "Contacto" },
  ];

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.section}>
          <div className={styles.iconWrapper}>
            <Image
              src="/icons/LogoC2.png"
              alt="Icono Contabilidad"
              width={160}
              height={140}
              className={styles.icon}
            />
          </div>

          <p className={styles.description}>
            Brindamos asesoramiento contable profesional para decisiones
            financieras seguras y eficientes, adaptadas a tus necesidades
            personales o de tu empresa.
          </p>
        </div>

        {isHome && (
          <div className={styles.section}>
            <h4 className={styles.subtitle}>Enlaces</h4>
            <ul className={styles.list}>
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    type="button"
                    className={styles.linkButton}
                    onClick={() => scrollToSection(section.id)}
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className={styles.bottomBar}>
        <p className={styles.copy}>
          © 2025 Paula Martínez Contadora Pública | Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
