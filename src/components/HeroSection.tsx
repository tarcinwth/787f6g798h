import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LoadingSpinner } from "./LoadingSpinner";

interface HeroSectionProps {
  images: string[];
}

export function HeroSection({ images }: HeroSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadImages = async () => {
      try {
        await Promise.all(
          images.map((src) => {
            return new Promise((resolve, reject) => {
              const img = new Image();
              img.src = src;
              img.onload = resolve;
              img.onerror = reject;
            });
          })
        );
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
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [images.length, isLoading]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <img
            src={images[currentImageIndex]}
            alt={`Banner ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <motion.div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentImageIndex ? "bg-white" : "bg-white/50"
            }`}
            animate={{
              scale: index === currentImageIndex ? 1.2 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold">Posto Catitú</h1>
          <h2 className="text-2xl md:text-4xl text-[#FAB432] font-semibold">
            Combustível de Qualidade 24h
          </h2>
          <p className="text-xl md:text-2xl">
            Há 5 anos abastecendo sua confiança em Amargosa
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <motion.a
              href="#location"
              className="bg-[#FA4534] hover:bg-[#FA4534]/90 text-white px-6 py-3 rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Localização
            </motion.a>
            <motion.a
              href="#contact"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Fale Conosco
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
