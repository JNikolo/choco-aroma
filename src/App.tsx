import React, { useState, useEffect } from 'react';
import { ChevronDown, Leaf, Award, Heart, ArrowRight, Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'products', label: 'Productos' },
    { id: 'process', label: 'Proceso' },
    { id: 'about', label: 'Nosotros' },
    { id: 'contact', label: 'Contacto' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-amber-50/95 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center">
              <span className="text-amber-100 font-bold text-lg">CA</span>
            </div>
            <span className="text-amber-900 font-bold text-xl">Choco Aroma</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-green-700 bg-green-100'
                    : 'text-amber-700 hover:text-green-700 hover:bg-green-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-green-700 bg-green-100'
                    : 'text-amber-700 hover:text-green-700 hover:bg-green-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

const HeroSection: React.FC = () => {
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
};

const ProductsSection: React.FC = () => {
  const products = [
    {
      name: "Chocolate Negro 70%",
      description: "Intenso sabor a cacao con notas frutales",
      price: "$8.99",
      image: "🍫"
    },
    {
      name: "Chocolate con Leche",
      description: "Cremoso y suave, perfecto balance",
      price: "$7.99",
      image: "🍫"
    },
    {
      name: "Chocolate Blanco",
      description: "Delicado y dulce, manteca de cacao pura",
      price: "$9.99",
      image: "🍫"
    },
    {
      name: "Mix de Sabores",
      description: "Selección de nuestros mejores chocolates",
      price: "$24.99",
      image: "🎁"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-4">
            Nuestros Productos
          </h2>
          <p className="text-xl text-amber-600 max-w-2xl mx-auto">
            Cada chocolate es una obra maestra artesanal, elaborada con pasión y los mejores ingredientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group bg-gradient-to-b from-amber-50 to-orange-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-6xl mb-4 text-center">{product.image}</div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">{product.name}</h3>
              <p className="text-amber-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-green-700">{product.price}</span>
                <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-amber-900 mb-2">100% Natural</h3>
            <p className="text-amber-600">Sin aditivos artificiales ni conservantes</p>
          </div>
          <div className="text-center p-6">
            <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-amber-900 mb-2">Calidad Premium</h3>
            <p className="text-amber-600">Cacao ecuatoriano de las mejores plantaciones</p>
          </div>
          <div className="text-center p-6">
            <Heart className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-amber-900 mb-2">Hecho con Amor</h3>
            <p className="text-amber-600">Proceso artesanal cuidando cada detalle</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Selección del Cacao",
      description: "Elegimos cuidadosamente los mejores granos de cacao ecuatoriano, verificando su calidad y origen.",
      icon: "🌱"
    },
    {
      number: "02",
      title: "Tostado Artesanal",
      description: "Tostamos los granos a temperatura controlada para desarrollar los aromas únicos y complejos.",
      icon: "🔥"
    },
    {
      number: "03",
      title: "Molienda y Refinado",
      description: "Molemos los granos tostados hasta obtener una pasta suave y sedosa, liberando todos los sabores.",
      icon: "⚙️"
    },
    {
      number: "04",
      title: "Conchado",
      description: "Proceso de aireación y mezclado que suaviza la textura y perfecciona el sabor del chocolate.",
      icon: "🌀"
    },
    {
      number: "05",
      title: "Templado",
      description: "Controlamos la temperatura para lograr el brillo perfecto y la textura crujiente característica.",
      icon: "🌡️"
    },
    {
      number: "06",
      title: "Moldeado Final",
      description: "Vertemos el chocolate en moldes especiales y dejamos que se solidifique lentamente.",
      icon: "📦"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-4">
            Nuestro Proceso Artesanal
          </h2>
          <p className="text-xl text-amber-600 max-w-3xl mx-auto">
            Cada barra de chocolate es el resultado de un proceso cuidadoso que respeta 
            la tradición chocolatera y resalta la calidad del cacao ecuatoriano
          </p>
        </div>

        <div className="relative">
          {/* Process Timeline */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-green-300"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">{step.number}</span>
                </div>
                
                {/* Content */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="text-4xl mr-4">{step.icon}</div>
                      <div>
                        <span className="text-green-600 font-bold text-sm">PASO {step.number}</span>
                        <h3 className="text-2xl font-bold text-amber-900">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-amber-600 text-lg leading-relaxed">{step.description}</p>
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
              Nuestro proceso artesanal garantiza que cada chocolate mantenga las propiedades 
              naturales del cacao ecuatoriano. No utilizamos aromas artificiales, conservantes 
              ni aditivos químicos, preservando así el sabor auténtico y los beneficios 
              nutricionales del cacao en su forma más pura.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
              Tradición y Pasión en Cada Bite
            </h2>
            <p className="text-lg text-amber-600 mb-6 leading-relaxed">
              Choco Aroma nace de la pasión por el chocolate auténtico y el respeto 
              por las tradiciones chocolateras. Trabajamos directamente con productores 
              locales de cacao ecuatoriano, garantizando un comercio justo y sostenible.
            </p>
            <p className="text-lg text-amber-600 mb-8 leading-relaxed">
              Nuestro compromiso es crear chocolates que no solo deleiten el paladar, 
              sino que también cuenten la historia rica y compleja del cacao ecuatoriano, 
              considerado uno de los mejores del mundo.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-amber-50 rounded-lg">
                <div className="text-3xl font-bold text-green-700 mb-2">15+</div>
                <div className="text-amber-700">Años de Experiencia</div>
              </div>
              <div className="text-center p-4 bg-amber-50 rounded-lg">
                <div className="text-3xl font-bold text-green-700 mb-2">100%</div>
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
                  Preservar y compartir la riqueza del cacao ecuatoriano a través 
                  de chocolates artesanales de la más alta calidad, manteniendo 
                  siempre nuestro compromiso con la sostenibilidad y el comercio justo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-900 to-amber-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Conecta con Nosotros
          </h2>
          <p className="text-xl text-amber-200 max-w-2xl mx-auto">
            ¿Tienes preguntas sobre nuestros productos? ¿Quieres ser distribuidor? 
            Estamos aquí para ayudarte.
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
                onClick={() => alert('Mensaje enviado! Te contactaremos pronto.')}
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
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HeroSection />;
      case 'products':
        return <ProductsSection />;
      case 'process':
        return <ProcessSection />;
      case 'about':
        return <AboutSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {renderSection()}
      </main>
      
      {/* Footer */}
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
            <p>&copy; 2025 Choco Aroma. Tous droits réservés. Hecho con ❤️ en Ecuador.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;