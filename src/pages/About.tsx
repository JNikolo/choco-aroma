export function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
              Tradición y Pasión en Cada Bite
            </h2>
            <p className="text-lg text-amber-600 mb-6 leading-relaxed">
              Choco Aroma nace de la pasión por el chocolate auténtico y el
              respeto por las tradiciones chocolateras. Trabajamos directamente
              con productores locales de cacao ecuatoriano, garantizando un
              comercio justo y sostenible.
            </p>
            <p className="text-lg text-amber-600 mb-8 leading-relaxed">
              Nuestro compromiso es crear chocolates que no solo deleiten el
              paladar, sino que también cuenten la historia rica y compleja del
              cacao ecuatoriano, considerado uno de los mejores del mundo.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-amber-50 rounded-lg">
                <div className="text-3xl font-bold text-green-700 mb-2">
                  15+
                </div>
                <div className="text-amber-700">Años de Experiencia</div>
              </div>
              <div className="text-center p-4 bg-amber-50 rounded-lg">
                <div className="text-3xl font-bold text-green-700 mb-2">
                  100%
                </div>
                <div className="text-amber-700">Cacao Ecuatoriano</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-8xl mb-6">🏭</div>
                <h3 className="text-2xl font-bold text-amber-900 mb-4">
                  Nuestra Misión
                </h3>
                <p className="text-amber-600 leading-relaxed">
                  Preservar y compartir la riqueza del cacao ecuatoriano a
                  través de chocolates artesanales de la más alta calidad,
                  manteniendo siempre nuestro compromiso con la sostenibilidad y
                  el comercio justo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
