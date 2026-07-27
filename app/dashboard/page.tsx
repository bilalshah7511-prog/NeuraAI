"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  FileText,
  Mail,
  Share2,
  TrendingUp,
  Zap,
  ArrowRight,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { currentUser, dashboardStats, generations } from "@/data";
import { formatNumber, formatRelativeTime } from "@/utils";

const statCards = [
  {
    label: "Total Generations",
    value: dashboardStats.totalGenerations,
    icon: Sparkles,
    color: "text-brand-500",
    bg: "bg-brand-100 dark:bg-brand-900/30",
  },
  {
    label: "Words Generated",
    value: dashboardStats.wordsGenerated,
    icon: FileText,
    color: "text-green-500",
    bg: "bg-green-100 dark:bg-green-900/30",
    format: true,
  },
  {
    label: "Saved Projects",
    value: dashboardStats.savedProjects,
    icon: TrendingUp,
    color: "text-purple-500",
    bg: "bg-purple-100 dark:bg-purple-900/30",
  },
  {
    label: "Subscription",
    value: dashboardStats.plan,
    icon: Zap,
    color: "text-yellow-500",
    bg: "bg-yellow-100 dark:bg-yellow-900/30",
    isText: true,
  },
];

const quickActions = [
  { label: "Blog Post", icon: FileText, href: "/dashboard/create?type=blog post" },
  { label: "Email", icon: Mail, href: "/dashboard/create?type=email" },
  { label: "Social Post", icon: Share2, href: "/dashboard/create?type=social media post" },
];

export default function DashboardPage() {
  const recentGenerations = generations.slice(0, 5);
  const creditPercent = (currentUser.credits / currentUser.maxCredits) * 100;

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-display text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
          Welcome back, {currentUser.name.split(" ")[0]} 👋
        </h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Here&apos;s an overview of your content creation activity.
        </p>
      </motion.div>

      {/* Credits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Remaining AI Credits
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {currentUser.credits}{" "}
                <span className="text-base font-normal text-gray-500">
                  / {currentUser.maxCredits}
                </span>
              </p>
            </div>
            <Badge variant="brand" className="capitalize">
              {currentUser.plan} Plan
            </Badge>
          </div>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500 transition-all duration-500"
              style={{ width: `${creditPercent}%` }}
            />
          </div>
        </Card>
      </motion.div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.05 }}
          >
            <Card hover>
              <div className="flex items-center justify-between">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${stat.bg}`}
                >
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
              </div>
              <p className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
                {stat.isText
                  ? stat.value
                  : stat.format
                    ? formatNumber(stat.value as number)
                    : stat.value}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {stat.label}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Quick Create */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
          Quick Create
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {quickActions.map((action) => (
            <Link key={action.label} href={action.href}>
              <Card hover className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 dark:bg-brand-900/30">
                  <action.icon className="h-6 w-6 text-brand-600 dark:text-brand-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {action.label}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Start creating
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Recent Creations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Recent Creations
          </h2>
          <Link href="/dashboard/history">
            <Button variant="ghost" size="sm" className="group">
              View all
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
        <Card className="divide-y divide-gray-200 p-0 dark:divide-gray-800">
          {recentGenerations.map((gen) => (
            <div
              key={gen.id}
              className="flex items-center justify-between gap-4 px-6 py-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50"
            >
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium text-gray-900 dark:text-white">
                  {gen.title}
                </p>
                <div className="mt-1 flex items-center gap-2">
                  <Badge variant="outline" className="capitalize">
                    {gen.contentType}
                  </Badge>
                  <span className="text-xs text-gray-500">
                    {formatRelativeTime(gen.createdAt)}
                  </span>
                </div>
              </div>
              <span className="hidden text-sm text-gray-500 sm:block">
                {gen.wordCount} words
              </span>
            </div>
          ))}
        </Card>
      </motion.div>
    </div>
  );
}
