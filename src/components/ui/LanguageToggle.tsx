"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n/context";

export function LanguageToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <button
      onClick={() => setLocale(locale === "ko" ? "en" : "ko")}
      className="relative flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-card hover:text-foreground"
      aria-label="Toggle language"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={locale}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center text-xs font-bold"
        >
          {locale === "ko" ? "KO" : "EN"}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
