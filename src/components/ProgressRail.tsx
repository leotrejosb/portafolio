interface ProgressRailProps {
  prog: number;
  panelNum: string;
  panelLabel: string;
}

export function ProgressRail({ prog, panelNum, panelLabel }: ProgressRailProps) {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-[70] h-0.5 bg-line">
        <div
          className="h-full bg-hot transition-[width] duration-[180ms] ease-linear"
          style={{ width: `${(prog * 100).toFixed(2)}%` }}
        />
      </div>
      <div className="fixed right-[clamp(20px,5vw,72px)] bottom-3 z-[71] flex items-baseline gap-2.5 whitespace-nowrap border border-line bg-bg px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-dim">
        <span className="text-ink">{panelNum}</span>
        <span>/ 09</span>
        <span className="text-ink">{panelLabel}</span>
      </div>
    </>
  );
}
