import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { Fuel, Droplet, Car, Clock } from "lucide-react";

export function PricesSection() {
  const { ref, isInView } = useInView();
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
      icon: <Fuel className="w-6 h-6 text-[#FA4534] dark:text-[#FF6B5D]" />,
      name: "Gasolina",
      price: "R$ 5,89",
      bgColor: "bg-[#FA4534]/10 dark:bg-[#FA4534]/5",
    },
    {
      icon: <Droplet className="w-6 h-6 text-[#7901FA] dark:text-[#9B4DFF]" />,
      name: "Etanol",
      price: "R$ 3,89",
      bgColor: "bg-[#7901FA]/10 dark:bg-[#7901FA]/5",
    },
    {
      icon: <Car className="w-6 h-6 text-[#FAB432] dark:text-[#FFD280]" />,
      name: "Diesel S10",
      price: "R$ 6,19",
      bgColor: "bg-[#FAB432]/10 dark:bg-[#FAB432]/5",
    },
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-center font-['Montserrat'] text-2xl md:text-3xl font-bold text-[#7901FA] dark:text-[#9B4DFF] mb-3">
            Preços Atualizados
          </h2>

          <div className="flex items-center justify-center gap-2 mb-6 text-gray-600 dark:text-gray-400">
            <Clock className="w-4 h-4" />
            <span className="text-sm">
              Última atualização: {formatDateTime(lastUpdate)}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {prices.map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`${item.bgColor} w-12 h-12 rounded-lg flex items-center justify-center`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-gray-800 dark:text-gray-100">
                      {item.name}
                    </h3>
                    <p className="text-2xl font-bold text-[#7901FA] dark:text-[#9B4DFF]">
                      {item.price}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-center text-gray-500 dark:text-gray-400 mt-4 text-xs"
          >
            * Preços sujeitos a alteração sem aviso prévio
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
