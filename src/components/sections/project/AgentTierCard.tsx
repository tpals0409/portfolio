"use client";

import { motion } from "framer-motion";
import type { AgentTier } from "@/types";
import { cn } from "@/lib/utils";

interface AgentTierCardProps {
  tier: AgentTier;
  index: number;
}

const COLOR_MAP = {
  purple: { text: "text-accent-purple", bg: "bg-accent-purple", hover: "group-hover/agent:text-accent-purple" },
  mid: { text: "text-accent-mid", bg: "bg-accent-mid", hover: "group-hover/agent:text-accent-mid" },
  cyan: { text: "text-accent-cyan", bg: "bg-accent-cyan", hover: "group-hover/agent:text-accent-cyan" },
} as const;

export function AgentTierCard({ tier, index }: AgentTierCardProps) {
  const colors = COLOR_MAP[tier.color as keyof typeof COLOR_MAP] ?? COLOR_MAP.purple;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -2 }}
      className={cn(
        "bg-card border border-card-border rounded-2xl p-6",
        "transition-all duration-300 hover:shadow-lg hover:border-accent-purple/50",
      )}
    >
      <div className="mb-4">
        <span className={cn("text-sm font-medium", colors.text)}>
          {tier.tier}
        </span>
        <h4 className="text-lg font-bold text-foreground mt-1">{tier.title}</h4>
      </div>
      <p className="text-sm text-muted mb-4">{tier.description}</p>
      <ul className="space-y-1">
        {tier.agents.map((agent) => (
          <li
            key={agent.name}
            className="group/agent flex items-start gap-2 text-sm rounded-lg px-2 py-1.5 -mx-2 transition-colors duration-200 hover:bg-card-border/30 cursor-default"
          >
            <span
              className={cn(
                "mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 transition-transform duration-200 group-hover/agent:scale-125",
                colors.bg,
              )}
            />
            <div className="overflow-hidden">
              <span
                className={cn(
                  "font-medium text-foreground transition-colors duration-200",
                  colors.hover,
                )}
              >
                {agent.name}
              </span>
              <p className="text-xs text-muted/70 mt-0.5 transition-colors duration-200 group-hover/agent:text-muted">
                {agent.role}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
