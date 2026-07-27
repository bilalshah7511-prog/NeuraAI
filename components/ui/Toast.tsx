"use client";

import { cn } from "@/utils";
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Toast {
  id: string;
  message: string;
  type: "success" | "error" | "info";
}

interface ToastContainerProps {
  toasts: Toast[];
  onRemove: (id: string) => void;
}

const icons = {
  success: CheckCircle,
  error: AlertCircle,
  info: Info,
};

const colors = {
  success: "border-green-500/30 bg-green-50 dark:bg-green-900/30",
  error: "border-red-500/30 bg-red-50 dark:bg-red-900/30",
  info: "border-brand-500/30 bg-brand-50 dark:bg-brand-900/30",
};

const iconColors = {
  success: "text-green-500",
  error: "text-red-500",
  info: "text-brand-500",
};

export function ToastContainer({ toasts, onRemove }: ToastContainerProps) {
  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2">
      <AnimatePresence>
        {toasts.map((toast) => {
          const Icon = icons[toast.type];
          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className={cn(
                "flex items-center gap-3 rounded-xl border px-4 py-3 shadow-lg backdrop-blur-sm",
                colors[toast.type]
              )}
            >
              <Icon className={cn("h-5 w-5 shrink-0", iconColors[toast.type])} />
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {toast.message}
              </p>
              <button
                onClick={() => onRemove(toast.id)}
                className="ml-2 shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
