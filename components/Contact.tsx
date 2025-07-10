export default function Contact() {
  return (
    <section id="contacto" className="py-20 bg-blue-600 bg-[url('/formbg.jpg')] bg-cover bg-center text-white">
      <h2 className="text-4xl text-center font-bold mb-10">Contactanos</h2>
      <div className="max-w-3xl mx-auto px-4">
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Nombre completo"
            className="w-full p-3 rounded text-gray-100"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full p-3 rounded text-gray-100"
          />
          <textarea
            placeholder="Tu consulta"
            rows={5}
            className="w-full p-3 rounded text-gray-100"
          />
          <button
            type="submit"
            className="bg-white text-blue-600 px-6 py-3 rounded hover:bg-gray-100"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
