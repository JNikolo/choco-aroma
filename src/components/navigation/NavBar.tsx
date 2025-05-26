import { Menu, X } from "lucide-react";
import { NavLink } from "react-router";
import { useState } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Inicio", end: true },
    { to: "/products", label: "Productos" },
    { to: "/process", label: "Proceso" },
    { to: "/about", label: "Nosotros" },
    { to: "/contact", label: "Contacto" },
  ];

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "px-3 py-2 rounded-md text-sm font-medium transition-colors",
      isActive
        ? "text-green-700 bg-green-100"
        : "text-amber-700 hover:text-green-700 hover:bg-green-50",
    ].join(" ");

  return (
    <nav className="fixed top-0 w-full bg-amber-50/95 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center">
              <span className="text-amber-100 font-bold text-lg">CA</span>
            </div>
            <span className="text-amber-900 font-bold text-xl">
              Choco Aroma
            </span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ to, label, end }) => (
              <NavLink key={to} to={to} end={end} className={linkClass}>
                {label}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu list */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            {navItems.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={linkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
