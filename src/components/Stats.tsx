import { useRef } from "react";
import { useOnScreen } from "../hooks/useOnScreen";
import { useCountUp } from "../hooks/useCountUp"; // from our earlier example
import { CalendarHeart, House, UsersRound } from "lucide-react";

export function Stats() {
  const statsRef = useRef<HTMLDivElement>(null);
  const inView = useOnScreen(statsRef, "-100px");

  const cacao = useCountUp(inView ? 100 : 0, 2000);
  const clients = useCountUp(inView ? 500 : 0, 2000);
  const years = useCountUp(inView ? 10 : 0, 2000);

  const statList = [
    {
      icon: <House />,
      value: cacao,
      suffix: "%",
      label: "Cacao Ecuatoriano",
    },
    {
      icon: <UsersRound />,
      value: clients,
      suffix: "+",
      label: "Clientes Satisfechos",
    },
    {
      icon: <CalendarHeart />,
      value: years,
      suffix: "+",
      label: "Años de Experiencia",
    },
  ];

  return (
    <section
      ref={statsRef}
      className="py-20 bg-gradient-to-b from-amber-50 to-orange-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-amber-900 mb-12">
          Nuestras Estadísticas
        </h2>
        <div className="space-y-6 md:grid md:grid-cols-3 md:space-y-0 md:gap-8">
          {statList.map((stat, index) => (
            <div
              key={stat.label}
              className="group bg-gradient-to-b from-amber-50 to-orange-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <StatRow
                icon={stat.icon}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatRow({
  icon,
  value,
  suffix = "",
  label,
}: {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
}) {
  return (
    <div className="flex items-center p-4">
      {/* Icon box */}
      <div className="flex-shrink-0 bg-amber-600 p-3 rounded-md">
        <div className="w-6 h-6 text-white">{icon}</div>
      </div>

      {/* Text */}
      <div className="ml-4">
        <p className="text-2xl font-bold text-amber-900">
          {value}
          {suffix}
        </p>
        <p className="text-gray-600">{label}</p>
      </div>
    </div>
  );
}
