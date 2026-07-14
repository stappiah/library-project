"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import type { Category } from "@/lib/mock-data";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="overflow-hidden rounded-4xl border border-white/10 bg-white/80 shadow-[0_20px_80px_rgba(15,23,42,0.08)] dark:bg-zinc-950/70"
    >
      <div className={`bg-linear-to-br ${category.accent} p-5`}>
        <img
          src={category.image}
          alt={category.name}
          className="h-40 w-full rounded-3xl object-cover"
        />
      </div>
      <div className="p-5">
        <p className="text-sm text-muted-foreground">Category</p>
        <h3 className="mt-2 text-xl font-semibold">{category.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{category.description}</p>
        <Link href={`/shop?category=${category.slug}`} className="mt-4 inline-flex text-sm font-semibold text-foreground">
          Explore category →
        </Link>
      </div>
    </motion.article>
  );
}
