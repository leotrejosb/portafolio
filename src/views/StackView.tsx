import { SectionLabel } from "@/components";
import type { Dictionary } from "@/interfaces";
import { panelCentered } from "@/lib/tw";

interface StackViewProps {
  t: Dictionary;
}

export function StackView({ t }: StackViewProps) {
  return (
    <section id="stack" data-screen-label="03 Stack" className={`${panelCentered} border-t-[3px] border-mint`}>
      <div className="w-full">
        <SectionLabel index="03" label={t.nav.stack} accentClass="text-mint" />
        <div className="flex flex-col border-b border-line">
          {t.stack.map((g) => (
            <div
              key={g.k}
              className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] items-baseline gap-y-2.5 gap-x-[clamp(16px,4vw,48px)] border-t border-line py-[clamp(16px,2.6vh,26px)]"
            >
              <div className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-dim">
                <span className="size-2 bg-mint" />
                {g.k}
              </div>
              <div className="col-span-2 flex flex-wrap gap-x-6 gap-y-2 text-[clamp(1rem,1.9vw,1.55rem)] tracking-[-0.028em]">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="border-b border-transparent pb-0.5 transition-colors duration-[400ms] hover:border-hot"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
