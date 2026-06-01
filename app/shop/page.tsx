"use client";

import { useEffect, useMemo, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Filter, Search } from "lucide-react";

import { ProductGrid } from "@/components/product-grid";
import { ProductSkeleton } from "@/components/loading-skeleton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { categories, products } from "@/lib/mock-data";

const faculties = [
  { name: "Faculty of Engineering", slug: "engineering" },
  { name: "Faculty of Applied Science & Technology (FAST)", slug: "fast" },
  { name: "Faculty of Business & Management Studies (FBMS)", slug: "fbms" },
  { name: "Faculty of Built & Natural Environment", slug: "built-environment" },
  { name: "Faculty of Health and Allied Sciences", slug: "health-sciences" },
  { name: "School of Graduate Studies", slug: "graduate-studies" },
];

function ShopContent() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "all");
  const [selectedFaculty, setSelectedFaculty] = useState(searchParams.get("faculty") || "all");
  const [sort, setSort] = useState("featured");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 650);
    return () => window.clearTimeout(timer);
  }, []);

  const filteredProducts = useMemo(() => {
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
      if (sort === "rating") return b.rating - a.rating;
      return 0;
    });
  }, [query, selectedCategory, selectedFaculty, sort]);

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
          {[
            { label: "All materials", value: "all" },
            ...categories.map((category) => ({ label: category.name, value: category.slug })),
          ].map((option) => (
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
            <span>{isLoading ? "Loading" : "Ready to access"}</span>
          </div>

          {isLoading ? (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <ProductSkeleton key={index} />
              ))}
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
