"use client";

import { EmptyState } from "@/components/empty-state";
import { ProductGrid } from "@/components/product-grid";
import { products } from "@/lib/mock-data";
import { useWishlistStore } from "@/stores/wishlist-store";

export default function WishlistPage() {
  const wishlist = useWishlistStore((state) => state.items);
  const savedProducts = products.filter((product) =>
    wishlist.some((item) => item.id === product.id),
  );

  if (savedProducts.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <EmptyState
          title="Your wishlist is empty"
          description="Save materials you want to revisit later and build your course list over time."
          actionLabel="Discover materials"
          href="/shop"
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Wishlist</p>
        <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Saved for later</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Keep your favorite materials close as you compare courses, bundles, and study inspiration.
        </p>
      </div>

      <div className="mt-8">
        <ProductGrid products={savedProducts} />
      </div>
    </div>
  );
}
