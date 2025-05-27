import { Link } from "react-router";

export function NotFound() {
  return (
    <div
      className="
        flex
        items-center
        justify-center
        min-h-screen
        bg-gradient-to-br
        from-amber-50
        via-orange-50
        to-green-50
        px-4
      "
    >
      <div className="text-center max-w-md space-y-6">
        <span className="text-6xl block" aria-hidden="true">
          🍫🤔
        </span>
        <span className="sr-only">Chocolate bar and thinking face emojis</span>
        <h2 className="text-4xl lg:text-5xl font-bold text-amber-900">
          ¡Ups! Página no encontrada
        </h2>
        <p className="text-lg font-bold text-amber-600">
          Parece que te confundiste de link.
        </p>
        <Link
          to="/"
          className="
            inline-block
            bg-green-600
            hover:bg-green-700
            text-white
            px-8
            py-4
            rounded-full
            font-semibold
            text-lg
            transition
            transform
            hover:scale-105
            shadow-lg
          "
        >
          Regresar a la página principal
        </Link>
      </div>
    </div>
  );
}
