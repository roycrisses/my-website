import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';
import { ExperienceItem } from '../types';
import { ConstructableBlock } from './ConstructableBlock';

interface Props {
  progress: number;
  isCompleted: boolean;
  onSelectProject: (project: ExperienceItem) => void;
}

export const ExperienceWorks: React.FC<Props> = ({ progress, isCompleted, onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai' | 'marketing' | 'backend'>('all');

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'ai') return exp.techStack.some((t) => t.toLowerCase().includes('ai') || t.toLowerCase().includes('prompt'));
    if (activeFilter === 'marketing') return exp.techStack.some((t) => t.toLowerCase().includes('marketing') || t.toLowerCase().includes('ads'));
    if (activeFilter === 'backend') return exp.techStack.some((t) => t.toLowerCase().includes('node') || t.toLowerCase().includes('web') || t.toLowerCase().includes('system'));
    return true;
  });

  return (
    <section id="experience" className="relative py-14 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t-2 border-zinc-900/10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
        <div>
          <span className="px-3 py-0.5 bg-sky-200 border border-zinc-900 font-mono text-xs font-semibold uppercase tracking-wider rounded-xs mb-2 inline-block">
            Proven Track Record
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-zinc-950 uppercase tracking-tight">
            FEATURED WORKS
          </h2>
          <p className="text-sm font-mono text-zinc-600 mt-1">
            Real case studies across AI education, backend engineering & paid growth.
          </p>
        </div>

        {/* Filter Control */}
        <div className="flex items-center gap-1 p-1 bg-white border-2 border-zinc-900 rounded-lg brutal-shadow-sm">
          {(['all', 'ai', 'marketing', 'backend'] as const).map((filterKey) => (
            <button
              key={filterKey}
              onClick={() => setActiveFilter(filterKey)}
              className={`px-3 py-1.5 text-xs font-mono font-semibold rounded-md transition-all whitespace-nowrap capitalize ${
                activeFilter === filterKey
                  ? 'bg-zinc-900 text-white shadow-xs'
                  : 'text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100'
              }`}
            >
              {filterKey === 'all' ? 'All Roles' : filterKey}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Works Grid (Constructable) */}
      <ConstructableBlock
        builderId="build-projects-grid"
        progress={progress}
        isCompleted={isCompleted}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredExperiences.map((exp) => {
            return (
              <div
                key={exp.id}
                className="group bg-white border-2 border-zinc-900 rounded-lg brutal-shadow brutal-shadow-hover flex flex-col justify-between overflow-hidden cursor-pointer"
                onClick={() => onSelectProject(exp)}
              >
                {/* Card Visual / Thumbnail */}
                {exp.image ? (
                  <div className="relative h-48 overflow-hidden border-b-2 border-zinc-900 bg-zinc-100">
                    <img
                      src={exp.image}
                      alt={exp.role}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2 py-0.5 bg-yellow-300 text-zinc-950 border border-zinc-900 font-mono text-[11px] font-bold rounded-xs shadow-xs">
                      {exp.type}
                    </div>
                  </div>
                ) : (
                  <div className="p-4 bg-[#FAF9F5] border-b-2 border-zinc-900 flex items-center justify-between">
                    <span className="px-2.5 py-0.5 bg-white border border-zinc-900 font-mono text-[11px] font-bold text-zinc-900 rounded-xs">
                      {exp.type}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500">{exp.period}</span>
                  </div>
                )}

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <p className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
                        {exp.company}
                      </p>
                      <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>

                    <h3 className="font-display font-bold text-lg md:text-xl text-zinc-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {exp.role}
                    </h3>

                    <p className="mt-2 text-xs md:text-sm text-zinc-600 font-normal leading-relaxed line-clamp-2">
                      {exp.summary}
                    </p>
                  </div>

                  {/* Metrics Callout Strip */}
                  {exp.metrics && exp.metrics.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-zinc-100 grid grid-cols-2 gap-2">
                      {exp.metrics.slice(0, 2).map((m, mIdx) => (
                        <div key={mIdx} className="bg-zinc-50 p-2 rounded border border-zinc-200">
                          <span className="text-[10px] font-mono text-zinc-500 block truncate">{m.label}</span>
                          <span className="font-bold font-mono text-xs text-zinc-900 block truncate">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5 pt-2">
                    {exp.techStack.slice(0, 3).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 bg-zinc-100 text-zinc-700 text-[10px] font-mono rounded-xs border border-zinc-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {exp.techStack.length > 3 && (
                      <span className="px-1.5 py-0.5 text-zinc-400 text-[10px] font-mono">
                        +{exp.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-5 py-2.5 bg-zinc-50 border-t border-zinc-200 flex items-center justify-between text-xs font-mono font-semibold text-zinc-700 group-hover:bg-yellow-100 transition-colors">
                  <span>View Case Study Details</span>
                  <span className="text-zinc-400 group-hover:text-zinc-900">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </ConstructableBlock>
    </section>
  );
};
