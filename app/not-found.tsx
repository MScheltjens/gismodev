import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="py-24">
      <Container className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight">404</h1>
        <p className="mt-4 text-muted-foreground">
          This page could not be found.
        </p>
        <div className="mt-8">
          <Button href="/">Back home</Button>
        </div>
        <p className="mt-4">
          <Link href="/work" className="text-sm underline underline-offset-4">
            View projects
          </Link>
        </p>
      </Container>
    </div>
  );
}
