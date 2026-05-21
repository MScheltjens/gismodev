import Link from "next/link";
import { BrandName } from "@/components/BrandName";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border py-12">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium">
            <BrandName companyClassName="hover:opacity-80" />
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{site.role}</p>
        </div>
        <ul className="flex flex-wrap gap-4">
          {site.socials.map((social) => (
            <li key={social.label}>
              <Link
                href={social.href}
                className="text-sm text-muted-foreground hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted-foreground">
          © {year} {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
