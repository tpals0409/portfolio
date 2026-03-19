"use client";

import { useMemo } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  Node,
  Edge,
  BackgroundVariant,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { ServiceNode } from "./nodes/ServiceNode";
import { DatabaseNode } from "./nodes/DatabaseNode";
import { QueueNode } from "./nodes/QueueNode";

interface DiagramWrapperProps {
  nodes: Node[];
  edges: Edge[];
}

export default function DiagramWrapper({ nodes, edges }: DiagramWrapperProps) {
  const nodeTypes = useMemo(
    () => ({
      service: ServiceNode,
      database: DatabaseNode,
      queue: QueueNode,
    }),
    []
  );

  return (
    <div className="w-full h-full min-h-[400px] border border-[var(--card-border)] rounded-xl overflow-hidden bg-[var(--card)]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        className="bg-[var(--card)]"
        colorMode="system"
      >
        <Background
          variant={BackgroundVariant.Dots}
          gap={20}
          size={1}
          color="var(--card-border)"
        />
        <Controls showInteractive={false} />
      </ReactFlow>
    </div>
  );
}
