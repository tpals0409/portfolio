"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n/context";

export default function NotFound() {
  const { ts } = useLocale();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-bold text-accent-purple">404</h1>
      <p className="text-lg text-muted">{ts("ui.notFound")}</p>
      <Link
        href="/"
        className="mt-4 rounded-lg bg-accent-purple px-6 py-3 text-foreground transition-opacity hover:opacity-90"
      >
        {ts("ui.goHome")}
      </Link>
    </div>
  );
}
