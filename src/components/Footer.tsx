export function Footer() {
  return (
    <footer className="bg-amber-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">CA</span>
              </div>
              <span className="text-xl font-bold">Choco Aroma</span>
            </div>
            <p className="text-amber-200">
              Chocolate artesanal ecuatoriano de la más alta calidad.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Productos</h4>
            <ul className="space-y-2 text-amber-200">
              <li>Chocolate Negro</li>
              <li>Chocolate con Leche</li>
              <li>Chocolate Blanco</li>
              <li>Mix de Sabores</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-amber-200">
              <li>Nosotros</li>
              <li>Nuestro Proceso</li>
              <li>Sostenibilidad</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <ul className="space-y-2 text-amber-200">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-amber-700 mt-8 pt-8 text-center text-amber-200">
          <p>
            &copy; 2025 Choco Aroma. Tous droits réservés. Hecho con ❤️ en
            Ecuador.
          </p>
        </div>
      </div>
    </footer>
  );
}
