<<<<<<< HEAD
import Link from "next/link";
import { ArrowRight, Globe2, ShieldCheck, Sparkles, Star } from "lucide-react";
import { AnnouncementBar } from "@/components/sections/announcement-bar";
import { CategoryCard } from "@/components/sections/category-card";
import { HeroSection } from "@/components/sections/hero-section";
import { Newsletter } from "@/components/sections/newsletter";
import { ProductGrid } from "@/components/sections/product-grid";
import { PromotionalBanner } from "@/components/sections/promotional-banner";
import { TestimonialCard } from "@/components/sections/testimonial-card";
import { brandLogos } from "@/data/mock";
import { getCategories, getFeaturedProducts, getTestimonials } from "@/lib/services/catalog-service";

export default async function Home() {
  const [featuredProducts, categories, testimonials] = await Promise.all([
    getFeaturedProducts(3),
    getCategories(),
    getTestimonials(),
  ]);

  return (
    <div>
      <AnnouncementBar />
      <HeroSection />

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Featured collection</p>
            <h2 className="mt-3 text-3xl font-bold text-zinc-950 dark:text-white">A carefully edited selection for the season</h2>
          </div>
          <Link href="/shop" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-950 dark:text-white">
            View all products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-6">
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="rounded-[32px] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Why shoppers stay</p>
              <h2 className="mt-3 text-2xl font-bold text-zinc-950 dark:text-white">Designed to feel premium from first click to final delivery.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Premium materials", icon: Sparkles },
                { label: "Transparent shipping", icon: Globe2 },
                { label: "Trusted checkout", icon: ShieldCheck },
              ].map((item) => (
                <div key={item.label} className="rounded-[24px] bg-zinc-50 px-4 py-3 dark:bg-zinc-950">
                  <item.icon className="h-5 w-5 text-zinc-950 dark:text-white" />
                  <p className="mt-3 text-sm font-semibold text-zinc-950 dark:text-white">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Trending categories</p>
            <h2 className="mt-3 text-3xl font-bold text-zinc-950 dark:text-white">Browse the most-loved collections</h2>
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      <PromotionalBanner />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">What customers say</p>
            <h2 className="mt-3 text-3xl font-bold text-zinc-950 dark:text-white">Loved by modern shoppers and growing teams</h2>
          </div>
          <div className="hidden items-center gap-2 text-sm font-semibold text-amber-500 sm:flex">
            <Star className="h-4 w-4 fill-current" />
            Rated 4.9/5 across every collection
          </div>
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="rounded-[30px] border border-zinc-200 bg-white px-6 py-8 dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Trusted by design-led brands</p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {brandLogos.map((brand) => (
              <div key={brand} className="rounded-[24px] bg-zinc-50 px-4 py-5 text-center text-sm font-semibold text-zinc-700 dark:bg-zinc-950 dark:text-zinc-200">
                {brand}
              </div>
=======
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
import { categories, getFeaturedProducts, reviews } from "@/lib/mock-data";

export default function Home() {
  const featured = getFeaturedProducts().slice(0, 3);

  return (
    <div className="overflow-hidden">
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8">
        <div className="rounded-4xl border border-white/10 bg-white/75 px-5 py-3 text-sm text-muted-foreground backdrop-blur-xl dark:bg-zinc-950/70 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p>
              <span className="font-semibold text-foreground">Spring course essentials 2026</span> — discover digital course materials, professor notes, and study guides for every term.
            </p>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span>Instant access</span>
              <span>•</span>
              <span>Bundle savings</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-12 pt-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-4xl border border-white/10 bg-white/80 p-6 shadow-[0_30px_120px_rgba(15,23,42,0.08)] dark:bg-zinc-950/70 sm:p-8"
        >
          <p className="inline-flex rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Course materials
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            The marketplace for your next course resource.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Explore digital textbooks, lab manuals, professor-authored notes, and study guides built for campus success.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/shop">Browse materials <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/categories">Browse categories</Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { label: "4.9 average rating", icon: Star },
              { label: "Instant delivery", icon: Sparkles },
              { label: "Secure checkout", icon: ShieldCheck },
            ].map((item) => (
              <div key={item.label} className="rounded-3xl bg-muted/60 px-4 py-3">
                <item.icon className="h-5 w-5" />
                <p className="mt-3 text-sm font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-4xl border border-white/10 bg-linear-to-br from-sky-500/20 to-fuchsia-500/20 p-4 sm:p-5"
        >
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80"
            alt="A student reviewing digital course materials"
            className="h-full min-h-105 w-full rounded-4xl object-cover"
          />
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Featured materials</p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Curated for your next semester</h2>
          </div>
          <Link href="/shop" className="text-sm font-semibold text-foreground">
            View all materials →
          </Link>
        </div>
        <div className="mt-6">
          <ProductGrid products={featured} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="mt-8 rounded-4xl border border-white/10 bg-white/80 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] dark:bg-zinc-950/70">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Trending categories</p>
            <h2 className="mt-3 text-2xl font-semibold">Find the right mood, moment, and genre match</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Explore textbooks, lab manuals, study guides, and professor notes designed for campus success.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
>>>>>>> 19b5c50d966c1226387a48a84837ce46eed2d57d
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <Newsletter />
=======
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-4xl border border-white/10 bg-linear-to-r from-fuchsia-500/10 to-cyan-500/10 px-5 py-8 sm:px-7">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Limited time offer</p>
              <h2 className="mt-3 text-2xl font-semibold">Save 20% on every curated bundle this week.</h2>
              <p className="mt-2 text-sm text-muted-foreground">Use code CAMPUS20 at checkout to unlock savings on select campus bundles.</p>
            </div>
            <Button asChild size="lg">
              <Link href="/shop">Explore bundles</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-4xl border border-white/10 bg-white/80 p-6 dark:bg-zinc-950/70">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Departmental access</p>
              <h2 className="mt-3 text-2xl font-semibold">Browse by your Faculty.</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Engineering, FAST, FBMS, and more. Find materials specific to your field of study.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button asChild variant="outline">
                <Link href="/faculties">View all faculties</Link>
              </Button>
              <Button asChild>
                <Link href="/shop?faculty=engineering">Engineering materials</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Student favorites</p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Loved by students who want practical course resources</h2>
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
>>>>>>> 19b5c50d966c1226387a48a84837ce46eed2d57d
    </div>
  );
}
