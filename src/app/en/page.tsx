"use client";

import { LocaleProvider } from "@/lib/i18n/context";
import { HomeContent } from "@/components/HomeContent";

export default function HomeEn() {
  return (
    <LocaleProvider locale="en">
      <HomeContent />
    </LocaleProvider>
  );
}
