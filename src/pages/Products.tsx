import { ArrowRight, Leaf, Award, Heart } from "lucide-react";
export function Products() {
  const products = [
    {
      name: "Chocolate Negro 70%",
      description: "Intenso sabor a cacao con notas frutales",
      price: "$8.99",
      image: "🍫",
    },
    {
      name: "Chocolate con Leche",
      description: "Cremoso y suave, perfecto balance",
      price: "$7.99",
      image: "🍫",
    },
    {
      name: "Chocolate Blanco",
      description: "Delicado y dulce, manteca de cacao pura",
      price: "$9.99",
      image: "🍫",
    },
    {
      name: "Mix de Sabores",
      description: "Selección de nuestros mejores chocolates",
      price: "$24.99",
      image: "🎁",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-4">
            Nuestros Productos
          </h2>
          <p className="text-xl text-amber-600 max-w-2xl mx-auto">
            Cada chocolate es una obra maestra artesanal, elaborada con pasión y
            los mejores ingredientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-gradient-to-b from-amber-50 to-orange-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-6xl mb-4 text-center">{product.image}</div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">
                {product.name}
              </h3>
              <p className="text-amber-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-green-700">
                  {product.price}
                </span>
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
            <h3 className="text-xl font-bold text-amber-900 mb-2">
              100% Natural
            </h3>
            <p className="text-amber-600">
              Sin aditivos artificiales ni conservantes
            </p>
          </div>
          <div className="text-center p-6">
            <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-amber-900 mb-2">
              Calidad Premium
            </h3>
            <p className="text-amber-600">
              Cacao ecuatoriano de las mejores plantaciones
            </p>
          </div>
          <div className="text-center p-6">
            <Heart className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-amber-900 mb-2">
              Hecho con Amor
            </h3>
            <p className="text-amber-600">
              Proceso artesanal cuidando cada detalle
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
