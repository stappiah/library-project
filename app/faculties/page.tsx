import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const faculties = [
  { name: "Faculty of Engineering", slug: "engineering", color: "from-blue-500/20 to-cyan-500/20" },
  { name: "Faculty of Applied Science & Technology (FAST)", slug: "fast", color: "from-emerald-500/20 to-teal-500/20" },
  { name: "Faculty of Business & Management Studies (FBMS)", slug: "fbms", color: "from-amber-500/20 to-orange-500/20" },
  { name: "Faculty of Built & Natural Environment", slug: "built-environment", color: "from-lime-500/20 to-green-500/20" },
  { name: "Faculty of Health and Allied Sciences", slug: "health-sciences", color: "from-rose-500/20 to-pink-500/20" },
  { name: "School of Graduate Studies", slug: "graduate-studies", color: "from-indigo-500/20 to-purple-500/20" },
];

export default function FacultiesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Browse</p>
        <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Faculties & Schools</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Select your faculty to find specific course materials, textbooks, and resources curated for your department.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {faculties.map((faculty) => (
          <Link key={faculty.slug} href={`/shop?faculty=${faculty.slug}`}>
            <Card className="h-full transition-all hover:border-foreground/50 hover:bg-muted/50">
              <CardContent className="p-6">
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br ${faculty.color}`}>
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold">{faculty.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Explore all materials available for students in the {faculty.name}.
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-foreground">
                  View materials →
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-12 rounded-4xl border border-white/10 bg-white/80 p-8 text-center dark:bg-zinc-950/70">
        <h2 className="text-2xl font-semibold">Can't find your department?</h2>
        <p className="mt-2 text-muted-foreground">Browse all available items in the shop and filter by search query or category.</p>
        <Link href="/shop" className="mt-4 inline-block font-semibold">View all materials →</Link>
      </div>
    </div>
  );
}
