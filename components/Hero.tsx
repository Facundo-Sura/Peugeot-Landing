"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const heroImages = [
  "/peugeot-hero.jpg",
  "/peugeot-hero-1.jpg",
  "/peugeot-hero-2.jpg",
  "/peugeot-hero-3.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={heroImages[current]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: .5 }}
          className="absolute inset-0"
        >
          <Image
            src={heroImages[current]}
            alt="Peugeot"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4">Peugeot, emoción al volante</h1>
        <p className="text-xl mb-6">
          Descubrí los últimos modelos y promociones exclusivas.
        </p>
        <a
          href="#modelos"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded text-lg transition"
        >
          Ver modelos
        </a>
      </div>
    </section>
  );
}
