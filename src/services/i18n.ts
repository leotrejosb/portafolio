import type { Dictionary, Lang, NavKey, SectionId } from "@/interfaces";

export const SECTION_IDS: SectionId[] = [
  "hero",
  "about",
  "stack",
  "work",
  "threed",
  "certs",
  "exp",
  "edu",
  "contact",
];

export const NAV_KEYS: NavKey[] = [
  "about",
  "stack",
  "work",
  "threed",
  "certs",
  "exp",
  "edu",
  "contact",
];

const es: Dictionary = {
  navRole: "Frontend Lead Engineer",
  themeLabel: "Cambiar modo claro / oscuro",
  role: "Frontend Lead Engineer",
  heroStatus: "Disponible para proyectos remotos",
  heroMeta: "Pereira, Colombia — Remoto",
  located: "Ubicado en Pereira, Colombia",
  heroRoleLines: "Frontend Lead Engineer & Fullstack",
  heroLine:
    "Construyo interfaces en React, Next.js y TypeScript, con base en ciberseguridad y automatización con IA como diferencial.",
  scroll: "Desliza",
  cv: "Descargar CV",
  workNote: "Selección 2024 — 2026",
  previewTag: "Adelanto",
  notify: "Avísame",
  emailPlaceholder: "tu@correo.com",
  sentMsg: "Listo. Te escribo cuando esté publicado.",
  sendingMsg: "Enviando…",
  sendError: "No se pudo enviar. Intenta de nuevo.",
  footer: "Portafolio 2026 — Vite · React · Django",
  nav: {
    about: "Sobre mí",
    stack: "Stack",
    work: "Proyectos",
    threed: "Próximamente: modelados 3D",
    certs: "Certificados",
    exp: "Experiencia",
    edu: "Educación",
    contact: "Contacto",
  },
  aboutLead:
    "Ingeniero fullstack con inclinación al frontend: dueño de la entrega de punta a punta, del diseño de la API a la integración compleja en pantalla.",
  aboutP1:
    "Actualmente soy Frontend Lead Engineer en la Universidad Católica de Pereira, donde soy el único ingeniero de una plataforma de gestión documental e investigación: desde el diseño de la API en Laravel/PostgreSQL hasta el frontend en React, Next.js y TypeScript que la consume.",
  aboutP2:
    "Trabajo cómodo cerca de sistemas legacy y de terceros: integración de APIs REST, pipelines de datos automatizados con n8n y Gemini, y depuración cruzada desde la base de datos hasta la UI.",
  facts: [
    { k: "Experiencia", v: "2.5+ años" },
    { k: "Base", v: "Pereira, CO" },
    { k: "Modalidad", v: "Remoto" },
    { k: "Idiomas", v: "ES / EN" },
  ],
  stack: [
    {
      k: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "shadcn/ui"],
    },
    {
      k: "Backend",
      items: ["Laravel", "Node.js", "Django Ninja", "PostgreSQL", "MySQL", "Diseño de APIs REST"],
    },
    {
      k: "Cloud & DevOps",
      items: ["AWS", "Docker", "CI/CD", "Coolify", "Oracle Cloud", "Hetzner"],
    },
    {
      k: "IA & automatización",
      items: ["Gemini API", "n8n", "Python (ML)", "Desarrollo asistido por IA"],
    },
  ],
  projects: [
    {
      n: "01",
      name: "Plataforma de gestión de investigación",
      kind: "Plataforma interna académica y de gestión documental (GD). Único frontend engineer: marcación de zonas de firma en PDF con Canvas API sobre react-pdf-viewer y módulo de asistencia por QR.",
      stack: "React · Next.js · TypeScript · Tailwind · Laravel · PostgreSQL",
      year: "2026",
      cursor: "Interno",
    },
    {
      n: "02",
      name: "Defensa anti-phishing para PYMES",
      kind: "Proyecto de grado (especialización UTP). Modelo de doble barrera con cuatro algoritmos entrenados —Random Forest, SVM, XGBoost y CNN-LSTM— para detección de phishing en URLs; Random Forest como modelo ganador. Autor único.",
      stack: "Python · scikit-learn · XGBoost · Keras",
      year: "2026",
      cursor: "Académico",
    },
    {
      n: "03",
      name: "Automatización con IA — El Mono Bandido",
      kind: "Freelance para grupo de restaurantes: validación de facturas con Gemini Vision, detección de anomalías en inventario y reportes automáticos por WhatsApp. Desarrollador único.",
      stack: "Gemini Vision · n8n · PostgreSQL · Node.js",
      year: "2025 — 2026",
      cursor: "Freelance",
    },
    {
      n: "04",
      name: "HuellaAgent",
      kind: "Agente de bandeja de Windows que integra lectores de huella DigitalPersona. Desarrollador único; publicado como pieza de portafolio técnico.",
      stack: "C# · .NET · DigitalPersona SDK",
      year: "2025",
      cursor: "LinkedIn",
    },
  ],
  threedTitle: "En construcción — próximamente proyectos 3D interactivos.",
  threedBody:
    "Estoy montando una sección de modelados y escenas 3D en el navegador. Déjame tu correo y te aviso el día que esté en línea. Sin lista de correos, sin ruido.",
  certs: [
    { year: "2026", name: "Cisco Certified CyberOps Associate", issuer: "Cisco" },
    { year: "2025", name: "Google UX/UI Design Professional Certificate", issuer: "Google" },
    { year: "2025", name: "Google Cybersecurity Professional Certificate", issuer: "Google" },
    { year: "2025", name: "AWS Academy Cloud Security Builder", issuer: "AWS Academy" },
    { year: "2024", name: "AWS Academy Cloud Foundations", issuer: "AWS Academy" },
  ],
  exp: [
    {
      when: "Ene 2026 — Presente",
      role: "Frontend Lead Engineer (Fullstack)",
      org: "Universidad Católica de Pereira",
      body: "Único ingeniero del módulo de gestión documental y de la plataforma de investigación, de punta a punta. Sistema de zonas de firma en PDF con Canvas API y mapeo de coordenadas; corrección del pipeline de envío Laravel/React por incompatibilidad FormData/PUT.",
    },
    {
      when: "Ene 2025 — Ene 2026",
      role: "Frontend Lead",
      org: "Cerebria",
      body: "Único frontend engineer: desarrollo de punta a punta en Next.js 15/16 y Vite. Diseño de flujos de autenticación y estándares de protección de datos; arquitectura modular por componentes que mejoró la reutilización de código en un 40%.",
    },
    {
      when: "Jul 2025 — Ene 2026",
      role: "Fullstack Developer",
      org: "El Mono Bandido",
      body: "Features fullstack integrando APIs REST con interfaces responsive. Optimización de consultas PostgreSQL y lógica de backend, con una mejora del 25% en tiempos de respuesta.",
    },
  ],
  edu: [
    {
      when: "2025 — 2026",
      name: "Especialización en Informática y Comunicaciones",
      org: "Universidad Tecnológica de Pereira (UTP)",
    },
    {
      when: "2019 — 2025",
      name: "Ingeniería de Sistemas",
      org: "Universidad Tecnológica de Pereira (UTP)",
    },
  ],
  contactLead: "Abierto a oportunidades alta responsabilidad.",
};

const en: Dictionary = {
  navRole: "Frontend Lead Engineer",
  themeLabel: "Toggle light / dark mode",
  role: "Frontend Lead Engineer",
  heroStatus: "Available for remote work",
  heroMeta: "Pereira, Colombia — Remote",
  located: "Located in Pereira, Colombia",
  heroRoleLines: "Frontend Lead Engineer & Fullstack",
  heroLine:
    "I build interfaces in React, Next.js and TypeScript, with a cybersecurity background and AI automation as my edge.",
  scroll: "Scroll",
  cv: "Download CV",
  workNote: "Selected 2024 — 2026",
  previewTag: "Preview",
  notify: "Notify me",
  emailPlaceholder: "you@email.com",
  sentMsg: "Done. I'll write when it ships.",
  sendingMsg: "Sending…",
  sendError: "Couldn't send. Please try again.",
  footer: "Portfolio 2026 — Vite · React · Django",
  nav: {
    about: "About",
    stack: "Stack",
    work: "Work",
    threed: "Coming soon: 3D models",
    certs: "Certifications",
    exp: "Experience",
    edu: "Education",
    contact: "Contact",
  },
  aboutLead:
    "Fullstack engineer leaning frontend: end-to-end ownership, from API design to complex on-screen integration.",
  aboutP1:
    "I'm currently Frontend Lead Engineer at Universidad Católica de Pereira, sole engineer on a document-management and research platform: from Laravel/PostgreSQL API design to the React, Next.js and TypeScript frontend consuming it.",
  aboutP2:
    "I'm comfortable working close to legacy and third-party systems: REST API integration, automated data pipelines with n8n and Gemini, and cross-stack debugging from database to UI.",
  facts: [
    { k: "Experience", v: "2.5+ years" },
    { k: "Based in", v: "Pereira, CO" },
    { k: "Setup", v: "Remote" },
    { k: "Languages", v: "ES / EN" },
  ],
  stack: [
    {
      k: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "shadcn/ui"],
    },
    {
      k: "Backend",
      items: ["Laravel", "Node.js", "Django Ninja", "PostgreSQL", "MySQL", "REST API design"],
    },
    {
      k: "Cloud & DevOps",
      items: ["AWS", "Docker", "CI/CD", "Coolify", "Oracle Cloud", "Hetzner"],
    },
    {
      k: "AI & automation",
      items: ["Gemini API", "n8n", "Python (ML)", "AI-assisted dev"],
    },
  ],
  projects: [
    {
      n: "01",
      name: "Research management platform",
      kind: "Internal academic and document-management (GD) platform. Sole frontend engineer: PDF signature-zone marking with the Canvas API over react-pdf-viewer, plus a QR attendance module.",
      stack: "React · Next.js · TypeScript · Tailwind · Laravel · PostgreSQL",
      year: "2026",
      cursor: "Internal",
    },
    {
      n: "02",
      name: "Anti-phishing defense for SMBs",
      kind: "Graduation project (UTP specialization). Double-barrier model training four algorithms —Random Forest, SVM, XGBoost and CNN-LSTM— for URL phishing detection; Random Forest won. Sole author.",
      stack: "Python · scikit-learn · XGBoost · Keras",
      year: "2026",
      cursor: "Academic",
    },
    {
      n: "03",
      name: "AI automation — El Mono Bandido",
      kind: "Freelance for a restaurant group: invoice validation with Gemini Vision, inventory anomaly detection and automated WhatsApp reporting. Sole developer.",
      stack: "Gemini Vision · n8n · PostgreSQL · Node.js",
      year: "2025 — 2026",
      cursor: "Freelance",
    },
    {
      n: "04",
      name: "HuellaAgent",
      kind: "Windows tray agent integrating DigitalPersona fingerprint readers. Sole developer; published as a technical portfolio piece.",
      stack: "C# · .NET · DigitalPersona SDK",
      year: "2025",
      cursor: "LinkedIn",
    },
  ],
  threedTitle: "Under construction — interactive 3D projects coming soon.",
  threedBody:
    "I'm building a section for browser-based 3D models and scenes. Leave your email and I'll tell you the day it goes live. No mailing list, no noise.",
  certs: [
    { year: "2026", name: "Cisco Certified CyberOps Associate", issuer: "Cisco" },
    { year: "2025", name: "Google UX/UI Design Professional Certificate", issuer: "Google" },
    { year: "2025", name: "Google Cybersecurity Professional Certificate", issuer: "Google" },
    { year: "2025", name: "AWS Academy Cloud Security Builder", issuer: "AWS Academy" },
    { year: "2024", name: "AWS Academy Cloud Foundations", issuer: "AWS Academy" },
  ],
  exp: [
    {
      when: "Jan 2026 — Present",
      role: "Frontend Lead Engineer (Fullstack)",
      org: "Universidad Católica de Pereira",
      body: "Sole engineer owning the document-management module and research platform end-to-end. PDF signature-zone system with the Canvas API and custom coordinate mapping; fixed a Laravel/React submission pipeline bug caused by FormData/PUT incompatibility.",
    },
    {
      when: "Jan 2025 — Jan 2026",
      role: "Frontend Lead",
      org: "Cerebria",
      body: "Sole frontend engineer, shipping production features on Next.js 15/16 and Vite. Designed authentication flows and data-protection standards; architected a modular component-based frontend that improved code reuse by 40%.",
    },
    {
      when: "Jul 2025 — Jan 2026",
      role: "Fullstack Developer",
      org: "El Mono Bandido",
      body: "Fullstack features integrating REST APIs with responsive interfaces. Optimized PostgreSQL queries and backend logic, improving server response times by 25%.",
    },
  ],
  edu: [
    {
      when: "2025 — 2026",
      name: "Specialization in ICT",
      org: "Universidad Tecnológica de Pereira (UTP)",
    },
    {
      when: "2019 — 2025",
      name: "B.S. in Systems Engineering",
      org: "Universidad Tecnológica de Pereira (UTP)",
    },
  ],
  contactLead: "Open to high-ownership roles.",
};

export const dictionaries: Record<Lang, Dictionary> = { es, en };

export function getDictionary(lang: Lang): Dictionary {
  return dictionaries[lang];
}

export function panelLabel(lang: Lang, idx: number): string {
  const t = getDictionary(lang);
  return (
    [
      "Leonardo Trejos",
      t.nav.about,
      t.nav.stack,
      t.nav.work,
      "3D",
      t.nav.certs,
      t.nav.exp,
      t.nav.edu,
      t.nav.contact,
    ][idx] ?? ""
  );
}

export function navLabel(lang: Lang, key: NavKey): string {
  if (key === "threed") return "3D";
  return getDictionary(lang).nav[key];
}
