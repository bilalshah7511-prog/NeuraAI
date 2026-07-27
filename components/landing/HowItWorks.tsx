"use client";

import { motion } from "framer-motion";
import { howItWorksSteps } from "@/data";
import IconBox from "@/components/ui/IconBox";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gray-50 py-20 dark:bg-gray-900/50 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Create professional content in three simple steps
          </p>
        </motion.div>

        <div className="relative grid gap-8 md:grid-cols-3">
          <div className="absolute top-16 hidden h-0.5 w-full bg-gradient-to-r from-brand-500/0 via-brand-500/50 to-brand-500/0 md:block" />

          {howItWorksSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white shadow-lg shadow-brand-600/30">
                {step.step}
              </div>
              <IconBox
                icon={step.icon}
                size="lg"
                className="mx-auto mb-4 bg-white dark:bg-gray-800"
              />
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
