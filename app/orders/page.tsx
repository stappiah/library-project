import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { orders } from "@/lib/mock-data";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);

export default function OrdersPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Order history</p>
        <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Your recent reading orders</h1>
      </div>

      <div className="mt-8 space-y-4">
        {orders.map((order) => (
          <Card key={order.id}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between gap-4">
                <span>{order.id}</span>
                <span className="text-sm font-medium">{order.status}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm text-muted-foreground">Titles</p>
                <p className="font-semibold">{order.items.join(", ")}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Date</p>
                <p className="font-semibold">{order.date}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total</p>
                <p className="font-semibold">{formatCurrency(order.total)}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
