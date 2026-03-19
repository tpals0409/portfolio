"use client";

import { Handle, Position } from "@xyflow/react";
import { ListTodo } from "lucide-react";
import { motion } from "framer-motion";

export function QueueNode({ data }: { data: Record<string, unknown> }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: (data.animationDelay as number) || 0 }}
      className="px-4 py-2 shadow-md rounded-md bg-card border border-card-border min-w-[120px]"
    >
      <div className="flex items-center gap-2">
        <div className="p-1.5 rounded-md bg-card-border">
          <ListTodo className="w-4 h-4 text-muted" />
        </div>
        <div className="text-sm font-medium text-foreground">{data.label as string}</div>
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
    </motion.div>
  );
}
