import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-shadow hover:shadow-md">
      <Link href={`/work/${project.slug}`} className="relative aspect-[16/10] block">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold tracking-tight">
            <Link
              href={`/work/${project.slug}`}
              className="hover:underline underline-offset-4"
            >
              {project.title}
            </Link>
          </h3>
          <span className="shrink-0 text-sm text-muted-foreground">
            {project.year}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
        <div className="mt-auto flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
    </article>
  );
}
