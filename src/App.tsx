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
import imagemPosto from "./images/posto1.jpg";
import imagemPosto2 from "./images/posto2.jpg";
import imagemBanner from "./images/banner.jpg";
import imagemSobre from "./images/209327872_339480244417271_5955908138784163924_n.jpg";

const heroImages = [imagemPosto, imagemPosto2, imagemBanner];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
  ];

  return (
    <div className="font-['Open_Sans']">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          {heroImages.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                idx === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={img}
                alt="Posto Catitú"
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
            <div className="flex gap-4 justify-center">
              <a
                href="#location"
                className="bg-[#FA4534] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#FA4534]/90 transition-colors flex items-center gap-2 shadow-lg shadow-[#FA4534]/20"
              >
                <MapPin className="w-5 h-5" /> Localização
              </a>
              <a
                href="https://www.instagram.com/posto_catitu/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-colors flex items-center gap-2 border border-white/20"
              >
                <MessageCircle className="w-5 h-5" /> Fale Conosco
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentSlide
                  ? "bg-[#FA4534] w-8"
                  : "bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-white to-[#91A1FA]/10">
        <div className="container mx-auto px-4">
          <h2 className="font-['Montserrat'] text-3xl md:text-4xl font-bold text-center text-[#7901FA] mb-12">
            Nossos Serviços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group relative bg-white/50 backdrop-blur p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#91A1FA]/20 hover:border-[#91A1FA]/50"
              >
                <div className="flex items-center gap-4">
                  <div className="text-[#7901FA] group-hover:text-[#FA4534] transition-colors">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-['Montserrat'] text-xl font-semibold text-[#7901FA]">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-[#7901FA]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="text-white">
              <h2 className="font-['Montserrat'] text-3xl md:text-4xl font-bold mb-8">
                Sobre Nós
              </h2>
              <p className="text-white/90 text-lg leading-relaxed">
                Estamos localizados entre Amargosa e Mutuípe e orgulhamo-nos de
                servir nossa comunidade com dedicação e confiança. Uma empresa
                nascida em Amargosa, com amor pelo povo desta cidade, que
                carrega o nome de um grande personagem do bairro: Rodão,
                conhecido como Seu Catitú!
              </p>
              <p className="text-white/90 text-lg leading-relaxed mt-4">
                Venha nos conhecer, estamos aguardando a sua visita.
              </p>
            </div>
            <div className="relative">
              <img
                src={imagemSobre}
                alt="Posto Catitú"
                className="rounded-xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#7901FA]/10 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="location"
        className="py-20 bg-gradient-to-br from-white to-[#91A1FA]/10"
      >
        <div className="container mx-auto px-4">
          <h2 className="font-['Montserrat'] text-3xl md:text-4xl font-bold text-center text-[#7901FA] mb-12">
            Localização e Contato
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl h-[400px] shadow-lg border border-[#91A1FA]/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.160399496156!2d-39.588833924922405!3d-13.035914387285375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x73fdd27ae190459%3A0x245ccc47bbfe0d31!2sPosto%20Catit%C3%BA!5e1!3m2!1spt-BR!2sbr!4v1738858126948!5m2!1spt-BR!2sbr"
                className="w-full h-full rounded-xl"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md border border-[#91A1FA]/20">
                  <div className="bg-[#7901FA]/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-[#7901FA]" />
                  </div>
                  <div>
                    <h3 className="font-['Montserrat'] font-semibold text-[#7901FA]">
                      Endereço
                    </h3>
                    <p className="text-gray-600">
                      R. Idalina Figueredo Batista, 406 - Amargosa, BA,
                      45300-000
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md border border-[#91A1FA]/20">
                  <div className="bg-[#7901FA]/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-[#7901FA]" />
                  </div>
                  <div>
                    <h3 className="font-['Montserrat'] font-semibold text-[#7901FA]">
                      Telefone
                    </h3>
                    <p className="text-gray-600">(75) 9 9204-1400</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md border border-[#91A1FA]/20">
                  <div className="bg-[#7901FA]/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-[#7901FA]" />
                  </div>
                  <div>
                    <h3 className="font-['Montserrat'] font-semibold text-[#7901FA]">
                      Email
                    </h3>
                    <p className="text-gray-600">postocatitu@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md border border-[#91A1FA]/20">
                  <div className="bg-[#7901FA]/10 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-[#7901FA]" />
                  </div>
                  <div>
                    <h3 className="font-['Montserrat'] font-semibold text-[#7901FA]">
                      Horário
                    </h3>
                    <p className="text-gray-600">24 horas, todos os dias</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-[#7901FA]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-['Montserrat'] text-3xl md:text-4xl font-bold text-white mb-4">
              Receba Nossas Ofertas
            </h2>
            <p className="text-white/80 mb-8">
              Cadastre-se para receber promoções exclusivas e novidades
            </p>
            <form className="flex flex-col md:flex-row gap-4 justify-center">
              <input
                type="text"
                placeholder="Seu nome"
                className="px-4 py-3 rounded-full border-2 border-transparent focus:outline-none focus:border-[#FA4534] bg-white/10 text-white placeholder:text-white/60"
              />
              <input
                type="tel"
                placeholder="Seu WhatsApp"
                className="px-4 py-3 rounded-full border-2 border-transparent focus:outline-none focus:border-[#FA4534] bg-white/10 text-white placeholder:text-white/60"
              />
              <button
                type="submit"
                className="bg-[#FA4534] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#FA4534]/90 transition-colors flex items-center gap-2 justify-center"
              >
                Cadastrar
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#7901FA] to-[#FA78D9] text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-['Montserrat'] text-xl font-bold mb-4">
                Sobre Nós
              </h3>
              <p className="text-white/80 leading-relaxed">
                Há 5 anos oferecendo serviços de qualidade e atendimento
                excepcional para nossos clientes em Amargosa.
              </p>
            </div>
            <div>
              <h3 className="font-['Montserrat'] text-xl font-bold mb-4">
                Links Rápidos
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Início
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-['Montserrat'] text-xl font-bold mb-4">
                Horário
              </h3>
              <p className="text-white/80">Segunda a Domingo</p>
              <p className="font-semibold">24 horas</p>
              <div className="mt-4">
                <p className="text-white/80">Feriados</p>
                <p className="font-semibold">Aberto normalmente</p>
              </div>
            </div>
            <div>
              <h3 className="font-['Montserrat'] text-xl font-bold mb-4">
                Redes Sociais
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/elma.rodrigues.5"
                  className="bg-white/10 p-2 rounded-full hover:bg-[#FA4534] transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/posto_catitu/"
                  className="bg-white/10 p-2 rounded-full hover:bg-[#FA4534] transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="postocatitu@gmail.com"
                  className="bg-white/10 p-2 rounded-full hover:bg-[#FA4534] transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
            <p>&copy; 2025 Posto Catitú. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
