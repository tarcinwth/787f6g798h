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
    <section className="relative py-20 bg-gradient-to-br from-white to-[#91A1FA]/10 dark:from-gray-900 dark:to-[#7901FA]/10 transition-colors duration-300">
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
          <h2 className="text-center font-['Montserrat'] text-3xl md:text-4xl font-bold text-[#7901FA] dark:text-[#9B4DFF] mb-12">
            Entre em Contato
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6">
              {contactInfo.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`${item.bgColor} dark:bg-opacity-20 p-3 rounded-full`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.info}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden h-[400px] sm:h-[450px] lg:h-[500px]">
              <InteractiveMap />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
