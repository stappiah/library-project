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
  courseCode: string;
  professor: string;
  department: string;
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
    id: "textbooks",
    name: "Textbooks",
    slug: "textbooks",
    description: "Essential digital textbooks for your lectures and assignments.",
    accent: "from-sky-500/20 to-cyan-500/10",
    image:
      "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "lab-manuals",
    name: "Lab manuals",
    slug: "lab-manuals",
    description: "Step-by-step digital lab manuals and experiment guides for science courses.",
    accent: "from-emerald-500/20 to-teal-500/10",
    image:
      "https://images.unsplash.com/photo-1581091870626-4d6f41c0c650?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "professor-notes",
    name: "Professor notes",
    slug: "professor-notes",
    description: "Professor-authored notes, lecture readers, and curated seminar materials.",
    accent: "from-fuchsia-500/20 to-violet-500/10",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "study-guides",
    name: "Study guides",
    slug: "study-guides",
    description: "Focused study guides, exam prep packets, and review workbooks.",
    accent: "from-amber-500/20 to-orange-500/10",
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=900&q=80",
  },
];

export const products: Product[] = [
  {
    id: "cs101-foundations-programming",
    slug: "cs101-foundations-programming",
    name: "Foundations of Programming",
    courseCode: "CS101",
    professor: "Dr. Elena Hart",
    department: "Computer Science",
    description: "A digital textbook with interactive examples, instructor notes, and exam-focused practice for first-year programming.",
    price: 34,
    salePrice: 29,
    category: "textbooks",
    badge: "Featured",
    rating: 4.9,
    reviewCount: 62,
    tags: ["Computer Science", "Intro", "Coding"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
    ],
    colors: ["eBook", "PDF", "Bundle"],
    sizes: ["Single user", "Class bundle"],
    highlights: ["Interactive code examples", "Instructor slide deck", "Exam prep questions"],
    details: ["Searchable PDF", "Downloadable code files", "Instructor notes included"],
    relatedSlugs: ["mktg212-principles-marketing", "bio201-organic-chemistry-lab-manual"],
  },
  {
    id: "mktg212-principles-marketing",
    slug: "mktg212-principles-marketing",
    name: "Principles of Marketing",
    courseCode: "MKTG212",
    professor: "Dr. Lina Chen",
    department: "Business",
    description: "A digital materials pack for marketing students with cases, templates, and active-learning prompts.",
    price: 28,
    salePrice: 24,
    category: "textbooks",
    badge: "New",
    rating: 4.8,
    reviewCount: 48,
    tags: ["Business", "Marketing", "Strategy"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    ],
    colors: ["eBook", "PDF", "Bundle"],
    sizes: ["Standard", "Premium"],
    highlights: ["Case studies", "Marketing plan templates", "Active learning prompts"],
    details: ["Printable charts", "Discussion questions", "Real-world examples"],
    relatedSlugs: ["cs101-foundations-programming", "engr310-systems-design-workbook"],
  },
  {
    id: "bio201-organic-chemistry-lab-manual",
    slug: "bio201-organic-chemistry-lab-manual",
    name: "Organic Chemistry Lab Manual",
    courseCode: "BIO201",
    professor: "Dr. Rafael Ortiz",
    department: "Chemistry",
    description: "A step-by-step lab manual designed for modern chemistry courses with worksheets, safety protocols, and data log templates.",
    price: 22,
    salePrice: 18,
    category: "lab-manuals",
    badge: "Popular",
    rating: 4.7,
    reviewCount: 34,
    tags: ["Lab", "Chemistry", "Experiments"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1524594154907-201defa8c154?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1534070189985-7f9f3ce36cfe?auto=format&fit=crop&w=900&q=80",
    ],
    colors: ["PDF", "Interactive PDF", "Bundle"],
    sizes: ["Individual", "Lab section"],
    highlights: ["Step-by-step protocols", "Safety checklists", "Data worksheets"],
    details: ["Editable tables", "Pre-lab quizzes", "Safety and waste notes"],
    relatedSlugs: ["cs101-foundations-programming", "engr310-systems-design-workbook"],
  },
  {
    id: "hist328-seminar-reader",
    slug: "hist328-seminar-reader",
    name: "Modern History Seminar Reader",
    courseCode: "HIST328",
    professor: "Prof. Simone Lee",
    department: "History",
    description: "A curated seminar reader with annotated primary sources, discussion questions, and lecture summaries.",
    price: 16,
    salePrice: 14,
    category: "professor-notes",
    badge: "Faculty Pick",
    rating: 4.8,
    reviewCount: 27,
    tags: ["History", "Seminar", "Primary sources"],
    image: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1488747279002-c8523379faaa?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=900&q=80",
    ],
    colors: ["PDF", "Interactive notes", "Bundle"],
    sizes: ["Standard", "Enhanced"],
    highlights: ["Curated primary sources", "Analytical prompts", "Discussion guide"],
    details: ["Annotated readings", "Lecture summaries", "Essay prompts"],
    relatedSlugs: ["psy101-study-guide", "mktg212-principles-marketing"],
  },
  {
    id: "engr310-systems-design-workbook",
    slug: "engr310-systems-design-workbook",
    name: "Systems Design Workbook",
    courseCode: "ENGR310",
    professor: "Dr. Keisha Brooks",
    department: "Engineering",
    description: "A workbook for systems design students with practice problems, diagrams, and planning templates for team projects.",
    price: 26,
    salePrice: 22,
    category: "study-guides",
    badge: "Top rated",
    rating: 4.9,
    reviewCount: 45,
    tags: ["Engineering", "Design", "Systems"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1516707570268-43ec2874c942?auto=format&fit=crop&w=900&q=80",
    ],
    colors: ["PDF", "Interactive PDF", "Bundle"],
    sizes: ["Individual", "Team license"],
    highlights: ["Practice problems", "Flowchart templates", "Design checklists"],
    details: ["Project planner", "Team activity guides", "Visual diagrams"],
    relatedSlugs: ["bio201-organic-chemistry-lab-manual", "psy101-study-guide"],
  },
  {
    id: "psy101-study-guide",
    slug: "psy101-study-guide",
    name: "Introductory Psychology Study Guide",
    courseCode: "PSY101",
    professor: "Dr. Aaron Patel",
    department: "Psychology",
    description: "An exam-ready study guide with chapter summaries, flashcard prompts, and memorization tools for introductory psychology.",
    price: 19,
    salePrice: 16,
    category: "study-guides",
    badge: "Recommended",
    rating: 4.8,
    reviewCount: 52,
    tags: ["Psychology", "Study guide", "Exam prep"],
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1496317656712-6d6ecf6b7bf9?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=900&q=80",
    ],
    colors: ["PDF", "Interactive PDF", "Bundle"],
    sizes: ["Standard", "Exam pack"],
    highlights: ["Chapter summaries", "Flashcard prompts", "Practice tests"],
    details: ["Memory aids", "Key terms index", "Study schedule planner"],
    relatedSlugs: ["hist328-seminar-reader", "engr310-systems-design-workbook"],
  },
];

export const reviews: Review[] = [
  {
    id: "review-1",
    user: "Maya Chen",
    role: "Undergraduate student",
    rating: 5,
    title: "Exactly what I needed for finals prep",
    body:
      "The course notes and exam checklists made this feel like the most useful campus resource I’ve purchased all semester.",
  },
  {
    id: "review-2",
    user: "André Silva",
    role: "Graduate student",
    rating: 5,
    title: "So helpful for group projects",
    body:
      "The workbook templates and professor notes made collaboration smooth and saved hours of prep time.",
  },
  {
    id: "review-3",
    user: "Nora Patel",
    role: "Teaching assistant",
    rating: 4,
    title: "A polished campus materials experience",
    body:
      "The browsing flow and instructor resources felt tailored to students and faculty working together.",
  },
];

export const orders: Order[] = [
  { id: "#CM-2041", date: "Apr 18, 2026", status: "Delivered", total: 29, items: ["Foundations of Programming"] },
  { id: "#CM-2068", date: "May 02, 2026", status: "Shipped", total: 24, items: ["Principles of Marketing"] },
  { id: "#CM-2094", date: "May 10, 2026", status: "Processing", total: 18, items: ["Organic Chemistry Lab Manual"] },
];

export const userProfile: UserProfile = {
  name: "Ava Thompson",
  email: "ava@student.university.edu",
  role: "Student member",
  location: "Campus City",
  joined: "September 2023",
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

export const brandLogos = ["Campus", "Lecture", "Nexus", "Scholar", "Library", "Atlas"];
