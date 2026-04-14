"use client";

import { useState, useEffect } from "react";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "about", label: "About" },
  { id: "project", label: "Project" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

export function SectionDots({ scrollY }: { scrollY: number }) {
  const [active, setActive] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState(-1);

  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id));
    const vh = window.innerHeight;
    let best = 0;
    els.forEach((el, i) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < vh * 0.5) best = i;
    });
    setActive(best);
  }, [scrollY]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const show = scrollY > 200;

  return (
    <div
      className="fixed right-6 top-1/2 z-[1000] hidden -translate-y-1/2 flex-col items-end gap-4 transition-opacity duration-500 md:flex"
      style={{
        opacity: show ? 1 : 0,
        pointerEvents: show ? "auto" : "none",
      }}
    >
      {sections.map((s, i) => (
        <div
          key={i}
          onClick={() => scrollTo(s.id)}
          onMouseEnter={() => setHoveredIdx(i)}
          onMouseLeave={() => setHoveredIdx(-1)}
          className="flex cursor-pointer flex-row-reverse items-center gap-2.5"
        >
          <div
            className="h-2 rounded-full transition-all duration-400"
            style={{
              width: i === active ? 20 : 8,
              background:
                i === active
                  ? "var(--foreground)"
                  : "var(--muted)",
              opacity: i === active ? 1 : 0.4,
              transform:
                hoveredIdx === i && i !== active ? "scale(1.4)" : "scale(1)",
            }}
          />
          <span
            className="whitespace-nowrap text-[11px] font-semibold tracking-wide text-muted pointer-events-none transition-all duration-300"
            style={{
              opacity: hoveredIdx === i || i === active ? 1 : 0,
              transform:
                hoveredIdx === i || i === active
                  ? "translateX(0)"
                  : "translateX(8px)",
            }}
          >
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}
