"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { PROJECT, SECTION_IDS } from "@/lib/constants";
import { BackgroundBlock } from "./project/BackgroundBlock";
import { AIDrivenBlock } from "./project/AIDrivenBlock";
import ArchitectureBlock from "./project/ArchitectureBlock";
import { TechDecisionsBlock } from "./project/TechDecisionsBlock";
import { CodeShowcaseBlock } from "./project/CodeShowcaseBlock";
import { PrinciplesBlock } from "./project/PrinciplesBlock";
import { ResultsBlock } from "./project/ResultsBlock";

export function ProjectSection() {
  return (
    <SectionWrapper id={SECTION_IDS.project}>
      <SectionLabel color="cyan">Project</SectionLabel>
      <div className="mb-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          {PROJECT.title}
        </h2>
        <p className="text-muted mt-2">{PROJECT.subtitle}</p>
      </div>

      <div className="space-y-16 mt-8">
        <BackgroundBlock />
        <AIDrivenBlock />
        <ArchitectureBlock />
        <TechDecisionsBlock />
        <CodeShowcaseBlock />
        <PrinciplesBlock />
        <ResultsBlock />
      </div>
    </SectionWrapper>
  );
}
