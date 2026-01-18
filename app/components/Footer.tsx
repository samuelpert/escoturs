import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contactanos" className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6 brightness-0 invert">
              <Image src="/logos/logo.png" alt="Escoturs Logo" width={160} height={45} />
            </div>
            <p className="text-gray-400 mb-6">
              Soluciones de transporte empresarial con más de 20 años de experiencia brindando servicios de calidad.
            </p>
            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#5CAE52] flex items-center justify-center hover:bg-[#4a9643] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#5CAE52] flex items-center justify-center hover:bg-[#4a9643] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.35.2-6.78,2.62-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.36,2.62,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.35-.2,6.78-2.62,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.35-2.62-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#5CAE52] flex items-center justify-center hover:bg-[#4a9643] transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.79 13.96c-.23.64-1.16 1.21-1.6 1.29-.44.07-.97.11-1.57-.11-.37-.15-.84-.33-1.47-.62-2.65-1.25-4.34-3.92-4.49-4.11-.15-.18-1.15-1.54-1.15-2.94 0-1.4.73-2.1 1-2.39.27-.3.59-.37.77-.37h.55c.18 0 .44-.07.7.55.26.62.88 2.13.95 2.28.07.15.11.33.04.48-.07.15-.15.26-.29.4l-.44.52c-.15.15-.33.33-.15.66.18.33.81 1.32 1.72 2.13.77.66 1.43.88 1.61.99.18.11.29.07.39-.03.11-.11.47-.54.61-.72.14-.18.29-.14.47-.07.18.07 1.15.54 1.37.65.22.11.36.14.4.21.04.07.04.4-.18 1.02z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#5CAE52]">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#inicio" className="text-gray-400 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#nosotros" className="text-gray-400 hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-gray-400 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#contactanos" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#5CAE52]">Nuestros Servicios</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Transporte Empresarial</li>
              <li className="text-gray-400">Transporte de Personal</li>
              <li className="text-gray-400">Viajes Turísticos</li>
              <li className="text-gray-400">Alquiler de Vehículos</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#5CAE52]">Contáctanos</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#5CAE52] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400">
                Calle 32 #26-58, Barrio Porvenir<br />
                  Villavicencio, Colombia
                </span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#5CAE52] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-400">+57 314 404 6911</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#5CAE52] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-400">info@escoturs.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Escoturs S.A.S Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
