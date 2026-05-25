export function ProductSkeleton() {
  return (
    <div className="space-y-4 rounded-[28px] border border-white/10 bg-white/80 p-4 dark:bg-zinc-950/70">
      <div className="h-48 animate-pulse rounded-[24px] bg-muted" />
      <div className="h-4 w-2/3 animate-pulse rounded-full bg-muted" />
      <div className="h-3 w-full animate-pulse rounded-full bg-muted" />
      <div className="h-3 w-5/6 animate-pulse rounded-full bg-muted" />
      <div className="flex gap-2">
        <div className="h-10 flex-1 animate-pulse rounded-full bg-muted" />
        <div className="h-10 w-10 animate-pulse rounded-full bg-muted" />
      </div>
    </div>
  );
}

export function SectionSkeleton() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <ProductSkeleton key={index} />
      ))}
    </div>
  );
}
