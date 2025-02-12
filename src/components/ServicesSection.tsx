import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { SERVICES } from "../config/services";
import { ANIMATIONS } from "../config/theme";

export function ServicesSection() {
  const { ref, isInView } = useInView();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
          <h2 className="text-center font-['Montserrat'] text-3xl md:text-4xl font-bold text-primary-light dark:text-primary-dark mb-12">
            Nossos Serviços
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <motion.div
                key={service.title}
                variants={ANIMATIONS.slideUp}
                whileHover={{
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400 },
                }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:rotate-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors">
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
