"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import type { Locale, T } from "./types";
import { UI_LABELS, type UILabelKey } from "./ui-labels";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (text: T) => string;
  ts: (key: UILabelKey) => string;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ko");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("locale") as Locale | null;
    if (stored === "ko" || stored === "en") {
      setLocaleState(stored);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = locale;
    }
  }, [locale, mounted]);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
  }, []);

  const t = useCallback(
    (text: T): string => {
      if (!mounted) return text.ko;
      return text[locale];
    },
    [locale, mounted],
  );

  const ts = useCallback(
    (key: UILabelKey): string => {
      if (!mounted) return UI_LABELS[key].ko;
      return UI_LABELS[key][locale];
    },
    [locale, mounted],
  );

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, ts }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
