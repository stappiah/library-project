import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <div className="rounded-4xl border border-white/10 bg-white/80 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:bg-zinc-950/70">
      <p className="text-sm leading-7 text-muted-foreground">“{quote}”</p>
      <div className="mt-4 flex items-center gap-3">
        <Avatar>
          <AvatarFallback>{name.slice(0, 1)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
}
