import React from 'react';
import { Play, Pause, RotateCcw, CheckCircle2, Sparkles, Sliders } from 'lucide-react';

interface Props {
  progress: number;
  isPlaying: boolean;
  isCompleted: boolean;
  onTogglePlay: () => void;
  onReplay: () => void;
  onToggleComplete: () => void;
  onSeek: (value: number) => void;
}

export const ConstructionControllerHUD: React.FC<Props> = ({
  progress,
  isPlaying,
  isCompleted,
  onTogglePlay,
  onReplay,
  onToggleComplete,
  onSeek
}) => {
  const percentage = Math.round(progress * 100);

  return (
    <aside
      aria-label="Construction HUD"
      className="fixed bottom-5 right-5 md:bottom-6 md:right-8 z-40 select-none"
    >
      <div className="bg-[#FAF9F5] border-2 border-zinc-900 brutal-shadow rounded-lg p-2.5 md:p-3 flex items-center gap-3 backdrop-blur-md">
        {/* Play / Pause Toggle */}
        <button
          type="button"
          onClick={onTogglePlay}
          className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 bg-yellow-300 hover:bg-yellow-400 border border-zinc-900 rounded-md transition-all active:translate-y-0.5 text-zinc-900"
          title={isPlaying ? 'Pause Auto-Construction' : 'Play Auto-Construction'}
        >
          {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
        </button>

        {/* Replay Button */}
        <button
          type="button"
          onClick={onReplay}
          className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 bg-white hover:bg-zinc-100 border border-zinc-900 rounded-md transition-all active:translate-y-0.5 text-zinc-800"
          title="Replay Construction Animation"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        {/* Construction Scrubber */}
        <div className="hidden sm:flex flex-col gap-1 w-36 md:w-44 px-1">
          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-700">
            <span className="flex items-center gap-1 font-semibold">
              <Sparkles className="w-3 h-3 text-amber-500" />
              Build Stage
            </span>
            <span className="tabular-nums font-bold">{percentage}%</span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={percentage}
            onChange={(e) => onSeek(Number(e.target.value) / 100)}
            className="w-full h-2 bg-zinc-200 accent-zinc-900 rounded-lg cursor-pointer border border-zinc-400"
          />
        </div>

        {/* Fast Finish / Reset View Toggle */}
        <button
          type="button"
          onClick={onToggleComplete}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold border border-zinc-900 rounded-md transition-all ${
            isCompleted
              ? 'bg-emerald-300 text-emerald-950 hover:bg-emerald-400'
              : 'bg-white hover:bg-zinc-100 text-zinc-900'
          }`}
          title="Instant Complete / Re-enable Live Build Mode"
        >
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span className="hidden md:inline">{isCompleted ? 'Built 100%' : 'Finish Site'}</span>
        </button>
      </div>
    </aside>
  );
};
