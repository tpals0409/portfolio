import { Node, Edge, MarkerType } from '@xyflow/react';

export type DiagramId = 'overall' | 'api-gateway' | 'ai-pipeline' | 'saga' | 'monitoring' | 'cicd';

interface DiagramData {
  nodes: Node[];
  edges: Edge[];
}

const defaultEdgeOptions = {
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: 'var(--accent-purple)',
  },
  style: { stroke: 'var(--accent-purple)', strokeWidth: 2 },
};

const createEdge = (id: string, source: string, target: string, label?: string): Edge => ({
  id,
  source,
  target,
  label,
  ...defaultEdgeOptions,
});

export const getDiagramData = (id: DiagramId): DiagramData => {
  switch (id) {
    case 'overall':
      return {
        nodes: [
          { id: 'user', type: 'service', data: { label: 'User / Client' }, position: { x: 0, y: 100 } },
          { id: 'gateway', type: 'service', data: { label: 'API Gateway' }, position: { x: 250, y: 100 } },
          { id: 'core', type: 'service', data: { label: 'Core Service' }, position: { x: 500, y: 100 } },
          { id: 'db', type: 'database', data: { label: 'PostgreSQL' }, position: { x: 500, y: 350 } },
          { id: 'mq', type: 'queue', data: { label: 'RabbitMQ' }, position: { x: 750, y: 100 } },
          { id: 'worker', type: 'service', data: { label: 'AI Worker' }, position: { x: 1000, y: 100 } },
          { id: 'redis', type: 'database', data: { label: 'Redis Cache' }, position: { x: 1000, y: 350 } },
        ],
        edges: [
          createEdge('e1-2', 'user', 'gateway'),
          createEdge('e2-3', 'gateway', 'core'),
          createEdge('e3-4', 'core', 'db'),
          createEdge('e3-5', 'core', 'mq', 'Job Push'),
          createEdge('e5-6', 'mq', 'worker', 'Job Pull'),
          createEdge('e6-7', 'worker', 'redis'),
        ],
      };

    case 'api-gateway':
      return {
        nodes: [
          { id: 'client', type: 'service', data: { label: 'Client' }, position: { x: 0, y: 150 } },
          { id: 'ingress', type: 'service', data: { label: 'Nginx Ingress' }, position: { x: 250, y: 150 } },
          { id: 'auth', type: 'service', data: { label: 'Auth Guard' }, position: { x: 500, y: 50 } },
          { id: 'rate', type: 'service', data: { label: 'Rate Limiter' }, position: { x: 500, y: 250 } },
          { id: 'svc-a', type: 'service', data: { label: 'User Service' }, position: { x: 750, y: 50 } },
          { id: 'svc-b', type: 'service', data: { label: 'Review Service' }, position: { x: 750, y: 250 } },
        ],
        edges: [
          createEdge('e1-2', 'client', 'ingress'),
          createEdge('e2-3', 'ingress', 'auth'),
          createEdge('e2-4', 'ingress', 'rate'),
          createEdge('e3-5', 'auth', 'svc-a'),
          createEdge('e4-6', 'rate', 'svc-b'),
        ],
      };

    case 'ai-pipeline':
      return {
        nodes: [
          { id: 'trigger', type: 'service', data: { label: 'Submission' }, position: { x: 0, y: 100 } },
          { id: 'orchestrator', type: 'service', data: { label: 'Orchestrator' }, position: { x: 250, y: 100 } },
          { id: 'analyzer', type: 'service', data: { label: 'Analyzer' }, position: { x: 500, y: 0 } },
          { id: 'reviewer', type: 'service', data: { label: 'Reviewer' }, position: { x: 500, y: 100 } },
          { id: 'scorer', type: 'service', data: { label: 'Scorer' }, position: { x: 500, y: 200 } },
          { id: 'aggregator', type: 'service', data: { label: 'Aggregator' }, position: { x: 750, y: 100 } },
          { id: 'db', type: 'database', data: { label: 'Result DB' }, position: { x: 1000, y: 100 } },
        ],
        edges: [
          createEdge('e1-2', 'trigger', 'orchestrator'),
          createEdge('e2-3', 'orchestrator', 'analyzer'),
          createEdge('e2-4', 'orchestrator', 'reviewer'),
          createEdge('e2-5', 'orchestrator', 'scorer'),
          createEdge('e3-6', 'analyzer', 'aggregator'),
          createEdge('e4-6', 'reviewer', 'aggregator'),
          createEdge('e5-6', 'scorer', 'aggregator'),
          createEdge('e6-7', 'aggregator', 'db'),
        ],
      };

    case 'saga':
      return {
        nodes: [
          { id: 'start', type: 'service', data: { label: 'Start Saga' }, position: { x: 0, y: 100 } },
          { id: 'svc1', type: 'service', data: { label: 'Svc A (Local)' }, position: { x: 250, y: 100 } },
          { id: 'broker', type: 'queue', data: { label: 'Event Broker' }, position: { x: 500, y: 100 } },
          { id: 'svc2', type: 'service', data: { label: 'Svc B (Local)' }, position: { x: 750, y: 100 } },
          { id: 'comp', type: 'service', data: { label: 'Compensator' }, position: { x: 500, y: 300 } },
        ],
        edges: [
          createEdge('e1-2', 'start', 'svc1'),
          createEdge('e2-3', 'svc1', 'broker', 'Success'),
          createEdge('e3-4', 'broker', 'svc2'),
          createEdge('e4-5', 'svc2', 'comp', 'Failure'),
          createEdge('e5-1', 'comp', 'svc1', 'Rollback'),
        ],
      };

    case 'monitoring':
      return {
        nodes: [
          { id: 'cluster', type: 'service', data: { label: 'K3s Cluster' }, position: { x: 0, y: 100 } },
          { id: 'prom', type: 'service', data: { label: 'Prometheus' }, position: { x: 250, y: 50 } },
          { id: 'loki', type: 'service', data: { label: 'Loki' }, position: { x: 250, y: 150 } },
          { id: 'grafana', type: 'service', data: { label: 'Grafana' }, position: { x: 500, y: 100 } },
          { id: 'alert', type: 'service', data: { label: 'AlertManager' }, position: { x: 750, y: 100 } },
        ],
        edges: [
          createEdge('e1-2', 'cluster', 'prom', 'Metrics'),
          createEdge('e1-3', 'cluster', 'loki', 'Logs'),
          createEdge('e2-4', 'prom', 'grafana'),
          createEdge('e3-4', 'loki', 'grafana'),
          createEdge('e2-5', 'prom', 'alert'),
        ],
      };

    case 'cicd':
      return {
        nodes: [
          { id: 'git', type: 'service', data: { label: 'GitHub' }, position: { x: 0, y: 100 } },
          { id: 'actions', type: 'service', data: { label: 'Actions' }, position: { x: 250, y: 100 } },
          { id: 'docker', type: 'service', data: { label: 'Registry' }, position: { x: 500, y: 100 } },
          { id: 'argo', type: 'service', data: { label: 'ArgoCD' }, position: { x: 750, y: 100 } },
          { id: 'k3s', type: 'service', data: { label: 'Production' }, position: { x: 1000, y: 100 } },
        ],
        edges: [
          createEdge('e1-2', 'git', 'actions', 'Push'),
          createEdge('e2-3', 'actions', 'docker', 'Build'),
          createEdge('e3-4', 'docker', 'argo', 'Sync'),
          createEdge('e4-5', 'argo', 'k3s', 'Deploy'),
        ],
      };

    default:
      return { nodes: [], edges: [] };
  }
};
