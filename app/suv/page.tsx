"use client";
import Carrousell from "@/components/corrousell";

const items = [
  {
    image: "/2008-azul.png",
    text: "Peugeot 2008-azul",
  },
  {
    image: "/2008-blanco.png",
    text: "Peugeot 2008-blanco",
  },
  {
    image: "/2008-gris.png",
    text: "Peugeot 2008-gris",
  },
  {
    image: "/2008-negro.png",
    text: "Peugeot 2008-negro",
  },
];

export default function Suv() {
  return (
    <section className="h-screen w-full bg-neutral-900">
      <h1 className="text-6xl pr-3 text-end">SUV</h1>
      <Carrousell items={items} autoplayInterval={4500} />
    </section>
  );
}
