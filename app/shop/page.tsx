"use client";

import { useMemo, useState, Suspense, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Filter, Search } from "lucide-react";

import { ProductGrid } from "@/components/product-grid";
import { ProductSkeleton } from "@/components/loading-skeleton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { categories } from "@/lib/mock-data";
import { useProducts } from "@/lib/api/use-products";
// Mock data for faculties - these should ideally come from an API
const faculties = [
  { name: "Faculty of Engineering", slug: "engineering" },
  { name: "Faculty of Applied Science & Technology (FAST)", slug: "fast" },
  { name: "Faculty of Business & Management Studies (FBMS)", slug: "fbms" },
  { name: "Faculty of Built & Natural Environment", slug: "built-environment" },
  { name: "Faculty of Health and Allied Sciences", slug: "health-sciences" },
  { name: "School of Graduate Studies", slug: "graduate-studies" },
];

function ShopContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Initialize state from URL search parameters
  const initialQuery = searchParams.get("query") || "";
  const initialCategory = searchParams.get("category") || "all";
  const initialFaculty = searchParams.get("faculty") || "all";
  const initialSort = searchParams.get("sort") || "featured";

  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedFaculty, setSelectedFaculty] = useState(initialFaculty);
  const [sort, setSort] = useState(initialSort);
  const { products, isLoading, error } = useProducts();

  // Synchronize URL with state changes
  useEffect(() => {
    const newSearchParams = new URLSearchParams();
    if (query) {
      newSearchParams.set("query", query);
    }
    if (selectedCategory !== "all") {
      newSearchParams.set("category", selectedCategory);
    }
    if (selectedFaculty !== "all") {
      newSearchParams.set("faculty", selectedFaculty);
    }
    if (sort !== "featured") {
      newSearchParams.set("sort", sort);
    }

    const currentSearchParamsString = searchParams.toString();
    const newSearchParamsString = newSearchParams.toString();

    if (currentSearchParamsString !== newSearchParamsString) {
      router.push(`${pathname}?${newSearchParamsString}`, { scroll: false });
    }
  }, [query, selectedCategory, selectedFaculty, sort, router, pathname, searchParams]);

  const filteredProducts = useMemo(() => {
    if (!products) return []; // Handle case where products might be null initially
    const scoped = products.filter((product) => {
      const matchesQuery = `${product.name} ${product.description}`
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      const matchesFaculty =
        selectedFaculty === "all" || product.department?.toLowerCase().includes(selectedFaculty.toLowerCase());

      return matchesQuery && matchesCategory && matchesFaculty;
    });

    return [...scoped].sort((a, b) => {
      if (sort === "price-low") return (a.salePrice ?? a.price) - (b.salePrice ?? b.price);
      if (sort === "price-high") return (b.salePrice ?? b.price) - (a.salePrice ?? a.price);
      if (sort === "rating") return (b.rating ?? 0) - (a.rating ?? 0); // Added nullish coalescing for rating
      return 0;
    });
  }, [query, selectedCategory, selectedFaculty, sort, products]); // Added products to dependency array

  const categoriesToDisplay = [
    { label: "All materials", value: "all" },
    ...categories.map((category) => ({ label: category.name, value: category.slug })),
  ];

  const filterPanel = (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold">Search</p>
        <div className="relative mt-3">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search materials"
            className="pl-10"
          />
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold">Category</p>
        <div className="mt-3 space-y-2">
          {categoriesToDisplay.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setSelectedCategory(option.value)}
              className={`w-full rounded-2xl px-3 py-2 text-left text-sm ${selectedCategory === option.value ? "bg-foreground text-background" : "bg-muted text-foreground"}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold">Faculty</p>
        <div className="mt-3 space-y-2">
          {[
            { label: "All faculties", value: "all" },
            ...faculties.map((f) => ({ label: f.name, value: f.slug })),
          ].map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setSelectedFaculty(option.value)}
              className={`w-full rounded-2xl px-3 py-2 text-left text-sm ${selectedFaculty === option.value ? "bg-foreground text-background" : "bg-muted text-foreground"}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold">Sort</p>
        <div className="mt-3">
          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger>
              <SelectValue placeholder="Featured" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: low to high</SelectItem>
              <SelectItem value="price-high">Price: high to low</SelectItem>
              <SelectItem value="rating">Top rated</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Materials</p>
          <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Discover your next course material</h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Browse digital textbooks, lab manuals, professor notes, and study guides for fast campus access.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="secondary" className="lg:hidden">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="mt-8">{filterPanel}</div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[280px_1fr]">
        <aside className="hidden rounded-4xl border border-white/10 bg-white/80 p-5 lg:block dark:bg-zinc-950/70">
          {filterPanel}
        </aside>

        <div>
          <div className="mb-4 flex items-center justify-between text-sm text-muted-foreground">
            <span>{filteredProducts.length} materials</span>
            <span>{isLoading ? "Loading" : error ? "Sync issue" : "Ready to access"}</span>
          </div>

          {isLoading ? (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <ProductSkeleton key={index} />
              ))}
            </div>
          ) : error ? (
            <div className="rounded-3xl border border-destructive/20 bg-destructive/5 p-6 text-sm text-muted-foreground">
              We could not fetch the latest materials right now. The app is using the local fallback data instead.
            </div>
          ) : (
            <ProductGrid products={filteredProducts} />
          )}
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading shop...</div>}>
      <ShopContent />
    </Suspense>
  );
}
