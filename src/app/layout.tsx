import "../styles/globals.css";
import { ReactNode } from "react";
import { Footer } from "../components/footer";
import { ClientNavbarWrapper } from "../components/clientnavbarwrapper";
import { Rethink_Sans, Jolly_Lodger } from "next/font/google";

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-rethink-sans",
});

const jolly = Jolly_Lodger({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jolly",
});

export const metadata = {
  title: "El Club de la Burger",
  description:
    "Hamburguesas artesanales, ingredientes premium y pedidos directos por WhatsApp. Sumate al club.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es" className={`${rethinkSans.variable} ${jolly.variable}`}>
      <head>
        <link rel="icon" href="/icons/LogoHamburguesas.png" sizes="any" />
      </head>

      <body>
        <ClientNavbarWrapper>{children}</ClientNavbarWrapper>
        <Footer />
      </body>
    </html>
  );
}
