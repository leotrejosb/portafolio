import { useCallback, useEffect, useRef, useState } from "react";

export function useLoader(threshold = 0.4) {
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);
  const started = useRef(false);

  const runLoader = useCallback(() => {
    if (started.current || done) return;
    started.current = true;
    const timer = setInterval(() => {
      setPct((prev) => {
        const next = Math.min(100, prev + Math.max(1, Math.round(Math.random() * 4)));
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => setDone(true), 420);
        }
        return next;
      });
    }, 55);
  }, [done]);

  useEffect(() => {
    const el = loaderRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) runLoader();
        });
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [runLoader, threshold]);

  return { loaderRef, pct, done };
}
