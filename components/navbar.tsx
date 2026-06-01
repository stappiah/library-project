"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { useCartStore } from "@/stores/cart-store";

const menuLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Materials" },
  { href: "/faculties", label: "Faculties" },
  { href: "/categories", label: "Categories" },
  { href: "/professor", label: "Professor" },
  { href: "/account", label: "Account" },
];

export function Navbar() {
  const pathname = usePathname();
  const { items, openDrawer } = useCartStore();

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-40 border-b border-white/10 bg-background/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-full bg-foreground px-3 py-1 text-sm font-semibold text-background">
            Campus Market
          </div>
          <span className="text-sm font-medium text-muted-foreground">Digital course materials</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {menuLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition ${pathname === link.href ? "font-semibold text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" aria-label="Open cart" onClick={openDrawer}>
            <ShoppingBag className="h-4 w-4" />
            {items.length > 0 && (
              <span className="ml-1 rounded-full bg-foreground px-2 py-0.5 text-[10px] text-background">
                {items.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <div className="mt-8 flex flex-col gap-4">
                {menuLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-2xl px-3 py-3 text-sm font-medium hover:bg-muted"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
