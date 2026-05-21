import { BrandName } from "@/components/BrandName";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <p className="mb-4 text-sm font-medium text-accent">{site.availability}</p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl md:leading-[1.1]">
          <BrandName
            companyClassName="text-muted-foreground hover:text-foreground"
          />
          <span className="block text-muted-foreground">{site.role}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          {site.tagline}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/#contact">Get in touch</Button>
          <Button href="/#work" variant="secondary">
            View work
          </Button>
        </div>
        <p className="mt-8 text-sm text-muted-foreground">{site.location}</p>
      </Container>
    </section>
  );
}
