export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  accent: string;
  image: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  salePrice?: number;
  category: string;
  badge?: string;
  rating: number;
  reviewCount: number;
  tags: string[];
  image: string;
  gallery: string[];
  colors: string[];
  sizes: string[];
  highlights: string[];
  details: string[];
  relatedSlugs: string[];
};

export type Review = {
  id: string;
  user: string;
  role: string;
  rating: number;
  title: string;
  body: string;
};

export type Order = {
  id: string;
  date: string;
  status: "Delivered" | "Processing" | "Shipped";
  total: number;
  items: string[];
};

export type UserProfile = {
  name: string;
  email: string;
  role: string;
  location: string;
  joined: string;
  rewards: number;
};

export const categories: Category[] = [
  {
    id: "audio",
    name: "Audio",
    slug: "audio",
    description: "Immersive sound tuned for the modern studio and commute.",
    accent: "from-fuchsia-500/20 to-violet-500/10",
    image:
      "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "wear",
    name: "Wearables",
    slug: "wearables",
    description: "Precision-crafted essentials built for every pace and routine.",
    accent: "from-cyan-500/20 to-sky-500/10",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "home",
    name: "Home",
    slug: "home",
    description: "Elevated pieces for calm, beautifully designed spaces.",
    accent: "from-amber-500/20 to-orange-500/10",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "travel",
    name: "Travel",
    slug: "travel",
    description: "Lightweight companions designed to move with intention.",
    accent: "from-emerald-500/20 to-teal-500/10",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
];

export const products: Product[] = [
  {
    id: "aurora-headphones",
    slug: "aurora-headphones",
    name: "Aurora Noise Cancelling Headphones",
    description:
      "Adaptive ANC, a carbon-neutral carry case, and a 30-hour battery for distraction-free listening.",
    price: 289,
    salePrice: 249,
    category: "audio",
    badge: "Best Seller",
    rating: 4.9,
    reviewCount: 128,
    tags: ["ANC", "Bluetooth", "Travel"],
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1491927577282-b4f6677ae2d0?auto=format&fit=crop&w=900&q=80",
    ],
    colors: ["Midnight", "Pearl", "Sand"],
    sizes: ["One Size"],
    highlights: ["Adaptive ANC", "40 hr battery", "Multipoint pairing"],
    details: ["Memory foam ear cushions", "USB-C fast charge", "App controls"],
    relatedSlugs: ["luna-smartwatch", "atelier-lamp", "solstice-bottle"],
  },
  {
    id: "luna-smartwatch",
    slug: "luna-smartwatch",
    name: "Luna Smartwatch Pro",
    description:
      "A refined wellness companion with a seamless AMOLED display, GPS, and always-on recovery insights.",
    price: 349,
    salePrice: 319,
    category: "wearables",
    badge: "New",
    rating: 4.8,
    reviewCount: 94,
    tags: ["Fitness", "Sleep", "GPS"],
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=900&q=80",
    ],
    colors: ["Graphite", "Ivory", "Navy"],
    sizes: ["42mm", "46mm"],
    highlights: ["GPS + Bluetooth", "Daily readiness", "Quick sync"],
    details: ["Water resistant", "7-day battery", "Mobile app insights"],
    relatedSlugs: ["aurora-headphones", "atelier-lamp", "solstice-bottle"],
  },
  {
    id: "atelier-lamp",
    slug: "atelier-lamp",
    name: "Atelier Task Lamp",
    description:
      "A sculptural desk lamp with warm, dimmable output and a balanced minimalist profile for focused work.",
    price: 189,
    salePrice: 169,
    category: "home",
    badge: "Editor’s Pick",
    rating: 4.7,
    reviewCount: 67,
    tags: ["Desk", "Ambient", "Lighting"],
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=900&q=80",
    ],
    colors: ["Matte Black", "Brushed Brass"],
    sizes: ["Small", "Large"],
    highlights: ["Touch dimming", "USB-C charge", "Low glare"],
    details: ["Soft LED", "Stable base", "3-step dimming"],
    relatedSlugs: ["aurora-headphones", "solstice-bottle", "luna-smartwatch"],
  },
  {
    id: "solstice-bottle",
    slug: "solstice-bottle",
    name: "Solstice Insulated Bottle",
    description:
      "A premium travel bottle with vacuum insulation, a leak-proof lid, and year-round temperature control.",
    price: 69,
    salePrice: 59,
    category: "travel",
    badge: "Limited",
    rating: 4.9,
    reviewCount: 81,
    tags: ["Hydration", "Travel", "Insulated"],
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1605627079911-8325a2e3c4af?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=900&q=80",
    ],
    colors: ["Stone", "Slate", "Olive"],
    sizes: ["18oz", "24oz"],
    highlights: ["24 hr cold", "Leak-proof", "Easy grip"],
    details: ["BPA-free", "Sleek matte finish", "Wide mouth"],
    relatedSlugs: ["aurora-headphones", "atelier-lamp", "luna-smartwatch"],
  },
  {
    id: "nova-speaker",
    slug: "nova-speaker",
    name: "Nova Portable Speaker",
    description:
      "Rich bass, room-filling stereo, and a textured shell built for indoor gatherings and outdoor escapes.",
    price: 159,
    salePrice: 139,
    category: "audio",
    badge: "Trending",
    rating: 4.8,
    reviewCount: 115,
    tags: ["Portable", "Bluetooth", "Party"],
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1491927577282-b4f6677ae2d0?auto=format&fit=crop&w=900&q=80",
    ],
    colors: ["Onyx", "Mist", "Coral"],
    sizes: ["One Size"],
    highlights: ["360° audio", "12 hr battery", "Fast pairing"],
    details: ["Water resistant", "USB-C", "Stereo drivers"],
    relatedSlugs: ["aurora-headphones", "atelier-lamp", "solstice-bottle"],
  },
  {
    id: "arc-pack",
    slug: "arc-pack",
    name: "Arc Everyday Pack",
    description:
      "A structured urban tote with a modular interior and premium recycled materials for every commute.",
    price: 129,
    salePrice: 119,
    category: "travel",
    badge: "New",
    rating: 4.6,
    reviewCount: 59,
    tags: ["Bag", "Commuter", "Minimal"],
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
    ],
    colors: ["Clay", "Black", "Sand"],
    sizes: ["One Size"],
    highlights: ["Modular pockets", "Padded sleeve", "Sustainably sourced"],
    details: ["Durable fabric", "Adjustable straps", "Laptop safe"],
    relatedSlugs: ["luna-smartwatch", "aurora-headphones", "atelier-lamp"],
  },
];

export const reviews: Review[] = [
  {
    id: "review-1",
    user: "Maya Chen",
    role: "Product Designer",
    rating: 5,
    title: "Looks premium and feels remarkably refined",
    body:
      "The finish, packaging, and daily performance all exceeded expectations. It feels like a luxury product without the noise.",
  },
  {
    id: "review-2",
    user: "André Silva",
    role: "Creative Director",
    rating: 5,
    title: "An elegant choice for a fast-moving workflow",
    body:
      "Everything from the sound profile to the lightweight build makes it feel thoughtfully designed for long sessions.",
  },
  {
    id: "review-3",
    user: "Nora Patel",
    role: "Community Lead",
    rating: 4,
    title: "The details make the difference",
    body:
      "Small touches like the carry case and quick pairing made this an immediate favorite in my daily routine.",
  },
];

export const orders: Order[] = [
  { id: "#LS-1023", date: "Apr 18, 2026", status: "Delivered", total: 249, items: ["Aurora Headphones"] },
  { id: "#LS-1041", date: "May 02, 2026", status: "Shipped", total: 319, items: ["Luna Smartwatch Pro"] },
  { id: "#LS-1087", date: "May 10, 2026", status: "Processing", total: 169, items: ["Atelier Task Lamp"] },
];

export const userProfile: UserProfile = {
  name: "Ava Thompson",
  email: "ava@luma.store",
  role: "VIP Member",
  location: "San Francisco, CA",
  joined: "January 2024",
  rewards: 384,
};

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(slugs: string[]) {
  return products.filter((product) => slugs.includes(product.slug));
}

export function getProductsByCategory(slug?: string) {
  if (!slug) {
    return products;
  }

  return products.filter((product) => product.category === slug);
}

export function getFeaturedProducts() {
  return products.filter((product) => product.badge);
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export const brandLogos = ["Luma", "Nova", "Aster", "Monarch", "Tidal", "Motive"];
