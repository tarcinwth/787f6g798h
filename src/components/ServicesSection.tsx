import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import {
  Droplet,
  Fuel,
  Store,
  Gauge,
  Car,
  Coffee,
  CreditCard,
  Clock,
} from "lucide-react";

export function ServicesSection() {
  const { ref, isInView } = useInView();

  const services = [
    {
      icon: (
        <Droplet className="w-8 h-8 text-[#FA4534] transition-transform group-hover:scale-110" />
      ),
      title: "Combustível de Qualidade",
      desc: "Gasolina, Etanol e Diesel S10 de alta qualidade e procedência garantida.",
    },
    {
      icon: <Fuel className="w-8 h-8 text-[#FAB432]" />,
      title: "Troca de Óleo",
      desc: "Serviço profissional de troca de óleo com produtos das melhores marcas.",
    },
    {
      icon: <Store className="w-8 h-8 text-[#7901FA]" />,
      title: "Conveniência",
      desc: "Loja completa com bebidas, snacks, produtos automotivos e muito mais.",
    },
    {
      icon: <Gauge className="w-8 h-8 text-[#FA78D9]" />,
      title: "Calibragem",
      desc: "Calibragem gratuita dos pneus com equipamentos de alta precisão.",
    },
    {
      icon: <Car className="w-8 h-8 text-[#FA4534]" />,
      title: "Lavagem",
      desc: "Serviço de lavagem completa para seu veículo, deixando-o impecável.",
    },
    {
      icon: <Coffee className="w-8 h-8 text-[#FAB432]" />,
      title: "Café",
      desc: "Café fresco e quentinho para sua parada ser ainda mais agradável.",
    },
    {
      icon: <CreditCard className="w-8 h-8 text-[#7901FA]" />,
      title: "Pagamento Flexível",
      desc: "Aceitamos todos os cartões, PIX e dinheiro para sua comodidade.",
    },
    {
      icon: <Clock className="w-8 h-8 text-[#FA78D9]" />,
      title: "24 Horas",
      desc: "Atendimento 24 horas por dia, 7 dias por semana para melhor servir.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <h2 className="text-center font-['Montserrat'] text-3xl md:text-4xl font-bold text-[#7901FA] dark:text-[#9B4DFF] mb-12">
            Nossos Serviços
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400 },
                }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:rotate-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-[#7901FA] dark:group-hover:text-[#9B4DFF] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
