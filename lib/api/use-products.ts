import useSWR from "swr";

import type { Product } from "@/lib/mock-data";

import { getProductBySlug, getProducts } from "./products";

export function useProducts() {
  const { data, error, isLoading, mutate } = useSWR<Product[]>("products", () => getProducts(), {
    revalidateOnFocus: false,
    keepPreviousData: true,
  });

  return {
    products: data ?? [],
    isLoading,
    error,
    mutate,
  };
}

export function useProduct(slug: string | null | undefined) {
  const { data, error, isLoading } = useSWR<Product | null>(
    slug ? ["product", slug] : null,
    ([, value]: [string, string]) => getProductBySlug(value),
    {
      revalidateOnFocus: false,
    },
  );

  return {
    product: data ?? null,
    isLoading,
    error,
  };
}
