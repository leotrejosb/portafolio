# Leo Trejos Portfolio

Portafolio modular en **Vite + React + TypeScript + Tailwind CSS**.

## Estructura

```
src/
  components/   # UI compartida (Header, Cursor, ProgressRail…)
  hooks/        # Lógica reutilizable
  interfaces/   # Tipos TypeScript
  services/     # i18n, scroll, tema, tiempo
  views/        # Secciones / pantallas
  lib/          # utilidades (clases Tailwind compartidas)
  index.css     # entrada Tailwind (@theme + tokens)
```

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

Assets estáticos en `public/` (`leo-portrait.jpeg`, `Leonardo-Trejos-CV.pdf`).
