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
  suffix: string;
}

export interface ContactLink {
  label: string;
  href: string;
  icon: string;
}

export interface DiagramTab {
  id: string;
  label: string;
}
