import { motion } from "framer-motion";

interface MobileMenuProps {
  navItems: Array<{ label: string; href: string }>;
  isScrolled: boolean;
  onClose: () => void;
}

export function MobileMenu({ navItems, isScrolled, onClose }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`md:hidden ${
        isScrolled
          ? "bg-white dark:bg-gray-900"
          : "bg-black/90 backdrop-blur-lg"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <ul className="space-y-4">
          {navItems.map((item, index) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={item.href}
                onClick={onClose}
                className={`block py-2 text-lg font-medium relative group ${
                  isScrolled ? "text-gray-700 dark:text-gray-300" : "text-white"
                }`}
              >
                <span className="relative">
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FA4534] transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
}
