import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Imagem atual */}
      <div className="absolute inset-0">
        <img
          src={images[currentImageIndex]}
          alt={`Banner ${currentImageIndex + 1}`}
          className="w-full h-full object-cover"
          style={{ opacity: isLoading ? 0 : 1 }}
        />
      </div>

      {/* Próxima imagem com fade-in */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }} // Reduzido para 0.3 segundos
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

      {/* Conteúdo */}
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
