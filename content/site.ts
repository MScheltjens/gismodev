export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export const site = {
  name: "Mathias Scheltjens",
  company: {
    name: "Gismo.dev",
    href: "https://gismo.dev",
  },
  role: "Frontend-focused Fullstack Developer",
  tagline:
    "I build scalable, maintainable web applications with React and Next.js—clean architecture, readable code, and user-centered design.",
  email: "mathias.scheltjens@gmail.com",
  location: "Hamburg, Germany",
  availability:
    "Open to fullstack & frontend roles — Hamburg · on-site or hybrid",
  socials: [
    { label: "GitHub", href: "https://github.com/MScheltjens" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/m-scheltjens",
    },
    {
      label: "XING",
      href: "https://www.xing.com/profile/Mathias_Scheltjens",
    },
  ] satisfies SocialLink[],
  nav: [
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Contact", href: "/#contact" },
  ] satisfies NavItem[],
  metadata: {
    title: "Mathias Scheltjens | Gismo.dev — Fullstack Developer",
    description:
      "Portfolio of Mathias Scheltjens (Gismo.dev), frontend-focused fullstack developer in Hamburg. React, Next.js, TypeScript, and NestJS.",
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  },
} as const;
