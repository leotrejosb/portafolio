import { useEffect, useState } from "react";
import type { Lang } from "@/interfaces";
import { applyLang, getDictionary } from "@/services";

export function useLanguage(initial: Lang = "es") {
  const [lang, setLang] = useState<Lang>(initial);

  useEffect(() => {
    applyLang(lang);
  }, [lang]);

  const t = getDictionary(lang);

  return {
    lang,
    setLang,
    setEs: () => setLang("es"),
    setEn: () => setLang("en"),
    t,
  };
}
