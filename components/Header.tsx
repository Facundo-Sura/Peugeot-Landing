"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [showFullMenu, setShowFullMenu] = useState(false); // true cuando sale de #hero
  const [isMenuOpen, setIsMenuOpen] = useState(false);    // para el menú móvil
  const [isMobile, setIsMobile] = useState(false);        // detecta pantalla móvil

  // Detectar si estamos en #hero
  useEffect(() => {
    const heroSection = document.getElementById("hero");
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFullMenu(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(heroSection);
    return () => observer.unobserve(heroSection);
  }, []);

  // Detectar tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Alternar menú móvil
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        showFullMenu
          ? "bg-white/70 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div
        className={`container mx-auto px-4 flex ${
          showFullMenu ? "justify-between" : "justify-center"
        } items-center h-16 md:h-20`}
      >
        {/* Logo solo visible fuera de #hero */}
        {showFullMenu && (
          <Link
            href="#"
            className="text-2xl font-bold text-black-200 flex justify-center items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/logo.png"
              alt="Peugeot Logo"
              width={75}
              height={50}
              className="drop-shadow-white mr-2"
            />
            <h1>Peugeot Landing Page</h1>
          </Link>
        )}

        {/* Menú Desktop (solo si no es móvil) */}
        {!isMobile && (
          <nav
            className={`flex space-x-6 md:space-x-8 transition-all duration-300 ${
              showFullMenu
                ? "text-gray-800"
                : "text-white" // Ajusta si tu hero es oscuro
            }`}
          >
            {showFullMenu ? (
              <> <Link
                  href="#hero"
                  className="font-medium hover:text-blue-200 transition-colors duration-300"
                >
                  Home
                </Link>
                <Link
                  href="#models"
                  className="hover:text-blue-600 transition-colors duration-300"
                >
                  Modelos
                </Link>
                <Link
                  href="#benedits"
                  className="hover:text-blue-600 transition-colors duration-300"
                >
                  Beneficios
                </Link>
                <Link
                  href="#contact"
                  className="hover:text-blue-600 transition-colors duration-300"
                >
                  Contacto
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="#hero"
                  className="font-medium hover:text-blue-200 transition-colors duration-300"
                >
                  Inicio
                </Link>
                <Link
                  href="#models"
                  className="font-medium hover:text-blue-200 transition-colors duration-300"
                >
                  Modelos
                </Link>
                <Link
                  href="#benefits"
                  className="font-medium hover:text-blue-200 transition-colors duration-300"
                >
                  Beneficios
                </Link>
                <Link
                  href="#contact"
                  className="font-medium hover:text-blue-200 transition-colors duration-300"
                >
                  Contacto
                </Link>
              </>
            )}
          </nav>
        )}

        {/* Botón hamburguesa (solo en móvil) */}
        {isMobile && (
          <button
            onClick={toggleMenu}
            className="z-30 p-2 focus:outline-none md:hidden"
            aria-label="Toggle menu"
          >
            <div
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-black my-1.5 transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></div>
          </button>
        )}
      </div>

      {/* Menú Móvil (solo cuando está activo) */}
      {isMobile && isMenuOpen && (
        <div
          className="fixed inset-0 bg-white z-40 flex flex-col items-center pt-20 pb-80 space-y-8 text-xl font-medium"
          style={{ marginTop: "4rem" }}
        >
          <Link href="#hero" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="#models" onClick={() => setIsMenuOpen(false)}>
            Modelos
          </Link>
          <Link href="#benefits" onClick={() => setIsMenuOpen(false)}>
            Beneficios
          </Link>
          <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contacto
          </Link>
        </div>
      )}
    </header>
  );
}