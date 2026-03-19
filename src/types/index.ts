export interface NavItem {
  label: string;
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

export interface AgentTier {
  tier: string;
  title: string;
  description: string;
  agents: Agent[];
  color: string;
}

export interface Agent {
  name: string;
  role: string;
}

export interface ProjectStat {
  label: string;
  value: number;
  prefix?: string;
  suffix: string;
  context?: string;
}

export interface ContactLink {
  label: string;
  href: string;
  icon: string;
}

export interface DiagramTab {
  id: string;
  label: string;
  description?: string;
}

export interface ComparisonRow {
  criteria: string;
  chosen: string;
  alternative: string;
}

export interface TechDecision {
  title: string;
  reasoning: string;
  result: string;
  color: string;
  highlight: string;
  highlightLabel: string;
  comparison?: ComparisonRow[];
  featured?: boolean;
}

export interface Principle {
  category: string;
  principle: string;
  evidence: string;
  impact?: string;
  color: "purple" | "cyan";
}

export interface CodeSnippet {
  id: string;
  title: string;
  filepath: string;
  description: string;
  code: string;
  language: string;
}