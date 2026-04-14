"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ABOUT, TECH_CATEGORIES } from "@/lib/constants";
import { useLocale } from "@/lib/i18n/context";

function SkillTag({ label }: { label: string }) {
  return (
    <span className="m-[3px] inline-block rounded-full bg-background px-3.5 py-1.5 text-sm font-medium text-foreground">
      {label}
    </span>
  );
}

function BentoTile({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });

  return (
    <motion.div
      ref={ref}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 44,
        scale: inView ? 1 : 0.97,
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`rounded-2xl border border-card-border bg-card p-7 shadow-sm ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function AboutSection() {
  const { t, ts } = useLocale();
  const catMap: Record<string, (typeof TECH_CATEGORIES)[number]> = {};
  TECH_CATEGORIES.forEach((c) => {
    catMap[c.name] = c;
  });

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="grid grid-cols-1 gap-3.5 md:grid-cols-4 md:grid-rows-3">
          {/* Role */}
          <BentoTile delay={0} className="md:col-span-2 md:row-span-2 !pt-10 !pb-9">
            <div className="mb-8 flex flex-col items-center">
              <Image
                src="/profile.jpg"
                alt={`${t(ABOUT.name)} profile`}
                width={160}
                height={160}
                className="h-[160px] w-[160px] rounded-full border-2 border-card-border object-cover"
                priority
              />
              <p className="mt-5 text-lg font-bold text-foreground">{t(ABOUT.name)}</p>
              <p className="mt-1 text-sm text-muted">{t(ABOUT.role)}</p>
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
              {ts("ui.role")}
            </span>
            <h2 className="mt-3 text-2xl font-extrabold leading-tight text-foreground md:text-3xl lg:text-[40px]" style={{ letterSpacing: "-0.04em" }}>
              AI DevOps &<br />
              Backend Developer
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              {t(ABOUT.description)}
            </p>
          </BentoTile>

          {/* Backend */}
          <BentoTile delay={0.08} className="md:col-span-2">
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
              Backend
            </span>
            <div className="mt-3.5 flex flex-wrap">
              {catMap["Backend"]?.items.map((s) => (
                <SkillTag key={s.name} label={s.name} />
              ))}
            </div>
          </BentoTile>

          {/* AI & LLM */}
          <BentoTile delay={0.16} className="md:col-span-2">
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
              AI & LLM
            </span>
            <div className="mt-3.5 flex flex-wrap">
              {catMap["AI / LLM"]?.items.map((s) => (
                <SkillTag key={s.name} label={s.name} />
              ))}
            </div>
          </BentoTile>

          {/* Infra & DevOps */}
          <BentoTile delay={0.24} className="md:col-span-1">
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
              Infra & DevOps
            </span>
            <div className="mt-3 flex flex-wrap">
              {catMap["Infra / DevOps"]?.items.map((s) => (
                <SkillTag key={s.name} label={s.name} />
              ))}
            </div>
          </BentoTile>

          {/* Data */}
          <BentoTile delay={0.32} className="md:col-span-1">
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
              Data
            </span>
            <div className="mt-3 flex flex-wrap">
              {catMap["Data"]?.items.map((s) => (
                <SkillTag key={s.name} label={s.name} />
              ))}
            </div>
          </BentoTile>

          {/* Frontend */}
          <BentoTile delay={0.4} className="md:col-span-2">
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
              Frontend
            </span>
            <div className="mt-3 flex flex-wrap">
              {catMap["Frontend"]?.items.map((s) => (
                <SkillTag key={s.name} label={s.name} />
              ))}
            </div>
          </BentoTile>
        </div>
      </div>
    </section>
  );
}
