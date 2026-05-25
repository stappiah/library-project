import Link from "next/link";

import { CategoryCard } from "@/components/category-card";
import { categories } from "@/lib/mock-data";

export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Categories</p>
        <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Shop by mood and use case</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          From the studio to the commute, each category is curated to feel premium, practical, and easy to explore.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>

      <div className="mt-10 rounded-[28px] border border-white/10 bg-white/80 p-6 dark:bg-zinc-950/70">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Need help deciding?</p>
            <h2 className="mt-2 text-xl font-semibold">Tell us your routine and we’ll suggest the best fit.</h2>
          </div>
          <Link href="/shop" className="inline-flex text-sm font-semibold text-foreground">
            Browse all products →
          </Link>
        </div>
      </div>
    </div>
  );
}
