import Image from "next/image";
import styles from "../../styles/order/page/OrderPage.module.css";
import { Order } from "../../components/order";

export const metadata = {
  title: "Ordenar | Hamburguesas Artesanales",
  description:
    "Elegí tu hamburguesa artesanal favorita y hacé tu pedido de forma rápida y sencilla.",
};

const OrderPage = () => {
  return (
    <section className={styles.orderPage}>
      <div className={styles.header}>
        <Image
          src="/icons/LogoHamburguesas.png"
          alt="Logo Hamburguesería"
          width={140}
          height={140}
          priority
        />

        <h1>Hacé tu pedido</h1>
        <p>
          Elegí tu hamburguesa favorita y disfrutá una experiencia premium,
          hecha al momento.
        </p>
      </div>

      {/* ⬇️ ACÁ ENTRA TODA LA LÓGICA */}
      <Order />
    </section>
  );
};

export default OrderPage;
