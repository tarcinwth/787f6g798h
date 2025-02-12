import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export type Theme = "light" | "dark";

export interface ServiceItem {
  Icon: LucideIcon;
  title: string;
  desc: string;
  color: "primary" | "secondary" | "accent" | "tertiary";
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
