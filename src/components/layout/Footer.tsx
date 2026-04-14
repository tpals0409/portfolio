"use client";

import { useLocale } from "@/lib/i18n/context";

export function Footer() {
  const { locale, ts } = useLocale();

  return (
    <footer className="border-t border-card-border px-6 py-8 text-center">
      <p className="text-[13px] text-muted">
        {ts("ui.footerText")}
      </p>
      <a
        href={locale === "ko" ? "/en" : "/"}
        className="mt-2 inline-block text-[12px] font-medium text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-purple/50 rounded-sm"
      >
        {locale === "ko" ? "English" : "한국어"}
      </a>
    </footer>
  );
}
