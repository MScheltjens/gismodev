import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  getProjectBySlug,
  getProjectSlugs,
} from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const externalLinks = project.links.filter((l) => l.href.startsWith("http"));

  return (
    <article className="py-16 md:py-24">
      <Container>
        <Link
          href="/work"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          ← All projects
        </Link>

        <header className="mt-8 max-w-3xl">
          <p className="text-sm text-muted-foreground">{project.year}</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{project.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </header>

        <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-2xl border border-border">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
          />
        </div>

        <div className="prose-custom mt-12 max-w-2xl space-y-6 text-muted-foreground leading-relaxed">
          {project.content.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>

        {externalLinks.length > 0 ? (
          <div className="mt-10 flex flex-wrap gap-3">
            {externalLinks.map((link) => (
              <Button key={link.href} href={link.href} external>
                {link.label}
              </Button>
            ))}
          </div>
        ) : null}
      </Container>
    </article>
  );
}
