export const COLORS = {
  primary: {
    light: "#7901FA",
    dark: "#9B4DFF",
  },
  secondary: {
    light: "#FA4534",
    dark: "#FF6B5D",
  },
  accent: {
    light: "#FAB432",
    dark: "#FFD280",
  },
  tertiary: {
    light: "#FA78D9",
    dark: "#FF9BE6",
  },
} as const;

export const ANIMATIONS = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },
  slideIn: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  },
} as const;
