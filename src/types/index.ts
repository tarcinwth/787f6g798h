import { ReactNode } from "react";

export interface NavItem {
  label: string;
  href: string;
}

export type Theme = "light" | "dark";

export interface ServiceItem {
  icon: ReactNode;
  title: string;
  desc: string;
}

export interface ContactInfo {
  icon: ReactNode;
  title: string;
  info: string;
  bgColor: string;
}

export interface PriceItem {
  icon: ReactNode;
  name: string;
  price: string;
  bgColor: string;
}

export interface GradientProps {
  from: keyof typeof import("../config/theme").COLORS;
  to: keyof typeof import("../config/theme").COLORS;
  className?: string;
}

export interface AboutSectionProps {
  imagemSobre: string;
}

export interface MobileMenuProps {
  navItems: NavItem[];
  isScrolled: boolean;
  onClose: () => void;
}
