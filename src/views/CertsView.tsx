import { SectionLabel } from "@/components";
import type { Dictionary } from "@/interfaces";
import { panelCentered } from "@/lib/tw";

interface CertsViewProps {
  t: Dictionary;
}

export function CertsView({ t }: CertsViewProps) {
  return (
    <section id="certs" data-screen-label="06 Certificados" className={`${panelCentered} border-t-[3px] border-sky`}>
      <div className="w-full">
        <SectionLabel index="06" label={t.nav.certs} accentClass="text-sky" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,250px),1fr))] gap-px border border-line bg-line">
          {t.certs.map((c) => (
            <div
              key={`${c.year}-${c.name}`}
              className="flex min-h-[180px] flex-col gap-3 border-t-2 border-transparent bg-bg p-[clamp(18px,2.4vw,28px)] transition-colors duration-[400ms] hover:border-sky hover:bg-panel"
            >
              <span className="font-mono text-[10px] tracking-[0.16em] text-dim">{c.year}</span>
              <h3 className="m-0 text-[1.2rem] leading-[1.22] font-normal tracking-[-0.025em] text-pretty">{c.name}</h3>
              <span className="mt-auto text-[0.88rem] text-dim">{c.issuer}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
