import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSignup() {
  return (
    <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-foreground to-zinc-800 p-6 text-background sm:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-background/70">Newsletter</p>
          <h2 className="mt-2 text-2xl font-semibold">Get early access to new releases, bundles, and curated reading lists.</h2>
        </div>
        <form className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="email"
              placeholder="Email address"
              className="pl-10 border-white/20 bg-white/10 text-background placeholder:text-background/70"
            />
          </div>
          <Button variant="secondary" type="submit">
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
}
