export function Contact() {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-900 to-amber-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Conecta con Nosotros
          </h2>
          <p className="text-xl text-amber-200 max-w-2xl mx-auto">
            ¿Tienes preguntas sobre nuestros productos? ¿Quieres ser
            distribuidor? Estamos aquí para ayudarte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  📍
                </div>
                <div>
                  <div className="font-semibold">Dirección</div>
                  <div className="text-amber-200">Quito, Ecuador</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  📞
                </div>
                <div>
                  <div className="font-semibold">Teléfono</div>
                  <div className="text-amber-200">+593 99 XXX XXXX</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  📧
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-amber-200">info@chocoaroma.ec</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Tu nombre"
                className="w-full p-4 rounded-lg bg-amber-700 text-white placeholder-amber-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                placeholder="Tu email"
                className="w-full p-4 rounded-lg bg-amber-700 text-white placeholder-amber-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <textarea
                rows={4}
                placeholder="Tu mensaje"
                className="w-full p-4 rounded-lg bg-amber-700 text-white placeholder-amber-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                onClick={() =>
                  alert("Mensaje enviado! Te contactaremos pronto.")
                }
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Enviar Mensaje
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
