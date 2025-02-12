import { motion } from "framer-motion";
import { COLORS } from "../config/theme";

export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="relative w-16 h-16">
          <motion.div
            className={`absolute inset-0 border-4 border-[${COLORS.secondary.light}] dark:border-[${COLORS.secondary.dark}] rounded-full`}
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className={`absolute inset-0 border-4 border-[${COLORS.primary.light}] dark:border-[${COLORS.primary.dark}] rounded-full`}
            animate={{
              rotate: -360,
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        <p className="text-gray-600 dark:text-gray-300 font-medium">
          Abastecendo...
        </p>
      </motion.div>
    </div>
  );
}
