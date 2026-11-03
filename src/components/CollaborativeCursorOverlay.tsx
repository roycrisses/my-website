import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BUILDER_TARGETS, CURSOR_CONFIG } from '../utils/constructionTracker';

interface Props {
  progress: number;
  isPlaying: boolean;
  isCompleted: boolean;
}

interface CursorLiveState {
  id: 'krishna' | 'alex' | 'maya' | 'nova';
  x: number;
  y: number;
  visible: boolean;
  actionText: string;
  isDrawing: boolean;
  toolType: string;
}

export const CollaborativeCursorOverlay: React.FC<Props> = ({ progress, isPlaying, isCompleted }) => {
  const [cursorStates, setCursorStates] = useState<Record<string, CursorLiveState>>({
    krishna: { id: 'krishna', x: 200, y: 150, visible: true, actionText: 'Inspecting Layout', isDrawing: false, toolType: 'draw' },
    alex: { id: 'alex', x: 350, y: 220, visible: true, actionText: 'Drafting Top Header', isDrawing: true, toolType: 'draw' },
    maya: { id: 'maya', x: 500, y: 180, visible: true, actionText: 'Preparing Tape Accents', isDrawing: false, toolType: 'tape' },
    nova: { id: 'nova', x: 650, y: 300, visible: true, actionText: 'Compiling AI Funnel', isDrawing: false, toolType: 'snap' }
  });

  const [activeDrawLines, setActiveDrawLines] = useState<{ id: string; x1: number; y1: number; x2: number; y2: number; color: string }[]>([]);

  // Update cursor positions by querying the real DOM bounding boxes of active builder targets
  useEffect(() => {
    if (isCompleted) {
      // Park cursors nicely near bottom or corners when fully built
      setCursorStates({
        krishna: { id: 'krishna', x: window.innerWidth - 180, y: window.innerHeight - 80, visible: true, actionText: 'Site Verified ✓', isDrawing: false, toolType: 'snap' },
        alex: { id: 'alex', x: window.innerWidth - 120, y: window.innerHeight - 80, visible: true, actionText: '100% Assembled', isDrawing: false, toolType: 'snap' },
        maya: { id: 'maya', x: 40, y: window.innerHeight - 60, visible: true, actionText: 'All Styles Applied', isDrawing: false, toolType: 'tape' },
        nova: { id: 'nova', x: 120, y: window.innerHeight - 60, visible: true, actionText: 'AI Workflows Live', isDrawing: false, toolType: 'stamp' }
      });
      return;
    }

    // Find the currently active builder target
    const currentTarget = BUILDER_TARGETS.find(
      (t) => progress >= t.minProgress && progress <= t.completeProgress
    ) || BUILDER_TARGETS[0];

    const el = document.getElementById(currentTarget.id);

    if (el) {
      const rect = el.getBoundingClientRect();
      const elementProgress = Math.min(
        1,
        Math.max(0, (progress - currentTarget.minProgress) / Math.max(0.001, currentTarget.completeProgress - currentTarget.minProgress))
      );

      // Primary cursor is the assigned builder
      const primaryCursorId = currentTarget.cursorId;
      let primaryX = rect.left + 20;
      let primaryY = rect.top + 20;

      if (currentTarget.toolType === 'type') {
        // Moves from left to right along the element
        primaryX = rect.left + rect.width * elementProgress;
        primaryY = rect.top + rect.height * 0.5;
      } else if (currentTarget.toolType === 'tape') {
        // Moves between top-left and top-right corners
        if (elementProgress < 0.5) {
          primaryX = rect.left + 15;
          primaryY = rect.top - 8;
        } else {
          primaryX = rect.right - 25;
          primaryY = rect.top - 8;
        }
      } else if (currentTarget.toolType === 'draw') {
        // Traces perimeter
        if (elementProgress < 0.25) {
          primaryX = rect.left + rect.width * (elementProgress * 4);
          primaryY = rect.top;
        } else if (elementProgress < 0.5) {
          primaryX = rect.right;
          primaryY = rect.top + rect.height * ((elementProgress - 0.25) * 4);
        } else if (elementProgress < 0.75) {
          primaryX = rect.right - rect.width * ((elementProgress - 0.5) * 4);
          primaryY = rect.bottom;
        } else {
          primaryX = rect.left;
          primaryY = rect.bottom - rect.height * ((elementProgress - 0.75) * 4);
        }
      } else if (currentTarget.toolType === 'stamp') {
        primaryX = rect.left + rect.width * 0.5 + Math.sin(elementProgress * 20) * 10;
        primaryY = rect.top + rect.height * 0.5 + Math.cos(elementProgress * 20) * 10;
      } else {
        // Snap
        primaryX = rect.left + rect.width * 0.4;
        primaryY = rect.top + rect.height * 0.4;
      }

      // Secondary cursors assist around the active element
      const assist1X = rect.right - 30;
      const assist1Y = rect.top + 20;

      const assist2X = rect.left + rect.width * 0.5;
      const assist2Y = rect.bottom - 15;

      const assist3X = Math.max(30, rect.left - 40);
      const assist3Y = rect.top + rect.height * 0.5;

      setCursorStates((prev) => {
        const next = { ...prev };
        // Primary
        next[primaryCursorId] = {
          id: primaryCursorId,
          x: Math.max(10, Math.min(window.innerWidth - 30, primaryX)),
          y: Math.max(10, Math.min(window.innerHeight - 30, primaryY)),
          visible: true,
          actionText: currentTarget.action,
          isDrawing: true,
          toolType: currentTarget.toolType
        };

        // Distribute assistants
        const otherIds = (['krishna', 'alex', 'maya', 'nova'] as const).filter((id) => id !== primaryCursorId);
        if (otherIds[0]) {
          next[otherIds[0]] = {
            id: otherIds[0],
            x: Math.max(10, Math.min(window.innerWidth - 30, assist1X)),
            y: Math.max(10, Math.min(window.innerHeight - 30, assist1Y)),
            visible: true,
            actionText: 'Holding Corner Guide',
            isDrawing: false,
            toolType: 'snap'
          };
        }
        if (otherIds[1]) {
          next[otherIds[1]] = {
            id: otherIds[1],
            x: Math.max(10, Math.min(window.innerWidth - 30, assist2X)),
            y: Math.max(10, Math.min(window.innerHeight - 30, assist2Y)),
            visible: true,
            actionText: 'Aligning Baseline',
            isDrawing: false,
            toolType: 'draw'
          };
        }
        if (otherIds[2]) {
          next[otherIds[2]] = {
            id: otherIds[2],
            x: Math.max(10, Math.min(window.innerWidth - 30, assist3X)),
            y: Math.max(10, Math.min(window.innerHeight - 30, assist3Y)),
            visible: true,
            actionText: 'Verifying Geometry',
            isDrawing: false,
            toolType: 'stamp'
          };
        }

        return next;
      });
    }
  }, [progress, isCompleted]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Cursors */}
      {(Object.keys(cursorStates) as Array<keyof typeof cursorStates>).map((cursorKey) => {
        const state = cursorStates[cursorKey];
        const config = CURSOR_CONFIG[state.id];

        return (
          <motion.div
            key={state.id}
            className="absolute top-0 left-0 flex flex-col items-start select-none"
            animate={{
              x: state.x,
              y: state.y,
              opacity: state.visible ? 1 : 0
            }}
            transition={{
              type: 'spring',
              damping: 22,
              stiffness: 160,
              mass: 0.5
            }}
          >
            {/* SVG Cursor Pointer with Tool Indicator */}
            <div className="relative">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-md"
                style={{ transform: 'rotate(-4deg)' }}
              >
                <path
                  d="M4.5 3.5L18.5 12.5L11.5 14L9 20.5L4.5 3.5Z"
                  fill={config.color}
                  stroke="#18181B"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Active drawing pulse ring */}
              {state.isDrawing && (
                <span
                  className="absolute -top-1 -left-1 w-6 h-6 rounded-full border-2 animate-ping"
                  style={{ borderColor: config.color }}
                />
              )}
            </div>

            {/* Tag Badge */}
            <div className="ml-3 -mt-1 flex flex-col items-start">
              <div
                className="px-2 py-0.5 rounded-sm text-[10px] font-mono font-bold tracking-tight border border-zinc-900 shadow-sm flex items-center gap-1.5 whitespace-nowrap"
                style={{
                  backgroundColor: config.color,
                  color: '#FFFFFF'
                }}
              >
                <span>{config.name}</span>
                <span className="opacity-75 text-[9px]">// {config.role}</span>
              </div>

              {!isCompleted && (
                <div className="mt-0.5 px-1.5 py-0.5 bg-white/95 text-[9px] font-mono text-zinc-800 border border-zinc-900/60 rounded-xs shadow-xs flex items-center gap-1 whitespace-nowrap">
                  <span
                    className="w-1.5 h-1.5 rounded-full inline-block"
                    style={{ backgroundColor: config.color }}
                  />
                  <span>{state.actionText}</span>
                </div>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
