"use client";

import { useState, useRef } from "react";
import { useInView } from "framer-motion";
// eslint-disable-next-line @typescript-eslint/no-deprecated
import { Github, Mail, Globe } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { useLocale } from "@/lib/i18n/context";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  github: Github, // eslint-disable-line @typescript-eslint/no-deprecated
  mail: Mail,
  globe: Globe,
};

export function ContactSection() {
  const [hoveredIdx, setHoveredIdx] = useState(-1);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const { t } = useLocale();

  return (
    <section
      id="contact"
      className="flex min-h-[80vh] flex-col items-center justify-center bg-background px-6 py-20"
    >
      <div
        ref={ref}
        className="text-center"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.9s cubic-bezier(.22,1,.36,1)",
        }}
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
      </div>

      <div
        className="mt-12 flex flex-wrap justify-center gap-3 rounded-full bg-card px-7 py-3.5"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.9s cubic-bezier(.22,1,.36,1) 0.15s",
        }}
      >
        {CONTACT.links.map((link, i) => {
          const Icon = iconMap[link.icon] || Globe;
          const isHovered = hoveredIdx === i;

          return (
            <a
              key={i}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(-1)}
              className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-foreground no-underline transition-all duration-300"
              style={{
                background: isHovered ? "var(--background)" : "transparent",
                boxShadow: isHovered
                  ? "0 4px 24px rgba(0,0,0,0.08)"
                  : "0 0 0 rgba(0,0,0,0)",
                transform: isHovered ? "scale(1.06)" : "scale(1)",
              }}
            >
              <Icon size={18} />
              <span>{link.label}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
