"use client";
import Carrousell from "@/components/corrousell";

const items = [
  {
    image: "/208-azul.png",
    text: "Peugeot 208-azul",
  },
  {
    image: "/208-negro.png",
    text: "Peugeot 208-negro",
  },
  {
    image: "/208-gris.png",
    text: "Peugeot 208-gris",
  },
  {
    image: "/208-blanco.png",
    text: "Peugeot 208-blanco",
  },
];

export default function Berlina() {
  return (
    <section className="h-screen w-full bg-slate-900">
      <h1 className="text-6xl pl-3">BERLINA</h1>
      <Carrousell items={items} autoplayInterval={4000} />
    </section>
  );
}
