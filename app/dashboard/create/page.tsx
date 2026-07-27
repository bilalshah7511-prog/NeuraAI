"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  Sparkles,
  Copy,
  RefreshCw,
  Save,
  Download,
  Wand2,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Textarea from "@/components/ui/Textarea";
import Select from "@/components/ui/Select";
import Badge from "@/components/ui/Badge";
import { DashboardSkeleton } from "@/components/ui/Skeleton";
import { useToastContext } from "@/components/providers/ToastProvider";
import { sampleGeneratedContent } from "@/data";
import { ContentType, Tone, Language } from "@/data/types";
import { simulateDelay, countWords } from "@/utils";

const contentTypes: { value: ContentType; label: string }[] = [
  { value: "blog post", label: "Blog Post" },
  { value: "article", label: "Article" },
  { value: "email", label: "Email" },
  { value: "social media post", label: "Social Media Post" },
  { value: "product description", label: "Product Description" },
  { value: "ad copy", label: "Ad Copy" },
];

const tones: { value: Tone; label: string }[] = [
  { value: "professional", label: "Professional" },
  { value: "friendly", label: "Friendly" },
  { value: "creative", label: "Creative" },
  { value: "formal", label: "Formal" },
];

const languages: { value: Language; label: string }[] = [
  { value: "English", label: "English" },
  { value: "Spanish", label: "Spanish" },
  { value: "French", label: "French" },
  { value: "German", label: "German" },
];

function CreateContentInner() {
  const searchParams = useSearchParams();
  const { addToast } = useToastContext();
  const [prompt, setPrompt] = useState("");
  const [contentType, setContentType] = useState<ContentType>("blog post");
  const [tone, setTone] = useState<Tone>("professional");
  const [language, setLanguage] = useState<Language>("English");
  const [output, setOutput] = useState("");
  const [generating, setGenerating] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);

  useEffect(() => {
    if (!searchParams) return;
    const type = searchParams.get("type") as ContentType | null;
    if (type && contentTypes.some((t) => t.value === type)) {
      setContentType(type);
    }
    const promptParam = searchParams.get("prompt");
    if (promptParam) {
      setPrompt(promptParam);
    }
  }, [searchParams]);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      addToast("Please enter a prompt first", "error");
      return;
    }
    setGenerating(true);
    setOutput("");
    await simulateDelay(2500);
    setOutput(sampleGeneratedContent);
    setHasGenerated(true);
    setGenerating(false);
    addToast("Content generated successfully!");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    addToast("Copied to clipboard!");
  };

  const handleSave = () => {
    addToast("Content saved to history!");
  };

  const handleDownload = () => {
    const blob = new Blob([output], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "neuraai-content.txt";
    a.click();
    URL.revokeObjectURL(url);
    addToast("Content downloaded!");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
          Create Content
        </h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Describe what you want to create and let AI do the rest.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Input Panel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Card className="space-y-5">
            <Textarea
              label="Your Prompt"
              placeholder="Describe the content you want to create... e.g., Write a blog post about the benefits of remote work for startups"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              showCount
              maxLength={2000}
              rows={6}
            />

            <div className="grid gap-4 sm:grid-cols-3">
              <Select
                label="Content Type"
                value={contentType}
                onChange={(v) => setContentType(v as ContentType)}
                options={contentTypes}
              />
              <Select
                label="Tone"
                value={tone}
                onChange={(v) => setTone(v as Tone)}
                options={tones}
              />
              <Select
                label="Language"
                value={language}
                onChange={(v) => setLanguage(v as Language)}
                options={languages}
              />
            </div>

            <Button
              onClick={handleGenerate}
              loading={generating}
              size="lg"
              className="w-full"
            >
              <Wand2 className="h-5 w-5" />
              {generating ? "Generating..." : "Generate Content"}
            </Button>
          </Card>
        </motion.div>

        {/* Output Panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Card className="flex h-full flex-col">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-brand-500" />
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Generated Content
                </h3>
              </div>
              {hasGenerated && (
                <Badge variant="brand">
                  {countWords(output)} words
                </Badge>
              )}
            </div>

            <div className="flex-1">
              {generating ? (
                <div className="space-y-3">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-4 animate-pulse rounded bg-gray-200 dark:bg-gray-700"
                      style={{ width: `${Math.random() * 40 + 60}%` }}
                    />
                  ))}
                  <p className="flex items-center gap-2 text-sm text-brand-500">
                    <Sparkles className="h-4 w-4 animate-pulse" />
                    AI is writing your content...
                  </p>
                </div>
              ) : hasGenerated ? (
                <div className="prose prose-sm max-w-none dark:prose-invert">
                  <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    {output}
                  </pre>
                </div>
              ) : (
                <div className="flex h-64 flex-col items-center justify-center text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 dark:bg-gray-800">
                    <Sparkles className="h-8 w-8 text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Your generated content will appear here
                  </p>
                </div>
              )}
            </div>

            {hasGenerated && !generating && (
              <div className="mt-4 flex flex-wrap gap-2 border-t border-gray-200 pt-4 dark:border-gray-700">
                <Button variant="outline" size="sm" onClick={handleCopy}>
                  <Copy className="h-4 w-4" />
                  Copy
                </Button>
                <Button variant="outline" size="sm" onClick={handleGenerate}>
                  <RefreshCw className="h-4 w-4" />
                  Regenerate
                </Button>
                <Button variant="outline" size="sm" onClick={handleSave}>
                  <Save className="h-4 w-4" />
                  Save
                </Button>
                <Button variant="outline" size="sm" onClick={handleDownload}>
                  <Download className="h-4 w-4" />
                  Download
                </Button>
              </div>
            )}
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

export default function CreateContentPage() {
  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <CreateContentInner />
    </Suspense>
  );
}
