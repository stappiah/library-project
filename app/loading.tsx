import { SectionSkeleton } from "@/components/loading-skeleton";

export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="space-y-4">
        <div className="h-5 w-32 animate-pulse rounded-full bg-muted" />
        <div className="h-10 w-72 animate-pulse rounded-full bg-muted" />
      </div>
      <div className="mt-8">
        <SectionSkeleton />
      </div>
    </div>
  );
}
