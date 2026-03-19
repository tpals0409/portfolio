"use client";

import { motion } from "framer-motion";

interface TechBadgeProps {
  name: string;
}

export function TechBadge({ name }: TechBadgeProps) {
  return (
    <motion.span
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="inline-block cursor-default rounded-full border border-card-border bg-card px-3 py-1 text-sm text-foreground transition-shadow hover:border-accent-purple/50 hover:shadow-md hover:shadow-accent-purple/5"
    >
      {name}
    </motion.span>
  );
}
