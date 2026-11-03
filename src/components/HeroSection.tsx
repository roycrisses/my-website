import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles, MapPin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ConstructableBlock } from './ConstructableBlock';

interface Props {
  progress: number;
  isCompleted: boolean;
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<Props> = ({ progress, isCompleted, onNavigate }) => {
  return (
    <section id="home" className="relative pt-6 pb-14 md:pt-12 md:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 1. Top Paper Stickers / Tape Row (Constructable) */}
      <ConstructableBlock
        builderId="build-hero-stickers"
        progress={progress}
        isCompleted={isCompleted}
        className="mb-6"
      >
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          <div className="px-3.5 py-1 bg-yellow-200 border-2 border-zinc-900 rounded-sm brutal-shadow-sm text-xs md:text-sm font-hand font-bold tracking-wide text-zinc-900 uppercase rotate-[-2deg]">
            AI-POWERED WORKFLOWS
          </div>

          <div className="px-3 py-1 bg-white border border-zinc-900 rounded-sm text-xs font-mono font-semibold tracking-wider text-zinc-700 shadow-xs rotate-[1deg]">
            SWEAT THE DETAILS
          </div>

          <div className="px-3.5 py-1 bg-emerald-200 border-2 border-zinc-900 rounded-sm brutal-shadow-sm text-xs md:text-sm font-hand font-bold text-zinc-900 uppercase rotate-[3deg]">
            DATA-DRIVEN GROWTH
          </div>
        </div>
      </ConstructableBlock>

      {/* Main Hero Grid: Left Content + Right Polaroid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
        {/* Left Column (7 cols): Hero Title, Badges, Tagline */}
        <div className="lg:col-span-7">
          <ConstructableBlock
            builderId="build-hero-title"
            progress={progress}
            isCompleted={isCompleted}
          >
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* "My Name is" sticky tag */}
              <div className="mb-2 inline-flex items-center gap-2 px-3 py-0.5 bg-rose-100 border border-zinc-900 rounded-sm text-xs font-mono font-medium text-rose-900">
                <span>Hi there! My name is</span>
                <span className="font-bold">↓</span>
              </div>

              {/* Big Name */}
              <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter text-zinc-950 uppercase leading-none drop-shadow-xs">
                {PERSONAL_INFO.name}
              </h1>

              {/* Role Badges Strip */}
              <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span className="px-3 py-1 bg-yellow-300 border-2 border-zinc-900 font-mono font-bold text-xs rounded-sm brutal-shadow-sm text-zinc-950">
                  AI Trainer
                </span>
                <span className="px-3 py-1 bg-sky-200 border-2 border-zinc-900 font-mono font-bold text-xs rounded-sm brutal-shadow-sm text-zinc-950">
                  Digital Marketing Expert
                </span>
                <span className="px-2.5 py-1 bg-white border border-zinc-900 font-mono text-xs rounded-sm text-zinc-700 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-rose-500" />
                  Nepal
                </span>
              </div>

              {/* Tagline Statement */}
              <p className="mt-6 text-lg sm:text-xl md:text-2xl font-display font-medium text-zinc-800 max-w-2xl leading-snug">
                Bridging <span className="underline decoration-yellow-400 decoration-4 underline-offset-4 font-bold">intelligent workflow automation</span> and <span className="underline decoration-emerald-400 decoration-4 underline-offset-4 font-bold">data-driven marketing</span> that drives sustainable digital growth.
              </p>

              <p className="mt-4 text-sm sm:text-base text-zinc-600 max-w-xl font-normal leading-relaxed">
                From training working professionals at SAK Digital University to engineering backend systems in Node.js and scaling high-ROI Meta ad funnels—I build systems that work.
              </p>

              {/* Action CTAs */}
              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3 bg-zinc-950 hover:bg-zinc-800 text-white font-mono font-bold text-sm tracking-wide uppercase rounded-lg brutal-shadow brutal-shadow-hover transition-all flex items-center gap-2 border-2 border-zinc-900"
                >
                  <span>Let's Build Together</span>
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                </button>

                <button
                  onClick={() => onNavigate('experience')}
                  className="px-5 py-3 bg-white hover:bg-zinc-50 text-zinc-900 font-mono font-bold text-sm rounded-lg border-2 border-zinc-900 brutal-shadow-sm transition-all flex items-center gap-2"
                >
                  <span>Explore Projects</span>
                  <ArrowDown className="w-4 h-4 text-zinc-600" />
                </button>
              </div>
            </div>
          </ConstructableBlock>
        </div>

        {/* Right Column (5 cols): Vintage Polaroid Photo with Washi Tape */}
        <div className="lg:col-span-5 flex justify-center">
          <ConstructableBlock
            builderId="build-hero-polaroid"
            progress={progress}
            isCompleted={isCompleted}
            className="w-full flex justify-center"
          >
            <div className="relative bg-white p-3 pb-6 border-2 border-zinc-900 rounded-sm brutal-shadow-lg max-w-xs sm:max-w-sm w-full group rotate-[2deg] hover:rotate-0 transition-transform">
              {/* Washi Tape Strip on Top Left Corner */}
              <div className="absolute -top-3.5 -left-3.5 w-24 h-7 bg-yellow-200/90 border-x border-dashed border-amber-600/40 rotate-[-25deg] shadow-xs pointer-events-none z-10" />

              {/* Washi Tape Strip on Top Right Corner */}
              <div className="absolute -top-3 -right-3.5 w-20 h-7 bg-rose-200/90 border-x border-dashed border-rose-600/40 rotate-[28deg] shadow-xs pointer-events-none z-10" />

              {/* Photo Container */}
              <div className="relative aspect-square overflow-hidden rounded-xs border border-zinc-900/40 bg-zinc-100">
                <img
                  src={PERSONAL_INFO.portraitImage}
                  alt="Krishna Karki — AI Trainer & Digital Marketing Expert"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-0 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 pointer-events-none" />
              </div>

              {/* Polaroid caption */}
              <div className="mt-4 px-2 flex items-center justify-between">
                <div>
                  <p className="font-hand font-bold text-xl text-zinc-900 leading-tight">
                    Krishna Karki
                  </p>
                  <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                    Nepal · Est. 2024
                  </p>
                </div>
                <span className="px-2 py-0.5 bg-emerald-100 border border-emerald-600 text-[10px] font-mono text-emerald-800 rounded-xs">
                  ● Available
                </span>
              </div>
            </div>
          </ConstructableBlock>
        </div>
      </div>
    </section>
  );
};
