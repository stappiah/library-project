"use client";

import Link from "next/link";

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
          description="Save premium pieces you want to revisit later."
          actionLabel="Discover products"
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
          Keep your favorite pieces close as you compare colors, sizes, and bundles.
        </p>
      </div>

      <div className="mt-8">
        <ProductGrid products={savedProducts} />
      </div>
    </div>
  );
}
