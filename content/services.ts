export type Service = {
  title: string;
  description: string;
};

export const servicesSection = {
  description:
    "Fullstack and frontend development for product teams and SMBs—from concept through deployment.",
} as const;

export const services: Service[] = [
  {
    title: "Frontend applications",
    description:
      "React and Next.js features, reusable UI components, API integrations, and performance work in agile Scrum teams.",
  },
  {
    title: "Fullstack development",
    description:
      "End-to-end delivery with NestJS—REST APIs, authentication, data models, and production-ready TypeScript across the stack.",
  },
  {
    title: "Architecture & monorepos",
    description:
      "Turborepo and pnpm workspaces with clear package boundaries and structures suited to real-world products like Knowhere.",
  },
  {
    title: "Freelance engineering",
    description:
      "Tailored web solutions for small and medium businesses via Gismo.dev—frontend, backend, or full architecture from concept to deployment.",
  },
];
