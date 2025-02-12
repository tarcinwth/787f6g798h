import { COLORS } from "../config/theme";

export const getColorClass = (
  color: keyof typeof COLORS,
  variant: "light" | "dark"
) => {
  return COLORS[color][variant];
};
