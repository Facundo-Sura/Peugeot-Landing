'use client'
export default function Contact() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      });
      
      const data = await res.json();
      console.log(data);
      
      if (res.ok) {
        alert('Mensaje enviado exitosamente');
        form.reset();
      } else {
        alert('Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error de conexión');
    }
  };

  return (
    <section id="contact" className="py-20 bg-blue-600 bg-[url('/formbg.jpg')] bg-cover bg-center text-white">
      <h2 className="text-4xl text-center font-bold mb-10">Contactanos</h2>
      <div className="max-w-3xl mx-auto px-4">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            className="w-full p-3 rounded text-gray-100 bg-white/10 border border-white/20"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            className="w-full p-3 rounded text-gray-100 bg-white/10 border border-white/20"
            required
          />
          <textarea
            name="message"
            placeholder="Tu consulta"
            rows={5}
            className="w-full p-3 rounded text-gray-100 bg-white/10 border border-white/20"
            required
          />
          <button
            type="submit"
            className="bg-white text-blue-600 px-6 py-3 rounded w-full hover:bg-gray-100 font-semibold transition-colors"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}