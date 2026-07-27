"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/utils";

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}

export default function ImageWithSkeleton({
  src,
  alt,
  width = 400,
  height = 400,
  className,
  imageClassName,
  priority = false,
}: ImageWithSkeletonProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Skeleton wave shimmer */}
      {!loaded && (
        <div className="absolute inset-0 z-10">
          <div className="skeleton-wave h-full w-full" />
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 0.95 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative h-full w-full"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          onLoad={() => setLoaded(true)}
          className={cn(
            "h-full w-full object-cover",
            imageClassName
          )}
        />
      </motion.div>
    </div>
  );
}
