import React from "react";
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
import imagemPosto from "./images/posto1.jpg";
import imagemPosto2 from "./images/posto2.jpg";
import imagemBanner from "./images/banner.jpg";
import imagemSobre from "./images/209327872_339480244417271_5955908138784163924_n.jpg";
import { seoConfig } from "./config/seo";

const heroImages = [imagemPosto, imagemPosto2, imagemBanner];

const services = [
  {
    icon: <Fuel className="w-12 h-12" />,
    title: "Combustível Premium",
    desc: "Gasolina e diesel de alta qualidade",
  },
  {
    icon: <Car className="w-12 h-12" />,
    title: "Troca de Óleo",
    desc: "Serviço profissional e rápido",
  },
  {
    icon: <Coffee className="w-12 h-12" />,
    title: "Conveniência",
    desc: "Loja 24h com produtos selecionados",
  },
  {
    icon: <Gauge className="w-12 h-12" />,
    title: "Calibragem de Pneus",
    desc: "Calibragem gratuita e profissional",
  },
] as const;

function App() {
  return (
    <div className="font-['Open_Sans']">
      <Helmet>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta
          name="keywords"
          content="posto de gasolina, Amargosa, combustível, troca de óleo, conveniência"
        />
        <meta property="og:title" content={seoConfig.title} />
        <meta property="og:description" content={seoConfig.description} />
        <meta property="og:image" content={imagemPosto} />
        <meta property="og:url" content={seoConfig.siteUrl} />
      </Helmet>

      <HeroSection images={heroImages} />
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
      <Footer />
    </div>
  );
}

export default App;
