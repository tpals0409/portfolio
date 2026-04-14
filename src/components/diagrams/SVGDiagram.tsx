"use client";

import { useMemo, useState, useEffect } from "react";
import type { T } from "@/lib/i18n/types";
import { useLocale } from "@/lib/i18n/context";

export interface DiagramNode {
  id: string;
  label: T;
  x: number;
  y: number;
  delay?: number;
  tooltip?: T;
}

export interface DiagramEdge {
  id: string;
  source: string;
  target: string;
  dashed?: boolean;
}

export interface SVGDiagramData {
  nodes: DiagramNode[];
  edges: DiagramEdge[];
}

const NODE_W = 180;
const NODE_H = 44;
const NODE_RX = 12;
const PAD = 30;

function getAnchor(src: DiagramNode, tgt: DiagramNode) {
  const sCx = src.x + NODE_W / 2;
  const sCy = src.y + NODE_H / 2;
  const tCx = tgt.x + NODE_W / 2;
  const tCy = tgt.y + NODE_H / 2;
  const dx = tCx - sCx;
  const dy = tCy - sCy;

  if (Math.abs(dx) > Math.abs(dy)) {
    return dx > 0
      ? { x1: src.x + NODE_W, y1: sCy, x2: tgt.x, y2: tCy }
      : { x1: src.x, y1: sCy, x2: tgt.x + NODE_W, y2: tCy };
  } else {
    return dy > 0
      ? { x1: sCx, y1: src.y + NODE_H, x2: tCx, y2: tgt.y }
      : { x1: sCx, y1: src.y, x2: tCx, y2: tgt.y + NODE_H };
  }
}

function buildPath(x1: number, y1: number, x2: number, y2: number): string {
  if (Math.abs(x2 - x1) > Math.abs(y2 - y1)) {
    const mx = (x1 + x2) / 2;
    return `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`;
  } else {
    const my = (y1 + y2) / 2;
    return `M${x1},${y1} C${x1},${my} ${x2},${my} ${x2},${y2}`;
  }
}

export default function SVGDiagram({ data }: { data: SVGDiagramData }) {
  const { nodes, edges } = data;
  const { t } = useLocale();

  const [show, setShow] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setShow(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const nodeMap = useMemo(() => {
    const m: Record<string, DiagramNode> = {};
    nodes.forEach((n) => { m[n.id] = n; });
    return m;
  }, [nodes]);

  const { vx, vy, vw, vh } = useMemo(() => {
    if (nodes.length === 0) return { vx: 0, vy: 0, vw: 800, vh: 400 };
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    nodes.forEach((n) => {
      minX = Math.min(minX, n.x);
      minY = Math.min(minY, n.y);
      maxX = Math.max(maxX, n.x + NODE_W);
      maxY = Math.max(maxY, n.y + NODE_H);
    });
    return {
      vx: minX - PAD,
      vy: minY - PAD,
      vw: maxX - minX + PAD * 2,
      vh: maxY - minY + PAD * 2,
    };
  }, [nodes]);

  return (
    <svg
      viewBox={`${vx} ${vy} ${vw} ${vh}`}
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      {edges.map((edge) => {
        const src = nodeMap[edge.source];
        const tgt = nodeMap[edge.target];
        if (!src || !tgt) return null;
        const { x1, y1, x2, y2 } = getAnchor(src, tgt);

        return (
          <path
            key={edge.id}
            d={buildPath(x1, y1, x2, y2)}
            fill="none"
            stroke="var(--card-border)"
            strokeWidth={1.5}
            strokeDasharray={edge.dashed ? "5 4" : undefined}
            style={{
              opacity: show ? 1 : 0,
              transition: `opacity 0.6s ease ${(src.delay ?? 0) + 0.2}s`,
            }}
          />
        );
      })}

      {nodes.map((node) => (
        <g
          key={node.id}
          className="diagram-node"
          style={{
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(8px)",
            transition: `opacity 0.5s ease ${node.delay ?? 0}s, transform 0.5s ease ${node.delay ?? 0}s`,
          }}
        >
          <rect
            x={node.x}
            y={node.y}
            width={NODE_W}
            height={NODE_H}
            rx={NODE_RX}
            fill="var(--card)"
            stroke="var(--card-border)"
            strokeWidth={1}
          />
          <text
            x={node.x + NODE_W / 2}
            y={node.y + NODE_H / 2 + 1}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={13}
            fontWeight={600}
            fill="var(--foreground)"
            style={{ pointerEvents: "none" }}
          >
            {t(node.label)}
          </text>
          {node.tooltip && (
            <text
              x={node.x + NODE_W / 2}
              y={node.y + NODE_H + 16}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={10}
              fill="var(--muted)"
              className="diagram-tooltip"
              style={{ pointerEvents: "none" }}
            >
              {t(node.tooltip)}
            </text>
          )}
        </g>
      ))}
    </svg>
  );
}
