import Link from "next/link";
import { Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  href?: string;
}

export function EmptyState({ title, description, actionLabel, href }: EmptyStateProps) {
  return (
    <div className="rounded-[28px] border border-dashed border-border px-6 py-12 text-center">
      <Sparkles className="mx-auto h-10 w-10 text-muted-foreground" />
      <h2 className="mt-4 text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      {actionLabel && href && (
        <Button asChild className="mt-6">
          <Link href={href}>{actionLabel}</Link>
        </Button>
      )}
    </div>
  );
}
