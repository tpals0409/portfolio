"use client";

import { useRef } from "react";
import { useElementProgress, ease } from "@/hooks/useElementProgress";
import { HERO } from "@/lib/constants";
import { useLocale } from "@/lib/i18n/context";

export function HeroSection({ scrollY }: { scrollY: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const progress = useElementProgress(ref, scrollY);
  const { t } = useLocale();

  const blurT = ease.range(progress, 0.08, 0.42, ease.outQuart);
  const scaleT = ease.range(progress, 0.08, 0.48, ease.inOut);
  const subT = ease.range(progress, 0.5, 0.68, ease.out);

  const blur = 32 * (1 - blurT);
  const scale = 2.2 - 1.2 * scaleT;
  const subOpacity = subT;
  const subY = 30 * (1 - subT);
  const indicatorOpacity = Math.max(0, 1 - scrollY / 150);

  const lines = t(HERO.title).split("\n");

  return (
    <div id="hero" ref={ref} style={{ height: "220vh", position: "relative" }}>
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center bg-background">
        <h1
          className="text-center text-foreground"
          style={{
            fontSize: "clamp(32px, 5.5vw, 72px)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1.15,
            filter: `blur(${blur}px)`,
            transform: `scale(${scale})`,
            willChange: "transform, filter",
          }}
        >
          {lines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>

        <p
          className="mx-auto mt-7 max-w-[520px] text-center text-muted"
          style={{
            fontSize: "clamp(14px, 1.6vw, 20px)",
            lineHeight: 1.7,
            opacity: subOpacity,
            transform: `translateY(${subY}px)`,
          }}
        >
          {t(HERO.subtitle)}
        </p>

        {/* Mouse scroll indicator */}
        <div
          className="pointer-events-none absolute bottom-11 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3.5"
          style={{ opacity: indicatorOpacity, transition: "opacity 0.4s" }}
        >
          <div className="relative h-[46px] w-7">
            <svg
              width="28"
              height="46"
              viewBox="0 0 28 46"
              fill="none"
              className="absolute left-0 top-0"
            >
              <rect
                x="1.5"
                y="1.5"
                width="25"
                height="43"
                rx="12.5"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                className="text-muted"
              />
            </svg>
            <div
              className="absolute left-1/2 top-2.5 h-2 w-1 -translate-x-1/2 rounded-full bg-foreground"
              style={{
                animation:
                  "wheelBounce 2s cubic-bezier(.45,0,.55,1) infinite",
              }}
            />
          </div>
          <span
            className="text-[11px] font-medium uppercase tracking-[0.1em] text-muted"
            style={{ animation: "scrollTextFade 2s ease infinite" }}
          >
            {t(HERO.scrollLabel)}
          </span>
        </div>
      </div>
    </div>
  );
}
