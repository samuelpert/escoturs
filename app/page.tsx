import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import LogoCarousel from "./components/LogoCarousel";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <LogoCarousel />
        {/* Nosotros Section */}
        <section id="nosotros" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                Nosotros
              </h2>
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-1 bg-[#5CAE52]"></div>
                <div className="w-4 h-1 bg-[#5BB3E2] mx-2"></div>
                <div className="w-4 h-1 bg-[#D3392D]"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Más de 20 años brindando soluciones de transporte
                </h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  En Escoturs nos especializamos en ofrecer servicios de transporte empresarial de alta calidad. Nuestra flota moderna y nuestro equipo profesional garantizan que su personal llegue siempre a tiempo y con la máxima comodidad.
                </p>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Contamos con una amplia experiencia en el sector, atendiendo a las principales empresas de la región con compromiso, seguridad y eficiencia.
                </p>

                {/* Features list */}
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-[#A6D384] flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-[#5CAE52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">Flota moderna y bien mantenida</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-[#A6D384] flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-[#5CAE52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">Conductores profesionales y capacitados</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-[#A6D384] flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-[#5CAE52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">Servicio personalizado 24/7</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-[#A6D384] flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-[#5CAE52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">Seguimiento GPS en tiempo real</span>
                  </li>
                </ul>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/fachada.jpg"
                    alt="Fachada de la empresa Escoturs"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#5CAE52] rounded-lg -z-10"></div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#5BB3E2] rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
