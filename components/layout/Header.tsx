"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandName } from "@/components/BrandName";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <BrandName
          className="text-sm font-semibold tracking-tight"
          linkNameToHome
          nameClassName="hover:opacity-80"
          companyClassName="hover:opacity-80"
        />

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            <title>{open ? "Close menu" : "Open menu"}</title>
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </Container>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-border md:hidden"
          aria-label="Mobile"
        >
          <Container className="flex flex-col gap-1 py-4">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
