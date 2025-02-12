import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LoadingSpinner } from "./LoadingSpinner";

interface HeroSectionProps {
  images: string[];
}

export function HeroSection({ images }: HeroSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // Pré-carregamento das imagens
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
        setNextImageIndex((currentImageIndex + 1) % images.length);
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [images.length, isLoading, currentImageIndex]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Imagem atual */}
      <div className="absolute inset-0">
        <img
          src={images[currentImageIndex]}
          alt={`Banner ${currentImageIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Próxima imagem com fade-in */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
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

      {/* Indicadores de slide */}
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

      {/* Conteúdo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center text-white"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-4xl md:text-6xl font-bold mb-2"
        >
          Posto Catitú
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-2xl md:text-4xl text-[#FAB432] font-semibold mb-4"
        >
          Combustível de Qualidade 24h
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="text-xl md:text-2xl mb-8"
        >
          Há 5 anos abastecendo sua confiança em Amargosa
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="flex gap-4"
        >
          <motion.a
            href="#location"
            className="bg-[#FA4534] hover:bg-[#FA4534]/90 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Localização</span>
          </motion.a>
          <motion.a
            href="#contact"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full flex items-center gap-2 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Fale Conosco</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
