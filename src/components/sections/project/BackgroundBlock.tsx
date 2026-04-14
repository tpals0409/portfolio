"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECT } from "@/lib/constants";
import { BrowserMockup } from "@/components/ui/BrowserMockup";
import { useLocale } from "@/lib/i18n/context";

export function BackgroundBlock() {
  const { t } = useLocale();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 items-start">
        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-l-2 border-accent-cyan pl-6"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-snug">
            {t(PROJECT.background.heading)}
          </h3>
          <div className="mt-4 space-y-4">
            {PROJECT.background.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-muted leading-relaxed">
                {t(paragraph)}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Right — screenshot */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:max-w-md md:ml-auto"
        >
          <BrowserMockup
            src={PROJECT.screenshot}
            srcLight={PROJECT.screenshotLight}
            url={PROJECT.url}
            alt="AlgoSu 플랫폼 스크린샷"
          />
          <a
            href={`https://${PROJECT.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1 text-sm text-accent-cyan hover:underline"
          >
            {PROJECT.url}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
