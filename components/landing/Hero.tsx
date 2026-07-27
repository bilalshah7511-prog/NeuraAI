"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Zap, Shield } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl" />
      <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-600 dark:text-brand-400">
              <Sparkles className="h-4 w-4" />
              Powered by Advanced AI Models
            </div>

            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              Create Better Content With{" "}
              <span className="text-gradient">Artificial Intelligence</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg text-gray-600 dark:text-gray-400">
              Transform your ideas into polished blog posts, emails, social media
              content, and more — in seconds. NeuraAI is your AI-powered writing
              companion.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/signup">
                <Button size="lg" className="group">
                  Start Creating Free
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="group">
                <Play className="h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-brand-500" />
                10,000+ creators
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-brand-500" />
                No credit card required
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-gray-200 bg-gray-900 p-1 shadow-2xl shadow-brand-500/20 dark:border-gray-700">
              <div className="flex items-center gap-2 rounded-t-xl bg-gray-800 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <span className="ml-2 text-xs text-gray-400">NeuraAI Dashboard</span>
              </div>
              <div className="rounded-b-xl bg-gray-950 p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Welcome back, Sarah</p>
                    <p className="text-lg font-semibold text-white">Create Content</p>
                  </div>
                  <div className="rounded-lg bg-brand-600 px-3 py-1 text-xs font-medium text-white">
                    Pro Plan
                  </div>
                </div>
                <div className="mb-4 rounded-xl border border-gray-700 bg-gray-900 p-4">
                  <p className="mb-2 text-xs text-gray-500">Your prompt</p>
                  <p className="text-sm text-gray-300">
                    Write a blog post about the future of AI in content creation...
                  </p>
                </div>
                <div className="mb-4 grid grid-cols-3 gap-3">
                  {["Blog Post", "Email", "Social"].map((type) => (
                    <div
                      key={type}
                      className="rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-center text-xs text-gray-400"
                    >
                      {type}
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-brand-500/30 bg-brand-500/5 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-brand-400" />
                    <span className="text-xs font-medium text-brand-400">AI Generated</span>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-300">
                    The Future of Artificial Intelligence in Content Creation
                    <br /><br />
                    Artificial intelligence is reshaping how we create, consume, and
                    distribute content across every industry...
                  </p>
                </div>
                <div className="mt-4 flex gap-2">
                  <div className="flex-1 rounded-lg bg-brand-600 py-2 text-center text-xs font-medium text-white">
                    Copy
                  </div>
                  <div className="flex-1 rounded-lg border border-gray-700 py-2 text-center text-xs text-gray-400">
                    Regenerate
                  </div>
                  <div className="flex-1 rounded-lg border border-gray-700 py-2 text-center text-xs text-gray-400">
                    Save
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 -z-10 h-full w-full rounded-2xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
