import { Section } from "@/components/layout/Section";
import { services } from "@/content/services";

export function Services() {
  return (
    <Section
      id="services"
      title="Services"
      description="Focused offerings for teams that need design and engineering in one place."
      className="bg-muted/40"
    >
      <ul className="grid gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <li
            key={service.title}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
