import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      {/* Apenas uma imagem é mostrada por vez */}
      <AnimatePresence initial={false} mode="wait">
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

      {/* Texto único, não mais dentro do loop de imagens */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center text-white"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-2">Posto Catitú</h1>
        <h2 className="text-2xl md:text-4xl text-[#FAB432] font-semibold mb-4">
          Combustível de Qualidade 24h
        </h2>
        <p className="text-xl md:text-2xl mb-8">
          Há 5 anos abastecendo sua confiança em Amargosa
        </p>
        <div className="flex gap-4">
          <a
            href="#location"
            className="bg-[#FA4534] hover:bg-[#FA4534]/90 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-colors"
          >
            <span>Localização</span>
          </a>
          <a
            href="#contact"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full flex items-center gap-2 transition-colors"
          >
            <span>Fale Conosco</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
