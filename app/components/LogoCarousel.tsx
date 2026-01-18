"use client";

import Image from "next/image";

// Actual client logos
const companies = [
  { name: "Alcaldía de Puerto Boyacá", logo: "/logos/alcptoboyaca.png" },
  { name: "Alcaldía de Puerto Gaitán", logo: "/logos/alcptogaitan.png" },
  { name: "Alcaldía de Villavicencio", logo: "/logos/alcvillavo.png" },
  { name: "Coviandina", logo: "/logos/coviandina.png" },
  { name: "Ecopetrol", logo: "/logos/ecopetrol.png" },
  { name: "Gobernación del Meta", logo: "/logos/gobmeta.png" },
];

export default function LogoCarousel() {
  // Duplicate the array to create seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Empresas que Confían en Nosotros
          </h2>
          <div className="flex items-center justify-center">
            <div className="w-16 h-1 bg-[#5CAE52]"></div>
            <div className="w-4 h-1 bg-[#5BB3E2] mx-2"></div>
            <div className="w-4 h-1 bg-[#D3392D]"></div>
          </div>
        </div>

        {/* Logo Carousel */}
        <div className="overflow-hidden relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          {/* Scrolling container */}
          <div className="logo-carousel flex items-center gap-16">
            {duplicatedCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex-shrink-0 w-40 h-20 relative grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <Image
                  src={company.logo}
                  alt={`Logo de ${company.name}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Additional text */}
        <p className="text-center text-gray-600 mt-8 text-lg">
          Más de <span className="text-[#5CAE52] font-bold">100 empresas</span> han confiado en nuestros servicios de transporte.
        </p>
      </div>
    </section>
  );
}
