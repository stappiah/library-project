import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function SignupPage() {
  return (
    <div className="mx-auto flex min-h-[75vh] max-w-2xl items-center px-4 py-12 sm:px-6 lg:px-8">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Create your account</CardTitle>
          <p className="text-sm text-muted-foreground">Join Campus Market to save course resources, track materials orders, and unlock campus perks.</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input placeholder="First name" />
            <Input placeholder="Last name" />
          </div>
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          <Button className="w-full">Create account</Button>
          <p className="text-sm text-muted-foreground">
            Already have an account? <Link href="/login" className="font-semibold text-foreground">Log in</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
