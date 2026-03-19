"use client";

import { motion } from "framer-motion";
import { CONTACT } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { ContactLinkCard } from "@/components/ui/ContactLink";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export function ContactSection() {
  return (
    <SectionWrapper id="contact">
      <SectionLabel>Contact</SectionLabel>

      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        custom={0}
        className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
      >
        {CONTACT.title}
      </motion.h2>

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        custom={1}
        className="mt-4 text-muted"
      >
        {CONTACT.subtitle}
      </motion.p>

      {/* Links grid */}
      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {CONTACT.links.map((link, i) => (
          <motion.div
            key={link.label}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            custom={i + 2}
          >
            <ContactLinkCard link={link} />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
