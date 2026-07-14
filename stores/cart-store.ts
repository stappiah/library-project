"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  color: string;
  size: string;
  slug: string;
};

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      openDrawer: () => set({ isOpen: true }),
      closeDrawer: () => set({ isOpen: false }),
      addItem: (item) => {
        const existing = get().items.find((entry) => entry.id === item.id);

        if (existing) {
          set({
            items: get().items.map((entry) =>
              entry.id === item.id
                ? { ...entry, quantity: entry.quantity + 1 }
                : entry,
            ),
          });
          return;
        }

        set({ items: [...get().items, { ...item, quantity: 1 }] });
      },
      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }

        set({
          items: get().items.map((entry) =>
            entry.id === id ? { ...entry, quantity } : entry,
          ),
        });
      },
      removeItem: (id) =>
        set({ items: get().items.filter((entry) => entry.id !== id) }),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      partialize: (state) => ({ items: state.items }),
    },
  ),
);
