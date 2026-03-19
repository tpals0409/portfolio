"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { HERO } from "@/lib/constants";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const bgVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

const line1Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      delay: 0.3,
    },
  },
};

const line2Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      delay: 0.6,
    },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 1.0, ease: "easeOut" as const },
  },
};

const scrollVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, delay: 1.4, ease: "easeOut" as const },
  },
};

export function HeroSection() {
  const lines = HERO.title.split("\n");

  return (
    <motion.section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Decorative gradient blurs */}
      <motion.div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        variants={bgVariants}
      >
        <div className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-purple/5 blur-[120px] md:h-[500px] md:w-[500px]" />
        <div className="absolute left-1/3 top-2/3 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-cyan/5 blur-[120px] md:h-[400px] md:w-[400px]" />
      </motion.div>

      <div className="relative z-10 max-w-3xl text-center">
        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          {/* Line 1 */}
          <motion.span className="block" variants={line1Variants}>
            {lines[0]}
          </motion.span>
          {/* Line 2 - gradient */}
          {lines[1] && (
            <motion.span
              className="hero-gradient block bg-gradient-to-r from-accent-purple to-accent-cyan bg-clip-text text-transparent"
              variants={line2Variants}
            >
              {lines[1]}
            </motion.span>
          )}
        </h1>

        {/* Subtitle */}
        <motion.p
          variants={subtitleVariants}
          className="mx-auto mt-6 max-w-xl text-base text-muted sm:text-lg md:text-xl"
        >
          {HERO.subtitle}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        variants={scrollVariants}
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
    </motion.section>
  );
}
