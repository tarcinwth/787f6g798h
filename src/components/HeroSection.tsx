import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, MessageCircle } from "lucide-react";

interface HeroSectionProps {
  images: string[];
}

export function HeroSection({ images }: HeroSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={images[currentImageIndex]}
            alt={`Banner ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Overlay gradiente */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Posto Catitú
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl"
          >
            Qualidade e confiança há mais de 5 anos
          </motion.p>
        </div>
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
    </section>
  );
}
