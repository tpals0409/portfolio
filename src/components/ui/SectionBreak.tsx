"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionBreakProps {
  id: string;
  label: string;
}

export function SectionBreak({ id, label }: SectionBreakProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <div
      data-scroll-brake={id}
      ref={ref}
      className="flex h-[120px] items-center justify-center bg-background"
    >
      <motion.div
        className="flex items-center gap-4"
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? 0 : 12,
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="h-px w-8 bg-card-border" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
          {label}
        </span>
        <div className="h-px w-8 bg-card-border" />
      </motion.div>
    </div>
  );
}
