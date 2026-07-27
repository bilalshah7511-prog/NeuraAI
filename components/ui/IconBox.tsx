"use client";

import { cn } from "@/utils";
import {
  PenTool,
  FileText,
  Mail,
  Share2,
  ListCollapse,
  SpellCheck,
  Lightbulb,
  Sparkles,
  Download,
  ShoppingBag,
  Megaphone,
  Search,
  Briefcase,
  Newspaper,
  HelpCircle,
  LayoutTemplate,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  PenTool,
  FileText,
  Mail,
  Share2,
  ListCollapse,
  SpellCheck,
  Lightbulb,
  Sparkles,
  Download,
  ShoppingBag,
  Megaphone,
  Search,
  Briefcase,
  Newspaper,
  HelpCircle,
  LayoutTemplate,
};

interface IconBoxProps {
  icon: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function IconBox({ icon, className, size = "md" }: IconBoxProps) {
  const IconComponent = iconMap[icon];

  const sizes = {
    sm: "h-9 w-9",
    md: "h-11 w-11",
    lg: "h-14 w-14",
  };

  const iconSizes = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-7 w-7",
  };

  if (!IconComponent) return null;

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-xl bg-brand-100 text-brand-600 dark:bg-brand-900/50 dark:text-brand-400",
        sizes[size],
        className
      )}
    >
      <IconComponent className={iconSizes[size]} />
    </div>
  );
}
