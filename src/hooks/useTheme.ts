import { useEffect, useState } from "react";
import type { Theme } from "@/interfaces";
import { applyTheme } from "@/services";

export function useTheme(initial: Theme = "dark") {
  const [theme, setTheme] = useState<Theme>(initial);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, setTheme, toggleTheme };
}
