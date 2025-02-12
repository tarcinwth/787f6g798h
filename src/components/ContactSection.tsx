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
      info: "postocatitu@gmail.com",
      bgColor: "bg-[#FAB432]/10",
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#7901FA]" />,
      title: "Endereço",
      info: "R. Idalina Figueredo Batista, 406 - Amargosa, BA, 45300-000",
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
      info: "33.880.610/0001-86",
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md border border-[#91A1FA]/20 hover:shadow-lg hover:border-[#91A1FA]/50 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className={`${item.bgColor} p-3 rounded-full`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.info}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[400px]">
              <InteractiveMap />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
