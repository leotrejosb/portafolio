import { useState, type FormEvent, type RefObject } from "react";
import { SectionLabel } from "@/components";
import type { Dictionary, Lang } from "@/interfaces";
import { panelCentered } from "@/lib/tw";
import { submitNotifyEmail } from "@/services";

interface ThreeDViewProps {
  t: Dictionary;
  lang: Lang;
  loaderRef: RefObject<HTMLDivElement | null>;
  pct: number;
  done: boolean;
}

export function ThreeDView({ t, lang, loaderRef, pct, done }: ThreeDViewProps) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setError(false);
    try {
      await submitNotifyEmail(email.trim());
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  const loaderLabel = done
    ? lang === "es"
      ? "Proceso detenido"
      : "Process halted"
    : lang === "es"
      ? "Compilando modelos"
      : "Compiling models";

  return (
    <section
      id="threed"
      data-screen-label="05 Próximamente 3D"
      className={`${panelCentered} border-t-[3px] border-lilac bg-panel bg-[repeating-linear-gradient(45deg,rgba(201,190,238,0.18)_0_1px,transparent_1px_13px)] transition-[background-color] duration-[550ms]`}
    >
      <div
        ref={loaderRef}
        className="mx-auto w-full max-w-[1120px] border border-line bg-bg p-[clamp(22px,4.5vw,60px)] transition-[background-color] duration-[550ms]"
      >
        <SectionLabel index="05" label={t.nav.threed} accentClass="text-lilac" trailing={t.previewTag} />
        <div className="mt-[clamp(28px,7vh,72px)] font-mono">
          <div className="flex flex-wrap items-baseline justify-between gap-[18px]">
            <span className="text-[clamp(0.78rem,1.3vw,0.95rem)] uppercase tracking-[0.12em] text-dim">
              {loaderLabel}
            </span>
            <span className="text-[clamp(2.4rem,8.5vw,6.5rem)] leading-[0.9] font-medium tracking-[-0.05em]">
              {String(pct).padStart(3, "0")}%
            </span>
          </div>
          <div className="mt-5 h-0.5 overflow-hidden bg-line">
            <div className="h-full bg-lilac transition-[width] duration-[140ms] ease-linear" style={{ width: `${pct}%` }} />
          </div>
        </div>
        <div
          className="mt-[clamp(24px,5vh,46px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-end gap-[clamp(20px,4vw,56px)] transition-opacity duration-[800ms]"
          style={{ opacity: done ? 1 : 0.14 }}
        >
          <h2 className="m-0 text-[clamp(1.45rem,3.2vw,2.8rem)] leading-[1.06] font-normal tracking-[-0.04em] text-pretty">
            {t.threedTitle}
          </h2>
          <div className="flex flex-col gap-4">
            <p className="m-0 text-base leading-relaxed text-pretty text-dim">{t.threedBody}</p>
            {!sent ? (
              <>
                <form onSubmit={onSubmit} className="flex items-center gap-3 border-b border-line pb-[9px]">
                  <input
                    type="email"
                    name="email"
                    required
                    disabled={sending}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.emailPlaceholder}
                    className="min-w-0 flex-1 border-0 bg-transparent py-1.5 font-mono text-[0.88rem] tracking-[0.04em] text-ink outline-none disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={sending}
                    className="cursor-pointer border-0 bg-hot px-3.5 py-2 font-mono text-[9px] uppercase tracking-[0.2em] text-hero-ink transition-opacity duration-300 hover:opacity-70 disabled:cursor-wait disabled:opacity-60"
                  >
                    {sending ? t.sendingMsg : t.notify}
                  </button>
                </form>
                {error ? (
                  <p className="m-0 font-mono text-[10px] uppercase tracking-[0.14em] text-peach">{t.sendError}</p>
                ) : null}
              </>
            ) : (
              <p className="m-0 border-b border-hot py-2.5 font-mono text-[10px] uppercase tracking-[0.16em]">
                {t.sentMsg}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
