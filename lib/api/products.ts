import { getProductBySlug as getMockProductBySlug, products as mockProducts } from "@/lib/mock-data";
import type { Product } from "@/lib/mock-data";

import { apiRequest } from "./client";

const productsPath = "/api/products";

export async function getProducts(): Promise<Product[]> {
  try {
    return await apiRequest<Product[]>(productsPath, { revalidate: 60 });
  } catch {
    return mockProducts;
  }
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    return await apiRequest<Product | null>(`${productsPath}/${slug}`, { revalidate: 60 });
  } catch {
    return getMockProductBySlug(slug) ?? null;
  }
}
