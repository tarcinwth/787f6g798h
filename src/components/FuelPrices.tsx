import { motion } from "framer-motion";
import { Droplet } from "lucide-react";

export function FuelPrices() {
  const prices = [
    { type: "Gasolina Comum", price: "5,79" },
    { type: "Gasolina Aditivada", price: "5,89" },
    { type: "Etanol", price: "3,99" },
    { type: "Diesel S10", price: "5,99" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {prices.map((fuel, index) => (
        <motion.div
          key={fuel.type}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center gap-2 mb-2">
            <Droplet className="w-5 h-5 text-[#FA4534]" />
            <h3 className="font-semibold text-gray-700">{fuel.type}</h3>
          </div>
          <p className="text-2xl font-bold text-[#7901FA]">R$ {fuel.price}</p>
        </motion.div>
      ))}
    </div>
  );
}
