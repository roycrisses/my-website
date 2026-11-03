import React from 'react';
import { Award, CheckCircle2, ShieldCheck, Cpu, Target, Terminal } from 'lucide-react';
import { SKILL_CATEGORIES, CERTIFICATIONS } from '../data/portfolioData';
import { ConstructableBlock } from './ConstructableBlock';

interface Props {
  progress: number;
  isCompleted: boolean;
}

export const SkillsAndCerts: React.FC<Props> = ({ progress, isCompleted }) => {
  const categoryIcons: Record<string, React.ReactNode> = {
    'AI & Automation': <Cpu className="w-5 h-5 text-amber-600" />,
    'Digital Marketing & Growth': <Target className="w-5 h-5 text-rose-600" />,
    'Development & Engineering': <Terminal className="w-5 h-5 text-blue-600" />
  };

  return (
    <section id="skills" className="relative py-14 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t-2 border-zinc-900/10">
      {/* Section Header */}
      <div className="flex flex-col items-center mb-10 text-center">
        <span className="px-3 py-0.5 bg-emerald-200 border border-zinc-900 font-mono text-xs font-semibold uppercase tracking-wider rounded-xs mb-2">
          Competency & Credentials
        </span>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-zinc-950 uppercase tracking-tight">
          SKILLS & CERTIFICATIONS
        </h2>
      </div>

      {/* Part 1: Skill Domains (Constructable) */}
      <ConstructableBlock
        builderId="build-skills-deck"
        progress={progress}
        isCompleted={isCompleted}
        className="mb-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.category}
              className="bg-white border-2 border-zinc-900 rounded-lg p-6 brutal-shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-zinc-200">
                  {categoryIcons[cat.category]}
                  <h3 className="font-display font-bold text-lg text-zinc-900 leading-tight">
                    {cat.category}
                  </h3>
                </div>

                <ul className="space-y-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-2 text-sm text-zinc-800 font-medium">
                      <span className="w-2 h-2 rounded-full bg-zinc-900 shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Domain Verified</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </div>
            </div>
          ))}
        </div>
      </ConstructableBlock>

      {/* Part 2: Certifications Deck (Constructable) */}
      <ConstructableBlock
        builderId="build-certs-deck"
        progress={progress}
        isCompleted={isCompleted}
      >
        <div className="bg-[#FFFDF5] border-2 border-zinc-900 rounded-lg p-6 sm:p-8 brutal-shadow relative">
          {/* Top washi tape */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-40 h-6 bg-rose-200/90 border-x border-dashed border-rose-600/40 rotate-[-1deg] pointer-events-none" />

          <div className="flex items-center gap-2.5 mb-6">
            <Award className="w-6 h-6 text-amber-500" />
            <div>
              <h3 className="font-display font-extrabold text-2xl text-zinc-900 uppercase">
                Official Certifications
              </h3>
              <p className="font-mono text-xs text-zinc-600">
                Issued by HP Life, AMD AI Academy, Anthropic, and SAKDU
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="p-4 bg-white border border-zinc-900 rounded-md brutal-shadow-sm hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-bold text-sm sm:text-base text-zinc-900 leading-snug">
                      {cert.title}
                    </h4>
                    <span className="px-2 py-0.5 bg-yellow-200 text-zinc-950 border border-zinc-900 font-mono text-[10px] font-bold rounded-xs shrink-0">
                      {cert.badge}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-blue-600 font-semibold mt-1">
                    Issued by {cert.issuer}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1">
                    {cert.skillsCovered.map((sc, scIdx) => (
                      <span
                        key={scIdx}
                        className="px-2 py-0.5 bg-zinc-50 border border-zinc-200 text-[10px] font-mono text-zinc-600 rounded-xs"
                      >
                        {sc}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-zinc-100 flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Credential</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ConstructableBlock>
    </section>
  );
};
