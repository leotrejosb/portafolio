import {
  Cursor,
  Header,
  ProgressRail,
  WipeTransition,
} from "@/components";
import {
  useCursor,
  useHeaderHeight,
  useLanguage,
  useLoader,
  useLocalTime,
  useScrollPanels,
  useTheme,
} from "@/hooks";
import { NAV_KEYS, navLabel, panelLabel } from "@/services";
import {
  AboutView,
  CertsView,
  ContactView,
  EducationView,
  ExperienceView,
  HeroView,
  StackView,
  ThreeDView,
  WorkView,
} from "@/views";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const { lang, setEs, setEn, t } = useLanguage();
  const { cur, curOn, curOff } = useCursor();
  const localTime = useLocalTime(lang);
  const headerRef = useHeaderHeight();
  const { scrollRef, prog, idx, wipe, goTo, step } = useScrollPanels();
  const { loaderRef, pct, done } = useLoader();

  const navItems = NAV_KEYS.map((key) => ({
    key,
    label: navLabel(lang, key),
  }));

  return (
    <div className="relative h-dvh overflow-hidden bg-bg font-sans text-ink transition-[background-color,color] duration-[550ms] ease-in-out">
      <WipeTransition wipe={wipe} />
      <Cursor cur={cur} />
      <ProgressRail
        prog={prog}
        panelNum={String(idx + 1).padStart(2, "0")}
        panelLabel={panelLabel(lang, idx)}
      />
      <Header
        headerRef={headerRef}
        t={t}
        lang={lang}
        theme={theme}
        navItems={navItems}
        onNav={goTo}
        onEs={setEs}
        onEn={setEn}
        onToggleTheme={toggleTheme}
      />

      <div
        ref={scrollRef}
        data-scroll=""
        className="flex h-full flex-row overflow-x-auto overflow-y-hidden snap-x snap-proximity [scrollbar-width:none] [scroll-behavior:auto]"
      >
        <HeroView t={t} localTime={localTime} onNext={() => step(1)} />
        <AboutView t={t} />
        <StackView t={t} />
        <WorkView t={t} onProjectEnter={curOn} onProjectLeave={curOff} />
        <ThreeDView t={t} lang={lang} loaderRef={loaderRef} pct={pct} done={done} />
        <CertsView t={t} />
        <ExperienceView t={t} />
        <EducationView t={t} />
        <ContactView t={t} />
      </div>
    </div>
  );
}
