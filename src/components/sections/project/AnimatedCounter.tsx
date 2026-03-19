"use client";

import { useCountUp } from "@/hooks/useCountUp";
import type { ProjectStat } from "@/types";

interface AnimatedCounterProps {
  stat: ProjectStat;
}

export function AnimatedCounter({ stat }: AnimatedCounterProps) {
  const { current, ref } = useCountUp(stat.value);

  const displayValue =
    stat.value % 1 !== 0 ? current.toFixed(2) : current.toString();

  return (
    <div ref={ref} className="text-center">
      <p className="text-3xl md:text-4xl font-bold text-foreground">
        {displayValue}
        <span className="text-accent-purple">{stat.suffix}</span>
      </p>
      <p className="mt-2 text-sm text-muted">{stat.label}</p>
    </div>
  );
}
