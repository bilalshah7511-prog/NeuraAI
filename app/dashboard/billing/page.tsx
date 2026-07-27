"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, CreditCard, Zap } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Toggle from "@/components/ui/Toggle";
import { currentUser, pricingPlans } from "@/data";
import { cn } from "@/utils";

export default function BillingPage() {
  const [yearly, setYearly] = useState(false);
  const currentPlan = pricingPlans.find((p) => p.id === currentUser.plan);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
          Billing
        </h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Manage your subscription and billing details.
        </p>
      </div>

      {/* Current Plan */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <Card className="border-brand-500/30 bg-gradient-to-br from-brand-50 to-white dark:from-brand-950/30 dark:to-gray-900">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Current Plan
                </p>
                <p className="text-xl font-bold capitalize text-gray-900 dark:text-white">
                  {currentUser.plan} Plan
                </p>
              </div>
            </div>
            <Badge variant="brand">Active</Badge>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div>
              <p className="text-sm text-gray-500">Credits Remaining</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {currentUser.credits} / {currentUser.maxCredits}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Billing Cycle</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                Monthly
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Next Billing Date</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                Aug 15, 2026
              </p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Payment Method */}
      <Card>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <CreditCard className="h-8 w-8 text-gray-400" />
            <div>
              <p className="font-medium text-gray-900 dark:text-white">
                Visa ending in 4242
              </p>
              <p className="text-sm text-gray-500">Expires 12/2027</p>
            </div>
          </div>
          <Button variant="outline" size="sm">
            Update
          </Button>
        </div>
      </Card>

      {/* Upgrade Plans */}
      <div>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Available Plans
          </h2>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">Monthly</span>
            <Toggle checked={yearly} onChange={setYearly} />
            <span className="text-sm text-gray-500">Yearly</span>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card
                className={cn(
                  "flex h-full flex-col",
                  plan.id === currentUser.plan &&
                    "border-brand-500 ring-1 ring-brand-500"
                )}
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {plan.name}
                </h3>
                <div className="my-4">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-500">
                    /{yearly ? "year" : "mo"}
                  </span>
                </div>
                <ul className="mb-6 flex-1 space-y-2">
                  {plan.features.slice(0, 4).map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                      <span className="text-gray-600 dark:text-gray-400">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                {plan.id === currentUser.plan ? (
                  <Button variant="outline" disabled className="w-full">
                    Current Plan
                  </Button>
                ) : (
                  <Button className="w-full">{plan.cta}</Button>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
