import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BUILDER_TARGETS, CURSOR_CONFIG } from '../utils/constructionTracker';

interface Props {
  builderId: string;
  progress: number;
  isCompleted: boolean;
  children: React.ReactNode;
  className?: string;
}

export const ConstructableBlock: React.FC<Props> = ({
  builderId,
  progress,
  isCompleted,
  children,
  className = ''
}) => {
  const blockRef = useRef<HTMLDivElement>(null);
  const target = BUILDER_TARGETS.find((t) => t.id === builderId);

  if (!target) {
    return <div className={className}>{children}</div>;
  }

  const { minProgress, completeProgress, cursorId, name, action } = target;
  const cursorInfo = CURSOR_CONFIG[cursorId];

  // Construction state
  const isPending = !isCompleted && progress < minProgress;
  const isUnderConstruction = !isCompleted && progress >= minProgress && progress < completeProgress;
  const isDone = isCompleted || progress >= completeProgress;

  // Normalized progress within this specific element's build phase [0, 1]
  const elementProgress = Math.min(
    1,
    Math.max(0, (progress - minProgress) / Math.max(0.001, completeProgress - minProgress))
  );

  return (
    <div
      id={builderId}
      ref={blockRef}
      className={`relative transition-all duration-300 ${className}`}
    >
      {/* 1. Pending Blueprint Wireframe View */}
      {isPending && (
        <div className="w-full border-2 border-dashed border-zinc-400/50 bg-zinc-100/60 rounded-lg p-6 sm:p-10 flex flex-col items-center justify-center text-center select-none relative overflow-hidden min-h-[120px]">
          {/* Blueprint Corner Crosshairs */}
          <span className="absolute top-2 left-2 text-[10px] font-mono text-zinc-400 font-bold">+</span>
          <span className="absolute top-2 right-2 text-[10px] font-mono text-zinc-400 font-bold">+</span>
          <span className="absolute bottom-2 left-2 text-[10px] font-mono text-zinc-400 font-bold">+</span>
          <span className="absolute bottom-2 right-2 text-[10px] font-mono text-zinc-400 font-bold">+</span>

          {/* Blueprint Label */}
          <div className="px-3 py-1 bg-white/80 border border-zinc-300 rounded font-mono text-[11px] text-zinc-500 flex items-center gap-2 shadow-xs">
            <span className="w-2 h-2 rounded-full border border-dashed border-zinc-400 animate-spin" />
            <span>Blueprint: {name} (Awaiting Cursor {cursorInfo.name})</span>
          </div>
          <span className="text-[10px] font-mono text-zinc-400 mt-1">
            Scroll down to build this section
          </span>
        </div>
      )}

      {/* 2. Active Construction Frame (Figma / Builder Canvas Selection Effect) */}
      {isUnderConstruction && (
        <div className="relative">
          {/* Figma-Style Selection Bounding Box */}
          <div
            className="absolute -inset-2 pointer-events-none rounded-lg border-2 z-30 transition-all"
            style={{
              borderColor: cursorInfo.color,
              boxShadow: `0 0 0 1px ${cursorInfo.color}33, 0 4px 16px ${cursorInfo.color}22`
            }}
          >
            {/* 4 Corner Resize Handles */}
            <span
              className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border-2 rounded-xs"
              style={{ borderColor: cursorInfo.color }}
            />
            <span
              className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border-2 rounded-xs"
              style={{ borderColor: cursorInfo.color }}
            />
            <span
              className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border-2 rounded-xs"
              style={{ borderColor: cursorInfo.color }}
            />
            <span
              className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border-2 rounded-xs"
              style={{ borderColor: cursorInfo.color }}
            />

            {/* Floating Builder Tag Badge */}
            <div
              className="absolute -top-8 left-0 px-2 py-0.5 rounded-sm text-[10px] font-mono font-bold flex items-center gap-1.5 shadow-md whitespace-nowrap"
              style={{
                backgroundColor: cursorInfo.color,
                color: '#FFFFFF'
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>{cursorInfo.name}</span>
              <span className="opacity-80">building {name}</span>
              <span className="bg-black/20 px-1 py-0.2 rounded text-[9px] tabular-nums">
                {Math.round(elementProgress * 100)}%
              </span>
            </div>
          </div>

          {/* Partially Constructed Children with Scale & Opacity Progression */}
          <motion.div
            initial={{ opacity: 0.4, scale: 0.98 }}
            animate={{
              opacity: 0.4 + elementProgress * 0.6,
              scale: 0.98 + elementProgress * 0.02
            }}
            transition={{ duration: 0.1 }}
          >
            {children}
          </motion.div>
        </div>
      )}

      {/* 3. Fully Completed Solid Component */}
      {isDone && (
        <motion.div
          initial={{ opacity: 0.9, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};
