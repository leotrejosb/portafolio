import type { RefObject } from "react";
import type { Dictionary, Lang, NavItem, Theme } from "@/interfaces";

interface HeaderProps {
  headerRef: RefObject<HTMLElement | null>;
  t: Dictionary;
  lang: Lang;
  theme: Theme;
  navItems: NavItem[];
  onNav: (id: string) => void;
  onEs: () => void;
  onEn: () => void;
  onToggleTheme: () => void;
}

export function Header({
  headerRef,
  t,
  lang,
  theme,
  navItems,
  onNav,
  onEs,
  onEn,
  onToggleTheme,
}: HeaderProps) {
  const themeGlyph =
    theme === "dark" ? (lang === "es" ? "Claro" : "Light") : lang === "es" ? "Oscuro" : "Dark";

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-[60] flex flex-wrap items-center justify-between gap-5 border-b border-line bg-[color-mix(in_oklab,var(--bg)_78%,transparent)] px-[clamp(20px,5vw,72px)] py-[clamp(16px,2.4vw,26px)] backdrop-blur-[14px]"
    >
      <div className="flex items-baseline gap-3">
        <span className="text-[1.3rem] tracking-[-0.01em]">Leo Trejos</span>
        <span className="font-mono text-[16px] uppercase tracking-[0.18em] text-dim">{t.navRole}</span>
      </div>

      <nav className="flex flex-wrap items-center gap-[clamp(10px,1.6vw,22px)]">
        {navItems.map((n) => (
          <button
            key={n.key}
            type="button"
            onClick={() => onNav(n.key)}
            className="cursor-pointer border-0 border-b border-transparent bg-transparent py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-dim transition-[color,border-color,letter-spacing] duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-hot hover:tracking-[0.22em] hover:text-ink"
          >
            {n.label}
          </button>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <div className="flex border border-line font-mono text-[10px] tracking-[0.12em]">
          <button
            type="button"
            onClick={onEs}
            className={`cursor-pointer border-0 px-2.5 py-1.5 transition-colors duration-300 ${
              lang === "es" ? "bg-hot text-hero-ink" : "bg-transparent text-dim"
            }`}
          >
            ES
          </button>
          <button
            type="button"
            onClick={onEn}
            className={`cursor-pointer border-0 px-2.5 py-1.5 transition-colors duration-300 ${
              lang === "en" ? "bg-hot text-hero-ink" : "bg-transparent text-dim"
            }`}
          >
            EN
          </button>
        </div>
        <button
          type="button"
          onClick={onToggleTheme}
          title={t.themeLabel}
          className="cursor-pointer border border-line bg-transparent px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-dim transition-colors duration-300 hover:border-hot hover:text-ink"
        >
          {themeGlyph}
        </button>
      </div>
    </header>
  );
}
