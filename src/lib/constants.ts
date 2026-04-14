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
  BlogPost,
} from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: { ko: "About", en: "About" }, href: "#about" },
  { label: { ko: "Project", en: "Project" }, href: "#project" },
  { label: { ko: "Blog", en: "Blog" }, href: "#blog" },
  { label: { ko: "Contact", en: "Contact" }, href: "#contact" },
];

export const HERO = {
  title: { ko: "방관자가 아닌\n실행자입니다.", en: "An executor,\nnot a bystander." },
  subtitle: {
    ko: "트렌드를 구경하는 대신, 직접 서비스로 만들며 배웁니다.",
    en: "Instead of watching trends, I learn by building real services.",
  },
  scrollLabel: { ko: "Scroll to explore", en: "Scroll to explore" },
};

export const ABOUT = {
  name: { ko: "김세민", en: "Semin Kim" },
  role: { ko: "AI DevOps / Backend Developer", en: "AI DevOps / Backend Developer" },
  description: {
    ko: "혼자서 AI 에이전트 12인팀을 설계하고 3개월 만에 프로덕션까지 배포한 실행 중심 엔지니어입니다. 설계부터 배포, 모니터링까지 전 과정을 책임집니다.",
    en: "An execution-driven engineer who designed a 12-member AI agent team and deployed it to production in 3 months. Responsible for the entire process from design to deployment and monitoring.",
  },
  github: "tpals0409",
  headline: {
    ko: "새로운 기술이 보이면\n상상보단 실행합니다.",
    en: "When I see new tech,\nI build rather than imagine.",
  },
  headlineAccent: { ko: "실행", en: "build" },
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
  subtitle: {
    ko: "알고리즘 스터디 관리 플랫폼 — 코드 제출부터 AI 분석까지 자동화",
    en: "Algorithm study platform — automating code submission to AI analysis",
  },
  url: "algo-su.com",
  screenshot: "/algosu-screenshot.png",
  screenshotLight: "/algosu-screenshot-light.png",
  background: {
    heading: {
      ko: "이 반복 작업, 자동화하면 안 될까?",
      en: "Why not automate this repetitive work?",
    },
    paragraphs: [
      {
        ko: "알고리즘 스터디를 운영하면서 코드 리뷰의 비효율성을 경험했습니다. 매주 반복되는 수동 리뷰, 일관성 없는 피드백, 그리고 학습 진도 추적의 어려움이 있었습니다.",
        en: "While running an algorithm study group, I experienced inefficiencies in code review — weekly manual reviews, inconsistent feedback, and difficulty tracking learning progress.",
      },
      {
        ko: "이 문제를 AI로 해결하기로 결정했습니다. 단순한 코드 분석을 넘어, 학습 패턴을 이해하고 개인화된 피드백을 제공하는 지능형 플랫폼을 구축했습니다.",
        en: "I decided to solve this with AI. Beyond simple code analysis, I built an intelligent platform that understands learning patterns and provides personalized feedback.",
      },
    ],
  },
};

export const AGENT_TIERS: AgentTier[] = [
  {
    tier: "Tier 1",
    title: "Core Analysis",
    description: {
      ko: "프로젝트 기반 설계 — 인프라, 보안, 배포 의사결정",
      en: "Project-level design — infrastructure, security, deployment decisions",
    },
    agents: [
      { name: { ko: "심판관 (Oracle)", en: "Oracle" }, role: { ko: "최종 기획 결정 및 아키텍처 승인", en: "Final planning decisions & architecture approval" } },
      { name: { ko: "기반설계자 (Architect)", en: "Architect" }, role: { ko: "k3s 인프라, CI/CD 파이프라인 설계", en: "k3s infra, CI/CD pipeline design" } },
      { name: { ko: "지휘자 (Conductor)", en: "Conductor" }, role: { ko: "배포 파이프라인 오케스트레이션", en: "Deployment pipeline orchestration" } },
      { name: { ko: "관문지기 (Gatekeeper)", en: "Gatekeeper" }, role: { ko: "인증/보안 — OAuth, JWT, Rate Limit", en: "Auth/Security — OAuth, JWT, Rate Limit" } },
    ],
    color: "purple",
  },
  {
    tier: "Tier 2",
    title: "Learning Intelligence",
    description: {
      ko: "도메인 구현 — API, 문제관리, Saga, UI 구현",
      en: "Domain implementation — API, problem management, Saga, UI",
    },
    agents: [
      { name: { ko: "배달부 (Postman)", en: "Postman" }, role: { ko: "API 설계 및 서비스 간 통신", en: "API design & inter-service communication" } },
      { name: { ko: "출제자 (Curator)", en: "Curator" }, role: { ko: "문제 도메인 CRUD 및 주차별 관리", en: "Problem domain CRUD & weekly management" } },
      { name: { ko: "서기관 (Scribe)", en: "Scribe" }, role: { ko: "Saga 오케스트레이션 및 트랜잭션 관리", en: "Saga orchestration & transaction management" } },
      { name: { ko: "팔레트 (Palette)", en: "Palette" }, role: { ko: "UI/UX 구현 — Next.js, shadcn/ui", en: "UI/UX implementation — Next.js, shadcn/ui" } },
    ],
    color: "mid",
  },
  {
    tier: "Tier 3",
    title: "Operations",
    description: {
      ko: "운영 & 자동화 — AI 분석, 실시간 알림, GitHub 연동, 문서화",
      en: "Operations & automation — AI analysis, real-time alerts, GitHub integration, docs",
    },
    agents: [
      { name: { ko: "분석가 (Sensei)", en: "Sensei" }, role: { ko: "AI 파이프라인 — Claude API, Circuit Breaker", en: "AI pipeline — Claude API, Circuit Breaker" } },
      { name: { ko: "전령 (Herald)", en: "Herald" }, role: { ko: "SSE 실시간 알림 및 상태 브로드캐스트", en: "SSE real-time alerts & state broadcast" } },
      { name: { ko: "정찰병 (Scout)", en: "Scout" }, role: { ko: "GitHub 연동 — Octokit Push, 멱등성 처리", en: "GitHub integration — Octokit Push, idempotency" } },
      { name: { ko: "기록관리자 (Librarian)", en: "Librarian" }, role: { ko: "ADR 문서화 및 런북 관리", en: "ADR docs & runbook management" } },
    ],
    color: "cyan",
  },
];

export const TECH_DECISIONS: TechDecision[] = [
  {
    title: "k3s vs EKS/GKE",
    reasoning: {
      ko: "OCI ARM 프리티어(4 OCPU, 24GB) 환경에서 프로덕션급 Kubernetes 필요. k3s는 50MB 바이너리, 512MB 메모리로 HPA·PDB·NetworkPolicy 완전 지원. EKS/GKE 대비 동일 기능에 비용 100% 절감.",
      en: "Needed production-grade Kubernetes on OCI ARM free tier (4 OCPU, 24GB). k3s is a 50MB binary using 512MB memory with full HPA, PDB, NetworkPolicy support — 100% cost reduction vs EKS/GKE.",
    },
    result: {
      ko: "HPA, PDB, NetworkPolicy 모두 지원하면서 인프라 비용 $0/월 달성",
      en: "Full HPA, PDB, NetworkPolicy support at $0/month infrastructure cost",
    },
    color: "cyan",
    highlight: "$0",
    highlightLabel: { ko: "월 인프라 비용", en: "Monthly infra cost" },
    featured: true,
    comparison: [
      { criteria: { ko: "비용", en: "Cost" }, chosen: { ko: "OCI ARM 프리티어 — $0/월", en: "OCI ARM free tier — $0/mo" }, alternative: { ko: "최소 $70+/월", en: "Min $70+/mo" } },
      { criteria: { ko: "리소스", en: "Resources" }, chosen: { ko: "바이너리 50MB, 메모리 512MB", en: "Binary 50MB, memory 512MB" }, alternative: { ko: "Control Plane 수 GB", en: "Control Plane several GB" } },
      { criteria: { ko: "기능", en: "Features" }, chosen: { ko: "HPA, PDB, NetworkPolicy 지원", en: "HPA, PDB, NetworkPolicy support" }, alternative: { ko: "동일", en: "Same" } },
      { criteria: { ko: "배포", en: "Deploy" }, chosen: { ko: "ArgoCD GitOps 자동화", en: "ArgoCD GitOps automation" }, alternative: { ko: "동일 가능", en: "Same possible" } },
    ],
  },
  {
    title: "FastAPI + NestJS",
    reasoning: {
      ko: "Claude SDK Python 우선 지원 + pydantic 응답 파싱으로 AI 서비스에 최적. AI Analysis만 FastAPI로 분리, 나머지 4개 서비스는 NestJS 10 통일로 DI·TypeORM 일관성 확보.",
      en: "Claude SDK Python-first support + pydantic response parsing optimal for AI service. AI Analysis isolated in FastAPI, remaining 4 services unified in NestJS 10 for DI/TypeORM consistency.",
    },
    result: {
      ko: "Claude SDK Python 우선 지원 활용 + TypeORM/DI 파이프라인 일관성 확보",
      en: "Leveraged Claude SDK Python-first support + ensured TypeORM/DI pipeline consistency",
    },
    color: "purple",
    highlight: "3",
    highlightLabel: { ko: "프레임워크, 6개 서비스", en: "Frameworks, 6 services" },
  },
  {
    title: "RabbitMQ vs Kafka",
    reasoning: {
      ko: "소규모 스터디 트래픽에 1:1 Task Queue 패턴 적합. 128Mi~512Mi 메모리로 ARM 프리티어 운영 가능. 내장 DLX→DLQ 자동 격리로 별도 실패 처리 구현 불필요.",
      en: "1:1 Task Queue pattern fits small-scale study traffic. Runs on ARM free tier with 128Mi–512Mi memory. Built-in DLX→DLQ auto-isolation eliminates custom failure handling.",
    },
    result: {
      ko: "ARM 프리티어에 적합한 리소스 + prefetch=2로 백프레셔 제어",
      en: "ARM free tier-friendly resources + backpressure control via prefetch=2",
    },
    color: "purple",
    highlight: "128Mi",
    highlightLabel: { ko: "최소 메모리", en: "Min memory" },
    comparison: [
      { criteria: { ko: "패턴", en: "Pattern" }, chosen: { ko: "Task Queue (1:1) — 제출 처리 적합", en: "Task Queue (1:1) — fits submission processing" }, alternative: { ko: "Event Stream (1:N) — 과설계", en: "Event Stream (1:N) — overengineered" } },
      { criteria: { ko: "리소스", en: "Resources" }, chosen: { ko: "128Mi~512Mi — ARM 적정", en: "128Mi–512Mi — ARM-appropriate" }, alternative: { ko: "1GB+ JVM 힙", en: "1GB+ JVM heap" } },
      { criteria: { ko: "DLQ", en: "DLQ" }, chosen: { ko: "내장 DLX → DLQ 자동 라우팅", en: "Built-in DLX → DLQ auto-routing" }, alternative: { ko: "별도 구현 필요", en: "Custom implementation needed" } },
      { criteria: { ko: "운영", en: "Operations" }, chosen: { ko: "단일 노드 충분", en: "Single node sufficient" }, alternative: { ko: "ZooKeeper/KRaft 필요", en: "ZooKeeper/KRaft required" } },
    ],
  },
  {
    title: "Agent Orchestration",
    reasoning: {
      ko: "12개 AI Agent 페르소나를 Claude Code 슬래시 커맨드로 직접 구현. 프롬프트 엔지니어링만으로 역할 분담 가능, n8n·LangChain 등 외부 의존성 완전 제거.",
      en: "12 AI Agent personas implemented directly via Claude Code slash commands. Role separation through prompt engineering alone — zero external dependencies like n8n or LangChain.",
    },
    result: {
      ko: "추가 인프라 없이 프롬프트만으로 역할 분담 — 심판관, 설계자, 서기관 등 12인팀 운영",
      en: "Role separation via prompts only — operating a 12-member team (Oracle, Architect, Scribe, etc.) with no extra infrastructure",
    },
    color: "cyan",
    highlight: "12",
    highlightLabel: { ko: "에이전트, 추가 인프라 $0", en: "Agents, $0 extra infra" },
  },
  {
    title: "Saga Pattern",
    reasoning: {
      ko: "코드 제출→GitHub Push→AI 분석 3단계 분산 트랜잭션의 원자성 보장 필요. 낙관적 락(WHERE sagaStep=EXPECTED) + 단계별 타임아웃(5/15/30분)으로 멱등성 확보. Outbox 패턴(Debezium CDC) 대비 ARM 리소스 제약 내 충분한 안정성.",
      en: "Needed atomicity for 3-step distributed transaction: submit→GitHub Push→AI analysis. Optimistic lock (WHERE sagaStep=EXPECTED) + step timeouts (5/15/30min) ensure idempotency. Sufficient reliability within ARM resource constraints vs Outbox pattern (Debezium CDC).",
    },
    result: {
      ko: "DB→MQ 순서로 멱등성 보장, 서비스 재시작 시 미완료 Saga 자동 재개",
      en: "Idempotency via DB→MQ ordering, auto-resume of incomplete Sagas on service restart",
    },
    color: "cyan",
    highlight: "3",
    highlightLabel: { ko: "보상 트랜잭션 전략", en: "Compensating tx strategies" },
  },
];

export const PRINCIPLES: Principle[] = [
  {
    category: "Architecture",
    principle: {
      ko: "데이터 소유권은 첫 설계에서 확정",
      en: "Data ownership must be settled in the first design",
    },
    evidence: {
      ko: "Gateway가 Identity DB 직접 접근으로 출발. 분리 시 34개 API 신규 구축, 19파일 리팩터링, 597개 테스트 수정 발생.",
      en: "Gateway started with direct Identity DB access. Separation required 34 new APIs, 19 file refactors, 597 test modifications.",
    },
    impact: { ko: "597개 테스트 수정", en: "597 test modifications" },
    color: "purple",
  },
  {
    category: "Trade-off",
    principle: {
      ko: "정석보다 현실 제약 우선",
      en: "Real-world constraints over textbook solutions",
    },
    evidence: {
      ko: "Outbox 패턴(Debezium CDC)은 ARM 프리티어에서 리소스 초과. 낙관적 락 + 타임아웃 재개 조합으로 현 트래픽 규모에 충분한 안정성 확보.",
      en: "Outbox pattern (Debezium CDC) exceeded ARM free tier resources. Optimistic lock + timeout resume combo provided sufficient reliability for current traffic scale.",
    },
    color: "cyan",
  },
  {
    category: "Operations",
    principle: {
      ko: "사람의 실수는 CI 자동화로 방지",
      en: "Prevent human error through CI automation",
    },
    evidence: {
      ko: "amend 커밋이 paths-filter 우회로 변경 서비스 빌드 누락 발생. force-push 금지 정책 수립 + CI 단계 강제 차단 적용.",
      en: "Amend commits bypassed paths-filter, causing missed service builds. Established force-push ban policy + enforced CI stage blocking.",
    },
    color: "purple",
  },
  {
    category: "Performance",
    principle: {
      ko: "리소스 제약이 과설계 제거의 기회",
      en: "Resource constraints are opportunities to eliminate overengineering",
    },
    evidence: {
      ko: "ARM 프리티어 제약으로 DB 커넥션 풀 40→20 축소, CI jobs 24→15 최적화, HPA 자동 스케일링 도입.",
      en: "ARM free tier constraints drove DB connection pool 40→20, CI jobs 24→15 optimization, HPA auto-scaling adoption.",
    },
    impact: { ko: "CI jobs -37.5%", en: "CI jobs -37.5%" },
    color: "cyan",
  },
  {
    category: "Testing",
    principle: {
      ko: "로그 없는 실패는 가장 비싼 기술 부채",
      en: "Failures without logs are the most expensive tech debt",
    },
    evidence: {
      ko: "Guard 403 간헐 발생, 로그 미출력으로 원인 추적 불가. 캐시 히트 시 role 유효성 미검증이 원인. Sprint 40에서 테스트 보강.",
      en: "Intermittent Guard 403s with no logs made root cause untraceable. Caused by missing role validation on cache hits. Tests reinforced in Sprint 40.",
    },
    color: "purple",
  },
];

export const CODE_SNIPPETS: CodeSnippet[] = [
  {
    id: "saga",
    title: "Saga Orchestrator",
    filepath: "services/submission/src/saga/saga-orchestrator.service.ts",
    description: {
      ko: "분산 트랜잭션 관리 — 낙관적 락 + 멱등성 순서 보장 + 서비스 재시작 시 미완료 Saga 자동 재개",
      en: "Distributed transaction management — optimistic lock + idempotent ordering + auto-resume of incomplete Sagas on restart",
    },
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
    description: {
      ko: "Claude API 보호 — CLOSED → OPEN (5회 실패) → HALF_OPEN (30초) → CLOSED (2회 성공)",
      en: "Claude API protection — CLOSED → OPEN (5 failures) → HALF_OPEN (30s) → CLOSED (2 successes)",
    },
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
    description: {
      ko: "7단계 15 jobs — 모노레포 경로 필터 + ARM64 크로스컴파일 + Trivy 보안 스캔 + GitOps 배포",
      en: "7-stage 15 jobs — monorepo path filter + ARM64 cross-compile + Trivy security scan + GitOps deploy",
    },
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
    label: { ko: "개발자", en: "Developer" },
    value: 1,
    suffix: { ko: "인", en: "" },
    context: { ko: "설계·개발·배포·운영 전 과정", en: "Full-stack: design, dev, deploy, ops" },
  },
  {
    label: { ko: "마이크로서비스", en: "Microservices" },
    value: 6,
    suffix: { ko: "개", en: "" },
    context: { ko: "NestJS 4 + FastAPI 1 + Node.js 1", en: "NestJS 4 + FastAPI 1 + Node.js 1" },
  },
  {
    label: { ko: "AI 에이전트", en: "AI Agents" },
    value: 12,
    suffix: { ko: "개", en: "" },
    context: { ko: "자체 구현 오케스트레이션", en: "Custom-built orchestration" },
  },
  {
    label: { ko: "CI/CD 파이프라인", en: "CI/CD Pipeline" },
    value: 7,
    suffix: { ko: "단계", en: " stages" },
    context: { ko: "15 jobs, 보안 스캔 포함", en: "15 jobs, includes security scanning" },
  },
];

export const DIAGRAM_TABS: DiagramTab[] = [
  { id: "agent-orchestration", label: "Agent Orchestration", description: { ko: "12개 AI 에이전트 3-Tier 오케스트레이션 — 설계·구현·운영 역할 분담, 프롬프트 기반 페르소나", en: "12 AI agents in 3-Tier orchestration — role separation across design, implementation & operations, prompt-based personas" } },
  { id: "overall", label: "Overall", description: { ko: "Next.js → Gateway → 6개 마이크로서비스 + 비동기 워커 (PostgreSQL, RabbitMQ, Redis)", en: "Next.js → Gateway → 6 microservices + async workers (PostgreSQL, RabbitMQ, Redis)" } },
  { id: "api-gateway", label: "API Gateway", description: { ko: "OAuth + JWT + Rate Limit + 프록시 미들웨어 파이프라인 (화이트리스트 기반 라우팅)", en: "OAuth + JWT + Rate Limit + proxy middleware pipeline (whitelist-based routing)" } },
  { id: "ai-pipeline", label: "AI Pipeline", description: { ko: "코드 제출 → GitHub Push → AI 분석 전 과정 자동화 (SSE 실시간 스트리밍)", en: "Code submission → GitHub Push → AI analysis full automation (SSE real-time streaming)" } },
  { id: "saga", label: "Saga Pattern", description: { ko: "낙관적 락 + 보상 트랜잭션 3종 + 타임아웃 재개 (5분/15분/30분)", en: "Optimistic lock + 3 compensating transactions + timeout resume (5/15/30min)" } },
  { id: "monitoring", label: "Monitoring", description: { ko: "Prometheus + Grafana + Alertmanager 3계층 (7개 메트릭 소스, 30초 스크랩)", en: "Prometheus + Grafana + Alertmanager 3 layers (7 metric sources, 30s scrape)" } },
  { id: "cicd", label: "CI/CD", description: { ko: "7단계 15 jobs — 경로 필터, ARM64 크로스컴파일, Trivy 보안 스캔, GitOps 자동 배포", en: "7-stage 15 jobs — path filter, ARM64 cross-compile, Trivy security scan, GitOps auto deploy" } },
];

export const CONTACT = {
  title: { ko: "배우고, 만들고, 성장합니다.", en: "Learn. Build. Grow." },
  subtitle: {
    ko: "채용 문의, 기술 이야기, 협업 제안 모두 환영합니다.",
    en: "Open to hiring inquiries, tech discussions, and collaboration.",
  },
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

export const BLOG = {
  title: { ko: "Writing", en: "Writing" },
  subtitle: {
    ko: "실전에서 배운 것들을 기록합니다.",
    en: "Documenting lessons learned from practice.",
  },
  url: "https://blog.algo-su.com",
  posts: [
    {
      title: { ko: "67번의 스프린트를 돌아보며", en: "Reflecting on 67 Sprints" },
      date: "2025-04-10",
      tags: ["Retrospective", "Agile"],
      category: { ko: "회고", en: "Retrospective" },
      href: "https://blog.algo-su.com/posts/sprint-journey",
      featured: true,
    },
    {
      title: { ko: "세션이 왜 자꾸 끊기죠? — 4개 레이어 동기화 삽질기", en: "Why Do Sessions Keep Dropping? — Syncing 4 Layers" },
      date: "2025-03-28",
      tags: ["Session", "Redis", "Debugging"],
      category: { ko: "트러블슈팅", en: "Troubleshooting" },
      href: "https://blog.algo-su.com/posts/session-policy-sync",
    },
    {
      title: { ko: "AI 코드의 안전망 — CI/CD 15 jobs 실전기", en: "Safety Net for AI Code — 15 CI/CD Jobs in Practice" },
      date: "2025-03-15",
      tags: ["CI/CD", "GitHub Actions", "DevOps"],
      category: { ko: "DevOps", en: "DevOps" },
      href: "https://blog.algo-su.com/posts/cicd-ai-guardrails",
    },
    {
      title: { ko: "12명의 AI를 통제하는 법", en: "How to Manage 12 AI Agents" },
      date: "2025-03-02",
      tags: ["AI Agent", "Orchestration"],
      category: { ko: "AI", en: "AI" },
      href: "https://blog.algo-su.com/posts/agent-orchestration-solo-dev",
    },
    {
      title: { ko: "MSA 설계 — 왜 이렇게 나눴는가", en: "MSA Design — Why We Split It This Way" },
      date: "2025-02-20",
      tags: ["MSA", "Architecture"],
      category: { ko: "아키텍처", en: "Architecture" },
      href: "https://blog.algo-su.com/posts/system-architecture-overview",
    },
    {
      title: { ko: "AI 에이전트 오케스트레이션 구조", en: "AI Agent Orchestration Architecture" },
      date: "2025-02-10",
      tags: ["AI", "Architecture", "Prompt Engineering"],
      category: { ko: "AI", en: "AI" },
      href: "https://blog.algo-su.com/posts/orchestration-structure",
    },
  ] as BlogPost[],
};

export const SECTION_IDS = {
  hero: "hero",
  about: "about",
  project: "project",
  blog: "blog",
  contact: "contact",
} as const;
