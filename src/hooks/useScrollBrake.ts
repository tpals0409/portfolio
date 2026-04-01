"use client";

import { useEffect } from "react";

export function useScrollBrake() {
  useEffect(() => {
    const HOLD_MS = 700;
    const COOLDOWN_MS = 1200;
    const RELEASE_THRESHOLD = 300;
    let isHolding = false;
    let lastBrakeTime = 0;
    let holdTimeout: ReturnType<typeof setTimeout> | null = null;
    let accumulatedDelta = 0;

    const getBreakpoints = () => {
      const els = document.querySelectorAll("[data-scroll-brake]");
      const arr: { top: number; el: Element }[] = [];
      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        arr.push({ top: rect.top + window.scrollY, el });
      });
      return arr;
    };

    const onWheel = (e: WheelEvent) => {
      if (isHolding) {
        accumulatedDelta += Math.abs(e.deltaY);
        if (accumulatedDelta > RELEASE_THRESHOLD) {
          isHolding = false;
          if (holdTimeout) clearTimeout(holdTimeout);
          return;
        }
        e.preventDefault();
        return;
      }

      const now = Date.now();
      if (now - lastBrakeTime < COOLDOWN_MS) return;

      const vh = window.innerHeight;
      const scrollTop = window.scrollY;
      const breakpoints = getBreakpoints();

      for (const bp of breakpoints) {
        const offset = bp.top - scrollTop;
        if (offset > 0 && offset < vh * 0.35 && e.deltaY > 0) {
          e.preventDefault();
          isHolding = true;
          accumulatedDelta = 0;
          lastBrakeTime = now;
          window.scrollTo({ top: bp.top, behavior: "smooth" });
          holdTimeout = setTimeout(() => {
            isHolding = false;
          }, HOLD_MS);
          return;
        }
        if (offset > -vh * 0.15 && offset < 0 && e.deltaY < 0) {
          e.preventDefault();
          isHolding = true;
          accumulatedDelta = 0;
          lastBrakeTime = now;
          window.scrollTo({ top: bp.top - vh * 0.1, behavior: "smooth" });
          holdTimeout = setTimeout(() => {
            isHolding = false;
          }, HOLD_MS);
          return;
        }
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", onWheel);
      if (holdTimeout) clearTimeout(holdTimeout);
    };
  }, []);
}
