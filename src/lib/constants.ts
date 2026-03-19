import type {
  NavItem,
  TechCategory,
  AgentTier,
  ProjectStat,
  ContactLink,
  DiagramTab,
} from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Project", href: "#project" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  title: "방관자가 아닌\n실행자입니다.",
  subtitle:
    "AI 에이전트 12인팀을 설계하고, 165회 이상의 프로덕션 배포를 수행한 AI DevOps 엔지니어입니다.",
  scrollLabel: "Scroll to explore",
};

export const ABOUT = {
  name: "김세민",
  nameEn: "Kim Semin",
  role: "AI DevOps / Backend Developer",
  description:
    "혼자서 AI 에이전트 12인팀을 설계하고 3개월 만에 프로덕션까지 배포한 실행 중심 엔지니어입니다. 설계부터 배포, 모니터링까지 전 과정을 책임집니다.",
  github: "tpals0409",
};

export const TECH_CATEGORIES: TechCategory[] = [
  {
    name: "Backend",
    items: [
      { name: "FastAPI" },
      { name: "NestJS" },
      { name: "Saga Pattern" },
      { name: "Circuit Breaker" },
      { name: "MSA" },
    ],
  },
  {
    name: "AI / LLM",
    items: [
      { name: "AI Agent" },
      { name: "AI Orchestration" },
      { name: "Prompt Engineering" },
      { name: "LoRA" },
      { name: "LLM Evaluation" },
    ],
  },
  {
    name: "Infra / DevOps",
    items: [
      { name: "Docker" },
      { name: "ArgoCD" },
      { name: "GitHub Actions" },
      { name: "n8n" },
      { name: "k3s" },
      { name: "Prometheus" },
      { name: "Grafana" },
      { name: "Loki" },
    ],
  },
  {
    name: "Data",
    items: [
      { name: "PostgreSQL" },
      { name: "Redis" },
      { name: "RabbitMQ" },
    ],
  },
  {
    name: "Frontend",
    items: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Tailwind CSS" },
    ],
  },
];

export const PROJECT = {
  title: "AlgoSu",
  subtitle: "AI-Driven Algorithm Study Platform",
  url: "algo-su.com",
  background: {
    title: "Background",
    paragraphs: [
      "알고리즘 스터디를 운영하면서 코드 리뷰의 비효율성을 경험했습니다. 매주 반복되는 수동 리뷰, 일관성 없는 피드백, 그리고 학습 진도 추적의 어려움이 있었습니다.",
      "이 문제를 AI로 해결하기로 결정했습니다. 단순한 코드 분석을 넘어, 학습 패턴을 이해하고 개인화된 피드백을 제공하는 지능형 플랫폼을 구축했습니다.",
    ],
  },
};

export const AGENT_TIERS: AgentTier[] = [
  {
    tier: "Tier 1",
    title: "Core Analysis",
    description: "Code analysis and review pipeline",
    agents: [
      { name: "Code Analyzer", role: "Static analysis & pattern detection" },
      { name: "Review Generator", role: "Contextual feedback generation" },
      { name: "Complexity Scorer", role: "Time/space complexity evaluation" },
      { name: "Style Checker", role: "Code style & convention validation" },
    ],
    color: "purple",
  },
  {
    tier: "Tier 2",
    title: "Learning Intelligence",
    description: "Personalized learning & tracking",
    agents: [
      { name: "Progress Tracker", role: "Learning pattern analysis" },
      { name: "Weakness Detector", role: "Knowledge gap identification" },
      { name: "Problem Recommender", role: "Adaptive problem suggestion" },
      { name: "Hint Generator", role: "Progressive hint system" },
    ],
    color: "cyan",
  },
  {
    tier: "Tier 3",
    title: "Operations",
    description: "System reliability & orchestration",
    agents: [
      { name: "Orchestrator", role: "Agent coordination & scheduling" },
      { name: "Health Monitor", role: "System health & alerting" },
      { name: "Cache Manager", role: "Intelligent cache invalidation" },
      { name: "Report Builder", role: "Weekly report generation" },
    ],
    color: "purple",
  },
];

export const PROJECT_STATS: ProjectStat[] = [
  { label: "Production Deployments", value: 165, suffix: "+" },
  { label: "Total Tests", value: 2257, suffix: "" },
  { label: "Gateway Coverage", value: 97.79, suffix: "%" },
  { label: "Development Period", value: 3, suffix: " months" },
];

export const DIAGRAM_TABS: DiagramTab[] = [
  { id: "overall", label: "Overall" },
  { id: "api-gateway", label: "API Gateway" },
  { id: "ai-pipeline", label: "AI Pipeline" },
  { id: "saga", label: "Saga Pattern" },
  { id: "monitoring", label: "Monitoring" },
  { id: "cicd", label: "CI/CD" },
];

export const CONTACT = {
  title: "같이 이야기해요.",
  subtitle: "새로운 기회, 협업, 또는 기술에 대한 대화를 환영합니다.",
  links: [
    {
      label: "GitHub",
      href: "https://github.com/tpals0409",
      icon: "github",
    },
    {
      label: "Email",
      href: "mailto:tpals0409@gmail.com",
      icon: "mail",
    },
    {
      label: "algo-su.com",
      href: "https://algo-su.com",
      icon: "globe",
    },
  ] as ContactLink[],
};

export const SECTION_IDS = {
  hero: "hero",
  about: "about",
  project: "project",
  contact: "contact",
} as const;
