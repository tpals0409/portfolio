"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { DIAGRAM_TABS } from "@/lib/constants";
import { DIAGRAM_DATA } from "@/components/diagrams/diagram-data";
import DiagramWrapper from "@/components/diagrams/DiagramWrapper";
import { cn } from "@/lib/utils";

export default function ArchitectureBlock() {
  const [activeTab, setActiveTab] = useState(DIAGRAM_TABS[0].id);
  const [isMounted, setIsMounted] = useState(false);
  const [animated, setAnimated] = useState(false);
  const blockRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(blockRef, { once: false, amount: 0.3 });

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setAnimated(true), 0);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const handleTabSwitch = (tabId: string) => {
    setAnimated(false);
    setActiveTab(tabId);
    setTimeout(() => setAnimated(true), 100);
  };

  const currentData = DIAGRAM_DATA[activeTab] || DIAGRAM_DATA.overall;
  const currentTab = DIAGRAM_TABS.find((t) => t.id === activeTab);

  return (
    <div ref={blockRef} className="space-y-6">
      <h3 className="text-xl font-bold text-foreground">System Design</h3>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 pb-2 overflow-x-auto no-scrollbar border-b border-card-border">
        {DIAGRAM_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabSwitch(tab.id)}
            className={cn(
              "px-4 py-2 text-sm font-medium transition-all relative whitespace-nowrap",
              activeTab === tab.id
                ? "text-accent-purple"
                : "text-muted hover:text-foreground"
            )}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-purple"
                initial={false}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab description */}
      {currentTab?.description && (
        <p className="text-sm text-muted">{currentTab.description}</p>
      )}

      {/* Diagram Area */}
      <div className="relative aspect-[16/9] w-full min-h-[400px]">
        {isMounted ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="w-full h-full"
            >
              <DiagramWrapper
                nodes={currentData.nodes}
                edges={currentData.edges}
                animated={animated}
              />
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="w-full h-full border border-card-border rounded-xl bg-card animate-pulse" />
        )}
      </div>
    </div>
  );
}
