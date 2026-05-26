import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function ForgotPasswordPage() {
  return (
    <div className="mx-auto flex min-h-[75vh] max-w-2xl items-center px-4 py-12 sm:px-6 lg:px-8">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Reset your password</CardTitle>
          <p className="text-sm text-muted-foreground">Enter the email on your account and we’ll send a secure reset link so you can get back to reading.</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Email" type="email" />
          <Button className="w-full">Send reset link</Button>
          <Link href="/login" className="inline-flex text-sm text-muted-foreground hover:text-foreground">
            Back to login
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
