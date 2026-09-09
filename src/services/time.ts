import type { Lang } from "@/interfaces";

export function formatBogotaTime(lang: Lang): string {
  return new Intl.DateTimeFormat(lang === "es" ? "es-CO" : "en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "America/Bogota",
  }).format(new Date());
}
