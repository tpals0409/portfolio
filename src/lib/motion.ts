// ── Interaction Design Tokens ──

// Duration (seconds)
export const duration = {
  fast: 0.2, // hover state changes
  normal: 0.3, // expand/collapse
  reveal: 0.6, // scroll reveal
} as const;

// Easing
export const easing = {
  reveal: [0.22, 1, 0.36, 1] as readonly [number, number, number, number],
  spring: { type: "spring" as const, stiffness: 380, damping: 30 },
} as const;

// Hover
export const hover = {
  lift: { y: -2 },
  tap: { scale: 0.97 },
} as const;

// Scroll reveal
export const reveal = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  staggered: (index: number, base = 0) => ({
    duration: duration.reveal,
    delay: base + index * 0.08,
    ease: easing.reveal,
  }),
} as const;
