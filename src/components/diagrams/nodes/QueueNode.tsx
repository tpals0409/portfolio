"use client";

import { Handle, Position, NodeProps } from "@xyflow/react";
import { ListTodo } from "lucide-react";

export function QueueNode({ data }: NodeProps<{ label: string }>) {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-card border border-card-border min-w-[120px]">
      <div className="flex items-center gap-2">
        <div className="p-1.5 rounded-md bg-card-border">
          <ListTodo className="w-4 h-4 text-muted" />
        </div>
        <div className="text-sm font-medium text-foreground">{data.label}</div>
      </div>

      <Handle
        type="target"
        position={Position.Left}
        className="w-2 h-2 !bg-muted border-0"
      />
      <Handle
        type="source"
        position={Position.Right}
        className="w-2 h-2 !bg-accent-purple border-0"
      />
    </div>
  );
}
