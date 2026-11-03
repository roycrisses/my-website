import React, { useState, useEffect, useRef, useCallback } from 'react';
import { BrowserTopBar } from './components/BrowserTopBar';
import { HeroSection } from './components/HeroSection';
import { AboutDossier } from './components/AboutDossier';
import { ExperienceWorks } from './components/ExperienceWorks';
import { SkillsAndCerts } from './components/SkillsAndCerts';
import { InteractivePlayground } from './components/InteractivePlayground';
import { ContactSection } from './components/ContactSection';
import { CollaborativeCursorOverlay } from './components/CollaborativeCursorOverlay';
import { ConstructionControllerHUD } from './components/ConstructionControllerHUD';
import { ProjectModal } from './components/ProjectModal';
import { ExperienceItem } from './types';

export default function App() {
  const [progress, setProgress] = useState(0.02);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<ExperienceItem | null>(null);

  const autoPlayTimerRef = useRef<number | null>(null);
  const isAutoScrollingRef = useRef(false);
  const initialConstructedRef = useRef(false);

  // Initial onboarding construction sequence: build Hero on arrival
  useEffect(() => {
    if (initialConstructedRef.current) return;
    initialConstructedRef.current = true;

    // Smooth intro sequence: cursors spawn and construct hero up to 0.30
    const startTimeout = setTimeout(() => {
      let currentP = 0.02;
      const introInterval = setInterval(() => {
        currentP += 0.015;
        if (currentP >= 0.32) {
          clearInterval(introInterval);
          setProgress(0.32);
        } else {
          setProgress(currentP);
        }
      }, 70);
    }, 300);

    return () => clearTimeout(startTimeout);
  }, []);

  // Sync scroll progress with user scroll (bi-directional)
  const handleScroll = useCallback(() => {
    if (isAutoScrollingRef.current) return;
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (maxScroll <= 0) return;

    // Map scroll position to full 0.0 to 1.0 progress range
    const currentProgress = Math.min(1, Math.max(0, scrollY / maxScroll));

    // Update progress dynamically unless user locked to 100% completed view
    if (!isCompleted) {
      // Ensure hero stays constructed once passed
      setProgress((prev) => Math.max(currentProgress, scrollY < 50 ? prev : currentProgress));
    }

    // Determine active section based on scroll position
    const sections = ['home', 'about', 'experience', 'skills', 'playground', 'contact'];
    for (const sectionId of sections) {
      const el = document.getElementById(sectionId);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 250 && rect.bottom >= 250) {
          setActiveSection(sectionId);
          break;
        }
      }
    }
  }, [isCompleted]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Auto-play construction loop
  useEffect(() => {
    if (isPlaying) {
      setIsCompleted(false);
      autoPlayTimerRef.current = window.setInterval(() => {
        setProgress((prev) => {
          if (prev >= 0.99) {
            setIsPlaying(false);
            setIsCompleted(true);
            return 1;
          }
          const next = Math.min(1, prev + 0.007);
          // Auto-scroll the page to match construction
          isAutoScrollingRef.current = true;
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          window.scrollTo({
            top: next * maxScroll,
            behavior: 'smooth'
          });
          setTimeout(() => {
            isAutoScrollingRef.current = false;
          }, 60);
          return next;
        });
      }, 80);
    } else {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
        autoPlayTimerRef.current = null;
      }
    }
    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [isPlaying]);

  // User interactions with HUD
  const handleTogglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleReplay = () => {
    setIsCompleted(false);
    setProgress(0.02);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsPlaying(true);
  };

  const handleToggleComplete = () => {
    if (isCompleted) {
      setIsCompleted(false);
      setProgress(0.35);
    } else {
      setIsCompleted(true);
      setIsPlaying(false);
      setProgress(1);
    }
  };

  const handleSeek = (newProgress: number) => {
    setIsPlaying(false);
    setProgress(newProgress);
    if (newProgress >= 0.98) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: newProgress * maxScroll,
      behavior: 'smooth'
    });
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] bg-grid-paper text-zinc-900 relative selection:bg-yellow-300 selection:text-zinc-900">
      {/* Collaborative Cursors Overlay */}
      <CollaborativeCursorOverlay
        progress={progress}
        isPlaying={isPlaying}
        isCompleted={isCompleted}
      />

      {/* Floating Construction HUD Controller */}
      <ConstructionControllerHUD
        progress={progress}
        isPlaying={isPlaying}
        isCompleted={isCompleted}
        onTogglePlay={handleTogglePlay}
        onReplay={handleReplay}
        onToggleComplete={handleToggleComplete}
        onSeek={handleSeek}
      />

      {/* Retro Browser Window Top Bar */}
      <BrowserTopBar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        constructionProgress={progress}
      />

      {/* Main Content Sections with Bi-directional Construction States */}
      <main className="relative">
        <HeroSection
          progress={progress}
          isCompleted={isCompleted}
          onNavigate={handleNavigate}
        />

        <AboutDossier
          progress={progress}
          isCompleted={isCompleted}
        />

        <ExperienceWorks
          progress={progress}
          isCompleted={isCompleted}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        <SkillsAndCerts
          progress={progress}
          isCompleted={isCompleted}
        />

        <InteractivePlayground
          progress={progress}
          isCompleted={isCompleted}
        />

        <ContactSection
          progress={progress}
          isCompleted={isCompleted}
        />
      </main>

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
