import { notFound } from "next/navigation";

import { ProductDetailClient } from "@/components/product-detail-client";
import { getProductBySlug } from "@/lib/api/products";

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const { slug } = params; // No need to await params if it's not a Promise
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
