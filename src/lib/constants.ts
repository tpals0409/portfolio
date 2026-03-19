import type {
  NavItem,
  TechCategory,
  AgentTier,
  ProjectStat,
  ContactLink,
  DiagramTab,
  TechDecision,
  Principle,
  CodeSnippet,
} from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Project", href: "#project" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  title: "방관자가 아닌\n실행자입니다.",
  subtitle:
    "트렌드를 구경하는 대신, 직접 서비스로 만들며 배웁니다.",
  scrollLabel: "Scroll to explore",
};

export const ABOUT = {
  name: "김세민",
  nameEn: "Kim Semin",
  role: "AI DevOps / Backend Developer",
  description:
    "혼자서 AI 에이전트 12인팀을 설계하고 3개월 만에 프로덕션까지 배포한 실행 중심 엔지니어입니다. 설계부터 배포, 모니터링까지 전 과정을 책임집니다.",
  github: "tpals0409",
  headline: "새로운 기술이 보이면\n상상보단 실행합니다.",
  headlineAccent: "실행",
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
  subtitle: "알고리즘 스터디 관리 플랫폼 — 코드 제출부터 AI 분석까지 자동화",
  url: "algo-su.com",
  screenshot: "/algosu-screenshot.png",
  screenshotLight: "/algosu-screenshot-light.png",
  background: {
    heading: "이 반복 작업, 자동화하면 안 될까?",
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
    description: "프로젝트 기반 설계 — 인프라, 보안, 배포 의사결정",
    agents: [
      { name: "심판관 (Oracle)", role: "최종 기획 결정 및 아키텍처 승인" },
      { name: "기반설계자 (Architect)", role: "k3s 인프라, CI/CD 파이프라인 설계" },
      { name: "지휘자 (Conductor)", role: "배포 파이프라인 오케스트레이션" },
      { name: "관문지기 (Gatekeeper)", role: "인증/보안 — OAuth, JWT, Rate Limit" },
    ],
    color: "purple",
  },
  {
    tier: "Tier 2",
    title: "Learning Intelligence",
    description: "도메인 구현 — API, 문제관리, Saga, UI 구현",
    agents: [
      { name: "배달부 (Postman)", role: "API 설계 및 서비스 간 통신" },
      { name: "출제자 (Curator)", role: "문제 도메인 CRUD 및 주차별 관리" },
      { name: "서기관 (Scribe)", role: "Saga 오케스트레이션 및 트랜잭션 관리" },
      { name: "팔레트 (Palette)", role: "UI/UX 구현 — Next.js, shadcn/ui" },
    ],
    color: "mid",
  },
  {
    tier: "Tier 3",
    title: "Operations",
    description: "운영 & 자동화 — AI 분석, 실시간 알림, GitHub 연동, 문서화",
    agents: [
      { name: "분석가 (Sensei)", role: "AI 파이프라인 — Claude API, Circuit Breaker" },
      { name: "전령 (Herald)", role: "SSE 실시간 알림 및 상태 브로드캐스트" },
      { name: "정찰병 (Scout)", role: "GitHub 연동 — Octokit Push, 멱등성 처리" },
      { name: "기록관리자 (Librarian)", role: "ADR 문서화 및 런북 관리" },
    ],
    color: "cyan",
  },
];

export const TECH_DECISIONS: TechDecision[] = [
  {
    title: "k3s vs EKS/GKE",
    reasoning: "OCI ARM 프리티어(4 OCPU, 24GB) 환경에서 프로덕션급 Kubernetes 필요. k3s는 50MB 바이너리, 512MB 메모리로 HPA·PDB·NetworkPolicy 완전 지원. EKS/GKE 대비 동일 기능에 비용 100% 절감.",
    result: "HPA, PDB, NetworkPolicy 모두 지원하면서 인프라 비용 $0/월 달성",
    color: "cyan",
    highlight: "$0",
    highlightLabel: "월 인프라 비용",
    featured: true,
    comparison: [
      { criteria: "비용", chosen: "OCI ARM 프리티어 — $0/월", alternative: "최소 $70+/월" },
      { criteria: "리소스", chosen: "바이너리 50MB, 메모리 512MB", alternative: "Control Plane 수 GB" },
      { criteria: "기능", chosen: "HPA, PDB, NetworkPolicy 지원", alternative: "동일" },
      { criteria: "배포", chosen: "ArgoCD GitOps 자동화", alternative: "동일 가능" },
    ],
  },
  {
    title: "FastAPI + NestJS 동시 사용",
    reasoning: "Claude SDK Python 우선 지원 + pydantic 응답 파싱으로 AI 서비스에 최적. AI Analysis만 FastAPI로 분리, 나머지 4개 서비스는 NestJS 10 통일로 DI·TypeORM 일관성 확보.",
    result: "Claude SDK Python 우선 지원 활용 + TypeORM/DI 파이프라인 일관성 확보",
    color: "purple",
    highlight: "3",
    highlightLabel: "프레임워크, 6개 서비스",
  },
  {
    title: "RabbitMQ vs Kafka",
    reasoning: "소규모 스터디 트래픽에 1:1 Task Queue 패턴 적합. 128Mi~512Mi 메모리로 ARM 프리티어 운영 가능. 내장 DLX→DLQ 자동 격리로 별도 실패 처리 구현 불필요.",
    result: "ARM 프리티어에 적합한 리소스 + prefetch=2로 백프레셔 제어",
    color: "purple",
    highlight: "128Mi",
    highlightLabel: "최소 메모리",
    comparison: [
      { criteria: "패턴", chosen: "Task Queue (1:1) — 제출 처리 적합", alternative: "Event Stream (1:N) — 과설계" },
      { criteria: "리소스", chosen: "128Mi~512Mi — ARM 적정", alternative: "1GB+ JVM 힙" },
      { criteria: "DLQ", chosen: "내장 DLX → DLQ 자동 라우팅", alternative: "별도 구현 필요" },
      { criteria: "운영", chosen: "단일 노드 충분", alternative: "ZooKeeper/KRaft 필요" },
    ],
  },
  {
    title: "에이전트 오케스트레이션 자체 구현",
    reasoning: "12개 AI Agent 페르소나를 Claude Code 슬래시 커맨드로 직접 구현. 프롬프트 엔지니어링만으로 역할 분담 가능, n8n·LangChain 등 외부 의존성 완전 제거.",
    result: "추가 인프라 없이 프롬프트만으로 역할 분담 — 심판관, 설계자, 서기관 등 12인팀 운영",
    color: "cyan",
    highlight: "12",
    highlightLabel: "에이전트, 추가 인프라 $0",
  },
  {
    title: "Saga 오케스트레이션 패턴",
    reasoning: "코드 제출→GitHub Push→AI 분석 3단계 분산 트랜잭션의 원자성 보장 필요. 낙관적 락(WHERE sagaStep=EXPECTED) + 단계별 타임아웃(5/15/30분)으로 멱등성 확보. Outbox 패턴(Debezium CDC) 대비 ARM 리소스 제약 내 충분한 안정성.",
    result: "DB→MQ 순서로 멱등성 보장, 서비스 재시작 시 미완료 Saga 자동 재개",
    color: "cyan",
    highlight: "3",
    highlightLabel: "보상 트랜잭션 전략",
  },
];

export const PRINCIPLES: Principle[] = [
  {
    category: "Architecture",
    principle: "데이터 소유권은 첫 설계에서 확정",
    evidence: "Gateway가 Identity DB 직접 접근으로 출발. 분리 시 34개 API 신규 구축, 19파일 리팩터링, 597개 테스트 수정 발생.",
    impact: "597개 테스트 수정",
    color: "purple",
  },
  {
    category: "Trade-off",
    principle: "정석보다 현실 제약 우선",
    evidence: "Outbox 패턴(Debezium CDC)은 ARM 프리티어에서 리소스 초과. 낙관적 락 + 타임아웃 재개 조합으로 현 트래픽 규모에 충분한 안정성 확보.",
    color: "cyan",
  },
  {
    category: "Operations",
    principle: "사람의 실수는 CI 자동화로 방지",
    evidence: "amend 커밋이 paths-filter 우회로 변경 서비스 빌드 누락 발생. force-push 금지 정책 수립 + CI 단계 강제 차단 적용.",
    color: "purple",
  },
  {
    category: "Performance",
    principle: "리소스 제약이 과설계 제거의 기회",
    evidence: "ARM 프리티어 제약으로 DB 커넥션 풀 40→20 축소, CI jobs 24→15 최적화, HPA 자동 스케일링 도입.",
    impact: "CI jobs -37.5%",
    color: "cyan",
  },
  {
    category: "Testing",
    principle: "로그 없는 실패는 가장 비싼 기술 부채",
    evidence: "Guard 403 간헐 발생, 로그 미출력으로 원인 추적 불가. 캐시 히트 시 role 유효성 미검증이 원인. Sprint 40에서 테스트 보강.",
    color: "purple",
  },
];

export const CODE_SNIPPETS: CodeSnippet[] = [
  {
    id: "saga",
    title: "Saga Orchestrator",
    filepath: "services/submission/src/saga/saga-orchestrator.service.ts",
    description: "분산 트랜잭션 관리 — 낙관적 락 + 멱등성 순서 보장 + 서비스 재시작 시 미완료 Saga 자동 재개",
    language: "typescript",
    code: `@Injectable()
export class SagaOrchestratorService implements OnModuleInit {

  private static readonly STEP_TIMEOUTS: Record<SagaStep, number> = {
    [SagaStep.DB_SAVED]: 5 * 60 * 1000,       // 5분
    [SagaStep.GITHUB_QUEUED]: 15 * 60 * 1000,  // 15분
    [SagaStep.AI_QUEUED]: 30 * 60 * 1000,      // 30분
  };

  // Startup — 미완료 Saga 자동 재개
  async onModuleInit(): Promise<void> {
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
    const incomplete = await this.submissionRepo.find({
      where: {
        sagaStep: Not(In([SagaStep.DONE, SagaStep.FAILED])),
        createdAt: MoreThan(oneHourAgo),
      },
    });
    for (const sub of incomplete) {
      await this.resumeSaga(sub);
    }
  }

  // 낙관적 락 + 멱등성
  async advanceToGitHubQueued(id: string): Promise<void> {
    const result = await this.submissionRepo.update(
      { id, sagaStep: SagaStep.DB_SAVED },
      { sagaStep: SagaStep.GITHUB_QUEUED },
    );
    if (result.affected === 0) return;  // 이미 진행됨
    await this.mqPublisher.publishGitHubPush({ submissionId: id });
  }
}`,
  },
  {
    id: "circuit-breaker",
    title: "Circuit Breaker",
    filepath: "services/ai-analysis/src/circuit_breaker.py",
    description: "Claude API 보호 — CLOSED → OPEN (5회 실패) → HALF_OPEN (30초) → CLOSED (2회 성공)",
    language: "python",
    code: `class CircuitBreaker:
    """
    CLOSED → OPEN (연속 5회 실패)
    OPEN → HALF_OPEN (30초 경과)
    HALF_OPEN → CLOSED (2회 연속 성공)
    """
    def __init__(self, failure_threshold=5,
                 recovery_timeout=30, half_open_requests=2):
        self.state = CircuitState.CLOSED
        self.failure_count = 0

    @property
    def is_open(self) -> bool:
        if self.state == CircuitState.OPEN:
            if time.time() - self.last_failure_time >= self.recovery_timeout:
                self.state = CircuitState.HALF_OPEN
                self._notify_state_change()
                return False
            return True
        return False

    def record_success(self) -> None:
        if self.state == CircuitState.HALF_OPEN:
            self.half_open_successes += 1
            if self.half_open_successes >= self.half_open_requests:
                self.state = CircuitState.CLOSED
                self._notify_state_change()

    def record_failure(self) -> None:
        self.failure_count += 1
        if self.failure_count >= self.failure_threshold:
            self.state = CircuitState.OPEN`,
  },
  {
    id: "cicd",
    title: "CI/CD Pipeline",
    filepath: ".github/workflows/ci.yml",
    description: "7단계 15 jobs — 모노레포 경로 필터 + ARM64 크로스컴파일 + Trivy 보안 스캔 + GitOps 배포",
    language: "yaml",
    code: `# 1) 모노레포 변경 감지
detect-changes:
  steps:
    - uses: dorny/paths-filter@v3
      with:
        filters: |
          gateway: ['services/gateway/**']
          submission: ['services/submission/**']

# 2) ARM64 크로스컴파일 + Immutable 태그
build-services:
  steps:
    - uses: docker/setup-qemu-action@v3
      with: { platforms: linux/arm64 }
    - uses: docker/build-push-action@v5
      with:
        platforms: linux/arm64
        tags: ghcr.io/tpals0409/algosu-\${{ matrix.service }}:main-\${{ github.sha }}
        cache-from: type=gha,scope=\${{ matrix.service }}

# 3) Trivy 보안 스캔
trivy-scan:
  steps:
    - run: trivy image --severity CRITICAL,HIGH --exit-code 1
    - uses: github/codeql-action/upload-sarif@v3

# 4) GitOps 배포 (ArgoCD auto-sync)
deploy:
  if: needs.trivy-scan.result != 'failure'
  steps:
    - run: git commit -m "deploy(algosu): update image tags" && git push`,
  },
];

export const PROJECT_STATS: ProjectStat[] = [
  {
    label: "개발자",
    value: 1,
    suffix: "인",
    context: "설계·개발·배포·운영 전 과정",
  },
  {
    label: "마이크로서비스",
    value: 6,
    suffix: "개",
    context: "NestJS 4 + FastAPI 1 + Node.js 1",
  },
  {
    label: "AI 에이전트",
    value: 12,
    suffix: "개",
    context: "자체 구현 오케스트레이션",
  },
  {
    label: "CI/CD 파이프라인",
    value: 7,
    suffix: "단계",
    context: "15 jobs, 보안 스캔 포함",
  },
];

export const DIAGRAM_TABS: DiagramTab[] = [
  { id: "overall", label: "Overall", description: "Next.js → Gateway → 6개 마이크로서비스 + 비동기 워커 (PostgreSQL, RabbitMQ, Redis)" },
  { id: "api-gateway", label: "API Gateway", description: "OAuth + JWT + Rate Limit + 프록시 미들웨어 파이프라인 (화이트리스트 기반 라우팅)" },
  { id: "ai-pipeline", label: "AI Pipeline", description: "코드 제출 → GitHub Push → AI 분석 전 과정 자동화 (SSE 실시간 스트리밍)" },
  { id: "saga", label: "Saga Pattern", description: "낙관적 락 + 보상 트랜잭션 3종 + 타임아웃 재개 (5분/15분/30분)" },
  { id: "monitoring", label: "Monitoring", description: "Prometheus + Grafana + Alertmanager 3계층 (7개 메트릭 소스, 30초 스크랩)" },
  { id: "cicd", label: "CI/CD", description: "7단계 15 jobs — 경로 필터, ARM64 크로스컴파일, Trivy 보안 스캔, GitOps 자동 배포" },
];

export const CONTACT = {
  title: "배우고, 만들고, 성장합니다.",
  subtitle: "채용 문의, 기술 이야기, 협업 제안 모두 환영합니다.",
  links: [
    {
      label: "GitHub",
      href: "https://github.com/tpals0409",
      icon: "github",
    },
    {
      label: "Email",
      href: "mailto:tpalsdlapfnd@gmail.com",
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
