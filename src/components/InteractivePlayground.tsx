import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Stamp, Pin, RefreshCw, Check } from 'lucide-react';
import { PlaygroundStamp } from '../types';
import { ConstructableBlock } from './ConstructableBlock';

interface Props {
  progress: number;
  isCompleted: boolean;
}

const PRESET_WORKFLOWS = [
  {
    id: 'meta-growth',
    title: 'Meta Ads Conversion Engine',
    category: 'Digital Marketing',
    description: 'Targeted lead generation funnel converting prospect clicks into high-margin sales.',
    tags: ['Meta Ads', 'Lead Gen', 'ROAS +47%']
  },
  {
    id: 'ai-training',
    title: 'Executive AI Workflow Cohort',
    category: 'AI Training',
    description: 'Tailored curriculum for corporate teams to automate daily marketing operations.',
    tags: ['Claude 101', 'Prompting', 'Productivity']
  },
  {
    id: 'backend-opt',
    title: 'Node.js Backend Migration',
    category: 'Backend Dev',
    description: 'Refactoring legacy employee backend into modular REST APIs with -42% latency.',
    tags: ['Node.js', 'Express', 'Scalability']
  }
];

export const InteractivePlayground: React.FC<Props> = ({ progress, isCompleted }) => {
  const [selectedWorkflow, setSelectedWorkflow] = useState(PRESET_WORKFLOWS[0]);
  const [customNote, setCustomNote] = useState('');
  const [customAuthor, setCustomAuthor] = useState('');
  const [stamps, setStamps] = useState<PlaygroundStamp[]>([
    {
      id: 'stamp-1',
      x: 10,
      y: 15,
      rotation: -3,
      type: 'sticky',
      text: 'hello world! 👋',
      color: '#FEF08A',
      author: 'Alex // Frontend'
    },
    {
      id: 'stamp-2',
      x: 48,
      y: 25,
      rotation: 4,
      type: 'badge',
      text: 'AI Workflow Verified ✓',
      color: '#BBF7D0',
      author: 'Nova // AI'
    },
    {
      id: 'stamp-3',
      x: 25,
      y: 60,
      rotation: -5,
      type: 'sticky',
      text: 'Practice makes permanent ⚡',
      color: '#FBCFE8',
      author: 'Maya // Motion'
    }
  ]);
  const [stampSuccess, setStampSuccess] = useState(false);

  const handleAddStamp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customNote.trim()) return;

    const colors = ['#FEF08A', '#BBF7D0', '#FBCFE8', '#BAE6FD', '#DDD6FE'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomRotation = (Math.random() - 0.5) * 12;

    const newStamp: PlaygroundStamp = {
      id: `stamp-${Date.now()}`,
      x: Math.floor(Math.random() * 50) + 15,
      y: Math.floor(Math.random() * 50) + 20,
      rotation: Math.round(randomRotation),
      type: 'sticky',
      text: customNote.trim(),
      color: randomColor,
      author: customAuthor.trim() || 'Visitor'
    };

    setStamps((prev) => [...prev, newStamp]);
    setCustomNote('');
    setStampSuccess(true);
    setTimeout(() => setStampSuccess(false), 2000);
  };

  const handleResetBoard = () => {
    setStamps([
      {
        id: 'stamp-1',
        x: 15,
        y: 20,
        rotation: -3,
        type: 'sticky',
        text: 'hello world! 👋',
        color: '#FEF08A',
        author: 'Alex // Frontend'
      },
      {
        id: 'stamp-2',
        x: 55,
        y: 35,
        rotation: 4,
        type: 'badge',
        text: 'AI Workflow Verified ✓',
        color: '#BBF7D0',
        author: 'Nova // AI'
      }
    ]);
  };

  return (
    <section id="playground" className="relative py-14 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t-2 border-zinc-900/10">
      {/* Header */}
      <div className="flex flex-col items-center mb-10 text-center">
        <span className="px-3 py-0.5 bg-yellow-300 border border-zinc-900 font-mono text-xs font-semibold uppercase tracking-wider rounded-xs mb-2">
          Interactive Canvas
        </span>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-zinc-950 uppercase tracking-tight">
          JUST FOR FUN
        </h2>
        <p className="text-sm font-mono text-zinc-600 mt-1">
          Test interactive AI workflow templates or pin a sticky note to the collaboration board.
        </p>
      </div>

      <ConstructableBlock
        builderId="build-playground"
        progress={progress}
        isCompleted={isCompleted}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Workflow Inspector (5 cols) */}
          <div className="lg:col-span-5 bg-white border-2 border-zinc-900 rounded-lg p-5 sm:p-6 brutal-shadow flex flex-col gap-6">
            <div>
              <h3 className="font-display font-bold text-base text-zinc-900 mb-3 flex items-center gap-1.5 uppercase">
                <Sparkles className="w-4 h-4 text-amber-500" />
                1. Select Workflow Architecture
              </h3>
              <div className="space-y-2">
                {PRESET_WORKFLOWS.map((wf) => (
                  <button
                    key={wf.id}
                    onClick={() => setSelectedWorkflow(wf)}
                    className={`w-full text-left p-3 rounded-md border text-xs transition-all ${
                      selectedWorkflow.id === wf.id
                        ? 'border-zinc-900 bg-yellow-50 brutal-shadow-sm font-medium'
                        : 'border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700'
                    }`}
                  >
                    <div className="flex items-center justify-between font-bold text-zinc-900 mb-0.5">
                      <span>{wf.title}</span>
                      <span className="font-mono text-[10px] text-zinc-500">{wf.category}</span>
                    </div>
                    <p className="text-zinc-600 line-clamp-1">{wf.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Workflow Blueprint Card */}
            <div className="p-4 bg-zinc-50 border border-zinc-300 rounded-md">
              <div className="flex items-center justify-between text-xs font-mono font-semibold text-zinc-700 mb-2">
                <span>ACTIVE BLUEPRINT</span>
                <span className="text-emerald-700">Ready to Deploy</span>
              </div>
              <p className="text-xs font-medium text-zinc-900">
                {selectedWorkflow.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {selectedWorkflow.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 bg-white border border-zinc-900/40 text-[10px] font-mono text-zinc-800 rounded-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Custom Sticky Note Stamp Creator */}
            <form onSubmit={handleAddStamp} className="pt-2 border-t border-zinc-200">
              <h3 className="font-display font-bold text-base text-zinc-900 mb-2 flex items-center gap-1.5 uppercase">
                <Stamp className="w-4 h-4 text-blue-600" />
                2. Stamp Canvas with a Note
              </h3>

              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Write a message (e.g. 'Loved the AI curriculum!')"
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  maxLength={60}
                  className="w-full px-3 py-2 text-xs font-mono border border-zinc-900 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-zinc-900"
                />
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Your Name / Handle"
                    value={customAuthor}
                    onChange={(e) => setCustomAuthor(e.target.value)}
                    maxLength={25}
                    className="w-1/2 px-3 py-1.5 text-xs font-mono border border-zinc-900 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-zinc-900"
                  />
                  <button
                    type="submit"
                    disabled={!customNote.trim()}
                    className="w-1/2 px-3 py-1.5 text-xs font-mono font-bold uppercase bg-yellow-300 hover:bg-yellow-400 disabled:opacity-40 border border-zinc-900 rounded-md brutal-shadow-sm flex items-center justify-center gap-1.5 transition-all text-zinc-950"
                  >
                    {stampSuccess ? <Check className="w-3.5 h-3.5 text-emerald-800" /> : <Pin className="w-3.5 h-3.5" />}
                    <span>{stampSuccess ? 'Pinned!' : 'Pin Sticky'}</span>
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Right: Collaborative Pinboard (7 cols) */}
          <div className="lg:col-span-7 bg-[#FFFDF5] border-2 border-zinc-900 rounded-lg p-6 brutal-shadow relative min-h-[460px] overflow-hidden bg-grid-paper">
            <div className="absolute -top-3 left-1/3 w-32 h-6 bg-yellow-200/90 border-x border-dashed border-amber-600/40 rotate-[-1deg] pointer-events-none z-10" />

            <div className="flex items-center justify-between pb-3 border-b border-zinc-200/60 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                <span className="text-xs font-mono font-bold text-zinc-800">
                  Live Collaboration Pinboard
                </span>
              </div>
              <button
                onClick={handleResetBoard}
                className="text-[11px] font-mono text-zinc-500 hover:text-zinc-900 flex items-center gap-1 underline underline-offset-2"
              >
                <RefreshCw className="w-3 h-3" />
                Reset Board
              </button>
            </div>

            <div className="relative w-full h-[370px]">
              {stamps.map((stamp) => (
                <motion.div
                  key={stamp.id}
                  drag
                  dragConstraints={{ left: 0, right: 380, top: 0, bottom: 250 }}
                  whileHover={{ scale: 1.05, cursor: 'grab' }}
                  whileDrag={{ scale: 1.12, cursor: 'grabbing', zIndex: 30 }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1, rotate: stamp.rotation }}
                  className="absolute p-3.5 rounded-sm border-2 border-zinc-900 brutal-shadow-sm max-w-[200px] select-none"
                  style={{
                    left: `${stamp.x}%`,
                    top: `${stamp.y}%`,
                    backgroundColor: stamp.color
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-rose-500 border border-zinc-900 shadow-xs" />

                  <p className="font-hand font-bold text-sm text-zinc-900 leading-snug break-words">
                    {stamp.text}
                  </p>

                  <div className="mt-2 pt-1 border-t border-zinc-900/20 flex items-center justify-between text-[9px] font-mono text-zinc-700">
                    <span>~ {stamp.author}</span>
                    <span className="opacity-60">drag me</span>
                  </div>
                </motion.div>
              ))}

              <div className="absolute bottom-3 right-3 p-3 bg-white border border-zinc-900 rounded-md shadow-xs pointer-events-none hidden sm:block">
                <p className="font-mono text-[10px] text-zinc-500 uppercase">Interactive Lab</p>
                <p className="font-display font-bold text-xs text-zinc-900">SAKDU &middot; Nepal</p>
              </div>
            </div>
          </div>
        </div>
      </ConstructableBlock>
    </section>
  );
};
