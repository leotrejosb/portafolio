import { SectionLabel } from "@/components";
import type { Dictionary } from "@/interfaces";
import { panel } from "@/lib/tw";

interface ContactViewProps {
  t: Dictionary;
}

export function ContactView({ t }: ContactViewProps) {
  return (
    <section
      id="contact"
      data-screen-label="09 Contacto"
      className={`${panel} grid grid-rows-[1fr_auto] gap-[30px] border-t-[3px] border-hot`}
    >
      <div className="flex flex-col justify-center">
        <SectionLabel index="09" label={t.nav.contact} accentClass="text-hot" />
        <p className="mb-[clamp(20px,4vh,44px)] max-w-[30ch] text-[clamp(1.6rem,4.4vw,3.4rem)] leading-[1.04] tracking-[-0.045em] text-pretty">
          {t.contactLead}
        </p>
        <div className="flex flex-wrap items-center gap-y-3 gap-x-[clamp(14px,3vw,40px)]">
          <a
            href="mailto:leonardo.trejos@hotmail.com"
            className="border-b border-line pb-1 text-[clamp(1.05rem,2.4vw,1.9rem)] tracking-[-0.03em] transition-colors duration-[400ms] hover:border-hot"
          >
            leonardo.trejos@hotmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/leonardotrejos"
            target="_blank"
            rel="noreferrer"
            className="border-b border-transparent pb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-dim transition-colors duration-300 hover:border-hot hover:text-ink"
          >
            LinkedIn
          </a>
          <a
            href="tel:+573216982181"
            className="border-b border-transparent pb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-dim transition-colors duration-300 hover:border-hot hover:text-ink"
          >
            +57 321 698 2181
          </a>
          <a
            href={`${import.meta.env.BASE_URL}Leonardo-Trejos-CV.pdf`}
            download="Leonardo-Trejos-CV.pdf"
            className="bg-hot px-5 py-3.5 font-mono text-[10px] uppercase tracking-[0.2em] text-hero-ink transition-opacity duration-300 hover:opacity-70"
          >
            {t.cv}
          </a>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-5 border-t border-line pt-[18px] font-mono text-[9px] uppercase tracking-[0.18em] text-dim">
        <span>Pereira, Colombia · UTC−5</span>
        <span>{t.footer}</span>
      </div>
    </section>
  );
}
