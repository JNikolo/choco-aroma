export function Stats() {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-amber-900 mb-12">
          Nuestras Estadísticas
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-green-600 mb-2">100%</h3>
            <p className="text-gray-600">Cacao Ecuatoriano</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-green-600 mb-2">500+</h3>
            <p className="text-gray-600">Clientes Satisfechos</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-green-600 mb-2">10+</h3>
            <p className="text-gray-600">Años de Experiencia</p>
          </div>
        </div>
      </div>
    </section>
  );
}
