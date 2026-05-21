export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  year: number;
  featured: boolean;
  thumbnail: string;
  links: ProjectLink[];
  content: string[];
};

export const projects: Project[] = [
  {
    slug: "knowhere",
    title: "Knowhere",
    summary:
      "Fictive city platform built as a modern full-stack monorepo with Next.js, NestJS, and Turborepo.",
    tags: ["Next.js", "NestJS", "Turborepo", "TypeScript"],
    year: 2025,
    featured: true,
    thumbnail: "/projects/bloom.svg",
    links: [
      { label: "GitHub", href: "https://github.com/MScheltjens/knowhere" },
      { label: "Case study", href: "/work/knowhere" },
    ],
    content: [
      "Knowhere is a fullstack web application for a fictional city, structured as a pnpm workspace with Turborepo. The frontend uses Next.js App Router, React, and TypeScript; the backend is NestJS with REST APIs.",
      "Focus on scalable architecture, reusable components, and real-world API integration—with production-oriented patterns for auth, typed clients, and maintainable package boundaries.",
      "Ongoing since late 2025 as a hands-on project to deepen modern frontend architecture and end-to-end TypeScript delivery.",
    ],
  },
  {
    slug: "vab-rijschool",
    title: "VAB Rijschool",
    summary:
      "Mobile-first exam web app for VAB Rijschool—React, Next.js, and TypeScript on a production customer platform.",
    tags: ["React", "Next.js", "TypeScript", "UX"],
    year: 2024,
    featured: true,
    thumbnail: "/projects/pulse.svg",
    links: [
      {
        label: "Case study",
        href: "https://icapps.com/cases/vab-rijschool",
      },
      {
        label: "Practice app",
        href: "https://kbcapp.vabrijschool.be/",
      },
      { label: "Portfolio", href: "/work/vab-rijschool" },
    ],
    content: [
      "VAB Rijschool needed a modernized, mobile-first platform for theoretical driving exam practice. icapps delivered a responsive web app used across devices and integrated into channels such as KBC Mobile.",
      "I contributed frontend development with reusable UI components, feature delivery, and close collaboration with backend teams in an agile environment.",
      "The product supports timed multiple-choice exams and a refreshed UX while keeping the codebase flexible for future content and UI updates.",
    ],
  },
  {
    slug: "de-kleine-vos",
    title: "De Kleine Vos",
    summary:
      "Production web platform for the education sector—frontend development and GraphQL at icapps.",
    tags: ["React", "GraphQL", "UX", "TypeScript"],
    year: 2024,
    featured: true,
    thumbnail: "/projects/harbor.svg",
    links: [
      { label: "Live site", href: "https://www.dekleinevos.be/" },
      { label: "Case study", href: "/work/de-kleine-vos" },
    ],
    content: [
      "De Kleine Vos is a digital platform for an education organization, built and maintained by icapps. I supported frontend development on the production site.",
      "Work included UI component structure, GraphQL integration, code reviews, and guidance to keep quality and consistency across the team.",
      "The engagement combined user-centered design with enterprise delivery—Scrum, reviews, and collaboration with backend and design stakeholders.",
    ],
  },
  {
    slug: "g-stadt",
    title: "G-Stadt",
    summary:
      "Personal fullstack project—a fictional city site with Next.js / React and a NestJS backend.",
    tags: ["Next.js", "React", "NestJS", "TypeScript"],
    year: 2024,
    featured: false,
    thumbnail: "/projects/metric.svg",
    links: [
      { label: "GitHub", href: "https://github.com/MScheltjens/g-stadt" },
      { label: "Case study", href: "/work/g-stadt" },
    ],
    content: [
      "G-Stadt is a fictional city website developed as a personal fullstack project. The stack mirrors professional setups: React on the client and NestJS for APIs and business logic.",
      "Emphasis on scalable frontend architecture, clean API integration, and a foundation that could grow without rewriting core structure.",
    ],
  },
];
