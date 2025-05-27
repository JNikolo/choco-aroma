import { useRef } from "react";
import { useOnScreen } from "../hooks/useOnScreen";
import { useCountUp } from "../hooks/useCountUp"; // from our earlier example

export function Stats() {
  const statsRef = useRef<HTMLDivElement>(null);
  const inView = useOnScreen(statsRef, "-100px"); // trigger a bit before fully in view

  // only start counting when inView flips true
  const cacao = useCountUp(inView ? 100 : 0, 2000);
  const clients = useCountUp(inView ? 500 : 0, 2000);
  const years = useCountUp(inView ? 10 : 0, 2000);

  return (
    <section
      ref={statsRef}
      className="py-20 bg-gradient-to-b from-amber-50 to-orange-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-amber-900 mb-12">
          Nuestras Estadísticas
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <StatCard value={cacao} suffix="%" label="Cacao Ecuatoriano" />
          <StatCard value={clients} suffix="+" label="Clientes Satisfechos" />
          <StatCard value={years} suffix="+" label="Años de Experiencia" />
        </div>
      </div>
    </section>
  );
}

function StatCard({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
      <h3 className="text-2xl font-semibold text-green-600 mb-2">
        {value}
        {suffix}
      </h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
}
