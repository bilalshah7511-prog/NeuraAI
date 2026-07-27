"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Eye } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import EmptyState from "@/components/ui/EmptyState";
import { generations } from "@/data";
import { formatRelativeTime } from "@/utils";

export default function FavoritesPage() {
  const favorites = generations.filter((g) => g.isFavorite);
  const [selectedId, setSelectedId] = useState<string | null>(
    favorites[0]?.id || null
  );
  const selected = favorites.find((f) => f.id === selectedId);

  if (favorites.length === 0) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="font-display text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Favorites
          </h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Your starred AI generations in one place.
          </p>
        </div>
        <EmptyState
          icon={<Star className="h-8 w-8 text-gray-400" />}
          title="No favorites yet"
          description="Star your best AI generations from the History page to find them here quickly."
          actionLabel="View History"
          onAction={() => (window.location.href = "/dashboard/history")}
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
          Favorites
        </h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          {favorites.length} starred generation{favorites.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="space-y-3 lg:col-span-2">
          {favorites.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Card
                hover
                className={`cursor-pointer p-4 ${
                  selectedId === item.id
                    ? "border-brand-500 ring-1 ring-brand-500"
                    : ""
                }`}
                onClick={() => setSelectedId(item.id)}
              >
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <p className="truncate font-medium text-gray-900 dark:text-white">
                    {item.title}
                  </p>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <Badge variant="outline" className="capitalize">
                    {item.contentType}
                  </Badge>
                  <span className="text-xs text-gray-500">
                    {formatRelativeTime(item.createdAt)}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="lg:col-span-3">
          {selected ? (
            <Card className="sticky top-24">
              <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                {selected.title}
              </h3>
              <pre className="max-h-[500px] overflow-y-auto whitespace-pre-wrap rounded-xl bg-gray-50 p-4 text-sm leading-relaxed text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                {selected.content}
              </pre>
            </Card>
          ) : (
            <Card className="flex h-64 items-center justify-center">
              <Eye className="h-8 w-8 text-gray-400" />
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
