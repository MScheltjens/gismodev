import { Section } from "@/components/layout/Section";
import { about } from "@/content/about";

export function About() {
  return (
    <Section id="about" title="About" description={about.description}>
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Skills
          </h3>
          <ul className="grid grid-cols-2 gap-2">
            {about.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-lg border border-border bg-surface px-3 py-2 text-sm"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
