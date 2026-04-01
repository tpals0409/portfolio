import type { SVGDiagramData } from "./SVGDiagram";

export const DIAGRAM_DATA: Record<string, SVGDiagramData> = {
  "agent-orchestration": {
    nodes: [
      // 최종 의사결정 (상단 중앙)
      { id: "oracle", label: "심판관 (Oracle)", x: 280, y: 0, delay: 0, tooltip: "최종 기획 결정 및 아키텍처 승인" },
      // Tier 1 — 설계 (가로 배치, row 1)
      { id: "architect", label: "기반설계자 (Architect)", x: 0, y: 100, delay: 0.05, tooltip: "k3s 인프라, CI/CD 파이프라인 설계" },
      { id: "conductor", label: "지휘자 (Conductor)", x: 210, y: 100, delay: 0.1, tooltip: "배포 파이프라인 오케스트레이션" },
      { id: "gatekeeper", label: "관문지기 (Gatekeeper)", x: 420, y: 100, delay: 0.15, tooltip: "인증/보안 — OAuth, JWT, Rate Limit" },
      // Tier 2 — 도메인 구현 (가로 배치, row 2)
      { id: "postman", label: "배달부 (Postman)", x: 0, y: 210, delay: 0.2, tooltip: "API 설계 및 서비스 간 통신" },
      { id: "curator", label: "출제자 (Curator)", x: 210, y: 210, delay: 0.25, tooltip: "문제 도메인 CRUD 및 주차별 관리" },
      { id: "scribe", label: "서기관 (Scribe)", x: 420, y: 210, delay: 0.3, tooltip: "Saga 오케스트레이션 및 트랜잭션 관리" },
      { id: "palette", label: "화가 (Palette)", x: 630, y: 210, delay: 0.35, tooltip: "UI/UX 구현 — Next.js, shadcn/ui" },
      // Tier 3 — 운영 & 자동화 (가로 배치, row 3)
      { id: "sensei", label: "분석가 (Sensei)", x: 0, y: 320, delay: 0.4, tooltip: "AI 파이프라인 — Claude API, Circuit Breaker" },
      { id: "herald", label: "전령 (Herald)", x: 210, y: 320, delay: 0.45, tooltip: "SSE 실시간 알림 및 상태 브로드캐스트" },
      { id: "scout", label: "정찰병 (Scout)", x: 420, y: 320, delay: 0.5, tooltip: "GitHub 연동 — Octokit Push, 멱등성 처리" },
      { id: "librarian", label: "기록관리자 (Librarian)", x: 630, y: 320, delay: 0.55, tooltip: "ADR 문서화 및 런북 관리" },
    ],
    edges: [
      // Oracle → Tier 1 + Palette (최종 승인)
      { id: "e-oracle-architect", source: "oracle", target: "architect" },
      { id: "e-oracle-conductor", source: "oracle", target: "conductor" },
      { id: "e-oracle-gatekeeper", source: "oracle", target: "gatekeeper" },
      { id: "e-oracle-palette", source: "oracle", target: "palette" },
      // Tier 1 → Tier 2
      { id: "e-architect-postman", source: "architect", target: "postman" },
      { id: "e-conductor-curator", source: "conductor", target: "curator" },
      { id: "e-gatekeeper-scribe", source: "gatekeeper", target: "scribe" },
      // Tier 2 → Tier 3
      { id: "e-postman-sensei", source: "postman", target: "sensei" },
      { id: "e-curator-scout", source: "curator", target: "scout" },
      { id: "e-scribe-herald", source: "scribe", target: "herald" },
      { id: "e-palette-librarian", source: "palette", target: "librarian" },
    ],
  },

  overall: {
    nodes: [
      { id: "client", label: "Next.js Client", x: 0, y: 120, delay: 0, tooltip: "SSR + CSR 하이브리드 렌더링" },
      { id: "gateway", label: "API Gateway", x: 200, y: 120, delay: 0.1, tooltip: "NestJS — 인증, Rate Limit, 프록시" },
      { id: "identity", label: "Identity Service", x: 420, y: 30, delay: 0.2, tooltip: "OAuth 2.0 + JWT 토큰 관리" },
      { id: "submission", label: "Submission Service", x: 420, y: 120, delay: 0.2, tooltip: "코드 제출 + Saga 오케스트레이션" },
      { id: "problem", label: "Problem Service", x: 420, y: 210, delay: 0.2, tooltip: "문제 CRUD + 주차별 관리" },
      { id: "rabbitmq", label: "RabbitMQ 3.13", x: 640, y: 165, delay: 0.3, tooltip: "비동기 메시지 큐 — Task Queue 패턴" },
      { id: "gh-worker", label: "GitHub Worker", x: 640, y: 30, delay: 0.4, tooltip: "Octokit — 코드 Push + 멱등성 처리" },
      { id: "ai-worker", label: "AI Analysis (FastAPI)", x: 640, y: 280, delay: 0.4, tooltip: "Claude API + Circuit Breaker" },
      { id: "postgres", label: "PostgreSQL 16", x: 420, y: 330, delay: 0.5, tooltip: "메인 DB — 서비스별 스키마 분리" },
      { id: "redis", label: "Redis 7.2", x: 200, y: 270, delay: 0.5, tooltip: "세션 캐시 + Rate Limit 카운터" },
    ],
    edges: [
      { id: "e-c-g", source: "client", target: "gateway" },
      { id: "e-g-i", source: "gateway", target: "identity" },
      { id: "e-g-s", source: "gateway", target: "submission" },
      { id: "e-g-p", source: "gateway", target: "problem" },
      { id: "e-s-rmq", source: "submission", target: "rabbitmq" },
      { id: "e-rmq-gh", source: "rabbitmq", target: "gh-worker" },
      { id: "e-rmq-ai", source: "rabbitmq", target: "ai-worker" },
      { id: "e-s-db", source: "submission", target: "postgres", dashed: true },
      { id: "e-g-redis", source: "gateway", target: "redis", dashed: true },
    ],
  },

  "api-gateway": {
    nodes: [
      { id: "client", label: "Client Request", x: 0, y: 80, delay: 0, tooltip: "브라우저 HTTP 요청" },
      { id: "req-id", label: "RequestId MW", x: 200, y: 80, delay: 0.08, tooltip: "요청 추적용 고유 ID 부여" },
      { id: "security", label: "Security Headers", x: 400, y: 80, delay: 0.16, tooltip: "CORS, CSP, XSS 보호 헤더" },
      { id: "rate-limit", label: "Rate Limit", x: 200, y: 180, delay: 0.24, tooltip: "IP별 분당 요청 제한 (Redis)" },
      { id: "jwt", label: "JWT Auth", x: 400, y: 180, delay: 0.32, tooltip: "Access Token 검증 + Role 확인" },
      { id: "proxy", label: "Proxy Dispatch", x: 600, y: 130, delay: 0.4, tooltip: "화이트리스트 기반 서비스 라우팅" },
      { id: "services", label: "Microservices", x: 600, y: 230, delay: 0.48, tooltip: "5개 타겟 서비스로 프록시" },
      { id: "redis", label: "Redis (Quota)", x: 0, y: 180, delay: 0.24, tooltip: "Rate Limit 카운터 + 상태 저장" },
    ],
    edges: [
      { id: "e1", source: "client", target: "req-id" },
      { id: "e2", source: "req-id", target: "security" },
      { id: "e3", source: "security", target: "rate-limit" },
      { id: "e4", source: "rate-limit", target: "jwt" },
      { id: "e5", source: "jwt", target: "proxy" },
      { id: "e6", source: "proxy", target: "services" },
      { id: "e-rl-redis", source: "rate-limit", target: "redis", dashed: true },
    ],
  },

  "ai-pipeline": {
    nodes: [
      { id: "frontend", label: "Frontend (Monaco)", x: 0, y: 80, delay: 0, tooltip: "Monaco Editor — 코드 입력 UI" },
      { id: "gateway", label: "Gateway", x: 200, y: 80, delay: 0.1, tooltip: "인증 + 일일 제출 횟수 검증" },
      { id: "submission", label: "Submission Svc", x: 400, y: 80, delay: 0.2, tooltip: "DB 저장 + Saga 시작" },
      { id: "rabbitmq", label: "RabbitMQ", x: 400, y: 190, delay: 0.3, tooltip: "GitHub/AI 작업 큐 발행" },
      { id: "gh-worker", label: "GitHub Worker", x: 600, y: 20, delay: 0.4, tooltip: "코드 Push + PR 자동 생성" },
      { id: "ai-worker", label: "AI Analysis", x: 600, y: 140, delay: 0.4, tooltip: "Claude API 호출 + 분석 실행" },
      { id: "claude", label: "Claude Haiku", x: 600, y: 260, delay: 0.5, tooltip: "코드 리뷰 + 개선점 생성" },
      { id: "sse", label: "SSE Stream", x: 200, y: -40, delay: 0.6, tooltip: "실시간 분석 진행 상태 스트리밍" },
      { id: "redis-quota", label: "Redis Quota (5/day)", x: 200, y: 190, delay: 0.3, tooltip: "사용자별 일일 5회 제한" },
    ],
    edges: [
      { id: "e1", source: "frontend", target: "gateway" },
      { id: "e2", source: "gateway", target: "submission" },
      { id: "e3", source: "submission", target: "rabbitmq" },
      { id: "e4", source: "rabbitmq", target: "gh-worker" },
      { id: "e5", source: "rabbitmq", target: "ai-worker" },
      { id: "e6", source: "ai-worker", target: "claude" },
      { id: "e7", source: "ai-worker", target: "sse" },
      { id: "e8", source: "sse", target: "frontend" },
      { id: "e-sub-redis", source: "submission", target: "redis-quota", dashed: true },
    ],
  },

  saga: {
    nodes: [
      { id: "db-saved", label: "DB_SAVED (Start)", x: 0, y: 80, delay: 0, tooltip: "제출 데이터 DB 저장 완료" },
      { id: "gh-queued", label: "GITHUB_QUEUED", x: 220, y: 80, delay: 0.1, tooltip: "GitHub Push 큐 발행 (5분 타임아웃)" },
      { id: "ai-queued", label: "AI_QUEUED", x: 440, y: 80, delay: 0.2, tooltip: "AI 분석 큐 발행 (30분 타임아웃)" },
      { id: "done", label: "DONE", x: 660, y: 80, delay: 0.3, tooltip: "전체 파이프라인 완료" },
      { id: "token-invalid", label: "TOKEN_INVALID", x: 220, y: 210, delay: 0.4, tooltip: "GitHub 토큰 만료 → 보상 트랜잭션" },
      { id: "ai-skipped", label: "AI_SKIPPED", x: 440, y: 210, delay: 0.4, tooltip: "AI 분석 스킵 (할당량 초과)" },
      { id: "delayed", label: "DELAYED", x: 660, y: 210, delay: 0.4, tooltip: "일시 지연 → 재시도 대기" },
      { id: "timeout", label: "Timeout Resume", x: 330, y: -50, delay: 0.5, tooltip: "미완료 Saga 자동 재개 (1시간 이내)" },
    ],
    edges: [
      { id: "e1", source: "db-saved", target: "gh-queued" },
      { id: "e2", source: "gh-queued", target: "ai-queued" },
      { id: "e3", source: "ai-queued", target: "done" },
      { id: "e-gh-err", source: "gh-queued", target: "token-invalid" },
      { id: "e-tk-done", source: "token-invalid", target: "done" },
      { id: "e-ai-skip", source: "ai-queued", target: "ai-skipped" },
      { id: "e-sk-done", source: "ai-skipped", target: "done" },
      { id: "e-ai-err", source: "ai-queued", target: "delayed" },
      { id: "e-dl-done", source: "delayed", target: "done" },
      { id: "e-timeout", source: "timeout", target: "gh-queued" },
    ],
  },

  monitoring: {
    nodes: [
      { id: "ms", label: "6 Microservices", x: 0, y: 120, delay: 0, tooltip: "NestJS 4 + FastAPI 1 + Node.js 1" },
      { id: "prometheus", label: "Prometheus", x: 280, y: 40, delay: 0.1, tooltip: "메트릭 수집 — 30초 스크랩 주기" },
      { id: "loki", label: "Loki", x: 280, y: 200, delay: 0.1, tooltip: "로그 집계 — 구조화된 로그 쿼리" },
      { id: "grafana", label: "Grafana", x: 560, y: 120, delay: 0.2, tooltip: "대시보드 + Alertmanager 알림" },
    ],
    edges: [
      { id: "e1", source: "ms", target: "prometheus" },
      { id: "e2", source: "ms", target: "loki" },
      { id: "e3", source: "prometheus", target: "grafana" },
      { id: "e4", source: "loki", target: "grafana" },
    ],
  },

  cicd: {
    nodes: [
      // Phase 1: Validation
      { id: "secret-scan", label: "Secret Scan", x: 0, y: 0, delay: 0, tooltip: "gitleaks — 시크릿 유출 탐지" },
      { id: "detect-changes", label: "Path Filter", x: 0, y: 100, delay: 0, tooltip: "dorny/paths-filter — 모노레포 변경 감지" },
      { id: "commit-lint", label: "Commit Lint", x: 0, y: 200, delay: 0, tooltip: "Conventional Commits 규칙 검증" },
      // Phase 2: Quality
      { id: "quality-nestjs", label: "ESLint+TS (×5)", x: 200, y: 0, delay: 0.12, tooltip: "NestJS 5개 서비스 린트 + 타입 체크" },
      { id: "quality-python", label: "ruff (AI)", x: 200, y: 100, delay: 0.12, tooltip: "FastAPI AI 서비스 Python 린트" },
      { id: "quality-frontend", label: "next lint+TS", x: 200, y: 200, delay: 0.12, tooltip: "Next.js 프론트엔드 린트 + 타입 체크" },
      // Phase 3: Test
      { id: "test-node", label: "Jest (×5)", x: 400, y: 0, delay: 0.24, tooltip: "NestJS 서비스별 단위/통합 테스트" },
      { id: "test-ai", label: "pytest", x: 400, y: 100, delay: 0.24, tooltip: "AI 분석 파이프라인 테스트" },
      { id: "test-frontend", label: "Jest (FE)", x: 400, y: 200, delay: 0.24, tooltip: "React 컴포넌트 테스트" },
      // Phase 4: Build
      { id: "build-services", label: "Docker ARM64 (×6)", x: 600, y: 40, delay: 0.36, tooltip: "QEMU 크로스컴파일 + GHA 캐시" },
      { id: "build-frontend", label: "Next.js ARM64", x: 600, y: 160, delay: 0.36, tooltip: "프론트엔드 ARM64 이미지 빌드" },
      // Phase 5: Security
      { id: "trivy", label: "Trivy Scan (×7)", x: 600, y: 280, delay: 0.48, tooltip: "CRITICAL/HIGH 취약점 스캔 + SARIF 업로드" },
      // Phase 6: Deploy
      { id: "deploy", label: "ArgoCD Deploy", x: 400, y: 320, delay: 0.6, tooltip: "GitOps 자동 배포 — 이미지 태그 업데이트" },
    ],
    edges: [
      { id: "e-dc-qn", source: "detect-changes", target: "quality-nestjs" },
      { id: "e-dc-qp", source: "detect-changes", target: "quality-python" },
      { id: "e-dc-qf", source: "detect-changes", target: "quality-frontend" },
      { id: "e-qn-tn", source: "quality-nestjs", target: "test-node" },
      { id: "e-qp-ta", source: "quality-python", target: "test-ai" },
      { id: "e-qf-tf", source: "quality-frontend", target: "test-frontend" },
      { id: "e-tn-bs", source: "test-node", target: "build-services" },
      { id: "e-ta-bs", source: "test-ai", target: "build-services" },
      { id: "e-tf-bf", source: "test-frontend", target: "build-frontend" },
      { id: "e-bs-tr", source: "build-services", target: "trivy" },
      { id: "e-bf-tr", source: "build-frontend", target: "trivy" },
      { id: "e-tr-dp", source: "trivy", target: "deploy" },
      { id: "e-ss-dp", source: "secret-scan", target: "deploy" },
    ],
  },
};
