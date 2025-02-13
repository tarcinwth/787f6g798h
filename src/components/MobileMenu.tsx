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
          ? "bg-black/90 backdrop-blur-lg"
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
                className={`block py-2 text-lg font-medium ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#FA4534]"
                    : "text-gray-700 hover:text-[#FA4534]"
                }`}
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
}
