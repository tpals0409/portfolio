import type { T } from "@/lib/i18n/types";

export interface NavItem {
  label: T;
  href: string;
}

export interface TechCategory {
  name: string;
  items: TechItem[];
}

export interface TechItem {
  name: string;
  color?: string;
}

export interface AgentEchelon {
  echelon: string;
  title: string;
  description: T;
  agents: Agent[];
  color: string;
}

export interface Agent {
  name: T;
  role: T;
}

export interface ProjectStat {
  label: T;
  value: number;
  prefix?: string;
  suffix: T;
  context?: T;
}

export interface ContactLink {
  label: string;
  href: string;
  icon: string;
}

export interface DiagramTab {
  id: string;
  label: string;
  description?: T;
}

export interface ComparisonRow {
  criteria: T;
  chosen: T;
  alternative: T;
}

export interface TechDecision {
  title: string;
  reasoning: T;
  result: T;
  color: string;
  highlight: string;
  highlightLabel: T;
  comparison?: ComparisonRow[];
  featured?: boolean;
}

export interface Principle {
  category: string;
  principle: T;
  evidence: T;
  impact?: T;
  color: "purple" | "cyan";
}

export interface CodeSnippet {
  id: string;
  title: string;
  filepath: string;
  description: T;
  code: string;
  language: string;
}

export interface BlogPost {
  title: T;
  date: string;
  tags: string[];
  category: T;
  href: string;
  featured?: boolean;
}
