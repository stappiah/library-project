import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Product, Review } from "@/lib/mock-data";

interface ProductTabsProps {
  product: Product;
  reviews: Review[];
}

export function ProductTabs({ product, reviews }: ProductTabsProps) {
  return (
    <Tabs defaultValue="details" className="w-full">
      <TabsList>
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
        <TabsTrigger value="extras">Study extras</TabsTrigger>
      </TabsList>
      <TabsContent value="details" className="rounded-3xl border border-white/10 bg-white/80 p-5 dark:bg-zinc-950/70">
        <p className="text-sm text-muted-foreground">{product.description}</p>
        <ul className="mt-4 space-y-2 text-sm">
          {product.highlights.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </TabsContent>
      <TabsContent value="reviews" className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="rounded-3xl border border-white/10 bg-white/80 p-5 dark:bg-zinc-950/70">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">{review.user}</p>
                <p className="text-sm text-muted-foreground">{review.role}</p>
              </div>
              <p className="text-sm">⭐ {review.rating}.0</p>
            </div>
            <h3 className="mt-3 font-semibold">{review.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{review.body}</p>
          </div>
        ))}
      </TabsContent>
      <TabsContent value="extras" className="rounded-3xl border border-white/10 bg-white/80 p-5 dark:bg-zinc-950/70">
        <ul className="space-y-2 text-sm text-muted-foreground">
          {product.details.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </TabsContent>
    </Tabs>
  );
}
