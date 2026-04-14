"use client";

import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import type { ProjectStat } from "@/types";
import { useLocale } from "@/lib/i18n/context";

interface AnimatedCounterProps {
  stat: ProjectStat;
  index: number;
}

export function AnimatedCounter({ stat, index }: AnimatedCounterProps) {
  const { t } = useLocale();
  const { current, ref } = useCountUp(stat.value);

  const displayValue =
    stat.value % 1 !== 0 ? current.toFixed(2) : current.toString();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -2 }}
      className="rounded-xl border border-card-border bg-card p-6 text-center"
    >
      <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent-purple to-accent-cyan bg-clip-text text-transparent">
        {stat.prefix && (
          <span className="bg-gradient-to-r from-accent-purple to-accent-cyan bg-clip-text text-transparent">
            {stat.prefix}
          </span>
        )}
        {displayValue}
        {stat.suffix && (
          <span className="bg-gradient-to-r from-accent-purple to-accent-cyan bg-clip-text text-transparent">
            {t(stat.suffix)}
          </span>
        )}
      </p>
      <p className="mt-2 text-sm text-muted">{t(stat.label)}</p>
      {stat.context && (
        <p className="mt-1 text-xs text-muted/70">{t(stat.context)}</p>
      )}
    </motion.div>
  );
}
