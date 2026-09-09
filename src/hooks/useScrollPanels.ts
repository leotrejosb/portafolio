import { useCallback, useEffect, useRef, useState } from "react";
import {
  scrollProgress,
  sectionScrollTarget,
  stepScrollTarget,
  tweenScrollLeft,
} from "@/services";

function canScrollVertically(panel: HTMLElement): boolean {
  const { overflowY } = getComputedStyle(panel);
  if (overflowY !== "auto" && overflowY !== "scroll" && overflowY !== "overlay") {
    return false;
  }
  return panel.scrollHeight - panel.clientHeight > 40;
}

export function useScrollPanels() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [prog, setProg] = useState(0);
  const [idx, setIdx] = useState(0);
  const [wipe, setWipe] = useState(0);
  const lastStep = useRef(0);
  const cancelTween = useRef<(() => void) | null>(null);

  const sync = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const next = scrollProgress(el);
    setProg(next.prog);
    setIdx(next.idx);
  }, []);

  const tweenTo = useCallback(
    (target: number) => {
      const el = scrollRef.current;
      if (!el) return;
      cancelTween.current?.();
      cancelTween.current = tweenScrollLeft(el, target);
      const pulse = setInterval(sync, 80);
      setTimeout(() => clearInterval(pulse), 700);
    },
    [sync],
  );

  const step = useCallback(
    (dir: number) => {
      const el = scrollRef.current;
      if (!el) return;
      tweenTo(stepScrollTarget(el, dir));
    },
    [tweenTo],
  );

  const goTo = useCallback(
    (id: string) => {
      setWipe(1);
      setTimeout(() => {
        const el = scrollRef.current;
        if (el) tweenTo(sectionScrollTarget(el, id));
        setWipe(2);
        setTimeout(() => setWipe(0), 620);
      }, 620);
    },
    [tweenTo],
  );

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      const panel = (e.target as HTMLElement | null)?.closest?.(
        "[data-scroll] > section",
      ) as HTMLElement | null;

      if (panel && canScrollVertically(panel)) {
        const atTop = panel.scrollTop <= 0;
        const atEnd = panel.scrollTop >= panel.scrollHeight - panel.clientHeight - 1;
        if ((e.deltaY > 0 && !atEnd) || (e.deltaY < 0 && !atTop)) return;
      }

      e.preventDefault();
      const now = Date.now();
      if (now - lastStep.current < 460) return;
      lastStep.current = now;
      step(e.deltaY > 0 ? 1 : -1);
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };

    const onScroll = () => sync();

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", sync);
    const poll = setInterval(sync, 90);
    sync();

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", sync);
      clearInterval(poll);
      cancelTween.current?.();
    };
  }, [step, sync]);

  return { scrollRef, prog, idx, wipe, goTo, step };
}
