interface SectionLabelProps {
  index: string;
  label: string;
  accentClass: string;
  trailing?: string;
}

export function SectionLabel({ index, label, accentClass, trailing }: SectionLabelProps) {
  return (
    <div
      className={`mb-[clamp(22px,4vh,44px)] flex flex-wrap items-baseline font-mono text-[10px] uppercase tracking-[0.22em] text-dim ${
        trailing ? "justify-between gap-[22px]" : "gap-3"
      }`}
    >
      <div className="flex gap-3">
        <span className={accentClass}>{index}</span>
        <span>{label}</span>
      </div>
      {trailing ? <span>{trailing}</span> : null}
    </div>
  );
}
