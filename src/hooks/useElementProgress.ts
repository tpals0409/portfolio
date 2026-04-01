"use client";

import { useState, useEffect, type RefObject } from "react";

export function useElementProgress(ref: RefObject<HTMLElement | null>, scrollY: number) {
  const [bounds, setBounds] = useState({ top: 0, height: 1 });

  useEffect(() => {
    const measure = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      setBounds({ top: rect.top + window.scrollY, height: ref.current.offsetHeight });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [ref]);

  const vh = typeof window !== "undefined" ? window.innerHeight : 800;
  const raw = (scrollY - bounds.top + vh) / (bounds.height + vh);
  return Math.max(0, Math.min(1, raw));
}

export const ease = {
  out: (t: number) => 1 - Math.pow(1 - t, 3),
  inOut: (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
  outQuart: (t: number) => 1 - Math.pow(1 - t, 4),
  range: (progress: number, start: number, end: number, easeFn?: ((t: number) => number) | null) => {
    const t = Math.max(0, Math.min(1, (progress - start) / (end - start)));
    return easeFn ? easeFn(t) : t;
  },
};
