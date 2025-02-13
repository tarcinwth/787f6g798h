import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroSectionProps {
  images: string[];
}

export function HeroSection({ images }: HeroSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
        setIsLoading(false);
      } catch (error) {
        console.error("Erro ao carregar imagens:", error);
        setIsLoading(false);
      }
    };

    preloadImages();
  }, [images]);

  useEffect(() => {
    if (!isLoading) {
      const timer = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [images.length, isLoading]);

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <img
            src={images[currentImageIndex]}
            alt={`Banner ${currentImageIndex + 1}`}
            className="w-full h-full object-cover rounded-lg transition-all duration-500"
            style={{ opacity: isLoading ? 0 : 1 }}
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center text-white"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Posto Catitú</h1>
          <h2 className="text-xl md:text-3xl text-[#7901FA] font-semibold mb-4">
            Combustível de Qualidade 24h
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Há 5 anos abastecendo sua confiança em Amargosa
          </p>
          <div className="flex flex-col md:flex-row gap-4">
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
      </AnimatePresence>
    </section>
  );
}
