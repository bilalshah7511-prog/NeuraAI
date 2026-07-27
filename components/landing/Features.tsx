"use client";

import { motion } from "framer-motion";
import { features } from "@/data";
import Card from "@/components/ui/Card";
import IconBox from "@/components/ui/IconBox";

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Everything You Need to Create{" "}
            <span className="text-gradient">Amazing Content</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Powerful AI tools designed for marketers, writers, and creators who
            demand quality at scale.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card hover className="h-full">
                <IconBox icon={feature.icon} className="mb-4" />
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
