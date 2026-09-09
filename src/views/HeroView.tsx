import type { Dictionary } from "@/interfaces";

interface HeroViewProps {
  t: Dictionary;
  localTime: string;
  onNext?: () => void;
}

export function HeroView({ t, localTime, onNext }: HeroViewProps) {
  return (
    <section
      id="hero"
      data-screen-label="01 Hero"
      className="relative grid h-full min-h-0 w-screen shrink-0 snap-start grid-cols-[minmax(0,1fr)_minmax(0,auto)_minmax(0,1fr)] items-stretch gap-x-[clamp(14px,3vw,40px)] overflow-hidden border-t-[3px] border-lilac bg-[#C1B9AE] px-[clamp(20px,5vw,72px)] pt-[calc(var(--hdr,130px)+clamp(14px,3vh,30px))] pb-[clamp(96px,17vh,200px)]"
    >
      <div className="z-[3] flex max-w-[700px] min-w-0 flex-col items-start justify-start gap-5">
        <div className="animate-leo-fade-delayed flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-hero-muted">
          <span className="size-[7px] shrink-0 animate-leo-blink rounded-full bg-hero-ink" />
          <span>{t.heroStatus}</span>
        </div>

        <div className="animate-leo-fade-late flex max-w-full items-center gap-3.5 rounded-full bg-hero-ink py-[11px] pr-[13px] pl-5 text-hero">
          <span className="min-w-0 text-[1.5rem] leading-[1.25]">{t.located}</span>
          <span className="flex size-[54px] shrink-0 items-center justify-center rounded-full bg-[rgba(222,216,207,0.16)] font-mono text-[11px]">
            {localTime}
          </span>
        </div>

        <span className="animate-leo-drift text-[50px] text-hero-ink">↘</span>
        <p className="m-0 text-[clamp(5rem,3vw,3rem)] leading-[1.12] tracking-[-0.03em] text-pretty text-hero-ink">
          {t.heroRoleLines}
        </p>
        <button
          type="button"
          onClick={onNext}
          className="mt-3 flex cursor-pointer items-center gap-2.5 border-0 bg-transparent p-0 font-mono text-[22px] uppercase tracking-[0.22em] text-hero-muted transition-opacity hover:opacity-70"
        >
          <span>{t.scroll}</span>
          <span className="block h-0.5 w-10 bg-hero-ink" />
        </button>
      </div>

      <img
        src={`${import.meta.env.BASE_URL}leo-portrait.jpeg`}
        alt="Leonardo Trejos"
        className="pointer-events-none absolute top-[calc(var(--hdr,60px))] left-[max(50vw,560px)] z-[2] h-[min(900px,100vh)] w-[min(720px,70vw)] animate-leo-rise object-cover object-[50%_10%]"
      />

      <div className="pointer-events-none absolute bottom-[0.5vw] left-0 z-[4] w-full overflow-hidden mix-blend-difference">
        <div className="flex w-max animate-leo-marquee">
          <span className="block pr-[0.18em] text-[clamp(4rem,15vw,15rem)] leading-[1.1] font-medium tracking-[0.05em] whitespace-nowrap text-white">
            Leonardo Trejos — Leonardo Trejos —{" "}
          </span>
          <span className="block pr-[0.18em] text-[clamp(4rem,15vw,15rem)] leading-[1.1] font-medium tracking-[0.05em] whitespace-nowrap text-white">
            Leonardo Trejos — Leonardo Trejos —{" "}
          </span>
        </div>
      </div>
    </section>
  );
}
