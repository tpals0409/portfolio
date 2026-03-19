import { Node, Edge } from "@xyflow/react";

export interface DiagramData {
  nodes: Node[];
  edges: Edge[];
}

export const DIAGRAM_DATA: Record<string, DiagramData> = {
  overall: {
    nodes: [
      {
        id: "gateway",
        type: "service",
        data: { label: "API Gateway" },
        position: { x: 0, y: 100 },
      },
      {
        id: "auth",
        type: "service",
        data: { label: "Auth Service" },
        position: { x: 250, y: 0 },
      },
      {
        id: "core",
        type: "service",
        data: { label: "Core Agent" },
        position: { x: 250, y: 100 },
      },
      {
        id: "queue",
        type: "queue",
        data: { label: "Task Queue" },
        position: { x: 500, y: 100 },
      },
      {
        id: "db",
        type: "database",
        data: { label: "PostgreSQL" },
        position: { x: 250, y: 200 },
      },
    ],
    edges: [
      { id: "e-g-a", source: "gateway", target: "auth", animated: true },
      { id: "e-g-c", source: "gateway", target: "core", animated: true },
      { id: "e-c-q", source: "core", target: "queue", animated: true },
      { id: "e-c-d", source: "core", target: "db", animated: false },
    ],
  },
  "api-gateway": {
    nodes: [
      {
        id: "client",
        type: "service",
        data: { label: "Client" },
        position: { x: 0, y: 100 },
      },
      {
        id: "gateway",
        type: "service",
        data: { label: "API Gateway" },
        position: { x: 250, y: 100 },
      },
      {
        id: "service-a",
        type: "service",
        data: { label: "Service A" },
        position: { x: 500, y: 0 },
      },
      {
        id: "service-b",
        type: "service",
        data: { label: "Service B" },
        position: { x: 500, y: 200 },
      },
    ],
    edges: [
      { id: "e-c-g", source: "client", target: "gateway", animated: true },
      { id: "e-g-sa", source: "gateway", target: "service-a", animated: true },
      { id: "e-g-sb", source: "gateway", target: "service-b", animated: true },
    ],
  },
  "ai-pipeline": {
    nodes: [
      {
        id: "input",
        type: "service",
        data: { label: "Input Handler" },
        position: { x: 0, y: 100 },
      },
      {
        id: "analyzer",
        type: "service",
        data: { label: "Code Analyzer" },
        position: { x: 250, y: 100 },
      },
      {
        id: "llm",
        type: "service",
        data: { label: "LLM (GPT-4)" },
        position: { x: 500, y: 100 },
      },
      {
        id: "output",
        type: "service",
        data: { label: "Review Generator" },
        position: { x: 750, y: 100 },
      },
    ],
    edges: [
      { id: "e-i-a", source: "input", target: "analyzer", animated: true },
      { id: "e-a-l", source: "analyzer", target: "llm", animated: true },
      { id: "e-l-o", source: "llm", target: "output", animated: true },
    ],
  },
  saga: {
    nodes: [
      {
        id: "orchestrator",
        type: "service",
        data: { label: "Saga Orchestrator" },
        position: { x: 0, y: 100 },
      },
      {
        id: "step1",
        type: "service",
        data: { label: "Payment Service" },
        position: { x: 250, y: 0 },
      },
      {
        id: "step2",
        type: "service",
        data: { label: "Stock Service" },
        position: { x: 250, y: 200 },
      },
    ],
    edges: [
      { id: "e-o-s1", source: "orchestrator", target: "step1", animated: true },
      { id: "e-o-s2", source: "orchestrator", target: "step2", animated: true },
    ],
  },
  monitoring: {
    nodes: [
      {
        id: "apps",
        type: "service",
        data: { label: "Applications" },
        position: { x: 0, y: 100 },
      },
      {
        id: "prometheus",
        type: "service",
        data: { label: "Prometheus" },
        position: { x: 250, y: 0 },
      },
      {
        id: "loki",
        type: "service",
        data: { label: "Loki" },
        position: { x: 250, y: 200 },
      },
      {
        id: "grafana",
        type: "service",
        data: { label: "Grafana" },
        position: { x: 500, y: 100 },
      },
    ],
    edges: [
      { id: "e-a-p", source: "apps", target: "prometheus", animated: true },
      { id: "e-a-l", source: "apps", target: "loki", animated: true },
      { id: "e-p-g", source: "prometheus", target: "grafana", animated: true },
      { id: "e-l-g", source: "loki", target: "grafana", animated: true },
    ],
  },
  cicd: {
    nodes: [
      {
        id: "github",
        type: "service",
        data: { label: "GitHub" },
        position: { x: 0, y: 100 },
      },
      {
        id: "actions",
        type: "service",
        data: { label: "GitHub Actions" },
        position: { x: 250, y: 100 },
      },
      {
        id: "argocd",
        type: "service",
        data: { label: "ArgoCD" },
        position: { x: 500, y: 100 },
      },
      {
        id: "k3s",
        type: "service",
        data: { label: "K3s Cluster" },
        position: { x: 750, y: 100 },
      },
    ],
    edges: [
      { id: "e-gh-a", source: "github", target: "actions", animated: true },
      { id: "e-a-arg", source: "actions", target: "argocd", animated: true },
      { id: "e-arg-k", source: "argocd", target: "k3s", animated: true },
    ],
  },
};
