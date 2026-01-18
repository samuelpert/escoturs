import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Flota de buses Escoturs"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Decorative line */}
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-1 bg-[#5CAE52]"></div>
          <div className="w-4 h-1 bg-[#5BB3E2] mx-2"></div>
          <div className="w-4 h-1 bg-[#D3392D]"></div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          Movilidad{" "}
          <span className="text-[#5CAE52]">Sin Límites</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Soluciones de transporte empresarial confiables y eficientes para llevar a su equipo a donde necesite ir.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contactanos"
            className="inline-block px-8 py-4 bg-[#5CAE52] text-white font-semibold text-lg rounded-md hover:bg-[#4a9643] transition-colors duration-200 shadow-lg"
          >
            Contáctanos
          </a>
          <a
            href="#nosotros"
            className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-semibold text-lg rounded-md hover:bg-white hover:text-gray-900 transition-colors duration-200"
          >
            Conoce Más
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-[#5CAE52]">20+</div>
            <div className="text-gray-300 text-sm sm:text-base mt-1">Años de Experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-[#5CAE52]">100+</div>
            <div className="text-gray-300 text-sm sm:text-base mt-1">Vehículos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-[#5CAE52]">100+</div>
            <div className="text-gray-300 text-sm sm:text-base mt-1">Empresas/Entidades Atendidas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-[#5CAE52]">24/7</div>
            <div className="text-gray-300 text-sm sm:text-base mt-1">Disponibilidad</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
