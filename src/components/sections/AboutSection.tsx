"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { ABOUT, TECH_CATEGORIES } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { TechBadge } from "@/components/ui/TechBadge";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <SectionLabel>About</SectionLabel>

      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        {ABOUT.name}
      </h2>

      {/* Profile card */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        custom={1}
        className="mt-8 rounded-2xl border border-card-border bg-card p-6 md:p-8"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-1">
            <p className="text-sm text-muted">{ABOUT.nameEn}</p>
            <p className="font-medium text-accent-purple">{ABOUT.role}</p>
          </div>
          <a
            href={`https://github.com/${ABOUT.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-2 rounded-lg border border-card-border px-4 py-2 text-sm text-muted transition-colors hover:bg-background hover:text-foreground"
          >
            <Github size={16} />
            {ABOUT.github}
          </a>
        </div>
        <p className="mt-6 leading-relaxed text-muted">
          {ABOUT.description}
        </p>
      </motion.div>

      {/* Tech Stack */}
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {TECH_CATEGORIES.map((category, catIdx) => (
          <motion.div
            key={category.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            custom={catIdx}
            className="rounded-xl border border-card-border bg-card p-5"
          >
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
              {category.name}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.items.map((tech) => (
                <TechBadge key={tech.name} name={tech.name} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
