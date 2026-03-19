"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { ABOUT, TECH_CATEGORIES } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export function AboutSection() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          custom={0}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About
          </h2>
          <div className="mt-2 h-1 w-12 rounded-full bg-accent-purple" />
        </motion.div>

        {/* Profile */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          custom={1}
          className="mt-12 rounded-2xl border border-card-border bg-card p-8"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">{ABOUT.name}</h3>
              <p className="text-sm text-muted">{ABOUT.nameEn}</p>
              <p className="text-accent-purple font-medium">{ABOUT.role}</p>
            </div>
            <a
              href={`https://github.com/${ABOUT.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-card-border px-4 py-2 text-sm text-muted transition-colors hover:bg-background hover:text-foreground"
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
        <div className="mt-16 space-y-8">
          {TECH_CATEGORIES.map((category, catIdx) => (
            <motion.div
              key={category.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              custom={catIdx}
            >
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
                {category.name}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.items.map((tech) => (
                  <span
                    key={tech.name}
                    className="rounded-full border border-card-border bg-card px-4 py-1.5 text-sm text-foreground transition-colors hover:border-accent-purple/50"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
