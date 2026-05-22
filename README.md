# Portfolio — Freelancer boilerplate

Next.js 16 portfolio site with static TypeScript content. One-page home with anchored sections plus `/work` and case study pages.
This is a small project I use to explore Cursor, exploring heavily AI-enhanced developping!

## Stack

- [Next.js 16](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS v4
- Static content in `content/`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` before deploying.

## Customize content

| File | What to edit |
|------|----------------|
| `content/site.ts` | Name, role, tagline, email, nav, SEO |
| `content/services.ts` | Freelancer service offerings |
| `content/projects.ts` | Projects and case study copy |

Add a project by appending to `projects` in `content/projects.ts`. Each entry needs a unique `slug`; the page `/work/[slug]` is generated automatically.

Replace thumbnails in `public/projects/` (SVG or images).

## Project structure

```
app/              Routes (home, work, case studies)
components/       UI, layout, sections
content/          Static site data
lib/content.ts    Helpers for projects
public/projects/  Project images
```

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — run production build
- `npm run lint` — ESLint

## Deploy

Deploy to [Vercel](https://vercel.com) or any Node host. Set `NEXT_PUBLIC_SITE_URL` to your production URL.
