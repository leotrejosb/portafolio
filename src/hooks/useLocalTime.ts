import { useEffect, useState } from "react";
import type { Lang } from "@/interfaces";
import { formatBogotaTime } from "@/services";

export function useLocalTime(lang: Lang, intervalMs = 20000): string {
  const [localTime, setLocalTime] = useState(() => formatBogotaTime(lang));

  useEffect(() => {
    setLocalTime(formatBogotaTime(lang));
    const id = setInterval(() => setLocalTime(formatBogotaTime(lang)), intervalMs);
    return () => clearInterval(id);
  }, [lang, intervalMs]);

  return localTime;
}
