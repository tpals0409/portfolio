# Agent B Task: Project Section (non-diagram)

## Rules
- All colors: theme tokens only (bg-background, text-foreground, text-muted, bg-card, border-card-border, text-accent-purple, text-accent-cyan). NO hardcoded colors.
- Animation: framer-motion with viewport={{ once: true }}
- Responsive: mobile-first (375px / 768px / 1280px)
- Code/vars in English, UI text from constants.ts
- "use client" for interactive components
- Import cn from "@/lib/utils", constants from "@/lib/constants", types from "@/types"

## Read First
- src/lib/constants.ts
- src/lib/utils.ts
- src/types/index.ts
- src/app/globals.css
- AGENTS.md

## Files to Implement

### 1. src/components/sections/ProjectSection.tsx
- Main project section container
- Import SectionWrapper from "@/components/ui/SectionWrapper" (another agent creates it)
- Import SectionLabel from "@/components/ui/SectionLabel" (another agent creates it)
- SectionLabel "Project", PROJECT title/subtitle
- Contains: BackgroundBlock, AIDrivenBlock, placeholder div#architecture-block, ResultsBlock

### 2. src/components/sections/project/BackgroundBlock.tsx
- PROJECT.background.title heading + paragraphs
- Card: bg-card rounded-2xl p-6 md:p-8
- Framer-motion fade-in

### 3. src/components/sections/project/AIDrivenBlock.tsx
- "AI-Driven Architecture" heading
- 3 AgentTierCard from AGENT_TIERS
- Grid: 1 col mobile, 3 cols desktop

### 4. src/components/sections/project/AgentTierCard.tsx
- Card with tier info: header (tier + title), description, agents list
- Color accent from tier.color (purple/cyan)
- bg-card border border-card-border rounded-2xl p-6
- Hover: slight scale + shadow

### 5. src/components/sections/project/ResultsBlock.tsx
- "Results" heading
- Grid of PROJECT_STATS with AnimatedCounter
- 2 cols mobile, 4 cols desktop

### 6. src/components/sections/project/AnimatedCounter.tsx
- Count-up animation using useCountUp hook
- value + suffix + label
- text-3xl md:text-4xl font-bold
- Triggers on scroll into view

### 7. src/hooks/useCountUp.ts
- Custom hook: takes target value, duration (2s default)
- requestAnimationFrame based
- Returns current animated value
- IntersectionObserver trigger
- Easing function, handle decimals (97.79%)

## After Implementation
Run `npm run build` and fix any errors. Do NOT modify files outside scope.
