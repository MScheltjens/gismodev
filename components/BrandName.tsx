import Link from "next/link";
import { site } from "@/content/site";

type BrandNameProps = {
  className?: string;
  nameClassName?: string;
  companyClassName?: string;
  linkNameToHome?: boolean;
};

export function BrandName({
  className,
  nameClassName,
  companyClassName,
  linkNameToHome = false,
}: BrandNameProps) {
  const name = linkNameToHome ? (
    <Link href="/" className={nameClassName ?? "hover:opacity-80"}>
      {site.name}
    </Link>
  ) : (
    <span className={nameClassName}>{site.name}</span>
  );

  return (
    <span className={className}>
      {name}
      <span className="text-muted-foreground"> | </span>
      <Link
        href={site.company.href}
        className={companyClassName ?? "hover:opacity-80"}
        target="_blank"
        rel="noopener noreferrer"
      >
        {site.company.name}
      </Link>
    </span>
  );
}
