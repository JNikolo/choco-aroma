import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-green-50 pt-16">
      <div className="absolute inset-0 bg-[url(`data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`)] opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-amber-900 mb-6 leading-tight">
              Choco
              <span className="text-green-700 block">Aroma</span>
            </h1>
            <p className="text-xl lg:text-2xl text-amber-700 mb-4 font-medium">
              100% Natural • Libre de Aroma
            </p>
            <p className="text-lg text-amber-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Descubre el sabor auténtico del cacao ecuatoriano en cada bite.
              Chocolate artesanal elaborado con los mejores granos de cacao.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
                Explorar Productos
              </button>
              <button className="border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all">
                Nuestro Proceso
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-800 to-amber-900 rounded-full shadow-2xl animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🍫</div>
                  <div className="text-xl font-bold">100% Natural</div>
                  <div className="text-sm opacity-90">Cacao Ecuatoriano</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <ChevronDown className="w-8 h-8 text-amber-700 mx-auto animate-bounce" />
        </div>
      </div>
    </section>
  );
}
