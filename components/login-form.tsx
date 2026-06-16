"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setStatus("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter both your email and password.");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Please use a valid email address.");
      return;
    }

    setStatus("Logging in...");

    window.setTimeout(() => {
      localStorage.setItem("inkpages-user", JSON.stringify({ email, role: "student" }));
      setStatus("Welcome back! Redirecting to your dashboard...");
      router.push("/account");
    }, 600);
  }

  return (
    <div className="mx-auto flex min-h-[75vh] max-w-2xl items-center px-4 py-12 sm:px-6 lg:px-8">
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <div className="rounded-3xl border border-white/10 bg-background/80 p-8 shadow-lg shadow-slate-900/5 backdrop-blur">
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold">Welcome back</h1>
            <p className="text-sm text-muted-foreground">Log in to save favorites, manage your course materials, and track orders.</p>
          </div>

          <div className="mt-8 grid gap-4">
            <Input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email address"
              type="email"
              autoComplete="email"
            />
            <Input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              type="password"
              autoComplete="current-password"
            />
          </div>

          {error ? <p className="text-sm text-red-500">{error}</p> : null}
          {status ? <p className="text-sm text-foreground/80">{status}</p> : null}

          <div className="grid gap-4 pt-2">
            <Button className="w-full" type="submit">Continue</Button>
            <div className="flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
              <Link href="/forgot-password" className="text-muted-foreground hover:text-foreground">
                Forgot password?
              </Link>
              <Link href="/signup" className="text-muted-foreground hover:text-foreground">
                Create account
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
