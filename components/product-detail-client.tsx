"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Heart, Minus, Plus, ShoppingBag, Star } from "lucide-react";
import { motion } from "framer-motion";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { ProductGallery } from "@/components/product-gallery";
import { ProductTabs } from "@/components/product-tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductCard } from "@/components/product-card";
import { useCartStore } from "@/stores/cart-store";
import { useWishlistStore } from "@/stores/wishlist-store";
import { getRelatedProducts, reviews, type Product } from "@/lib/mock-data";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);

export function ProductDetailClient({ product }: { product: Product }) {
  const [selectedFormat, setSelectedFormat] = useState(product.colors[0]);
  const [selectedEdition, setSelectedEdition] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const addItem = useCartStore((state) => state.addItem);
  const openDrawer = useCartStore((state) => state.openDrawer);
  const toggleItem = useWishlistStore((state) => state.toggleItem);
  const wishlist = useWishlistStore((state) => state.items);

  const liked = wishlist.some((item) => item.id === product.id);
  const relatedProducts = useMemo(
    () => getRelatedProducts(product.relatedSlugs),
    [product.relatedSlugs],
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Shop", href: "/shop" },
          { label: product.name },
        ]}
      />

      <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <ProductGallery gallery={product.gallery} name={product.name} />

        <div className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{product.category}</p>
            <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">{product.name}</h1>
            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              <p>{product.courseCode} • {product.department}</p>
              <p>Professor {product.professor}</p>
            </div>

            <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span>{product.rating} • {product.reviewCount} student reviews</span>
            </div>
          </div>

          <p className="text-base leading-7 text-muted-foreground">{product.description}</p>

          <div className="flex items-end gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Price</p>
              <div className="flex items-center gap-3">
                <p className="text-3xl font-semibold">{formatCurrency(product.salePrice ?? product.price)}</p>
                {product.salePrice && (
                  <p className="text-sm text-muted-foreground line-through">{formatCurrency(product.price)}</p>
                )}
              </div>
            </div>
            {product.badge && <span className="rounded-full bg-muted px-3 py-1 text-sm">{product.badge}</span>}
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold">Format</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setSelectedFormat(color)}
                    className={`rounded-full px-4 py-2 text-sm ${selectedFormat === color ? "bg-foreground text-background" : "bg-muted text-foreground"}`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold">Edition</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedEdition(size)}
                    className={`rounded-full px-4 py-2 text-sm ${selectedEdition === size ? "bg-foreground text-background" : "bg-muted text-foreground"}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-border px-3 py-2">
              <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-6 text-center">{quantity}</span>
              <button type="button" onClick={() => setQuantity(quantity + 1)}>
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <Button
              size="lg"
              onClick={() => {
                addItem({
                  id: `${product.id}-${selectedFormat}-${selectedEdition}`,
                  name: product.name,
                  price: product.salePrice ?? product.price,
                  image: product.image,
                  color: selectedFormat,
                  size: selectedEdition,
                  slug: product.slug,
                });
                openDrawer();
              }}
            >
              <ShoppingBag className="h-4 w-4" />
              Add to cart
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() =>
                toggleItem({
                  id: product.id,
                  name: product.name,
                  price: product.salePrice ?? product.price,
                  image: product.image,
                  slug: product.slug,
                })
              }
            >
              <Heart className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
              Wishlist
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Why you’ll love it</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {product.highlights.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <ProductTabs product={product} reviews={reviews} />
        <div>
          <h2 className="text-2xl font-semibold">More like this</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {relatedProducts.map((item) => (
              <motion.div key={item.id} whileHover={{ y: -6 }}>
                <ProductCard product={item} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
