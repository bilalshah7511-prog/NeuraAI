"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Trash2,
  Eye,
  Star,
  Filter,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Badge from "@/components/ui/Badge";
import Select from "@/components/ui/Select";
import EmptyState from "@/components/ui/EmptyState";
import { useToastContext } from "@/components/providers/ToastProvider";
import { generations } from "@/data";
import { ContentType } from "@/data/types";
import { formatRelativeTime, truncate } from "@/utils";

const filterOptions = [
  { value: "all", label: "All Types" },
  { value: "blog post", label: "Blog Post" },
  { value: "article", label: "Article" },
  { value: "email", label: "Email" },
  { value: "social media post", label: "Social Media" },
  { value: "product description", label: "Product Description" },
  { value: "ad copy", label: "Ad Copy" },
];

export default function HistoryPage() {
  const { addToast } = useToastContext();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [items, setItems] = useState(generations);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.content.toLowerCase().includes(search.toLowerCase());
      const matchesFilter =
        filter === "all" || item.contentType === filter;
      return matchesSearch && matchesFilter;
    });
  }, [items, search, filter]);

  const selected = items.find((i) => i.id === selectedId);

  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
    if (selectedId === id) setSelectedId(null);
    addToast("Generation deleted");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
          History
        </h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Browse and manage your previous AI generations.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex-1">
          <Input
            placeholder="Search history..."
            icon={<Search className="h-4 w-4" />}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Select
          value={filter}
          onChange={setFilter}
          options={filterOptions}
          className="sm:w-48"
        />
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          icon={<Filter className="h-8 w-8 text-gray-400" />}
          title="No generations found"
          description="Try adjusting your search or filter criteria, or create new content."
          actionLabel="Create Content"
          onAction={() => (window.location.href = "/dashboard/create")}
        />
      ) : (
        <div className="grid gap-6 lg:grid-cols-5">
          <div className="space-y-3 lg:col-span-2">
            {filtered.map((item, i) => (
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
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="truncate font-medium text-gray-900 dark:text-white">
                          {item.title}
                        </p>
                        {item.isFavorite && (
                          <Star className="h-3.5 w-3.5 shrink-0 fill-yellow-400 text-yellow-400" />
                        )}
                      </div>
                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        <Badge variant="outline" className="capitalize">
                          {item.contentType}
                        </Badge>
                        <span className="text-xs text-gray-500">
                          {formatRelativeTime(item.createdAt)}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(item.id);
                      }}
                      className="shrink-0 rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-900/20"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-3">
            {selected ? (
              <Card className="sticky top-24">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {selected.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="capitalize">
                      {selected.tone}
                    </Badge>
                    <Badge variant="brand">{selected.language}</Badge>
                  </div>
                </div>
                <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
                  <span>{selected.wordCount} words</span>
                  <span>{formatRelativeTime(selected.createdAt)}</span>
                </div>
                <pre className="max-h-[500px] overflow-y-auto whitespace-pre-wrap rounded-xl bg-gray-50 p-4 text-sm leading-relaxed text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                  {selected.content}
                </pre>
              </Card>
            ) : (
              <Card className="flex h-64 items-center justify-center">
                <div className="text-center">
                  <Eye className="mx-auto mb-3 h-8 w-8 text-gray-400" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Select a generation to view details
                  </p>
                </div>
              </Card>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
