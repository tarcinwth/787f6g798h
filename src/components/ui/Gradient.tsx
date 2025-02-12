import { motion } from "framer-motion";
import { COLORS } from "../../config/theme";

interface GradientProps {
  from: keyof typeof COLORS;
  to: keyof typeof COLORS;
  className?: string;
}

export function Gradient({ from, to, className = "" }: GradientProps) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-50 ${className}`}
      style={{
        background: `linear-gradient(to right, ${COLORS[from].light}, ${COLORS[to].light})`,
      }}
    />
  );
}
