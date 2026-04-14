"use client";

import { useLocale } from "@/lib/i18n/context";

export function Footer() {
  const { ts } = useLocale();

  return (
    <footer className="border-t border-card-border px-6 py-8 text-center">
      <p className="text-[13px] text-muted">
        {ts("ui.footerText")}
      </p>
    </footer>
  );
}
