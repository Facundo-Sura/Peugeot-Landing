"use client";
import { motion } from "framer-motion";

const benefits = [
  { title: "Garantía oficial", desc: "Cobertura total en todos nuestros modelos." },
  { title: "Financiación flexible", desc: "Planes adaptados a vos." },
  { title: "Postventa premium", desc: "Cuidamos tu Peugeot como el primer día." },
];

export default function Benefits() {
  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/beneficios-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <h2 className="text-4xl text-center font-bold text-white mb-10">¿Por qué elegir Peugeot?</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {benefits.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.3, duration: 0.8 }}
              className="bg-white rounded-lg p-6 shadow-lg text-center text-blue-800"
            >
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
