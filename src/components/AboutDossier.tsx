import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Languages, CheckCheck } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION, LANGUAGES as LANG_DATA } from '../data/portfolioData';
import { ConstructableBlock } from './ConstructableBlock';

interface Props {
  progress: number;
  isCompleted: boolean;
}

export const AboutDossier: React.FC<Props> = ({ progress, isCompleted }) => {
  return (
    <section id="about" className="relative py-14 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t-2 border-zinc-900/10">
      {/* Section Header */}
      <div className="flex flex-col items-center mb-10 text-center">
        <span className="px-3 py-0.5 bg-yellow-200 border border-zinc-900 font-mono text-xs font-semibold uppercase tracking-wider rounded-xs mb-2">
          Dossier & Background
        </span>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-zinc-950 uppercase tracking-tight">
          ABOUT ME
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (7 cols): Main Bio Paper Note (Constructable) */}
        <div className="lg:col-span-7">
          <ConstructableBlock
            builderId="build-about-bio"
            progress={progress}
            isCompleted={isCompleted}
          >
            <div className="bg-[#FFFDF5] border-2 border-zinc-900 rounded-lg p-6 sm:p-8 brutal-shadow relative">
              {/* Top Tape Strip */}
              <div className="absolute -top-3.5 left-10 w-28 h-6 bg-yellow-300/80 border-x border-dashed border-amber-600/40 rotate-[-2deg] pointer-events-none" />

              {/* Sticky badge "what's up" */}
              <div className="inline-block px-3 py-1 bg-rose-200 border border-zinc-900 rounded-sm font-hand font-bold text-base text-zinc-900 rotate-[-2deg] mb-4">
                what's up! 👋
              </div>

              <p className="font-body text-base sm:text-lg text-zinc-800 leading-relaxed font-normal">
                {PERSONAL_INFO.careerSummary}
              </p>

              <div className="mt-6 pt-6 border-t border-zinc-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3 bg-white border border-zinc-900/30 rounded-md">
                  <span className="text-xs font-mono text-zinc-500 uppercase block">Core Focus</span>
                  <p className="text-sm font-bold text-zinc-900 mt-0.5">
                    AI Prompting & Growth Architecture
                  </p>
                </div>
                <div className="p-3 bg-white border border-zinc-900/30 rounded-md">
                  <span className="text-xs font-mono text-zinc-500 uppercase block">Origin & Hub</span>
                  <p className="text-sm font-bold text-zinc-900 mt-0.5">
                    Bhimdutta -18, P7, Nepal
                  </p>
                </div>
              </div>

              {/* Formal CV Declaration Card */}
              <div className="mt-6 p-3 bg-zinc-50 border border-zinc-300 rounded-md flex items-start gap-2.5">
                <CheckCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs font-mono text-zinc-600 italic leading-normal">
                  "I hereby declare that the information provided is accurate to the best of my knowledge. I take full responsibility for its authenticity." — Krishna Karki
                </p>
              </div>
            </div>
          </ConstructableBlock>
        </div>

        {/* Right Column (5 cols): Education & Languages (Constructable) */}
        <div className="lg:col-span-5">
          <ConstructableBlock
            builderId="build-about-edu"
            progress={progress}
            isCompleted={isCompleted}
            className="flex flex-col gap-6"
          >
            {/* Education Card */}
            <div className="bg-white border-2 border-zinc-900 rounded-lg p-5 brutal-shadow-sm relative">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-zinc-100">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                <h3 className="font-display font-bold text-lg text-zinc-900 uppercase">
                  Education
                </h3>
              </div>

              <div className="space-y-4">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="border-l-2 border-zinc-900 pl-3 py-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-bold text-sm text-zinc-900 leading-snug">
                        {edu.degree}
                      </h4>
                      <span className="text-[11px] font-mono px-2 py-0.5 bg-zinc-100 border border-zinc-300 rounded-xs text-zinc-700 whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-600 mt-0.5 font-medium">
                      {edu.institution}
                    </p>
                    <span className="inline-block mt-1 text-[10px] font-mono font-semibold text-emerald-700">
                      Status: {edu.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Spoken Card */}
            <div className="bg-white border-2 border-zinc-900 rounded-lg p-5 brutal-shadow-sm">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-zinc-100">
                <Languages className="w-5 h-5 text-emerald-600" />
                <h3 className="font-display font-bold text-lg text-zinc-900 uppercase">
                  Languages
                </h3>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {LANG_DATA.map((lang, idx) => (
                  <div key={idx} className="p-2.5 bg-zinc-50 border border-zinc-900/30 rounded-md text-center">
                    <p className="font-bold text-xs text-zinc-900">{lang.name}</p>
                    <p className="text-[10px] font-mono text-zinc-500 mt-0.5">{lang.proficiency.split(' ')[0]}</p>
                    <span className="inline-block mt-1 text-[9px] px-1.5 py-0.2 bg-yellow-100 text-yellow-800 rounded-xs font-mono font-medium">
                      {lang.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ConstructableBlock>
        </div>
      </div>
    </section>
  );
};
