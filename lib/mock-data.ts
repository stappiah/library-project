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
    id: "fiction",
    name: "Fiction",
    slug: "fiction",
    description: "Literary fiction, modern classics, and immersive stories for every mood.",
    accent: "from-fuchsia-500/20 to-violet-500/10",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "mystery",
    name: "Mystery",
    slug: "mystery",
    description: "High-stakes suspense, clever twists, and page-turning investigations.",
    accent: "from-cyan-500/20 to-sky-500/10",
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "romance",
    name: "Romance",
    slug: "romance",
    description: "Warm, heartfelt stories that deliver chemistry, charm, and emotional depth.",
    accent: "from-amber-500/20 to-orange-500/10",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "nonfiction",
    name: "Nonfiction",
    slug: "nonfiction",
    description: "Insightful memoirs, practical guides, and deeply reported reads for curious minds.",
    accent: "from-emerald-500/20 to-teal-500/10",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80",
  },
];

export const products: Product[] = [
  {
    id: "the-midnight-archive",
    slug: "the-midnight-archive",
    name: "The Midnight Archive",
    description:
      "A haunting literary thriller about a hidden archive, fractured memory, and the stories we carry forward.",
    price: 18,
    salePrice: 15,
    category: "mystery",
    badge: "Best Seller",
    rating: 4.9,
    reviewCount: 128,
    tags: ["Suspense", "Twist", "Literary"],
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80",
    ],
    colors: ["eBook", "Audiobook", "Bundle"],
    sizes: ["Standard", "Collector"],
    highlights: ["Full cast narration", "Bonus chapter", "Book club guide"],
    details: ["Instant download", "Highlights synced", "Author note included"],
    relatedSlugs: ["paper-velvet", "northbound", "quiet-blueprints"],
  },
  {
    id: "paper-velvet",
    slug: "paper-velvet",
    name: "Paper Velvet",
    description:
      "A tender romance set in a coastal bookstore, balancing longing, second chances, and a beautifully paced arc.",
    price: 14,
    salePrice: 12,
    category: "romance",
    badge: "New",
    rating: 4.8,
    reviewCount: 94,
    tags: ["Contemporary", "Heartfelt", "Coastal"],
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=900&q=80",
    ],
    colors: ["eBook", "Audiobook", "Bundle"],
    sizes: ["Standard", "Collector"],
    highlights: ["Dual narration", "Reader extras", "Fandom discussion prompts"],
    details: ["Chapters synced", "Printable bookmark", "Behind-the-scenes notes"],
    relatedSlugs: ["the-midnight-archive", "northbound", "quiet-blueprints"],
  },
  {
    id: "quiet-blueprints",
    slug: "quiet-blueprints",
    name: "Quiet Blueprints",
    description:
      "A practical nonfiction guide to creating calmer routines, meaningful habits, and better creative focus.",
    price: 22,
    salePrice: 19,
    category: "nonfiction",
    badge: "Editor’s Pick",
    rating: 4.7,
    reviewCount: 67,
    tags: ["Design", "Habits", "Wellbeing"],
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80",
    ],
    colors: ["eBook", "Audiobook", "Bundle"],
    sizes: ["Standard", "Collector"],
    highlights: ["Mindful routines", "Action worksheets", "Guided reflections"],
    details: ["Downloadable templates", "Reflection prompts", "Reading roadmap"],
    relatedSlugs: ["the-midnight-archive", "northbound", "paper-velvet"],
  },
  {
    id: "northbound",
    slug: "northbound",
    name: "Northbound",
    description:
      "An ambitious speculative fiction novel blending climate, memory, and a road trip through a shifting world.",
    price: 17,
    salePrice: 15,
    category: "fiction",
    badge: "Limited",
    rating: 4.9,
    reviewCount: 81,
    tags: ["Speculative", "Adventure", "Atmospheric"],
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80",
    ],
    colors: ["eBook", "Audiobook", "Bundle"],
    sizes: ["Standard", "Collector"],
    highlights: ["Immersive narration", "Map of locations", "Author Q&A"],
    details: ["Bonus epilogue", "Glossary", "Recipe cards"],
    relatedSlugs: ["the-midnight-archive", "paper-velvet", "quiet-blueprints"],
  },
  {
    id: "the-lantern-letters",
    slug: "the-lantern-letters",
    name: "The Lantern Letters",
    description:
      "A beautifully paced historical mystery about forgotten letters, family secrets, and the quiet courage of truth.",
    price: 16,
    salePrice: 14,
    category: "mystery",
    badge: "Trending",
    rating: 4.8,
    reviewCount: 115,
    tags: ["Historical", "Mystery", "Letters"],
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80",
    ],
    colors: ["eBook", "Audiobook", "Bundle"],
    sizes: ["Standard", "Collector"],
    highlights: ["Letter excerpts", "Author interview", "Reading guide"],
    details: ["Downloadable notes", "Chapter maps", "Word search"],
    relatedSlugs: ["the-midnight-archive", "paper-velvet", "quiet-blueprints"],
  },
  {
    id: "maker-notes",
    slug: "maker-notes",
    name: "Maker Notes",
    description:
      "A creative nonfiction collection of essays on design, experimentation, and the small rituals that turn ideas into art.",
    price: 13,
    salePrice: 11,
    category: "nonfiction",
    badge: "New",
    rating: 4.6,
    reviewCount: 59,
    tags: ["Essays", "Design", "Creativity"],
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80",
    ],
    colors: ["eBook", "Audiobook", "Bundle"],
    sizes: ["Standard", "Collector"],
    highlights: ["Studio prompts", "Annotated essays", "Bonus checklist"],
    details: ["Editable notes", "Reading plan", "Creator interviews"],
    relatedSlugs: ["quiet-blueprints", "northbound", "paper-velvet"],
  },
];

export const reviews: Review[] = [
  {
    id: "review-1",
    user: "Maya Chen",
    role: "Book club host",
    rating: 5,
    title: "Atmospheric, thoughtful, and impossible to put down",
    body:
      "The pacing, prose, and extra notes made this feel like a true reading experience rather than just a download.",
  },
  {
    id: "review-2",
    user: "André Silva",
    role: "Curious reader",
    rating: 5,
    title: "A beautifully curated pick for slow weekends",
    body:
      "The narration, pacing, and companion prompts made it easy to settle in and read deeply.",
  },
  {
    id: "review-3",
    user: "Nora Patel",
    role: "Community librarian",
    rating: 4,
    title: "A polished library experience from the first click",
    body:
      "The browsing, reading notes, and discovery flow all felt tailored to a real book lover.",
  },
];

export const orders: Order[] = [
  { id: "#IN-2041", date: "Apr 18, 2026", status: "Delivered", total: 15, items: ["The Midnight Archive"] },
  { id: "#IN-2068", date: "May 02, 2026", status: "Shipped", total: 12, items: ["Paper Velvet"] },
  { id: "#IN-2094", date: "May 10, 2026", status: "Processing", total: 19, items: ["Quiet Blueprints"] },
];

export const userProfile: UserProfile = {
  name: "Ava Thompson",
  email: "ava@inkpages.io",
  role: "VIP Reader",
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

export const brandLogos = ["Ink", "Page", "Nook", "Atlas", "Lumen", "Chronicle"];
