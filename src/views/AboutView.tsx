import { SectionLabel } from "@/components";
import type { Dictionary } from "@/interfaces";
import { panelCentered } from "@/lib/tw";

interface AboutViewProps {
  t: Dictionary;
}

export function AboutView({ t }: AboutViewProps) {
  return (
    <section id="about" data-screen-label="02 Sobre mí" className={`${panelCentered} border-t-[3px] border-lilac`}>
      <div className="w-full">
        <SectionLabel index="02" label={t.nav.about} accentClass="text-lilac" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,330px),1fr))] items-start gap-[clamp(28px,5vw,80px)]">
          <h2 className="m-0 text-[clamp(1.55rem,3.5vw,3.2rem)] leading-[1.1] font-normal tracking-[-0.04em] text-pretty">
            {t.aboutLead}
          </h2>
          <div className="flex flex-col gap-[18px]">
            <p className="m-0 text-[clamp(0.95rem,1.2vw,1.05rem)] leading-[1.65] text-pretty text-dim">{t.aboutP1}</p>
            <p className="m-0 text-[clamp(0.95rem,1.2vw,1.05rem)] leading-[1.65] text-pretty text-dim">{t.aboutP2}</p>
            <div className="mt-2.5 grid grid-cols-[repeat(auto-fit,minmax(135px,1fr))] gap-px border border-line bg-line">
              {t.facts.map((f) => (
                <div key={f.k} className="bg-bg px-[15px] py-4">
                  <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-dim">{f.k}</div>
                  <div className="mt-2 text-base tracking-[-0.01em]">{f.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
