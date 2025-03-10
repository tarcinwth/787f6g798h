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
      icon: <Droplet className="w-8 h-8 text-[#FA4534]" />,
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

  return (
    <section className="relative py-20 overflow-hidden">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-center font-['Montserrat'] text-3xl md:text-4xl font-bold text-[#7901FA] mb-12">
            Nossos Serviços
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center"
              >
                <div className="flex items-center justify-center mb-4 w-16 h-16 rounded-full bg-[#FAF9F9] shadow-md">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
