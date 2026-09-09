import { SectionLabel } from "@/components";
import type { Dictionary } from "@/interfaces";
import { panelCentered } from "@/lib/tw";

interface WorkViewProps {
  t: Dictionary;
  onProjectEnter: (label: string) => void;
  onProjectLeave: () => void;
}

export function WorkView({ t, onProjectEnter, onProjectLeave }: WorkViewProps) {
  return (
    <section id="work" data-screen-label="04 Proyectos" className={`${panelCentered} border-t-[3px] border-peach`}>
      <div className="w-full">
        <SectionLabel index="04" label={t.nav.work} accentClass="text-peach" trailing={t.workNote} />
        <div className="flex flex-col border-b border-line" onMouseLeave={onProjectLeave}>
          {t.projects.map((p) => (
            <div
              key={p.n}
              onMouseEnter={() => onProjectEnter(p.cursor)}
              className="grid cursor-none grid-cols-[40px_minmax(0,1.35fr)_minmax(0,1.5fr)_64px] items-baseline gap-[clamp(10px,2.2vw,30px)] border-t border-line py-[clamp(14px,2.3vh,24px)] transition-[padding-left,background-color] duration-[550ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-panel hover:pl-4"
            >
              <span className="font-mono text-[10px] text-dim">{p.n}</span>
              <h3 className="m-0 text-[clamp(1.15rem,2.9vw,2.3rem)] leading-[1.05] font-normal tracking-[-0.038em] text-pretty">
                {p.name}
              </h3>
              <div className="flex flex-col gap-1.5">
                <span className="text-[0.92rem] leading-normal text-dim">{p.kind}</span>
                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-dim">{p.stack}</span>
              </div>
              <span className="text-right font-mono text-[10px] text-dim">{p.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
