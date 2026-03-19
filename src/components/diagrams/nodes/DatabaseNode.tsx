"use client";

import { Handle, Position, NodeProps } from "@xyflow/react";
import { Database } from "lucide-react";

export function DatabaseNode({ data }: NodeProps<{ label: string }>) {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-[var(--card)] border border-[var(--card-border)] min-w-[120px]">
      <div className="flex items-center gap-2">
        <div className="p-1.5 rounded-md bg-accent-cyan/10">
          <Database className="w-4 h-4 text-accent-cyan" />
        </div>
        <div className="text-sm font-medium text-[var(--foreground)]">{data.label}</div>
      </div>

      <Handle
        type="target"
        position={Position.Left}
        className="w-2 h-2 !bg-[var(--muted)] border-0"
      />
      <Handle
        type="source"
        position={Position.Right}
        className="w-2 h-2 !bg-[var(--accent-cyan)] border-0"
      />
    </div>
  );
}
