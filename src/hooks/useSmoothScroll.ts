"use client";

import { useState, useEffect, useRef } from "react";

export function useSmoothScroll() {
  const [scrollY, setScrollY] = useState(0);
  const target = useRef(0);
  const current = useRef(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const tick = () => {
      target.current = window.scrollY;
      current.current += (target.current - current.current) * 0.09;
      if (Math.abs(current.current - target.current) > 0.5) {
        setScrollY(current.current);
      } else {
        setScrollY(target.current);
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return scrollY;
}
