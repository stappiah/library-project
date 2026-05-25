"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";

import { BrandLogos } from "@/components/brand-logos";
import { CategoryCard } from "@/components/category-card";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { ProductGrid } from "@/components/product-grid";
import { TestimonialCard } from "@/components/testimonial-card";
import { Button } from "@/components/ui/button";
import { categories, getFeaturedProducts, products, reviews } from "@/lib/mock-data";

export default function Home() {
  const featured = getFeaturedProducts().slice(0, 3);

  return (
    <div className="overflow-hidden">
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8">
        <div className="rounded-[36px] border border-white/10 bg-white/75 px-5 py-3 text-sm text-muted-foreground backdrop-blur-xl dark:bg-zinc-950/70 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p>
              <span className="font-semibold text-foreground">Spring drop 2026</span> — curated essentials for calm, elevated living.
            </p>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span>Free shipping</span>
              <span>•</span>
              <span>Extended warranty</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-12 pt-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[36px] border border-white/10 bg-white/80 p-6 shadow-[0_30px_120px_rgba(15,23,42,0.08)] dark:bg-zinc-950/70 sm:p-8"
        >
          <p className="inline-flex rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Premium collection
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Modern essentials for a beautifully wired day.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Explore thoughtfully crafted devices, travel pieces, and home accents designed to feel premium from the first glance.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/shop">Shop now <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/categories">Browse categories</Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { label: "4.9 average rating", icon: Star },
              { label: "2-day express shipping", icon: Sparkles },
              { label: "Secure checkout", icon: ShieldCheck },
            ].map((item) => (
              <div key={item.label} className="rounded-[24px] bg-muted/60 px-4 py-3">
                <item.icon className="h-5 w-5" />
                <p className="mt-3 text-sm font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-[36px] border border-white/10 bg-gradient-to-br from-sky-500/20 to-fuchsia-500/20 p-4 sm:p-5"
        >
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80"
            alt="A premium lifestyle scene"
            className="h-full min-h-[420px] w-full rounded-[28px] object-cover"
          />
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Featured products</p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Curated for modern rituals</h2>
          </div>
          <Link href="/shop" className="text-sm font-semibold text-foreground">
            View all products →
          </Link>
        </div>
        <div className="mt-6">
          <ProductGrid products={featured} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/80 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] dark:bg-zinc-950/70">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Trending categories</p>
            <h2 className="mt-3 text-2xl font-semibold">Find the right mood, moment, and match</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Explore tactile favorites, performance pieces, and elevated home accents in a single modern catalog.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-fuchsia-500/10 to-cyan-500/10 px-5 py-8 sm:px-7">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Limited time offer</p>
              <h2 className="mt-3 text-2xl font-semibold">Save 15% on every curated bundle this week.</h2>
              <p className="mt-2 text-sm text-muted-foreground">Use code LUMA15 at checkout to unlock premium savings on select collections.</p>
            </div>
            <Button asChild size="lg">
              <Link href="/shop">Explore savings</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Testimonials</p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Trusted by the fast-moving and detail-driven</h2>
          </div>
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {reviews.map((review) => (
            <TestimonialCard key={review.id} quote={review.body} name={review.user} role={review.role} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <BrandLogos />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:px-8">
        <NewsletterSignup />
      </section>
    </div>
  );
}
