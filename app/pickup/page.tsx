"use client";
import Carrousell from "@/components/corrousell";

const items = [
    {
        image: "/landtrek-verde.png",
        text: "Peugeot landtrek-verde",
    },
    {
        image: "/landtrek-rojo.png",
        text: "Peugeot landtrek-rojo",
    },
    {
        image: "/landtrek-gris.png",
        text: "Peugeot landtrek-gris",
    },
    {
        image: "/landtrek-negro.png",
        text: "Peugeot landtrek-negro",
    },
];

export function Pickup() {
    return (
        <section className="h-screen w-full bg-gray-900">
            <h1 className="text-6xl text-center">PICKUP</h1>
            <Carrousell items={items} autoplayInterval={4000} />
        </section>
    );
}