"use client";

import Link from "next/link";
import { useState } from "react";
import { Sparkles, Mail, ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useToastContext } from "@/components/providers/ToastProvider";

export default function ForgotPasswordPage() {
  const { addToast } = useToastContext();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSent(true);
    addToast("Password reset link sent to your email!");
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-12">
      <div className="absolute right-4 top-4">
        <ThemeToggle />
      </div>

      <div className="mx-auto w-full max-w-md">
        <div className="mb-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span className="font-display text-2xl font-bold text-gray-900 dark:text-white">
              NeuraAI
            </span>
          </Link>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-900">
          {!sent ? (
            <>
              <h1 className="font-display text-2xl font-bold text-gray-900 dark:text-white">
                Forgot your password?
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Enter your email and we&apos;ll send you a link to reset your
                password.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <Input
                  label="Email"
                  type="email"
                  placeholder="you@example.com"
                  icon={<Mail className="h-4 w-4" />}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" loading={loading} className="w-full">
                  Send Reset Link
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                <Mail className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Check your email
              </h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                We sent a password reset link to{" "}
                <span className="font-medium text-gray-900 dark:text-white">
                  {email}
                </span>
              </p>
            </div>
          )}

          <Link
            href="/login"
            className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-500"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
