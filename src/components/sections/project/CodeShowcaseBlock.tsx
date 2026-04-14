"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CODE_SNIPPETS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useLocale } from "@/lib/i18n/context";

export function CodeShowcaseBlock() {
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState(CODE_SNIPPETS[0].id);
  const current = CODE_SNIPPETS.find((s) => s.id === activeTab) ?? CODE_SNIPPETS[0];

  return (
    <div>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xl font-bold text-foreground mb-6"
      >
        Code Showcase
      </motion.h3>

      {/* Tab bar */}
      <div className="flex flex-wrap gap-2 pb-2 mb-4 border-b border-card-border">
        {CODE_SNIPPETS.map((snippet) => (
          <button
            key={snippet.id}
            onClick={() => setActiveTab(snippet.id)}
            className={cn(
              "px-4 py-2 text-sm font-medium transition-all relative whitespace-nowrap",
              activeTab === snippet.id
                ? "text-accent-purple"
                : "text-muted hover:text-foreground",
            )}
          >
            {snippet.title}
            {activeTab === snippet.id && (
              <motion.div
                layoutId="codeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-purple"
                initial={false}
              />
            )}
          </button>
        ))}
      </div>

      {/* Code content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <p className="text-xs text-muted font-mono mb-1">
            {current.filepath}
          </p>
          <p className="text-sm text-muted mb-3">{t(current.description)}</p>
          <div className="bg-card border border-card-border rounded-xl p-4 max-h-[400px] overflow-y-auto code-block">
            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">
              <code>{current.code}</code>
            </pre>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
