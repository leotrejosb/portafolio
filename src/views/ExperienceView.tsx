import { SectionLabel } from "@/components";
import type { Dictionary } from "@/interfaces";
import { panelCentered } from "@/lib/tw";

interface ExperienceViewProps {
  t: Dictionary;
}

export function ExperienceView({ t }: ExperienceViewProps) {
  return (
    <section id="exp" data-screen-label="07 Experiencia" className={`${panelCentered} border-t-[3px] border-mint`}>
      <div className="w-full">
        <SectionLabel index="07" label={t.nav.exp} accentClass="text-mint" />
        <div className="flex flex-col border-b border-line">
          {t.exp.map((e) => (
            <div
              key={`${e.org}-${e.when}`}
              className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] items-baseline gap-y-3 gap-x-[clamp(14px,3vw,40px)] border-t border-line py-[clamp(16px,3vh,28px)]"
            >
              <span className="font-mono text-[10px] tracking-[0.12em] text-dim">{e.when}</span>
              <div>
                <h3 className="m-0 text-[clamp(1.1rem,2.1vw,1.75rem)] leading-[1.12] font-normal tracking-[-0.032em] text-pretty">
                  {e.role}
                </h3>
                <span className="mt-2 block text-[0.92rem] text-dim">{e.org}</span>
              </div>
              <p className="m-0 text-[0.96rem] leading-relaxed text-pretty text-dim">{e.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
