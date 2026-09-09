interface WipeTransitionProps {
  wipe: number;
}

const wipeMap: Record<number, string> = {
  0: "scaleX(0) translateX(0)",
  1: "scaleX(1)",
  2: "scaleX(0) translateX(100%)",
};

export function WipeTransition({ wipe }: WipeTransitionProps) {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[90] origin-left bg-panel transition-transform duration-[620ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
      style={{ transform: wipeMap[wipe] ?? wipeMap[0] }}
    />
  );
}
