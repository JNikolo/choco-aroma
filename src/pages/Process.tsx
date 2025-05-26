export function Process() {
  const steps = [
    {
      number: "01",
      title: "Selección del Cacao",
      description:
        "Elegimos cuidadosamente los mejores granos de cacao ecuatoriano, verificando su calidad y origen.",
      icon: "🌱",
    },
    {
      number: "02",
      title: "Tostado Artesanal",
      description:
        "Tostamos los granos a temperatura controlada para desarrollar los aromas únicos y complejos.",
      icon: "🔥",
    },
    {
      number: "03",
      title: "Molienda y Refinado",
      description:
        "Molemos los granos tostados hasta obtener una pasta suave y sedosa, liberando todos los sabores.",
      icon: "⚙️",
    },
    {
      number: "04",
      title: "Conchado",
      description:
        "Proceso de aireación y mezclado que suaviza la textura y perfecciona el sabor del chocolate.",
      icon: "🌀",
    },
    {
      number: "05",
      title: "Templado",
      description:
        "Controlamos la temperatura para lograr el brillo perfecto y la textura crujiente característica.",
      icon: "🌡️",
    },
    {
      number: "06",
      title: "Moldeado Final",
      description:
        "Vertemos el chocolate en moldes especiales y dejamos que se solidifique lentamente.",
      icon: "📦",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-4">
            Nuestro Proceso Artesanal
          </h2>
          <p className="text-xl text-amber-600 max-w-3xl mx-auto">
            Cada barra de chocolate es el resultado de un proceso cuidadoso que
            respeta la tradición chocolatera y resalta la calidad del cacao
            ecuatoriano
          </p>
        </div>

        <div className="relative">
          {/* Process Timeline */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-green-300"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div
                  className={`w-full lg:w-5/12 ${
                    index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"
                  }`}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="text-4xl mr-4">{step.icon}</div>
                      <div>
                        <span className="text-green-600 font-bold text-sm">
                          PASO {step.number}
                        </span>
                        <h3 className="text-2xl font-bold text-amber-900">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-amber-600 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-amber-900 mb-4">
              Compromiso con la Calidad
            </h3>
            <p className="text-amber-600 text-lg max-w-4xl mx-auto leading-relaxed">
              Nuestro proceso artesanal garantiza que cada chocolate mantenga
              las propiedades naturales del cacao ecuatoriano. No utilizamos
              aromas artificiales, conservantes ni aditivos químicos,
              preservando así el sabor auténtico y los beneficios nutricionales
              del cacao en su forma más pura.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
