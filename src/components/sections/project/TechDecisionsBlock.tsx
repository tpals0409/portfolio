"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { TECH_DECISIONS } from "@/lib/constants";
import type { TechDecision } from "@/types";
import { cn } from "@/lib/utils";
import { useLocale } from "@/lib/i18n/context";

function TechDecisionCard({
  decision,
  index,
  isExpanded,
  isLastOdd,
  onToggle,
}: {
  decision: TechDecision;
  index: number;
  isExpanded: boolean;
  isLastOdd: boolean;
  onToggle: () => void;
}) {
  const { t } = useLocale();
  const isCyan = decision.color === "cyan";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -2 }}
      onClick={onToggle}
      className={cn(
        "bg-card border border-card-border rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-accent-purple/50",
        (decision.featured || isLastOdd) && "md:col-span-2",
      )}
    >
      {/* Highlight number */}
      <div className="mb-3">
        <span
          className={cn(
            "font-bold bg-gradient-to-r from-accent-purple to-accent-cyan bg-clip-text text-transparent",
            decision.featured ? "text-4xl" : "text-3xl",
          )}
        >
          {decision.highlight}
        </span>
        <p className="text-xs text-muted mt-0.5">{t(decision.highlightLabel)}</p>
      </div>

      {/* Title + chevron */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "h-2 w-2 rounded-full shrink-0",
              isCyan ? "bg-accent-cyan" : "bg-accent-purple",
            )}
          />
          <h4 className="text-base font-bold text-foreground">
            {decision.title}
          </h4>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4 text-muted shrink-0" />
        </motion.div>
      </div>

      {/* Result (always visible) */}
      <p className="text-sm text-muted">{t(decision.result)}</p>

      {/* Expanded detail */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-4 pt-4 border-t border-card-border">
              <p className="text-sm text-muted leading-relaxed whitespace-pre-line">
                {t(decision.reasoning)}
              </p>
            </div>

            {/* Comparison table */}
            {decision.comparison && (
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-card-border">
                      <th className="text-left py-2 pr-4 text-xs font-medium text-muted">
                        기준
                      </th>
                      <th
                        className={cn(
                          "text-left py-2 pr-4 text-xs font-medium",
                          isCyan ? "text-accent-cyan" : "text-accent-purple",
                        )}
                      >
                        선택
                      </th>
                      <th className="text-left py-2 text-xs font-medium text-muted">
                        대안
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {decision.comparison.map((row) => (
                      <tr
                        key={t(row.criteria)}
                        className="border-b border-card-border/50"
                      >
                        <td className="py-2 pr-4 text-muted font-medium whitespace-nowrap">
                          {t(row.criteria)}
                        </td>
                        <td className="py-2 pr-4 text-foreground">
                          {t(row.chosen)}
                        </td>
                        <td className="py-2 text-muted">{t(row.alternative)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function TechDecisionsBlock() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggle = (title: string) => {
    setExpandedId((prev) => (prev === title ? null : title));
  };

  const nonFeaturedCount = TECH_DECISIONS.filter((d) => !d.featured).length;
  const hasOddNonFeatured = nonFeaturedCount % 2 !== 0;
  const lastNonFeaturedIndex = TECH_DECISIONS.length - 1;

  return (
    <div>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xl font-bold text-foreground mb-6"
      >
        Tech Decisions
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TECH_DECISIONS.map((decision, index) => (
          <TechDecisionCard
            key={decision.title}
            decision={decision}
            index={index}
            isExpanded={expandedId === decision.title}
            isLastOdd={
              hasOddNonFeatured &&
              !decision.featured &&
              index === lastNonFeaturedIndex
            }
            onToggle={() => toggle(decision.title)}
          />
        ))}
      </div>
    </div>
  );
}
