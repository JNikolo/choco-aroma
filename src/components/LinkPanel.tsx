import { Link } from "react-router";

export function LinkPanel() {
  const linkList = [
    {
      name: "Productos",
      description: "Descubre nuestra variedad de chocolates artesanales",
      href: "/products",
      icon: "🍫",
    },
    {
      name: "Nuestro Proceso",
      description: "Conoce cómo elaboramos nuestro chocolate con amor",
      href: "/process",
      icon: "🔍",
    },
    {
      name: "Sobre Nosotros",
      description:
        "La historia detrás de Choco Aroma y nuestra pasión por el cacao",
      href: "/about",
      icon: "❤️",
    },
    {
      name: "Contacto",
      description: "¿Tienes preguntas? Estamos aquí para ayudarte",
      href: "/contact",
      icon: "📞",
    },
  ];
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {linkList.map((link, index) => (
        <div
          key={link.name}
          className="group bg-gradient-to-b from-amber-50 to-orange-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
        >
          <div className="text-6xl mb-4 text-center">{link.icon}</div>
          <h3 className="text-xl font-bold text-amber-900 mb-2">{link.name}</h3>
          <p className="text-amber-600 mb-4">{link.description}</p>
          <Link
            to={link.href}
            className="text-green-600 hover:text-green-700 font-semibold"
          >
            Ir a {link.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
