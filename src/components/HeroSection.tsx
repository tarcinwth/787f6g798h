import { useState, useEffect } from "react";
import { MapPin, MessageCircle } from "lucide-react";

interface HeroSectionProps {
  images: string[];
}

export function HeroSection({ images }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsFirstLoad(false), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="relative h-[100svh] overflow-hidden"
      aria-label="Banner principal"
    >
      {/* Elementos decorativos */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* Carrossel de imagens */}
      <div className="absolute inset-0">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 ${
              !isFirstLoad ? "transition-all duration-1000" : ""
            } ${
              idx === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
          >
            <img
              src={img}
              alt={`Imagem do Posto Catitú ${idx + 1}`}
              className="w-full h-full object-cover brightness-[0.6]"
            />
            {/* Overlay gradiente */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
          </div>
        ))}
      </div>

      {/* Conteúdo principal */}
      <div className="relative h-full flex items-center justify-center text-white text-center px-4">
        <div className="max-w-[90vw] sm:max-w-2xl">
          <div className="relative">
            {/* Elemento decorativo atrás do título */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#FA4534]/20 to-[#FAB432]/20 blur-xl rounded-full" />

            <h1 className="relative font-['Montserrat'] text-3xl sm:text-4xl md:text-6xl font-bold mb-4 transform transition-transform duration-700 hover:scale-105">
              Posto Catitú
              <span className="block text-xl sm:text-2xl md:text-3xl mt-2 text-[#FAB432]">
                Combustível de Qualidade 24h
              </span>
            </h1>
          </div>

          <p className="text-lg sm:text-xl mb-8 px-2 text-white/90">
            Há 5 anos abastecendo sua confiança em Amargosa
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
            <a
              href="#location"
              className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 overflow-hidden"
            >
              {/* Background animado */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FA4534] to-[#FAB432] transform group-hover:scale-105 transition-transform duration-500" />
              <span className="relative flex items-center justify-center gap-2 text-sm sm:text-base">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" /> Localização
              </span>
            </a>

            <a
              href="https://www.instagram.com/posto_catitu/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <span className="relative flex items-center justify-center gap-2 text-sm sm:text-base group-hover:text-[#FAB432] transition-colors">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" /> Fale Conosco
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Indicadores do carrossel */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Ir para slide ${idx + 1}`}
            aria-current={idx === currentSlide}
            className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all ${
              idx === currentSlide
                ? "bg-gradient-to-r from-[#FA4534] to-[#FAB432] w-6 sm:w-8"
                : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
