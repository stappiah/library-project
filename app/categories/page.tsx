import Link from "next/link";
<<<<<<< HEAD
import { CategoryCard } from "@/components/sections/category-card";
import { ProductGrid } from "@/components/sections/product-grid";
import { getCategories, getProducts } from "@/lib/services/catalog-service";
import type { Category, Product } from "@/types/ecommerce";

export default async function CategoriesPage() {
  let categories = [] as Category[];
  let products = [] as Product[];
  let fetchError: string | null = null;

  try {
    [categories, products] = await Promise.all([
      getCategories(),
      getProducts({}),
    ]);
  } catch (error) {
    fetchError = error instanceof Error ? error.message : String(error);
    console.error("Categories page failed to load data:", error);
  }

  if (fetchError) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <h1 className="text-3xl font-bold text-red-800">Unable to load categories</h1>
          <p className="mt-4 text-base text-red-700">
            There was a problem fetching categories and products from the backend.
          </p>
          <p className="mt-3 text-sm text-red-600">{fetchError}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Categories</p>
        <h1 className="mt-3 text-3xl font-bold text-zinc-950 dark:text-white">A premium map of every collection</h1>
        <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          Explore collections from active vendors and curated subject areas.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
=======

import { CategoryCard } from "@/components/category-card";
import { categories } from "@/lib/mock-data";

export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Categories</p>
        <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Browse by department, course, and material type</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          From digital textbooks to lab manuals and professor notes, each category is built to help you find the right campus resource.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
>>>>>>> 19b5c50d966c1226387a48a84837ce46eed2d57d
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>

<<<<<<< HEAD
      <div className="mt-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Best sellers</p>
            <h2 className="mt-3 text-2xl font-bold text-zinc-950 dark:text-white">Popular picks across the storefront</h2>
          </div>
          <Link href="/shop" className="text-sm font-semibold text-zinc-950 dark:text-white">
            Browse all products
          </Link>
        </div>
        <div className="mt-6">
          <ProductGrid products={products.slice(0, 3)} />
        </div>
=======
      <div className="mt-10 rounded-4xl border border-white/10 bg-white/80 p-6 dark:bg-zinc-950/70">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Need help deciding?</p>
            <h2 className="mt-2 text-xl font-semibold">Tell us your course and we’ll suggest the best fit.</h2>
          </div>
          <Link href="/shop" className="inline-flex text-sm font-semibold text-foreground">
            Browse all materials →
          </Link>
        </div>
>>>>>>> 19b5c50d966c1226387a48a84837ce46eed2d57d
      </div>
    </div>
  );
}
