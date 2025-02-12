import { useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";

export function useSystemTheme() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches && theme === "light") {
        toggleTheme();
      } else if (!e.matches && theme === "dark") {
        toggleTheme();
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme, toggleTheme]);
}
