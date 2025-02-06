import { useState, useEffect } from "react";
import { MapPin, MessageCircle } from "lucide-react";

interface HeroSectionProps {
  images: string[];
}

export function HeroSection({ images }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Remove o estado de primeiro carregamento após um pequeno delay
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
    <section className="relative h-screen" aria-label="Banner principal">
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
          </div>
        ))}
      </div>

      <div className="relative h-full flex items-center justify-center text-white text-center px-4">
        <div>
          <h1 className="font-['Montserrat'] text-4xl md:text-6xl font-bold mb-4">
            Posto Catitú
            <span className="block text-2xl md:text-3xl mt-2">
              Combustível de Qualidade 24h
            </span>
          </h1>
          <p className="text-xl mb-8">
            Há 5 anos abastecendo sua confiança em Amargosa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#location"
              className="w-full sm:w-auto bg-[#FA4534] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#FA4534]/90 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#FA4534]/20"
              aria-label="Ver localização do posto"
            >
              <MapPin className="w-5 h-5" /> Localização
            </a>
            <a
              href="https://www.instagram.com/posto_catitu/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-colors flex items-center justify-center gap-2 border border-white/20"
              aria-label="Fale conosco pelo Instagram"
            >
              <MessageCircle className="w-5 h-5" /> Fale Conosco
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Ir para slide ${idx + 1}`}
            aria-current={idx === currentSlide}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentSlide
                ? "bg-[#FA4534] w-8"
                : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
