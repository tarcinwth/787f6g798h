import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MobileMenu } from "./MobileMenu";
import { useTheme } from "../contexts/ThemeContext";
import { useScroll } from "../hooks/useScroll";
import { ANIMATIONS } from "../config/theme";
import type { NavItem } from "../types";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isScrolled = useScroll(20);

  const navItems: NavItem[] = [
    { label: "Início", href: "#" },
    { label: "Serviços", href: "#services" },
    { label: "Sobre", href: "#about" },
    { label: "Localização", href: "#location" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg"
          : "bg-black/30 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <img
              src="/images/logo.png"
              alt="Logo Posto Catitú"
              className="w-8 h-8"
            />
            <span
              className={`text-2xl font-bold ${
                isScrolled
                  ? "text-primary-light dark:text-primary-dark"
                  : "text-white"
              }`}
            >
              Posto Catitú
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`font-medium hover:text-primary-light dark:hover:text-primary-dark transition-colors relative group ${
                  isScrolled ? "text-gray-700 dark:text-gray-300" : "text-white"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-light dark:bg-primary-dark transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}

            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isScrolled
                  ? "hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "hover:bg-white/10"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {theme === "dark" ? (
                <Sun
                  className={`w-5 h-5 ${
                    isScrolled ? "text-gray-700 dark:text-white" : "text-white"
                  }`}
                />
              ) : (
                <Moon
                  className={`w-5 h-5 ${
                    isScrolled ? "text-gray-700 dark:text-white" : "text-white"
                  }`}
                />
              )}
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isScrolled
                  ? "hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "hover:bg-white/10"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {theme === "dark" ? (
                <Sun
                  className={`w-5 h-5 ${
                    isScrolled ? "text-gray-700 dark:text-white" : "text-white"
                  }`}
                />
              ) : (
                <Moon
                  className={`w-5 h-5 ${
                    isScrolled ? "text-gray-700 dark:text-white" : "text-white"
                  }`}
                />
              )}
            </motion.button>

            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled
                  ? "hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "hover:bg-white/10"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X
                  className={
                    isScrolled ? "text-gray-700 dark:text-white" : "text-white"
                  }
                />
              ) : (
                <Menu
                  className={
                    isScrolled ? "text-gray-700 dark:text-white" : "text-white"
                  }
                />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            navItems={navItems}
            isScrolled={isScrolled}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  );
}
