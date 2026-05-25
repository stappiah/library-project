import { ArrowRight, ShieldCheck, Sparkles, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { orders, userProfile } from "@/lib/mock-data";

export default function AccountPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Account</p>
        <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Welcome back, {userProfile.name}</h1>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          { label: "Rewards", value: `${userProfile.rewards} points`, icon: Sparkles },
          { label: "Membership", value: userProfile.role, icon: ShieldCheck },
          { label: "Location", value: userProfile.location, icon: Star },
        ].map((item) => (
          <Card key={item.label}>
            <CardContent className="p-5">
              <item.icon className="h-5 w-5" />
              <p className="mt-3 text-sm text-muted-foreground">{item.label}</p>
              <p className="mt-2 text-lg font-semibold">{item.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardHeader>
            <CardTitle>Recent orders</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {orders.map((order) => (
              <div key={order.id} className="rounded-[24px] bg-muted/60 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold">{order.id}</p>
                    <p className="text-sm text-muted-foreground">{order.items.join(", ")}</p>
                  </div>
                  <p className="text-sm">{order.status}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Account settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="mt-1 font-semibold">{userProfile.email}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Member since</p>
              <p className="mt-1 font-semibold">{userProfile.joined}</p>
            </div>
            <Button className="w-full">
              Manage account <ArrowRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
