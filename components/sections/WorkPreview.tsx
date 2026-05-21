import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { getFeaturedProjects } from "@/lib/content";

export function WorkPreview() {
  const featured = getFeaturedProjects();

  return (
    <Section
      id="work"
      title="Selected work"
      description="Selected client and personal work from icapps, VAB Rijschool, and fullstack builds."
    >
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      <p className="mt-10">
        <Link
          href="/work"
          className="text-sm font-medium underline underline-offset-4 hover:opacity-80"
        >
          View all projects →
        </Link>
      </p>
    </Section>
  );
}
