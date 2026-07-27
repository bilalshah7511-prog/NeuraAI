"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Quote } from "lucide-react";
import ImageWithSkeleton from "@/components/ui/ImageWithSkeleton";

interface AuthSidePanelProps {
  title: string;
  description: string;
  features?: string[];
  quote?: string;
  author?: string;
}

export default function AuthSidePanel({
  title,
  description,
  features,
  quote = "NeuraAI transformed how I create content. What used to take hours now takes minutes.",
  author = "Content Creator",
}: AuthSidePanelProps) {
  return (
    <div className="relative hidden flex-1 flex-col justify-between overflow-hidden bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 p-12 lg:flex">
      {/* Animated background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl"
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-60" />
      </div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/" className="relative z-10 flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <span className="font-display text-2xl font-bold text-white">
            NeuraAI
          </span>
        </Link>
      </motion.div>

      {/* Main content with photo */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Pulsing ring */}
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.2, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-4 rounded-full border-2 border-white/30"
          />
          <motion.div
            animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -inset-8 rounded-full border border-white/20"
          />

          {/* Photo frame */}
          <div className="relative h-44 w-44 overflow-hidden rounded-full border-4 border-white/30 shadow-2xl shadow-black/30 ring-4 ring-white/10 sm:h-52 sm:w-52">
            <ImageWithSkeleton
              src="/images/auth-profile.png"
              alt="NeuraAI user"
              width={208}
              height={208}
              priority
              className="h-full w-full rounded-full"
              imageClassName="rounded-full"
            />
          </div>

          {/* Online badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -right-2 bottom-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 shadow-lg backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="text-xs font-semibold text-gray-800">Active</span>
          </motion.div>
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 max-w-sm text-center"
        >
          <h2 className="font-display text-3xl font-bold text-white xl:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-brand-100">
            {description}
          </p>

          {features && (
            <ul className="mt-6 space-y-2.5 text-left">
              {features.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3 text-sm text-brand-100"
                >
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20">
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
          )}
        </motion.div>

        {/* Testimonial card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-8 w-full max-w-sm rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md"
        >
          <Quote className="mb-2 h-5 w-5 text-brand-200" />
          <p className="text-sm italic leading-relaxed text-white/90">
            &ldquo;{quote}&rdquo;
          </p>
          <p className="mt-3 text-xs font-medium text-brand-200">— {author}</p>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="relative z-10 text-sm text-brand-200"
      >
        &copy; {new Date().getFullYear()} NeuraAI. All rights reserved.
      </motion.p>
    </div>
  );
}
