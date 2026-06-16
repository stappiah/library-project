"use client"; // This component needs to be a client component to handle state and form submission

import Link from "next/link";
import { useState } from "react"; // Import useState
import { useRouter } from "next/navigation"; // Import useRouter

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Terminal } from "lucide-react";

// Placeholder for a hypothetical API call
async function signupUser(userData: any) {
  // In a real application, this would be an actual API call, e.g.:
  // const response = await fetch('/api/signup', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(userData),
  // });
  // if (!response.ok) {
  //   const errorData = await response.json();
  //   throw new Error(errorData.message || 'Failed to sign up');
  // }
  // return response.json();

  // Simulate API call delay and success/failure
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userData.email === "test@example.com") {
        reject({ message: "Email already exists." });
      } else if (!userData.firstName || !userData.lastName || !userData.email || !userData.password) {
        reject({ message: "All fields are required." });
      } else {
        console.log("Signing up with:", userData);
        resolve({ message: "Signup successful!", user: { email: userData.email } });
      }
    }, 1500);
  });
}

export default function SignupPage() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null); // Clear previous errors
    setLoading(true);

    // Basic client-side validation
    if (!firstName || !lastName || !email || !password) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    try {
      await signupUser({ firstName, lastName, email, password });
      // Redirect to login page or dashboard on success
      router.push("/login?signupSuccess=true");
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred during signup.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto flex min-h-[75vh] max-w-2xl items-center px-4 py-12 sm:px-6 lg:px-8">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Create your account</CardTitle>
          <p className="text-sm text-muted-foreground">Join InkPages to save course resources, track materials orders, and unlock campus perks.</p>
        </CardHeader>
        <CardContent className="space-y-4"> 
          <form onSubmit={handleSubmit} className="space-y-4"> {/* Wrap inputs in a form */}
            {error && (
              <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-900">
                <div className="flex items-center gap-2 font-medium">
                  <Terminal className="h-4 w-4" />
                  <span>Error</span>
                </div>
                <p className="mt-2">{error}</p>
              </div>
            )}
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                disabled={loading}
              />
              <Input
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                disabled={loading}
              />
            </div>
            <Input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Creating account..." : "Create account"}
            </Button>
          </form>
          <p className="text-sm text-muted-foreground">
            Already have an account? <Link href="/login" className="font-semibold text-foreground">Log in</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
