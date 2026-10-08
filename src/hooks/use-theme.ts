import { useCallback, useEffect, useState } from "react";

type Theme = "dark" | "light";
const KEY = "portfolio-theme";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem(KEY) as Theme | null;
    const next: Theme = stored === "light" || stored === "dark" ? stored : "dark";
    setTheme(next);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((t) => {
      const next = t === "dark" ? "light" : "dark";
      window.localStorage.setItem(KEY, next);
      return next;
    });
  }, []);

  return { theme, toggle };
}
