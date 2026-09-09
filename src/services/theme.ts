import type { Theme } from "@/interfaces";

export function applyTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme;
}

export function applyLang(lang: "es" | "en"): void {
  document.documentElement.dataset.lang = lang;
  document.documentElement.lang = lang;
}
