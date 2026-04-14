"use client";

import { motion } from "framer-motion";
import { PROJECT_STATS } from "@/lib/constants";
import { AnimatedCounter } from "./AnimatedCounter";
import { useLocale } from "@/lib/i18n/context";

export function ResultsBlock() {
  const { t } = useLocale();

  return (
    <div>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xl font-bold text-foreground mb-6"
      >
        Results
      </motion.h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {PROJECT_STATS.map((stat, index) => (
          <AnimatedCounter key={t(stat.label)} stat={stat} index={index} />
        ))}
      </div>
    </div>
  );
}
