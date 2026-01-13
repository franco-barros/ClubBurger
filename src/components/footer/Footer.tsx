"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { MapPin, ShoppingBag, Clock } from "lucide-react";
import styles from "../../styles/Footer.module.css";

const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isAdmin = pathname.startsWith("/admin");
  if (isAdmin) return null;

  const goTo = (path: string) => {
    router.push(path);
  };

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.content}>
        {/* BRAND */}
        <div className={styles.section}>
          <div className={styles.iconWrapper}>
            <Image
              src="/icons/LogoHamburguesas.png"
              alt="Logo Hamburguesería"
              width={160}
              height={140}
              className={styles.icon}
              priority
            />
          </div>

          <p className={styles.description}>
            Hamburguesas artesanales hechas al momento, con ingredientes
            seleccionados y recetas propias. Calidad, sabor y actitud.
          </p>
        </div>

        {/* LINKS */}
        <div className={styles.section}>
          <h4 className={styles.subtitle}>Navegación</h4>

          <ul className={styles.list}>
            <li>
              <button
                type="button"
                className={styles.linkButton}
                onClick={() => goTo("/")}
              >
                Inicio
              </button>
            </li>

            <li>
              <button
                type="button"
                className={styles.linkButton}
                onClick={() => goTo("/order")}
              >
                Ordenar ahora
              </button>
            </li>
          </ul>
        </div>

        {/* INFO */}
        <div className={styles.section}>
          <h4 className={styles.subtitle}>Información</h4>

          <ul className={styles.infoList}>
            <li>
              <MapPin size={16} />
              <span>Envíos en la zona</span>
            </li>

            <li>
              <ShoppingBag size={16} />
              <span>Take Away disponible</span>
            </li>

            <li>
              <Clock size={16} />
              <span>Todos los días de 19 a 00 hs</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p className={styles.copy}>
          © 2025 Hamburguesería Artesanal — Hecho con pasión
        </p>
      </div>
    </footer>
  );
};

export default Footer;
