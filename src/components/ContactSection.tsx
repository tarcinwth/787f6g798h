import { InteractiveMap } from "./InteractiveMap";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Building2,
  CreditCard,
} from "lucide-react";

export function ContactSection() {
  const { ref, isInView } = useInView();

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-[#FA4534]" />,
      title: "Telefone",
      info: "(75) 99204-1400",
      bgColor: "bg-[#FA4534]/10",
    },
    {
      icon: <Mail className="w-6 h-6 text-[#FAB432]" />,
      title: "Email",
      info: "contato@postocatitu.com.br",
      bgColor: "bg-[#FAB432]/10",
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#7901FA]" />,
      title: "Endereço",
      info: "BR 116, KM 486 - Amargosa, BA",
      bgColor: "bg-[#7901FA]/10",
    },
    {
      icon: <Clock className="w-6 h-6 text-[#FA78D9]" />,
      title: "Horário",
      info: "24 horas - Todos os dias",
      bgColor: "bg-[#FA78D9]/10",
    },
    {
      icon: <Building2 className="w-6 h-6 text-[#FA4534]" />,
      title: "CNPJ",
      info: "XX.XXX.XXX/0001-XX",
      bgColor: "bg-[#FA4534]/10",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-[#FAB432]" />,
      title: "Formas de Pagamento",
      info: "Dinheiro, Cartões e PIX",
      bgColor: "bg-[#FAB432]/10",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-br from-white to-[#91A1FA]/10 overflow-hidden"
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute -right-40 top-20 w-80 h-80 bg-[#FA4534]/5 rounded-full blur-3xl" />
        <div className="absolute -left-40 bottom-20 w-80 h-80 bg-[#FAB432]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-center font-['Montserrat'] text-3xl md:text-4xl font-bold text-[#7901FA] mb-12">
            Entre em Contato
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {contactInfo.map((item) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`${item.bgColor} p-3 rounded-full`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.info}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Envie uma Mensagem
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nome
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#7901FA] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#7901FA] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Mensagem
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#7901FA] focus:border-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#7901FA] to-[#FA78D9] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <InteractiveMap />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
