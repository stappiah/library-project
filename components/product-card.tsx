"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ShoppingBag } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cart-store";
import { useWishlistStore } from "@/stores/wishlist-store";
import type { Product } from "@/lib/mock-data";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);
  const toggleItem = useWishlistStore((state) => state.toggleItem);
  const wishlist = useWishlistStore((state) => state.items);

  const liked = wishlist.some((item) => item.id === product.id);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-4xl border border-white/10 bg-white/80 shadow-[0_24px_80px_rgba(15,23,42,0.08)] dark:bg-zinc-950/70"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 flex gap-2">
          {product.badge && <Badge>{product.badge}</Badge>}
        </div>
        <button
          type="button"
          aria-label="Toggle wishlist"
          onClick={() =>
            toggleItem({
              id: product.id,
              name: product.name,
              price: product.salePrice ?? product.price,
              image: product.image,
              slug: product.slug,
            })
          }
          className={`absolute right-4 top-4 rounded-full p-2 backdrop-blur ${liked ? "bg-foreground text-background" : "bg-white/80 text-foreground"}`}
        >
          <Heart className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
        </button>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm text-muted-foreground">
              {product.courseCode} • {product.category}
              {product.department && <span className="block text-xs opacity-70">{product.department}</span>}
            </p>
            <h3 className="mt-1 text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-muted-foreground">Professor {product.professor}</p>
          </div>
          <div className="text-right">
            <p className="text-base font-semibold">{formatCurrency(product.salePrice ?? product.price)}</p>
            {product.salePrice && (
              <p className="text-sm text-muted-foreground line-through">
                {formatCurrency(product.price)}
              </p>
            )}
          </div>
        </div>

        <p className="text-sm text-muted-foreground">{product.description}</p>

        <div className="flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-2 pt-1">
          <Button asChild className="flex-1">
            <Link href={`/products/${product.slug}`}>View details</Link>
          </Button>
          <Button
            variant="secondary"
            onClick={() =>
              addItem({
                id: `${product.id}-${product.colors[0]}-${product.sizes[0]}`,
                name: product.name,
                price: product.salePrice ?? product.price,
                image: product.image,
                color: product.colors[0],
                size: product.sizes[0],
                slug: product.slug,
              })
            }
          >
            <ShoppingBag className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
