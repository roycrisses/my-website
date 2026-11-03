export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  tagColor: 'yellow' | 'mint' | 'pink' | 'blue' | 'purple';
  summary: string;
  points: string[];
  metrics?: {
    label: string;
    value: string;
    change?: string;
  }[];
  techStack: string[];
  image?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  status: string;
  location?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  badge: string;
  skillsCovered: string[];
}

export interface CollaborativeCursor {
  id: string;
  name: string;
  roleTag: string;
  color: string;
  bgColor: string;
  borderColor: string;
  currentAction: string;
  targetId: string;
}

export interface PlaygroundStamp {
  id: string;
  x: number;
  y: number;
  rotation: number;
  type: 'sticker' | 'sticky' | 'badge' | 'pin';
  text: string;
  color: string;
  author: string;
}
