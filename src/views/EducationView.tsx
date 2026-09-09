import { SectionLabel } from "@/components";
import type { Dictionary } from "@/interfaces";
import { panelCentered } from "@/lib/tw";

interface EducationViewProps {
  t: Dictionary;
}

export function EducationView({ t }: EducationViewProps) {
  return (
    <section id="edu" data-screen-label="08 Educación" className={`${panelCentered} border-t-[3px] border-sky`}>
      <div className="w-full">
        <SectionLabel index="08" label={t.nav.edu} accentClass="text-sky" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-[clamp(20px,4vw,60px)]">
          {t.edu.map((e) => (
            <div key={`${e.name}-${e.when}`} className="flex flex-col gap-2.5 border-t border-line pt-[18px]">
              <span className="font-mono text-[10px] tracking-[0.16em] text-dim">{e.when}</span>
              <h3 className="m-0 text-[clamp(1.15rem,2.3vw,1.9rem)] leading-[1.12] font-normal tracking-[-0.032em] text-pretty">
                {e.name}
              </h3>
              <span className="text-[0.92rem] text-dim">{e.org}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
