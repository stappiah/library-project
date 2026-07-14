"use client";

import Link from "next/link";
<<<<<<< HEAD
import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { useAppStore } from "@/store/app-store";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useAppStore();
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Cart</p>
        <h1 className="mt-3 text-3xl font-bold text-zinc-950 dark:text-white">Review your final selection</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          {cart.length === 0 ? (
            <div className="rounded-[30px] border border-dashed border-zinc-300 bg-white px-8 py-12 text-center dark:border-zinc-700 dark:bg-zinc-900">
              <p className="text-lg font-semibold">Your cart is empty</p>
              <p className="mt-2 text-sm text-zinc-500">Add a few premium pieces and come back here to review your order.</p>
              <Link href="/shop" className="mt-5 inline-flex text-sm font-semibold text-zinc-950 dark:text-white">
                Continue shopping
              </Link>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.product.id} className="flex flex-col gap-4 rounded-[30px] border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900 sm:flex-row">
                <div className="relative h-32 w-full overflow-hidden rounded-[24px] sm:w-32">
                  {item.product.images[0] ? (
                    <Image src={item.product.images[0]} alt={item.product.title} fill className="object-cover" sizes="128px" />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-zinc-100 text-sm text-zinc-500 dark:bg-zinc-900">No image</div>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">{item.product.brand}</p>
                      <h2 className="mt-2 text-lg font-semibold text-zinc-950 dark:text-white">{item.product.title}</h2>
                    </div>
                    <button type="button" onClick={() => removeFromCart(item.product.id)}>
                      <Trash2 className="h-4 w-4 text-zinc-500" />
                    </button>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2 rounded-full border border-zinc-200 px-2 py-1 dark:border-zinc-800">
                      <button type="button" onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-6 text-center text-sm font-semibold">{item.quantity}</span>
                      <button type="button" onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <p className="text-lg font-bold">{formatCurrency(item.product.price * item.quantity)}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="rounded-[30px] border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Order summary</p>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span>{formatCurrency(subtotal)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>Free</span></div>
            <div className="flex justify-between"><span>Taxes</span><span>{formatCurrency(subtotal * 0.08)}</span></div>
          </div>
          <div className="mt-5 border-t border-zinc-200 pt-4 dark:border-zinc-800">
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>{formatCurrency(subtotal * 1.08)}</span>
            </div>
          </div>
          <Link href="/checkout" className="mt-5 block">
            <Button className="w-full">Continue to checkout</Button>
          </Link>
        </div>
=======
import { Minus, Plus, Trash2 } from "lucide-react";

import { EmptyState } from "@/components/empty-state";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useCartStore } from "@/stores/cart-store";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);

export default function CartPage() {
  const { items, updateQuantity, removeItem, clearCart } = useCartStore();
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <EmptyState
          title="Your materials cart is empty"
          description="Add course resources and return here to review your next term stack."
          actionLabel="Browse materials"
          href="/shop"
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Cart</p>
        <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Your current materials stack</h1>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          {items.map((item) => (
            <Card key={item.id}>
              <CardContent className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
                <img src={item.image} alt={item.name} className="h-28 w-full rounded-3xl object-cover sm:w-28" />
                <div className="flex-1 space-y-2">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.color} • {item.size}</p>
                  </div>
                  <p className="font-semibold">{formatCurrency(item.price * item.quantity)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(event) => updateQuantity(item.id, Number(event.target.value))}
                    className="w-20 text-center"
                  />
                  <Button variant="ghost" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Order summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Delivery</span>
              <span>Instant</span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <div className="rounded-2xl bg-muted/60 p-3 text-sm text-muted-foreground">
              Promo code <span className="font-semibold text-foreground">INK15</span> is available during checkout.
            </div>
            <Button asChild className="w-full">
              <Link href="/checkout">Proceed to checkout</Link>
            </Button>
            <Button variant="secondary" className="w-full" onClick={clearCart}>
              Clear cart
            </Button>
          </CardContent>
        </Card>
>>>>>>> 19b5c50d966c1226387a48a84837ce46eed2d57d
      </div>
    </div>
  );
}
