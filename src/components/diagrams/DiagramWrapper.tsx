"use client";

import { useMemo } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  Node,
  Edge,
  BackgroundVariant,
  ColorMode,
} from "@xyflow/react";
import { useTheme } from "next-themes";
import "@xyflow/react/dist/style.css";
import { cn } from "@/lib/utils";

import { ServiceNode } from "./nodes/ServiceNode";
import { DatabaseNode } from "./nodes/DatabaseNode";
import { QueueNode } from "./nodes/QueueNode";

interface DiagramWrapperProps {
  nodes: Node[];
  edges: Edge[];
  animated?: boolean;
}

export default function DiagramWrapper({ nodes, edges, animated = true }: DiagramWrapperProps) {
  const { theme, resolvedTheme } = useTheme();
  
  const nodeTypes = useMemo(
    () => ({
      service: ServiceNode,
      database: DatabaseNode,
      queue: QueueNode,
    }),
    []
  );

  const colorMode = (resolvedTheme || theme || "light") as ColorMode;

  // Stagger node appearance if animated is true
  const animatedNodes = useMemo(() => {
    if (!animated) return nodes;
    return nodes.map((node, index) => ({
      ...node,
      data: {
        ...node.data,
        animationDelay: index * 0.1, // Stagger effect
      },
    }));
  }, [nodes, animated]);

  return (
    <div className="w-full h-full min-h-[400px] border border-card-border rounded-xl overflow-hidden bg-card">
      <ReactFlow
        nodes={animatedNodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        className={cn("bg-card", animated && "animated")}
        colorMode={colorMode}
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
