import Link from "next/link";
import { BookOpen, ClipboardList, GraduationCap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VendorUploadForm } from "@/components/vendor-upload-form";

export default function ProfessorPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Professor</p>
        <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Sell your course materials on campus</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Share digital textbooks, lab manuals, lecture notes, and practice guides with students in a dedicated university marketplace.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Faculty-first listings
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Easily upload and manage your course materials, including targeted notes and exam prep bundles.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Digital formats
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Offer PDFs, interactive guides, and bundled resources for students across any device.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ClipboardList className="h-5 w-5" />
              Campus-ready support
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Track downloads, connect with your course roster, and keep materials aligned with term schedules.
          </CardContent>
        </Card>
      </div>

      <div className="mt-10 rounded-4xl border border-white/10 bg-white/80 p-8 dark:bg-zinc-950/70">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Ready to publish your next edition?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Get started by creating a faculty account, then add materials for your students to access instantly.
            </p>
          </div>
          <Button asChild size="lg">
            <Link href="/signup">Create faculty account</Link>
          </Button>
        </div>
      </div>

      <div className="mt-10">
        <VendorUploadForm />
      </div>
    </div>
  );
}
