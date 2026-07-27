"use client";

import { useThemeContext } from "@/components/providers/ThemeProvider";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/utils";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme, mounted } = useThemeContext();

  if (!mounted) {
    return (
      <div className={cn("h-9 w-9 rounded-lg bg-gray-200 dark:bg-gray-700", className)} />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800",
        className
      )}
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}
