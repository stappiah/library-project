"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type WishlistItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  slug: string;
};

interface WishlistState {
  items: WishlistItem[];
  addItem: (item: WishlistItem) => void;
  removeItem: (id: string) => void;
  toggleItem: (item: WishlistItem) => void;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        if (get().items.some((entry) => entry.id === item.id)) {
          return;
        }

        set({ items: [...get().items, item] });
      },
      removeItem: (id) =>
        set({ items: get().items.filter((entry) => entry.id !== id) }),
      toggleItem: (item) => {
        if (get().items.some((entry) => entry.id === item.id)) {
          get().removeItem(item.id);
          return;
        }

        get().addItem(item);
      },
    }),
    {
      name: "wishlist-storage",
      partialize: (state) => ({ items: state.items }),
    },
  ),
);
