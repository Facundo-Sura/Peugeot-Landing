"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const modelos = [
  { name: "208", image: "/modelos/208/208-azul.png" },
  { name: "2008", image: "/modelos/2008/2008-negro.png" },
  { name: "3008", image: "/modelos/3008/3008-cobre.png" },
  { name: "Landtrek", image: "/modelos/landtrek/landtrek-verde.png" },
];

export default function Models() {
  return (
    <section id="models" className="py-20 bg-white">
      <h2 className="text-4xl text-center font-bold mb-10">Modelos destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        {modelos.map((modelo, idx) => (
          <motion.div
            key={modelo.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.8 }}
            className="bg-gray-100 rounded-lg shadow hover:shadow-lg transition"
          >
            <Image
              src={modelo.image}
              alt={modelo.name}
              width={600}
              height={400}
              className="rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2">{modelo.name}</h3>
              <p className="text-gray-600 mb-4">
                Conducí el nuevo {modelo.name}, diseñado para cada aventura.
              </p>
              <a
                href="#contacto"
                className="text-blue-600 hover:underline"
              >
                Más info →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
