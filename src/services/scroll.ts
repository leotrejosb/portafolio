export function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function tweenScrollLeft(
  el: HTMLElement,
  target: number,
  duration = 620,
): () => void {
  let timer: ReturnType<typeof setInterval> | null = null;
  const from = el.scrollLeft;
  const dist = target - from;
  if (Math.abs(dist) < 2) return () => undefined;

  const t0 = Date.now();
  timer = setInterval(() => {
    const p = Math.min(1, (Date.now() - t0) / duration);
    el.scrollLeft = from + dist * easeOutCubic(p);
    if (p >= 1 && timer) {
      clearInterval(timer);
      timer = null;
    }
  }, 16);

  return () => {
    if (timer) clearInterval(timer);
  };
}

export function sectionScrollTarget(scrollEl: HTMLElement, id: string): number {
  const sec = document.getElementById(id);
  if (!sec) return scrollEl.scrollLeft;
  return Math.min(scrollEl.scrollWidth - scrollEl.clientWidth, sec.offsetLeft);
}

export function stepScrollTarget(scrollEl: HTMLElement, dir: number): number {
  const w = scrollEl.clientWidth;
  const cur = Math.round(scrollEl.scrollLeft / w);
  const next = Math.max(0, Math.min(8, cur + dir));
  return Math.min(scrollEl.scrollWidth - w, next * w);
}

export function scrollProgress(scrollEl: HTMLElement): { prog: number; idx: number } {
  const w = scrollEl.clientWidth;
  const max = scrollEl.scrollWidth - w;
  const prog = max > 0 ? scrollEl.scrollLeft / max : 0;
  const idx = Math.min(8, Math.round(scrollEl.scrollLeft / w));
  return { prog, idx };
}
