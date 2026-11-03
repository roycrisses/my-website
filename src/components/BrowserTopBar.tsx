import React, { useState } from 'react';
import { Download, FileText, Heart, Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface Props {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  constructionProgress: number;
}

export const BrowserTopBar: React.FC<Props> = ({ activeSection, onNavigate, constructionProgress }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Case Studies' },
    { id: 'skills', label: 'Skills & Certs' },
    { id: 'playground', label: 'Playground' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header id="build-topbar" className="sticky top-0 z-30 w-full px-3 py-2 md:px-6 md:py-3 bg-[#FAF9F5]/90 backdrop-blur-md border-b-2 border-zinc-900">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left Zone: Retro Browser Dots + Wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden sm:flex items-center gap-1.5 px-1">
            <span className="w-3 h-3 rounded-full bg-rose-400 border border-zinc-900 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-400 border border-zinc-900 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-400 border border-zinc-900 inline-block" />
          </div>

          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 group text-left"
          >
            <span className="font-display font-black text-lg md:text-xl tracking-tight text-zinc-900 group-hover:text-blue-600 transition-colors">
              KRISHNA KARKI
            </span>
            <span className="hidden lg:inline-block px-2 py-0.5 text-[11px] font-mono font-medium bg-yellow-200 border border-zinc-900 rounded-sm">
              AI Trainer & Growth
            </span>
          </button>
        </div>

        {/* Center Zone: Retro Tab Links */}
        <nav className="hidden md:flex items-center gap-1.5 p-1 bg-white border border-zinc-900 rounded-lg brutal-shadow-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3 py-1 text-xs font-mono font-semibold rounded-md transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-zinc-900 text-white shadow-xs'
                    : 'text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-yellow-400' : 'bg-zinc-400'}`} />
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Zone: Primary Actions (CV Download & Contact CTA) */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={PERSONAL_INFO.cvPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold bg-white hover:bg-zinc-50 border border-zinc-900 rounded-md brutal-shadow-sm transition-transform active:translate-y-0.5 text-zinc-900"
          >
            <Download className="w-3.5 h-3.5" />
            <span>CV PDF</span>
          </a>

          <button
            onClick={() => handleNavClick('contact')}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide bg-yellow-300 hover:bg-yellow-400 border border-zinc-900 rounded-md brutal-shadow-sm transition-transform active:translate-y-0.5 text-zinc-900"
          >
            <Heart className="w-3.5 h-3.5 fill-current text-rose-500" />
            <span>Contact</span>
          </button>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 border border-zinc-900 rounded-md bg-white text-zinc-900"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-3 bg-white border-2 border-zinc-900 rounded-lg brutal-shadow flex flex-col gap-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-left px-3 py-2 text-sm font-mono font-semibold rounded-md hover:bg-yellow-100 flex items-center justify-between border-b border-zinc-100 last:border-b-0"
            >
              <span>{link.label}</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-400" />
            </button>
          ))}
          <a
            href={PERSONAL_INFO.cvPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 flex items-center justify-center gap-2 py-2 text-xs font-mono font-bold bg-zinc-900 text-white rounded-md"
          >
            <Download className="w-3.5 h-3.5" />
            Download Full CV
          </a>
        </div>
      )}
    </header>
  );
};
