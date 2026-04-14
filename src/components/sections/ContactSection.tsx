"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
// eslint-disable-next-line @typescript-eslint/no-deprecated
import { Github, Mail, Globe } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { useLocale } from "@/lib/i18n/context";
import { duration, easing, reveal } from "@/lib/motion";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  github: Github, // eslint-disable-line @typescript-eslint/no-deprecated
  mail: Mail,
  globe: Globe,
};

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const { t } = useLocale();

  return (
    <section
      id="contact"
      className="flex min-h-[80vh] flex-col items-center justify-center bg-background px-6 py-20"
    >
      <motion.div
        ref={ref}
        className="text-center"
        initial={reveal.initial}
        animate={inView ? reveal.animate : reveal.initial}
        transition={{ duration: duration.reveal, ease: easing.reveal }}
      >
        <h2
          className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          style={{ letterSpacing: "-0.04em", lineHeight: 1.3 }}
        >
          {t(CONTACT.title)}
        </h2>
        <p className="mt-4 text-base text-muted" style={{ lineHeight: 1.7 }}>
          {t(CONTACT.subtitle)}
        </p>
      </motion.div>

      <motion.div
        className="mt-12 flex flex-wrap justify-center gap-3 rounded-full bg-card px-7 py-3.5"
        initial={reveal.initial}
        animate={inView ? reveal.animate : reveal.initial}
        transition={{ duration: duration.reveal, delay: 0.15, ease: easing.reveal }}
      >
        {CONTACT.links.map((link, i) => {
          const Icon = iconMap[link.icon] || Globe;

          return (
            <a
              key={i}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-foreground no-underline transition-all duration-200 hover:bg-background hover:shadow-lg hover:shadow-accent-purple/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-purple/50"
            >
              <Icon size={18} />
              <span>{link.label}</span>
            </a>
          );
        })}
      </motion.div>
    </section>
  );
}
