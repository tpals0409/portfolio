import { Node, Edge } from "@xyflow/react";

export interface DiagramData {
  nodes: Node[];
  edges: Edge[];
}

export const DIAGRAM_DATA: Record<string, DiagramData> = {
  overall: {
    nodes: [
      {
        id: "client",
        type: "service",
        data: { label: "Next.js 15 Client", animationDelay: 0 },
        position: { x: 0, y: 150 },
      },
      {
        id: "gateway",
        type: "service",
        data: { label: "API Gateway", animationDelay: 0.1 },
        position: { x: 220, y: 150 },
      },
      {
        id: "identity",
        type: "service",
        data: { label: "Identity Service", animationDelay: 0.2 },
        position: { x: 480, y: 50 },
      },
      {
        id: "submission",
        type: "service",
        data: { label: "Submission Service", animationDelay: 0.2 },
        position: { x: 480, y: 150 },
      },
      {
        id: "problem",
        type: "service",
        data: { label: "Problem Service", animationDelay: 0.2 },
        position: { x: 480, y: 250 },
      },
      {
        id: "rabbitmq",
        type: "queue",
        data: { label: "RabbitMQ 3.13", animationDelay: 0.3 },
        position: { x: 740, y: 200 },
      },
      {
        id: "gh-worker",
        type: "service",
        data: { label: "GitHub Worker", animationDelay: 0.4 },
        position: { x: 1000, y: 150 },
      },
      {
        id: "ai-worker",
        type: "service",
        data: { label: "AI Analysis (FastAPI)", animationDelay: 0.4 },
        position: { x: 1000, y: 250 },
      },
      {
        id: "postgres",
        type: "database",
        data: { label: "PostgreSQL 16", animationDelay: 0.5 },
        position: { x: 480, y: 400 },
      },
      {
        id: "redis",
        type: "database",
        data: { label: "Redis 7.2", animationDelay: 0.5 },
        position: { x: 220, y: 350 },
      },
    ],
    edges: [
      { id: "e-c-g", source: "client", target: "gateway", animated: true },
      { id: "e-g-i", source: "gateway", target: "identity", animated: true },
      { id: "e-g-s", source: "gateway", target: "submission", animated: true },
      { id: "e-g-p", source: "gateway", target: "problem", animated: true },
      { id: "e-s-rmq", source: "submission", target: "rabbitmq", animated: true },
      { id: "e-rmq-gh", source: "rabbitmq", target: "gh-worker", animated: true },
      { id: "e-rmq-ai", source: "rabbitmq", target: "ai-worker", animated: true },
      { id: "e-services-db", source: "submission", target: "postgres", animated: false },
      { id: "e-g-redis", source: "gateway", target: "redis", animated: false },
    ],
  },
  "api-gateway": {
    nodes: [
      {
        id: "client",
        type: "service",
        data: { label: "Client Request", animationDelay: 0 },
        position: { x: 0, y: 100 },
      },
      {
        id: "req-id",
        type: "service",
        data: { label: "RequestId MW", animationDelay: 0.1 },
        position: { x: 200, y: 100 },
      },
      {
        id: "security",
        type: "service",
        data: { label: "Security Headers", animationDelay: 0.2 },
        position: { x: 400, y: 100 },
      },
      {
        id: "rate-limit",
        type: "service",
        data: { label: "Rate Limit (Redis)", animationDelay: 0.3 },
        position: { x: 600, y: 100 },
      },
      {
        id: "jwt",
        type: "service",
        data: { label: "JWT Auth", animationDelay: 0.4 },
        position: { x: 800, y: 100 },
      },
      {
        id: "proxy",
        type: "service",
        data: { label: "Proxy Dispatch", animationDelay: 0.5 },
        position: { x: 1000, y: 100 },
      },
      {
        id: "services",
        type: "service",
        data: { label: "Target Microservices", animationDelay: 0.6 },
        position: { x: 1250, y: 100 },
      },
      {
        id: "redis",
        type: "database",
        data: { label: "Redis (Quota/State)", animationDelay: 0.3 },
        position: { x: 600, y: 250 },
      },
    ],
    edges: [
      { id: "e1", source: "client", target: "req-id", animated: true },
      { id: "e2", source: "req-id", target: "security", animated: true },
      { id: "e3", source: "security", target: "rate-limit", animated: true },
      { id: "e4", source: "rate-limit", target: "jwt", animated: true },
      { id: "e5", source: "jwt", target: "proxy", animated: true },
      { id: "e6", source: "proxy", target: "services", animated: true },
      { id: "e-rl-redis", source: "rate-limit", target: "redis", animated: false },
    ],
  },
  "ai-pipeline": {
    nodes: [
      {
        id: "frontend",
        type: "service",
        data: { label: "Frontend (Monaco)", animationDelay: 0 },
        position: { x: 0, y: 100 },
      },
      {
        id: "gateway",
        type: "service",
        data: { label: "Gateway", animationDelay: 0.1 },
        position: { x: 200, y: 100 },
      },
      {
        id: "submission",
        type: "service",
        data: { label: "Submission Svc", animationDelay: 0.2 },
        position: { x: 400, y: 100 },
      },
      {
        id: "rabbitmq",
        type: "queue",
        data: { label: "RabbitMQ", animationDelay: 0.3 },
        position: { x: 600, y: 100 },
      },
      {
        id: "gh-worker",
        type: "service",
        data: { label: "GitHub Worker", animationDelay: 0.4 },
        position: { x: 800, y: 30 },
      },
      {
        id: "ai-worker",
        type: "service",
        data: { label: "AI Analysis", animationDelay: 0.4 },
        position: { x: 800, y: 170 },
      },
      {
        id: "claude",
        type: "service",
        data: { label: "Claude Haiku", animationDelay: 0.5 },
        position: { x: 1050, y: 170 },
      },
      {
        id: "sse",
        type: "service",
        data: { label: "SSE Stream", animationDelay: 0.6 },
        position: { x: 200, y: -50 },
      },
      {
        id: "redis-quota",
        type: "database",
        data: { label: "Redis Quota (5/day)", animationDelay: 0.3 },
        position: { x: 400, y: 250 },
      },
    ],
    edges: [
      { id: "e1", source: "frontend", target: "gateway", animated: true },
      { id: "e2", source: "gateway", target: "submission", animated: true },
      { id: "e3", source: "submission", target: "rabbitmq", animated: true },
      { id: "e4", source: "rabbitmq", target: "gh-worker", animated: true },
      { id: "e5", source: "rabbitmq", target: "ai-worker", animated: true },
      { id: "e6", source: "ai-worker", target: "claude", animated: true },
      { id: "e7", source: "ai-worker", target: "sse", animated: true },
      { id: "e8", source: "sse", target: "frontend", animated: true },
      { id: "e-sub-redis", source: "submission", target: "redis-quota", animated: false },
    ],
  },
  saga: {
    nodes: [
      {
        id: "db-saved",
        type: "service",
        data: { label: "DB_SAVED (Start)", animationDelay: 0 },
        position: { x: 0, y: 100 },
      },
      {
        id: "gh-queued",
        type: "service",
        data: { label: "GITHUB_QUEUED", animationDelay: 0.1 },
        position: { x: 250, y: 100 },
      },
      {
        id: "ai-queued",
        type: "service",
        data: { label: "AI_QUEUED", animationDelay: 0.2 },
        position: { x: 500, y: 100 },
      },
      {
        id: "done",
        type: "service",
        data: { label: "DONE", animationDelay: 0.3 },
        position: { x: 750, y: 100 },
      },
      {
        id: "token-invalid",
        type: "service",
        data: { label: "TOKEN_INVALID", animationDelay: 0.4 },
        position: { x: 250, y: 250 },
      },
      {
        id: "ai-skipped",
        type: "service",
        data: { label: "AI_SKIPPED", animationDelay: 0.4 },
        position: { x: 500, y: 250 },
      },
      {
        id: "delayed",
        type: "service",
        data: { label: "DELAYED", animationDelay: 0.4 },
        position: { x: 750, y: 250 },
      },
      {
        id: "timeout",
        type: "service",
        data: { label: "Timeout Resume", animationDelay: 0.5 },
        position: { x: 375, y: -50 },
      },
    ],
    edges: [
      { id: "e1", source: "db-saved", target: "gh-queued", animated: true },
      { id: "e2", source: "gh-queued", target: "ai-queued", animated: true },
      { id: "e3", source: "ai-queued", target: "done", animated: true },
      { id: "e-gh-err", source: "gh-queued", target: "token-invalid", animated: true },
      { id: "e-tk-done", source: "token-invalid", target: "done", animated: true },
      { id: "e-ai-skip", source: "ai-queued", target: "ai-skipped", animated: true },
      { id: "e-sk-done", source: "ai-skipped", target: "done", animated: true },
      { id: "e-ai-err", source: "ai-queued", target: "delayed", animated: true },
      { id: "e-dl-done", source: "delayed", target: "done", animated: true },
      { id: "e-timeout", source: "timeout", target: "gh-queued", animated: true },
    ],
  },
  monitoring: {
    nodes: [
      {
        id: "ms",
        type: "service",
        data: { label: "6 Microservices", animationDelay: 0 },
        position: { x: 0, y: 150 },
      },
      {
        id: "prometheus",
        type: "service",
        data: { label: "Prometheus", animationDelay: 0.1 },
        position: { x: 300, y: 50 },
      },
      {
        id: "loki",
        type: "service",
        data: { label: "Loki", animationDelay: 0.1 },
        position: { x: 300, y: 250 },
      },
      {
        id: "grafana",
        type: "service",
        data: { label: "Grafana", animationDelay: 0.2 },
        position: { x: 600, y: 150 },
      },
    ],
    edges: [
      { id: "e1", source: "ms", target: "prometheus", animated: true },
      { id: "e2", source: "ms", target: "loki", animated: true },
      { id: "e3", source: "prometheus", target: "grafana", animated: true },
      { id: "e4", source: "loki", target: "grafana", animated: true },
    ],
  },
  cicd: {
    nodes: [
      // Phase 1: Validation (parallel)
      { id: "secret-scan", type: "service", data: { label: "Secret Scan", animationDelay: 0 }, position: { x: 0, y: 0 } },
      { id: "detect-changes", type: "service", data: { label: "Path Filter", animationDelay: 0 }, position: { x: 0, y: 120 } },
      { id: "commit-lint", type: "service", data: { label: "Commit Lint", animationDelay: 0 }, position: { x: 0, y: 240 } },

      // Phase 2: Quality (parallel, after detect-changes)
      { id: "quality-nestjs", type: "service", data: { label: "ESLint+TS (×5)", animationDelay: 0.15 }, position: { x: 280, y: 0 } },
      { id: "quality-python", type: "service", data: { label: "ruff (AI)", animationDelay: 0.15 }, position: { x: 280, y: 120 } },
      { id: "quality-frontend", type: "service", data: { label: "next lint+TS", animationDelay: 0.15 }, position: { x: 280, y: 240 } },

      // Phase 3: Test (after quality)
      { id: "test-node", type: "service", data: { label: "Jest (×5)", animationDelay: 0.3 }, position: { x: 560, y: 0 } },
      { id: "test-ai", type: "service", data: { label: "pytest", animationDelay: 0.3 }, position: { x: 560, y: 120 } },
      { id: "test-frontend", type: "service", data: { label: "Jest (FE)", animationDelay: 0.3 }, position: { x: 560, y: 240 } },

      // Phase 4: Build (after test)
      { id: "build-services", type: "service", data: { label: "Docker ARM64 (×6)", animationDelay: 0.45 }, position: { x: 840, y: 50 } },
      { id: "build-frontend", type: "service", data: { label: "Next.js ARM64", animationDelay: 0.45 }, position: { x: 840, y: 190 } },

      // Phase 5: Security (main only)
      { id: "trivy", type: "service", data: { label: "Trivy Scan (×7)", animationDelay: 0.6 }, position: { x: 1100, y: 120 } },

      // Phase 6: Deploy
      { id: "deploy", type: "service", data: { label: "ArgoCD Deploy", animationDelay: 0.75 }, position: { x: 1350, y: 120 } },

    ],
    edges: [
      // Phase 1 → Phase 2 (detect-changes fans out)
      { id: "e-dc-qn", source: "detect-changes", target: "quality-nestjs", animated: true },
      { id: "e-dc-qp", source: "detect-changes", target: "quality-python", animated: true },
      { id: "e-dc-qf", source: "detect-changes", target: "quality-frontend", animated: true },

      // Phase 2 → Phase 3
      { id: "e-qn-tn", source: "quality-nestjs", target: "test-node", animated: true },
      { id: "e-qp-ta", source: "quality-python", target: "test-ai", animated: true },
      { id: "e-qf-tf", source: "quality-frontend", target: "test-frontend", animated: true },

      // Phase 3 → Phase 4
      { id: "e-tn-bs", source: "test-node", target: "build-services", animated: true },
      { id: "e-ta-bs", source: "test-ai", target: "build-services", animated: true },
      { id: "e-tf-bf", source: "test-frontend", target: "build-frontend", animated: true },

      // Phase 4 → Phase 5
      { id: "e-bs-tr", source: "build-services", target: "trivy", animated: true },
      { id: "e-bf-tr", source: "build-frontend", target: "trivy", animated: true },

      // Phase 5 → Phase 6 (also requires secret-scan)
      { id: "e-ss-dp", source: "secret-scan", target: "deploy", animated: true },
      { id: "e-tr-dp", source: "trivy", target: "deploy", animated: true },

    ],
  },
};

/**
 * Returns the diagram data for a given tab ID.
 * Defaults to 'overall' if the ID is not found.
 */
export const getDiagramData = (id: string): DiagramData => {
  return DIAGRAM_DATA[id] || DIAGRAM_DATA.overall;
};
