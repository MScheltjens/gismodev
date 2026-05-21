import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ProjectGrid } from "@/components/work/ProjectGrid";
import { getAllProjects, getAllTags } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects and case studies by Mathias Scheltjens.",
};

export default function WorkPage() {
  const projects = getAllProjects();
  const tags = getAllTags();

  return (
    <div className="py-16 md:py-24">
      <Container>
        <header className="mb-12 max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            All projects
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Work from icapps, personal fullstack builds, and freelance at Gismo.dev.
          </p>
        </header>
        <ProjectGrid projects={projects} tags={tags} />
      </Container>
    </div>
  );
}
