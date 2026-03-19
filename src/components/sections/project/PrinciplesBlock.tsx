"use client";

import { motion } from "framer-motion";
import { PRINCIPLES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function PrinciplesBlock() {
  const hasOddCount = PRINCIPLES.length % 2 !== 0;

  return (
    <div>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xl font-bold text-foreground mb-6"
      >
        Troubleshooting
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PRINCIPLES.map((item, index) => {
          const isCyan = item.color === "cyan";
          const isLast = index === PRINCIPLES.length - 1;

          return (
            <motion.div
              key={item.principle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
              className={cn(
                "bg-card border border-card-border rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:border-accent-purple/50",
                hasOddCount && isLast && "md:col-span-2",
              )}
            >
              <span
                className={cn(
                  "text-xs font-medium px-2 py-1 rounded-full",
                  isCyan
                    ? "text-accent-cyan bg-accent-cyan/10"
                    : "text-accent-purple bg-accent-purple/10",
                )}
              >
                {item.category}
              </span>
              <h4 className="text-base font-bold text-foreground mt-3 leading-snug">
                {item.principle}
              </h4>
              <p className="text-sm text-muted mt-2 leading-relaxed">
                {item.evidence}
              </p>
              {item.impact && (
                <p className="text-xs font-medium text-accent-cyan mt-3">
                  {item.impact}
                </p>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
