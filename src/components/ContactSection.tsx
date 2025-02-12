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
import { COLORS, ANIMATIONS } from "../config/theme";
import type { ContactInfo } from "../types";

export function ContactSection() {
  const { ref, isInView } = useInView();

  const contactInfo: ContactInfo[] = [
    {
      icon: <Phone className={`w-6 h-6 text-[${COLORS.secondary.light}]`} />,
      title: "Telefone",
      info: "(75) 99204-1400",
      bgColor: `bg-[${COLORS.secondary.light}]/10`,
    },
    {
      icon: <Mail className={`w-6 h-6 text-[${COLORS.accent.light}]`} />,
      title: "Email",
      info: "postocatitu@gmail.com",
      bgColor: `bg-[${COLORS.accent.light}]/10`,
    },
    {
      icon: <MapPin className={`w-6 h-6 text-[${COLORS.primary.light}]`} />,
      title: "Endereço",
      info: "R. Idalina Figueredo Batista, 406 - Amargosa, BA, 45300-000",
      bgColor: `bg-[${COLORS.primary.light}]/10`,
    },
    {
      icon: <Clock className={`w-6 h-6 text-[${COLORS.tertiary.light}]`} />,
      title: "Horário",
      info: "24 horas - Todos os dias",
      bgColor: `bg-[${COLORS.tertiary.light}]/10`,
    },
    {
      icon: (
        <Building2 className={`w-6 h-6 text-[${COLORS.secondary.light}]`} />
      ),
      title: "CNPJ",
      info: "33.880.610/0001-86",
      bgColor: `bg-[${COLORS.secondary.light}]/10`,
    },
    {
      icon: <CreditCard className={`w-6 h-6 text-[${COLORS.accent.light}]`} />,
      title: "Formas de Pagamento",
      info: "Dinheiro, Cartões e PIX",
      bgColor: `bg-[${COLORS.accent.light}]/10`,
    },
  ];

  return (
    <section className="relative py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white dark:from-gray-900 to-transparent" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute -right-40 top-20 w-80 h-80 bg-[#FA4534]/5 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute -left-40 bottom-20 w-80 h-80 bg-[#FAB432]/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          {...ANIMATIONS.slideUp}
          animate={isInView ? "animate" : "initial"}
          className="max-w-6xl mx-auto"
        >
          <h2
            className={`text-center font-['Montserrat'] text-3xl md:text-4xl font-bold text-[${COLORS.primary.light}] dark:text-[${COLORS.primary.dark}] mb-8`}
          >
            Entre em Contato
          </h2>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  {...ANIMATIONS.slideUp}
                  animate={isInView ? "animate" : "initial"}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg p-4 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`${item.bgColor} dark:bg-opacity-10 p-2 rounded-full`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 dark:text-gray-100 text-sm">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {item.info}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              {...ANIMATIONS.slideUp}
              animate={isInView ? "animate" : "initial"}
              transition={{ delay: 0.3 }}
              className="bg-gray-50/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden h-[400px] lg:h-[450px] border border-gray-100 dark:border-gray-700"
            >
              <InteractiveMap />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
