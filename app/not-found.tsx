import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
      <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">404</p>
      <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">The page is out of reach.</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        The route you’re looking for doesn’t exist in this demo storefront. Return to the catalog and continue exploring.
      </p>
      <Button asChild className="mt-6">
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
}
