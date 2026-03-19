"use client";

import { motion } from "framer-motion";
import type { AgentTier } from "@/types";
import { cn } from "@/lib/utils";

interface AgentTierCardProps {
  tier: AgentTier;
  index: number;
}

export function AgentTierCard({ tier, index }: AgentTierCardProps) {
  const accentColor =
    tier.color === "cyan" ? "text-accent-cyan" : "text-accent-purple";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        "bg-card border border-card-border rounded-2xl p-6",
        "transition-shadow duration-300 hover:shadow-lg",
      )}
    >
      <div className="mb-4">
        <span className={cn("text-sm font-medium", accentColor)}>
          {tier.tier}
        </span>
        <h4 className="text-lg font-bold text-foreground mt-1">{tier.title}</h4>
      </div>
      <p className="text-sm text-muted mb-4">{tier.description}</p>
      <ul className="space-y-2">
        {tier.agents.map((agent) => (
          <li key={agent.name} className="flex items-start gap-2 text-sm">
            <span className={cn("mt-1 h-1.5 w-1.5 rounded-full shrink-0", tier.color === "cyan" ? "bg-accent-cyan" : "bg-accent-purple")} />
            <div>
              <span className="font-medium text-foreground">{agent.name}</span>
              <span className="text-muted ml-1">— {agent.role}</span>
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
