"use client";

import { useState, useEffect } from "react";

export function ScrollProgressBar({ scrollY }: { scrollY: number }) {
  const [totalHeight, setTotalHeight] = useState(1);

  useEffect(() => {
    const measure = () =>
      setTotalHeight(document.documentElement.scrollHeight - window.innerHeight);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const pct = Math.min(100, (scrollY / totalHeight) * 100);

  return (
    <div className="fixed top-0 left-0 z-[1100] h-[3px] w-full pointer-events-none">
      <div
        className="h-full rounded-r-sm bg-foreground transition-none"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
