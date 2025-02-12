import { useState, useEffect } from "react";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Header } from "./components/Header";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { FuelPrices } from "./components/FuelPrices";
import { NewsletterForm } from "./components/NewsletterForm";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const images = [
    "/images/banner1.jpeg",
    "/images/banner2.jpeg",
    "/images/banner3.jpeg",
  ];

  const services = [
    {
      icon: "🛢️",
      title: "Combustível de Qualidade",
      desc: "Gasolina, Etanol e Diesel S10 de alta qualidade.",
    },
    {
      icon: "🚗",
      title: "Troca de Óleo",
      desc: "Serviço profissional de troca de óleo para seu veículo.",
    },
    {
      icon: "🏪",
      title: "Conveniência",
      desc: "Loja de conveniência com produtos variados.",
    },
    {
      icon: "💧",
      title: "Calibragem",
      desc: "Calibragem gratuita dos pneus.",
    },
  ];

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Header />
      <main className="pt-16">
        <HeroSection images={images} />

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-center font-['Montserrat'] text-3xl md:text-4xl font-bold text-[#7901FA] mb-8">
              Preços Atualizados
            </h2>
            <FuelPrices />
          </div>
        </section>

        <ServicesSection services={services} />
        <AboutSection imagemSobre="/images/sobre.jpeg" />
        <ContactSection />
        <section className="py-20 bg-[#7901FA]">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-['Montserrat'] text-3xl md:text-4xl font-bold text-white mb-4">
                Receba Nossas Ofertas
              </h2>
              <p className="text-white/80 mb-8">
                Cadastre-se para receber promoções exclusivas e novidades
              </p>
              <NewsletterForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
