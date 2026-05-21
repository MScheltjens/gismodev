import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

export function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      description="Tell me about your project—timeline, budget range, and what success looks like."
      className="bg-muted/40"
    >
      <div className="max-w-xl space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          I usually reply within one business day. For a faster start, include
          links to references or an existing site.
        </p>
        <Button href={`mailto:${site.email}`}>Email {site.email}</Button>
        <ul className="flex flex-wrap gap-4 pt-2">
          {site.socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
