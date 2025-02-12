import React, { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Fuel,
  Car,
  Coffee,
  Gauge,
  Star,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Facebook,
  Instagram,
  Mail,
  ArrowRight,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { NewsletterForm } from "./components/NewsletterForm";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Header } from "./components/Header";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { FuelPrices } from "./components/FuelPrices";
import banner1 from "./assets/banner1.jpeg";
import banner2 from "./assets/banner2.jpeg";
import banner3 from "./assets/banner3.jpeg";
import imagemSobre from "./assets/sobre.jpeg";
import { seoConfig } from "./config/seo";

const heroImages = [banner1, banner2, banner3];

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
] as const;

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const images = [banner1, banner2, banner3];

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Header />
      <main className="pt-16">
        <Helmet>
          <title>{seoConfig.title}</title>
          <meta name="description" content={seoConfig.description} />
          <meta
            name="keywords"
            content="posto de gasolina, Amargosa, combustível, troca de óleo, conveniência"
          />
          <meta property="og:title" content={seoConfig.title} />
          <meta property="og:description" content={seoConfig.description} />
          <meta property="og:image" content={banner1} />
          <meta property="og:url" content={seoConfig.siteUrl} />
        </Helmet>

        <HeroSection images={images} />

        {/* Seção de Preços dos Combustíveis */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-center font-['Montserrat'] text-3xl md:text-4xl font-bold text-[#7901FA] mb-8">
              Preços Atualizados
            </h2>
            <FuelPrices />
          </div>
        </section>

        <ServicesSection services={services} />
        <AboutSection imagemSobre={imagemSobre} />
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
