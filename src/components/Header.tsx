import { MobileMenu } from "./MobileMenu";
import { motion } from "framer-motion";
import { navigationLinks } from "../config/navigation";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold text-[#7901FA]"
          >
            Posto Catitú
          </motion.a>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            {navigationLinks.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-[#FA4534] transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Menu Mobile */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
