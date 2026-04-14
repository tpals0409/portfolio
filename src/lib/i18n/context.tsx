"use client";

import { createContext, useContext, useCallback, useEffect } from "react";
import type { Locale, T } from "./types";
import { UI_LABELS, type UILabelKey } from "./ui-labels";

interface LocaleContextValue {
  locale: Locale;
  t: (text: T) => string;
  ts: (key: UILabelKey) => string;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const t = useCallback((text: T): string => text[locale], [locale]);

  const ts = useCallback(
    (key: UILabelKey): string => UI_LABELS[key][locale],
    [locale],
  );

  return (
    <LocaleContext.Provider value={{ locale, t, ts }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
