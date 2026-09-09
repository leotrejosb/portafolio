import type { CursorState } from "@/interfaces";

interface CursorProps {
  cur: CursorState;
}

export function Cursor({ cur }: CursorProps) {
  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[95] flex items-center justify-center rounded-full bg-hot font-mono text-[9px] uppercase tracking-[0.14em] text-hero-ink mix-blend-difference transition-[width,height,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{
        transform: `translate(${cur.x - 42}px, ${cur.y - 42}px)`,
        width: cur.on ? 84 : 0,
        height: cur.on ? 84 : 0,
        opacity: cur.on ? 1 : 0,
      }}
    >
      {cur.label}
    </div>
  );
}
