import { Product } from "../types/types";

export const products: Product[] = [
  {
    id: "burger-simple",
    name: "Hamburguesa Simple",
    description: "Carne 100% vacuna, pan artesanal y aderezos clásicos",
    price: 4500,
    image: "/images/Hamburguesas3.png",
  },
  {
    id: "burger-completa",
    name: "Hamburguesa Completa",
    description: "Carne vacuna, lechuga, tomate fresco, queso y huevo",
    price: 5200,
    image: "/images/Hamburguesas4.png",
  },
  {
    id: "burger-cheddar",
    name: "Hamburguesa Cheddar & Bacon",
    description: "Carne vacuna, cheddar fundido y bacon crocante",
    price: 5500,
    image: "/images/Hamburguesas5.png",
  },
];
