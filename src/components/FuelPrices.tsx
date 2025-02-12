import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { Fuel, Droplet, Car, Clock } from "lucide-react";

export function FuelPrices() {
  const { ref, isInView } = useInView();

  // Simular data e hora da última atualização
  const lastUpdate = new Date("2024-01-20T08:30:00");

  const formatDateTime = (date: Date) => {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  const prices = [
    {
      icon: <Fuel className="w-8 h-8 text-[#FA4534]" />,
      name: "Gasolina",
      price: "R$ 5,89",
      bgColor: "bg-[#FA4534]/10 dark:bg-[#FA4534]/5",
    },
    {
      icon: <Droplet className="w-8 h-8 text-[#7901FA]" />,
      name: "Etanol",
      price: "R$ 3,89",
      bgColor: "bg-[#7901FA]/10 dark:bg-[#7901FA]/5",
    },
    {
      icon: <Car className="w-8 h-8 text-[#FAB432]" />,
      name: "Diesel S10",
      price: "R$ 6,19",
      bgColor: "bg-[#FAB432]/10 dark:bg-[#FAB432]/5",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-center font-['Montserrat'] text-3xl md:text-4xl font-bold text-[#7901FA] dark:text-[#9B4DFF] mb-4">
            Preços Atualizados
          </h2>

          <div className="flex items-center justify-center gap-2 mb-12 text-gray-600 dark:text-gray-400">
            <Clock className="w-4 h-4" />
            <span className="text-sm">
              Última atualização: {formatDateTime(lastUpdate)}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {prices.map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`${item.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {item.name}
                </h3>
                <p className="text-3xl font-bold text-[#7901FA] dark:text-[#9B4DFF]">
                  {item.price}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-center text-gray-600 dark:text-gray-400 mt-8 text-sm"
          >
            * Preços sujeitos a alteração sem aviso prévio
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
