"use client";

import { motion } from "framer-motion";
import { AGENT_ECHELONS } from "@/lib/constants";
import { AgentEchelonCard } from "./AgentEchelonCard";

export function AIDrivenBlock() {
  return (
    <div>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xl font-bold text-foreground mb-6"
      >
        AI-Driven Architecture
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {AGENT_ECHELONS.map((echelon, index) => (
          <AgentEchelonCard key={echelon.echelon} echelon={echelon} index={index} />
        ))}
      </div>
    </div>
  );
}
