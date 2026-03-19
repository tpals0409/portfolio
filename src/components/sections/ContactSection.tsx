"use client";

import { motion } from "framer-motion";
import { Github, Mail, Globe, ArrowUpRight } from "lucide-react";
import { CONTACT } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={20} />,
  mail: <Mail size={20} />,
  globe: <Globe size={20} />,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6">
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
            Contact
          </h2>
          <div className="mt-2 h-1 w-12 rounded-full bg-accent-cyan" />
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          custom={1}
          className="mt-6 text-lg text-muted"
        >
          {CONTACT.title}
        </motion.p>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          custom={2}
          className="mt-2 text-muted"
        >
          {CONTACT.subtitle}
        </motion.p>

        {/* Links */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {CONTACT.links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              custom={i + 3}
              className="group flex items-center gap-4 rounded-2xl border border-card-border bg-card p-6 transition-all hover:border-accent-cyan/50 hover:shadow-lg hover:shadow-accent-cyan/5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background text-muted transition-colors group-hover:text-accent-cyan">
                {iconMap[link.icon]}
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">{link.label}</p>
              </div>
              <ArrowUpRight
                size={16}
                className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-cyan"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
