"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { HERO } from "@/lib/constants";

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

export function HeroSection() {
  const lines = HERO.title.split("\n");

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-4"
    >
      {/* Decorative gradient blurs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-purple/5 blur-[120px] md:h-[500px] md:w-[500px]" />
        <div className="absolute left-1/3 top-2/3 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-cyan/5 blur-[120px] md:h-[400px] md:w-[400px]" />
      </div>

      <div className="relative z-10 max-w-3xl text-center">
        {/* Staggered word reveal title */}
        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          {lines.map((line, lineIdx) => {
            const words = line.split(" ");
            const prevWordCount = lines
              .slice(0, lineIdx)
              .reduce((sum, l) => sum + l.split(" ").length, 0);

            return (
              <span key={lineIdx}>
                {lineIdx > 0 && <br />}
                {words.map((word, wordIdx) => (
                  <motion.span
                    key={wordIdx}
                    custom={prevWordCount + wordIdx}
                    initial="hidden"
                    animate="visible"
                    variants={wordVariants}
                    className={
                      lineIdx > 0
                        ? "inline-block bg-gradient-to-r from-accent-purple to-accent-cyan bg-clip-text text-transparent"
                        : "inline-block"
                    }
                  >
                    {word}
                    {wordIdx < words.length - 1 && "\u00A0"}
                  </motion.span>
                ))}
              </span>
            );
          })}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" as const }}
          className="mx-auto mt-6 max-w-xl text-base text-muted sm:text-lg md:text-xl"
        >
          {HERO.subtitle}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 flex flex-col items-center gap-2 text-muted transition-colors hover:text-foreground"
      >
        <span className="text-xs uppercase tracking-widest">
          {HERO.scrollLabel}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" as const }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}
