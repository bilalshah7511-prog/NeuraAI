"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import IconBox from "@/components/ui/IconBox";
import { templates } from "@/data";

export default function TemplatesPage() {
  const categories = [...new Set(templates.map((t) => t.category))];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
          Templates
        </h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Start with pre-built templates for common content types.
        </p>
      </div>

      {categories.map((category) => (
        <div key={category}>
          <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            {category}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {templates
              .filter((t) => t.category === category)
              .map((template, i) => (
                <motion.div
                  key={template.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={`/dashboard/create?prompt=${encodeURIComponent(template.prompt)}`}
                  >
                    <Card hover className="group h-full">
                      <div className="mb-4 flex items-start justify-between">
                        <IconBox icon={template.icon} size="sm" />
                        <Badge variant="outline">{template.category}</Badge>
                      </div>
                      <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                        {template.title}
                      </h3>
                      <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                        {template.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 transition-transform group-hover:translate-x-1 dark:text-brand-400">
                        Use template
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </Card>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
