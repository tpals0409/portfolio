"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { SECTION_IDS } from "@/lib/constants";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("");
  const atBottomRef = useRef(false);
  const observerSectionRef = useRef("");

  const updateActive = useCallback(() => {
    if (atBottomRef.current) {
      const sectionIds = Object.values(SECTION_IDS);
      setActiveSection(sectionIds[sectionIds.length - 1]);
    } else {
      setActiveSection(observerSectionRef.current);
    }
  }, []);

  useEffect(() => {
    const sectionIds = Object.values(SECTION_IDS);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            observerSectionRef.current = entry.target.id;
            updateActive();
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));

    const onScroll = () => {
      const wasAtBottom = atBottomRef.current;
      atBottomRef.current =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100;

      if (atBottomRef.current !== wasAtBottom) {
        updateActive();
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [updateActive]);

  return activeSection;
}
