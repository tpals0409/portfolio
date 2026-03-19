"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ABOUT, TECH_CATEGORIES } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { TechBadge } from "@/components/ui/TechBadge";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

function renderHeadline(text: string, accent: string) {
  const parts = text.split(accent);
  if (parts.length < 2) return text;
  return (
    <>
      {parts[0]}
      <span className="relative inline-block">
        {accent}
        <span className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-accent-cyan" />
      </span>
      {parts[1]}
    </>
  );
}

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <SectionLabel color="cyan">About</SectionLabel>

      <div className="mx-auto mt-8 grid max-w-5xl items-start gap-12 md:grid-cols-[1fr_2fr]">
        {/* Left column: photo + name + role */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={0}
          className="flex flex-col items-center md:items-start"
        >
          <Image
            src="/profile.jpg"
            alt={`${ABOUT.name} 프로필 사진`}
            width={192}
            height={192}
            className="h-48 w-48 rounded-full border-2 border-card-border object-cover"
            priority
          />
          <h2 className="mt-5 text-2xl font-bold">{ABOUT.name}</h2>
          <p className="mt-1 text-sm text-muted">{ABOUT.role}</p>
        </motion.div>

        {/* Right column: headline + tech stacks */}
        <div>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={1}
            className="whitespace-pre-line text-2xl font-bold leading-snug md:text-3xl"
          >
            {renderHeadline(ABOUT.headline, ABOUT.headlineAccent)}
          </motion.h3>

          <div className="mt-10 space-y-6">
            {TECH_CATEGORIES.map((category, catIdx) => (
              <motion.div
                key={category.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={catIdx + 2}
              >
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted">
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
        </div>
      </div>
    </SectionWrapper>
  );
}
