"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

interface BrowserMockupProps {
  src: string;
  srcLight?: string;
  url: string;
  alt: string;
}

export function BrowserMockup({ src, srcLight, url, alt }: BrowserMockupProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const imageSrc = mounted && resolvedTheme === "light" && srcLight ? srcLight : src;

  return (
    <div className="overflow-hidden rounded-2xl border border-card-border bg-card browser-mockup">
      <div className="flex h-10 items-center border-b border-card-border px-4">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-dot-close" />
          <div className="h-3 w-3 rounded-full bg-dot-minimize" />
          <div className="h-3 w-3 rounded-full bg-dot-maximize" />
        </div>
        <div className="mx-4 flex-1 truncate rounded-lg bg-background px-3 py-1 text-center text-xs text-muted">
          {url}
        </div>
      </div>
      <div className="browser-viewport overflow-y-auto" style={{ maxHeight: 350 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageSrc} alt={alt} className="block w-full h-auto" />
      </div>
    </div>
  );
}
