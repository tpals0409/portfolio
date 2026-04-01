"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useElementProgress, ease } from "@/hooks/useElementProgress";
import {
  PROJECT,
  PROJECT_STATS,
  DIAGRAM_TABS,
  TECH_DECISIONS,
  PRINCIPLES,
  CODE_SNIPPETS,
} from "@/lib/constants";
import { cn } from "@/lib/utils";
import { BrowserMockup } from "@/components/ui/BrowserMockup";
import { SectionBreak } from "@/components/ui/SectionBreak";
import { DIAGRAM_DATA } from "@/components/diagrams/diagram-data";
import SVGDiagram from "@/components/diagrams/SVGDiagram";

/* ── CountUp ── */
function CountUp({
  target,
  suffix = "",
  prefix = "",
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.round(target * ease.outQuart(p)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {val}
      {suffix}
    </span>
  );
}

/* ── Architecture Section (scroll-driven sticky + ReactFlow) ── */
function ArchitectureSticky({ scrollY }: { scrollY: number }) {
  const archRef = useRef<HTMLDivElement>(null);
  const archProgress = useElementProgress(archRef, scrollY);

  const tabCount = DIAGRAM_TABS.length;
  const zone = ease.range(archProgress, 0.15, 0.85, null);
  const activeIndex = Math.min(tabCount - 1, Math.floor(zone * tabCount));
  const activeTab = DIAGRAM_TABS[activeIndex] || DIAGRAM_TABS[0];
  const currentData = DIAGRAM_DATA[activeTab.id] || DIAGRAM_DATA.overall;

  // Blend for crossfade between tabs
  const slotSize = 1 / tabCount;
  const slotProgress = (zone - activeIndex * slotSize) / slotSize;
  const blend = Math.min(1, Math.min(slotProgress * 5, (1 - slotProgress) * 5, 1));
  const textOpacity = Math.max(0.4, blend);

  return (
    <div ref={archRef} className="relative" style={{ height: `${(tabCount + 1) * 80}vh` }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden px-4 md:px-6">
        <div className="mx-auto w-full max-w-[1100px]">
          {/* Top: Header row */}
          <div
            className="mb-4 flex flex-col gap-3 md:mb-6 md:flex-row md:items-end md:justify-between"
            style={{
              opacity: textOpacity,
              transition: "opacity 0.4s cubic-bezier(.22,1,.36,1)",
            }}
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
                System Design
              </span>
              <h3
                className="mt-2 font-extrabold text-foreground"
                style={{ fontSize: "clamp(22px, 2.5vw, 32px)", letterSpacing: "-0.04em", lineHeight: 1.25 }}
              >
                {activeTab.label}
              </h3>
              {activeTab.description && (
                <p className="mt-1 line-clamp-2 text-[12px] leading-relaxed text-muted md:mt-2 md:line-clamp-none md:text-[13px]">
                  {activeTab.description}
                </p>
              )}
            </div>

            <div className="flex items-center gap-4">
              {/* Tab indicator pills */}
              <div className="flex gap-1.5">
                {DIAGRAM_TABS.map((tab, i) => (
                  <div
                    key={tab.id}
                    className="h-1 rounded-sm transition-all duration-500"
                    style={{
                      width: i === activeIndex ? 28 : 8,
                      background: i === activeIndex ? "var(--foreground)" : "var(--card-border)",
                    }}
                  />
                ))}
              </div>

              {/* Scroll hint */}
              <div
                className="flex items-center gap-1.5 text-muted transition-opacity duration-500"
                style={{ opacity: activeIndex < tabCount - 1 ? 0.5 : 0 }}
              >
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none"
                  style={{ animation: "archScrollPulse 2s ease-in-out infinite" }}>
                  <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[11px] font-medium tracking-wide">scroll</span>
              </div>
            </div>
          </div>

          {/* Bottom: Full-width diagram */}
          <SVGDiagram
            key={activeTab.id}
            data={currentData}
          />
        </div>
      </div>
    </div>
  );
}

/* ── Horizontal Tech Card ── */
function TechCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="flex-none rounded-2xl border border-card-border bg-card p-5 md:p-7" style={{ width: 280 }}>
      <h4 className="mb-3 text-lg font-extrabold tracking-tight text-foreground">
        {title}
      </h4>
      <p className="text-sm leading-relaxed text-muted">{desc}</p>
    </div>
  );
}

/* ── Principles (below cinematic) ── */
function PrinciplesSection() {
  return (
    <div className="bg-card">
    <div className="mx-auto flex min-h-screen max-w-[1100px] flex-col justify-center px-4 py-20 md:px-6 md:py-32">
      <span className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
        Lessons Learned
      </span>
      <h3 className="mt-3 mb-8 text-2xl font-extrabold tracking-tight text-foreground">
        Troubleshooting
      </h3>
      <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
        {PRINCIPLES.map((item, index) => {
          const isCyan = item.color === "cyan";
          const isLast = index === PRINCIPLES.length - 1;
          const hasOddCount = PRINCIPLES.length % 2 !== 0;

          return (
            <motion.div
              key={item.principle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "rounded-2xl border border-card-border bg-background p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5",
                hasOddCount && isLast && "md:col-span-2"
              )}
            >
              <span
                className={cn(
                  "rounded-full px-2 py-1 text-xs font-medium",
                  isCyan
                    ? "bg-foreground/5 text-foreground"
                    : "bg-foreground/5 text-foreground"
                )}
              >
                {item.category}
              </span>
              <h4 className="mt-3 text-base font-bold leading-snug text-foreground">
                {item.principle}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.evidence}
              </p>
              {item.impact && (
                <p className="mt-3 text-xs font-medium text-foreground">
                  {item.impact}
                </p>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
    </div>
  );
}

/* ── Code Showcase (scroll-driven sticky) ── */
function CodeShowcaseSticky({ scrollY }: { scrollY: number }) {
  const codeRef = useRef<HTMLDivElement>(null);
  const codeProgress = useElementProgress(codeRef, scrollY);

  const snippetCount = CODE_SNIPPETS.length;
  const zone = ease.range(codeProgress, 0.15, 0.85, null);
  const activeIndex = Math.min(snippetCount - 1, Math.floor(zone * snippetCount));
  const current = CODE_SNIPPETS[activeIndex];

  const slotSize = 1 / snippetCount;
  const slotProgress = (zone - activeIndex * slotSize) / slotSize;
  const blend = Math.min(1, Math.min(slotProgress * 5, (1 - slotProgress) * 5, 1));
  const textOpacity = Math.max(0.4, blend);

  return (
    <div ref={codeRef} className="relative" style={{ height: `${(snippetCount + 1) * 80}vh` }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden px-4 md:px-6">
        <div className="mx-auto w-full max-w-[1100px]">
          {/* Header */}
          <div
            className="mb-4 flex flex-col gap-3 md:mb-6 md:flex-row md:items-end md:justify-between"
            style={{
              opacity: textOpacity,
              transition: "opacity 0.4s cubic-bezier(.22,1,.36,1)",
            }}
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
                Implementation
              </span>
              <h3
                className="mt-2 font-extrabold text-foreground"
                style={{ fontSize: "clamp(22px, 2.5vw, 32px)", letterSpacing: "-0.04em", lineHeight: 1.25 }}
              >
                {current.title}
              </h3>
              <p className="mt-1 font-mono text-xs text-muted">{current.filepath}</p>
              <p className="mt-1 line-clamp-2 text-[12px] leading-relaxed text-muted md:mt-2 md:line-clamp-none md:text-[13px]">
                {current.description}
              </p>
            </div>

            <div className="flex items-center gap-4">
              {/* Snippet indicator pills */}
              <div className="flex gap-1.5">
                {CODE_SNIPPETS.map((_, i) => (
                  <div
                    key={i}
                    className="h-1 rounded-sm transition-all duration-500"
                    style={{
                      width: i === activeIndex ? 28 : 8,
                      background: i === activeIndex ? "var(--foreground)" : "var(--card-border)",
                    }}
                  />
                ))}
              </div>

              <div
                className="flex items-center gap-1.5 text-muted transition-opacity duration-500"
                style={{ opacity: activeIndex < snippetCount - 1 ? 0.5 : 0 }}
              >
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none"
                  style={{ animation: "archScrollPulse 2s ease-in-out infinite" }}>
                  <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[11px] font-medium tracking-wide">scroll</span>
              </div>
            </div>
          </div>

          {/* Code block */}
          <div
            className="code-block overflow-x-auto rounded-xl border border-card-border bg-card p-3 md:p-5"
            style={{
              opacity: textOpacity,
              transition: "opacity 0.4s cubic-bezier(.22,1,.36,1)",
              maxHeight: "55vh",
            }}
          >
            <pre className="whitespace-pre font-mono text-[11px] leading-relaxed text-foreground md:text-sm">
              <code>{current.code}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════
   ProjectSection — Cinematic 3-Phase Scroll
   ══════════════════════════════════════ */
export function ProjectSection({ scrollY }: { scrollY: number }) {
  const horizRef = useRef<HTMLDivElement>(null);
  const horizProgress = useElementProgress(horizRef, scrollY);

  /* Phase 3: Horizontal scroll */
  const cardWidth = 300;
  const hT = ease.range(horizProgress, 0.2, 0.8, ease.inOut);
  const [windowWidth, setWindowWidth] = useState(900);
  useEffect(() => {
    setWindowWidth(Math.min(window.innerWidth, 1200));
    const onResize = () => setWindowWidth(Math.min(window.innerWidth, 1200));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const maxShift =
    TECH_DECISIONS.length * cardWidth - windowWidth + 100;
  const translateX = -hT * Math.max(0, maxShift);

  return (
    <section id="project">
      {/* ── Phase 1: Big Numbers + Project Overview ── */}
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-20">
        <h2 className="mb-14 text-xs font-semibold uppercase tracking-[0.1em] text-muted">
          {PROJECT.title} · {PROJECT.subtitle.split("—")[0].trim()}
        </h2>
        <div className="flex flex-wrap justify-center gap-x-20 gap-y-10">
          {PROJECT_STATS.map((item, i) => (
            <div key={i} className="text-center">
              <div
                className="font-black text-foreground"
                style={{
                  fontSize: "clamp(48px, 8vw, 96px)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                }}
              >
                <CountUp
                  target={item.value}
                  suffix={item.suffix}
                  prefix={item.prefix}
                />
              </div>
              <div className="mt-3.5 text-sm font-medium text-muted">
                {item.label}
              </div>
              {item.context && (
                <div className="mt-1 text-xs text-muted/60">
                  {item.context}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Project screenshot + description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 grid w-full max-w-[1100px] grid-cols-1 items-center gap-10 md:grid-cols-[1.2fr_1fr]"
        >
          <div className="border-l-2 border-foreground/20 pl-6">
            <h3 className="text-2xl font-extrabold leading-snug tracking-tight text-foreground md:text-3xl">
              {PROJECT.background.heading}
            </h3>
            <div className="mt-4 space-y-4">
              {PROJECT.background.paragraphs.map((p, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div className="md:ml-auto md:max-w-md">
            <BrowserMockup
              src={PROJECT.screenshot}
              srcLight={PROJECT.screenshotLight}
              url={PROJECT.url}
              alt="AlgoSu platform screenshot"
            />
            <a
              href={`https://${PROJECT.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-sm text-foreground hover:underline"
            >
              {PROJECT.url}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* ── Phase 2: Architecture (scroll-driven sticky) ── */}
      <div className="bg-card">
        <ArchitectureSticky scrollY={scrollY} />
      </div>

      {/* ── Phase 3: Horizontal Tech Cards ── */}
      <div
        ref={horizRef}
        className="relative bg-background"
        style={{ height: "300vh" }}
      >
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden px-4 md:px-6">
          {/* Edge fade overlays */}
          <div
            className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16"
            style={{ background: "linear-gradient(to right, var(--background), transparent)" }}
          />
          <div
            className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16"
            style={{ background: "linear-gradient(to left, var(--background), transparent)" }}
          />

          <div className="mx-auto w-full max-w-[1100px]">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.1em] text-muted">
            Tech Decisions & Troubleshooting
          </span>
          <h3
            className="mb-11 font-extrabold text-foreground"
            style={{
              fontSize: "clamp(22px, 2.8vw, 34px)",
              letterSpacing: "-0.03em",
            }}
          >
            기술적 의사결정
          </h3>
          </div>

          <div
            className="mx-auto flex w-full max-w-[1100px] gap-5"
            style={{
              transform: `translateX(${translateX}px)`,
              willChange: "transform",
            }}
          >
            {TECH_DECISIONS.map((card, i) => (
              <TechCard key={i} title={card.title} desc={card.reasoning} />
            ))}
          </div>

          {/* Scroll progress indicator */}
          <div className="mx-auto mt-9 flex w-full max-w-[1100px] items-center gap-3">
            <div
              className="flex items-center gap-1.5 transition-opacity duration-400"
              style={{ opacity: hT < 0.95 ? 0.55 : 0 }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                style={{
                  animation: "hScrollPulse 2s ease-in-out infinite",
                }}
              >
                <path
                  d="M5 3L9 7L5 11"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted"
                />
              </svg>
              <span className="whitespace-nowrap text-[11px] font-medium tracking-wide text-muted">
                스크롤하여 더 보기
              </span>
            </div>
            <div className="h-[3px] w-[100px] overflow-hidden rounded-sm bg-card-border">
              <div
                className="h-full rounded-sm bg-foreground"
                style={{ width: `${hT * 100}%` }}
              />
            </div>
            <span className="min-w-[32px] text-[10px] font-semibold text-muted">
              {Math.round(hT * 100)}%
            </span>
          </div>
        </div>
      </div>

      {/* ── Troubleshooting ── */}
      <SectionBreak id="brake-troubleshooting" label="Troubleshooting" />
      <PrinciplesSection />

      {/* ── Code Showcase ── */}
      <SectionBreak id="brake-code" label="Code" />
      <CodeShowcaseSticky scrollY={scrollY} />
    </section>
  );
}
