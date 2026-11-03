import React, { useEffect } from 'react';
import { X, CheckCircle, ExternalLink, Calendar, Building, Sparkles } from 'lucide-react';
import { ExperienceItem } from '../types';

interface Props {
  project: ExperienceItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<Props> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#FFFDF5] border-3 border-zinc-900 rounded-lg brutal-shadow-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Decorative Tape */}
        <div className="absolute -top-3 left-10 w-28 h-6 bg-yellow-300/80 border-x border-dashed border-amber-600/40 rotate-[-1deg] pointer-events-none" />

        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b-2 border-zinc-900 flex items-start justify-between gap-4 bg-white">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 bg-yellow-200 text-zinc-900 font-mono text-[10px] font-bold border border-zinc-900 rounded-xs">
                {project.type}
              </span>
              <span className="text-xs font-mono text-zinc-500">{project.period}</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-zinc-900 leading-tight">
              {project.role}
            </h2>
            <p className="text-sm font-bold font-mono text-blue-600 mt-0.5">
              {project.company}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 bg-white hover:bg-zinc-100 border border-zinc-900 rounded-md brutal-shadow-sm transition-all active:translate-y-0.5 text-zinc-900"
            aria-label="Close Case Study Details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Preview (if image exists) */}
        {project.image && (
          <div className="h-60 sm:h-72 overflow-hidden border-b-2 border-zinc-900 bg-zinc-100 relative">
            <img
              src={project.image}
              alt={project.role}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6">
          {/* Summary */}
          <div>
            <h3 className="font-mono text-xs font-bold text-zinc-500 uppercase mb-1">
              Project Context & Scope
            </h3>
            <p className="text-base text-zinc-800 leading-relaxed font-normal">
              {project.summary}
            </p>
          </div>

          {/* Key Deliverables & Responsibilities from CV */}
          <div>
            <h3 className="font-mono text-xs font-bold text-zinc-500 uppercase mb-2">
              Key Contributions (CV Verbatim)
            </h3>
            <ul className="space-y-2">
              {project.points.map((pt, pIdx) => (
                <li key={pIdx} className="flex items-start gap-2.5 text-sm text-zinc-800">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Metrics Spotlight */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="p-4 bg-yellow-50/80 border border-zinc-900 rounded-md">
              <h3 className="font-mono text-xs font-bold text-zinc-900 uppercase mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Impact & Quantitative Results
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="p-2.5 bg-white border border-zinc-200 rounded">
                    <span className="text-[10px] font-mono text-zinc-500 block truncate">{metric.label}</span>
                    <span className="font-display font-bold text-base text-zinc-950 block">{metric.value}</span>
                    {metric.change && (
                      <span className="text-[10px] font-mono text-emerald-700 font-semibold block">{metric.change}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h3 className="font-mono text-xs font-bold text-zinc-500 uppercase mb-2">
              Applied Technologies & Tooling
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 bg-white border border-zinc-900 font-mono text-xs text-zinc-800 rounded-xs brutal-shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-zinc-50 border-t-2 border-zinc-900 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-zinc-950 hover:bg-zinc-800 text-white font-mono font-bold text-xs uppercase rounded-md border border-zinc-900"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
