export interface BuilderTarget {
  id: string;
  name: string;
  minProgress: number;
  completeProgress: number;
  cursorId: 'krishna' | 'alex' | 'maya' | 'nova';
  action: string;
  toolType: 'draw' | 'type' | 'tape' | 'stamp' | 'snap';
}

export const BUILDER_TARGETS: BuilderTarget[] = [
  {
    id: 'build-topbar',
    name: '<BrowserTopBar />',
    minProgress: 0.0,
    completeProgress: 0.08,
    cursorId: 'alex',
    action: 'Assembling Browser Chrome & Tabs',
    toolType: 'draw'
  },
  {
    id: 'build-hero-stickers',
    name: '<WashiTapeStickers />',
    minProgress: 0.08,
    completeProgress: 0.15,
    cursorId: 'maya',
    action: 'Affixing Paper Tape & Header Badges',
    toolType: 'tape'
  },
  {
    id: 'build-hero-title',
    name: '<HeroTitle />',
    minProgress: 0.15,
    completeProgress: 0.24,
    cursorId: 'alex',
    action: 'Typesetting "KRISHNA KARKI"',
    toolType: 'type'
  },
  {
    id: 'build-hero-polaroid',
    name: '<PolaroidPortrait />',
    minProgress: 0.22,
    completeProgress: 0.32,
    cursorId: 'krishna',
    action: 'Framing Polaroid & Corner Tape',
    toolType: 'tape'
  },
  {
    id: 'build-about-bio',
    name: '<CareerSummaryDossier />',
    minProgress: 0.32,
    completeProgress: 0.42,
    cursorId: 'nova',
    action: 'Writing CV Summary & Sticky Note',
    toolType: 'draw'
  },
  {
    id: 'build-about-edu',
    name: '<EducationAndLanguages />',
    minProgress: 0.40,
    completeProgress: 0.50,
    cursorId: 'alex',
    action: 'Building University & School Cards',
    toolType: 'snap'
  },
  {
    id: 'build-projects-grid',
    name: '<FeaturedCaseStudies />',
    minProgress: 0.50,
    completeProgress: 0.68,
    cursorId: 'krishna',
    action: 'Drafting Project Cards & Metrics',
    toolType: 'draw'
  },
  {
    id: 'build-skills-deck',
    name: '<SkillsMatrix />',
    minProgress: 0.68,
    completeProgress: 0.78,
    cursorId: 'maya',
    action: 'Organizing AI & Marketing Skills',
    toolType: 'snap'
  },
  {
    id: 'build-certs-deck',
    name: '<CertificationsDeck />',
    minProgress: 0.76,
    completeProgress: 0.85,
    cursorId: 'nova',
    action: 'Stamping Verified HP & AMD Seals',
    toolType: 'stamp'
  },
  {
    id: 'build-playground',
    name: '<InteractiveCanvas />',
    minProgress: 0.84,
    completeProgress: 0.92,
    cursorId: 'maya',
    action: 'Mounting Interactive Pinboard',
    toolType: 'draw'
  },
  {
    id: 'build-contact-card',
    name: '<ContactAndSmiley />',
    minProgress: 0.90,
    completeProgress: 1.0,
    cursorId: 'krishna',
    action: 'Stamping Smiley & Connecting Form',
    toolType: 'stamp'
  }
];

export const CURSOR_CONFIG = {
  krishna: {
    name: 'Krishna',
    role: 'Lead Architect',
    color: '#2563EB',
    bgColor: '#EFF6FF',
    borderColor: '#1D4ED8'
  },
  alex: {
    name: 'Alex',
    role: 'Frontend Dev',
    color: '#D97706',
    bgColor: '#FEF3C7',
    borderColor: '#B45309'
  },
  maya: {
    name: 'Maya',
    role: 'Motion & UX',
    color: '#E11D48',
    bgColor: '#FFE4E6',
    borderColor: '#BE123C'
  },
  nova: {
    name: 'Nova',
    role: 'AI Bot',
    color: '#059669',
    bgColor: '#D1FAE5',
    borderColor: '#047857'
  }
};
