"use client";

import { motion } from "framer-motion";
import { PROJECT } from "@/lib/constants";

export function BackgroundBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-card rounded-2xl p-6 md:p-8"
    >
      <h3 className="text-xl font-bold text-foreground mb-4">
        {PROJECT.background.title}
      </h3>
      <div className="space-y-4">
        {PROJECT.background.paragraphs.map((paragraph, i) => (
          <p key={i} className="text-muted leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </motion.div>
  );
}
