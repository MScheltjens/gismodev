"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { type Project } from "@/content/projects";

type ProjectGridProps = {
  projects: Project[];
  tags: string[];
};

export function ProjectGrid({ projects, tags }: ProjectGridProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!activeTag) return projects;
    return projects.filter((p) => p.tags.includes(activeTag));
  }, [projects, activeTag]);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter by tag">
        <button
          type="button"
          onClick={() => setActiveTag(null)}
          className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
            activeTag === null
              ? "bg-foreground text-background"
              : "border border-border text-muted-foreground hover:text-foreground"
          }`}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActiveTag(tag)}
            className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
              activeTag === tag
                ? "bg-foreground text-background"
                : "border border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      {filtered.length === 0 ? (
        <p className="text-muted-foreground">No projects match this filter.</p>
      ) : null}
    </div>
  );
}
