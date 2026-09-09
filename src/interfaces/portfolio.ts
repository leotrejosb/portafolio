export type Lang = "es" | "en";
export type Theme = "dark" | "light";

export interface Fact {
  k: string;
  v: string;
}

export interface StackGroup {
  k: string;
  items: string[];
}

export interface Project {
  n: string;
  name: string;
  kind: string;
  stack: string;
  year: string;
  cursor: string;
}

export interface Cert {
  year: string;
  name: string;
  issuer: string;
}

export interface Experience {
  when: string;
  role: string;
  org: string;
  body: string;
}

export interface Education {
  when: string;
  name: string;
  org: string;
}

export interface NavLabels {
  about: string;
  stack: string;
  work: string;
  threed: string;
  certs: string;
  exp: string;
  edu: string;
  contact: string;
}

export interface Dictionary {
  navRole: string;
  themeLabel: string;
  role: string;
  heroStatus: string;
  heroMeta: string;
  located: string;
  heroRoleLines: string;
  heroLine: string;
  scroll: string;
  cv: string;
  workNote: string;
  previewTag: string;
  notify: string;
  emailPlaceholder: string;
  sentMsg: string;
  footer: string;
  nav: NavLabels;
  aboutLead: string;
  aboutP1: string;
  aboutP2: string;
  facts: Fact[];
  stack: StackGroup[];
  projects: Project[];
  threedTitle: string;
  threedBody: string;
  certs: Cert[];
  exp: Experience[];
  edu: Education[];
  contactLead: string;
}

export type SectionId =
  | "hero"
  | "about"
  | "stack"
  | "work"
  | "threed"
  | "certs"
  | "exp"
  | "edu"
  | "contact";

export type NavKey = Exclude<SectionId, "hero">;

export interface CursorState {
  x: number;
  y: number;
  on: boolean;
  label: string;
}

export interface NavItem {
  key: NavKey;
  label: string;
}
