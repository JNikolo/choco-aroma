import { HeroSection } from "../components/Hero";
import { LinkPanel } from "../components/LinkPanel";
import { Stats } from "../components/Stats";
import { Link } from "react-router";

export function Home() {
  return (
    <>
      <HeroSection />
      <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-4">
              Bienvenido a Choco Aroma
            </h2>
            <p className="text-lg text-amber-700 mb-6">
              En <strong>Choco Aroma</strong> transformamos el mejor cacao
              ecuatoriano en experiencias inolvidables: desde la selección
              artesanal del grano hasta cada exquisita tableta. Nuestra misión
              es compartir contigo la tradición y el sabor que solo el Ecuador
              puede ofrecer.
            </p>
            <Link
              to="/about"
              className="inline-block px-6 py-3 bg-amber-600 text-white font-medium rounded-lg shadow hover:bg-amber-700 transition"
            >
              Leer más sobre nosotros
            </Link>
          </div>
          <LinkPanel />
        </div>
      </section>
      <Stats />
    </>
  );
}
