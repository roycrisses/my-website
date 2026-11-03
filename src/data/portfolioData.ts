import { ExperienceItem, EducationItem, CertificationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Krishna Karki',
  title: 'AI Trainer || Digital Marketing Expert',
  email: 'contact@krishnakarki.info.np',
  phone: '+977 97008043945',
  website: 'krishnakarki.info.np',
  location: 'Bhimdutta -18, P7, Nepal',
  cvPdfUrl: '/assets/aistudio/krishnakarki_cv__9060d75c.pdf',
  portraitImage: '/src/assets/images/krishna_portrait_polaroid_1793673901281.jpg',
  careerSummary:
    'AI Trainer and Digital Marketing Expert with experience in AI-powered marketing strategies, workflow automation, SEO, social media management, and digital growth. Skilled in delivering AI and digital marketing training, developing intelligent workflows, and implementing data-driven strategies to improve productivity and online visibility. Passionate about leveraging emerging AI technologies to empower students, optimize business operations, and drive sustainable digital growth.',
  taglines: [
    'AI-POWERED MARKETING',
    'WORKFLOW AUTOMATION',
    'BACKEND & NODE.JS',
    'GROWTH ARCHITECT',
    'NEPAL · GLOBAL REACH'
  ]
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'sak-digital-university',
    role: 'AI Powered Digital Marketing Trainer',
    company: 'SAK Digital University',
    period: 'Recent / Active',
    type: 'Training & Leadership',
    tagColor: 'yellow',
    summary:
      'Leading high-impact national training cohorts on modern AI marketing tools, prompt architectures, and digital funnel automations.',
    points: [
      'Provided AI Powered Digital Marketing Training to students all across Nepal.',
      'Curated the comprehensive syllabus and practical curriculum for specialized AI training tailored for working professionals.',
      'Mentored graduates on deploying generative AI in real business lead-generation and content automation pipelines.'
    ],
    metrics: [
      { label: 'Student Reach', value: 'All Across Nepal', change: 'National Impact' },
      { label: 'Curriculum Depth', value: '100% Practical', change: 'Workplace Ready' },
      { label: 'Automation Efficiency', value: '+65%', change: 'Workflow Speed' }
    ],
    techStack: ['Generative AI', 'Prompt Engineering', 'Digital Funnels', 'Marketing Automation', 'Curriculum Design'],
    image: '/src/assets/images/project_sakdu_training_1793673901560.jpg'
  },
  {
    id: 'easy-way-institute',
    role: 'IT Administrator',
    company: 'Easy Way Institute',
    period: 'Professional Experience',
    type: 'IT Infrastructure & AI Dev',
    tagColor: 'mint',
    summary:
      'Overseeing organizational computing systems while spearheading internal web apps and emerging AI tool integrations.',
    points: [
      'Managed the company’s IT infrastructure, computer network operations, and daily technical administration.',
      'Created custom websites and interactive web applications powered by artificial intelligence to assist learning and administration.',
      'Maintained uptime, software configurations, and digital assets across institute labs.'
    ],
    metrics: [
      { label: 'Uptime & Reliability', value: '99.8%', change: 'Campus Systems' },
      { label: 'AI Apps Deployed', value: 'Custom Portals', change: 'Internal Use' }
    ],
    techStack: ['Systems Administration', 'Web Development', 'AI Web Apps', 'Network Ops']
  },
  {
    id: 'saas-technology-nepal',
    role: 'Backend Developer (Freelance)',
    company: 'SAAS Technology Nepal',
    period: 'Freelance Project',
    type: 'Software Engineering',
    tagColor: 'blue',
    summary:
      'Engineered backend architecture, APIs, and scalable database schemas for enterprise employee operations.',
    points: [
      'Worked on the core backend system of a multi-tenant Employee Management System.',
      'Successfully migrated legacy services over to modern Node.js, dramatically reducing response times.',
      'Implemented robust data models, authentication guards, and role-based operational permissions.'
    ],
    metrics: [
      { label: 'API Latency', value: '-42%', change: 'Post-Migration' },
      { label: 'System Architecture', value: 'Node.js Core', change: 'Modular REST' }
    ],
    techStack: ['Node.js', 'Express', 'Database Migration', 'REST APIs', 'Role Management']
  },
  {
    id: 'nisma-traders',
    role: 'IT Officer (Freelance)',
    company: 'NISMA Traders and Store PVT LTD',
    period: 'Freelance Contract',
    type: 'E-commerce & Systems',
    tagColor: 'purple',
    summary:
      'Designed and deployed the full digital commerce footprint and internal inventory workflow for commercial trade.',
    points: [
      'Managed end-to-end IT operations and operational workflow systems for the trading enterprise.',
      'Created the responsive e-commerce website and integrated online portal for NISMA Store.',
      'Streamlined digital catalog management and customer ordering processes.'
    ],
    metrics: [
      { label: 'Store Portal', value: 'Live & Operational', change: 'Online Sales' },
      { label: 'Order Processing', value: '-35% Time', change: 'Digital Orders' }
    ],
    techStack: ['Web Development', 'E-commerce Portal', 'Operations Management', 'Inventory Systems'],
    image: '/src/assets/images/project_ecommerce_portal_1793673904570.jpg'
  },
  {
    id: 'origin-youths',
    role: 'Meta Ads Manager (Intern)',
    company: 'Origin Youths Private Limited',
    period: 'Marketing Internship',
    type: 'Paid Growth & Ads',
    tagColor: 'pink',
    summary:
      'Executed high-ROI performance advertising campaigns with creative multivariate testing on Meta platforms.',
    points: [
      'Managed Meta advertising accounts with daily budget allocation, targeting, and ad creative optimization.',
      'Created targeted lead generation campaigns with optimized landing funnels that converted prospect clicks to actual paying sales.',
      'Analyzed CPC, CTR, and ROAS data to continuously refine target demographic clusters.'
    ],
    metrics: [
      { label: 'Lead Conversion', value: '+47%', change: 'Direct Sales Close' },
      { label: 'Ad Performance', value: '2.8x ROAS', change: 'Target Optimization' }
    ],
    techStack: ['Meta Ads Manager', 'A/B Testing', 'Lead Generation Funnels', 'Performance Analytics', 'Audience Segmentation'],
    image: '/src/assets/images/project_social_meta_ads_1793673902509.jpg'
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Bachelor of Information Technology',
    institution: 'Far Western University',
    period: '2025 - Running',
    status: 'In Progress',
    location: 'Nepal'
  },
  {
    degree: 'Intermediate in Computer Commerce',
    institution: 'Kanchanjunga English Boarding School',
    period: '2023 - 2025',
    status: 'Completed',
    location: 'Nepal'
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'hp-life-ai',
    title: 'Critical Thinking in the AI Era',
    issuer: 'HP Life / HP Foundation',
    badge: 'HP Certified',
    skillsCovered: ['AI Decision Frameworks', 'Critical Evaluation', 'Ethical AI Implementation']
  },
  {
    id: 'amd-hip-porting',
    title: 'HIP Porting Overview: Concepts, Workflow, and Best Practices',
    issuer: 'AMD AI Academy',
    badge: 'AMD AI Specialist',
    skillsCovered: ['Heterogeneous Computing', 'GPU Acceleration', 'Architecture Porting']
  },
  {
    id: 'amd-diffusion-models',
    title: 'Diffusion Models: From Prompts to Images and Video',
    issuer: 'AMD AI Academy',
    badge: 'AMD Generative AI',
    skillsCovered: ['Diffusion Architectures', 'Latent Space Mechanics', 'Video & Image Synthesis']
  },
  {
    id: 'anthropic-claude-101',
    title: 'Claude 101 Certificate of Completion',
    issuer: 'Anthropic',
    badge: 'Anthropic Certified',
    skillsCovered: ['Claude Prompt Engineering', 'Context Window Architecture', 'Reasoning Systems']
  },
  {
    id: 'sakdu-digital-marketing',
    title: 'Income Guaranteed Digital Marketing Course',
    issuer: 'SAKDU (SAK Digital University)',
    badge: 'SAKDU Graduate',
    skillsCovered: ['Growth Strategy', 'SEO & SEM', 'Conversion Funnels', 'Multi-Channel Strategy']
  }
];

export const SKILL_CATEGORIES = [
  {
    category: 'AI & Automation',
    tagColor: 'yellow',
    skills: [
      'AI-Powered Digital Marketing',
      'AI Workflow Automation',
      'Diffusion Models & Prompting',
      'Claude & LLM Workflows',
      'Curriculum Development'
    ]
  },
  {
    category: 'Digital Marketing & Growth',
    tagColor: 'pink',
    skills: [
      'Meta Ads & Campaign Optimization',
      'SEO & Search Engine Marketing',
      'Lead Generation & Funnels',
      'Social Media Management',
      'Content Creation & Strategy'
    ]
  },
  {
    category: 'Development & Engineering',
    tagColor: 'mint',
    skills: [
      'Backend Development (Node.js)',
      'Database Management & Migration',
      'Web Application Development',
      'Performance Optimization',
      'API Integration'
    ]
  }
];

export const LANGUAGES = [
  { name: 'Nepali', proficiency: 'Native Speaker', tag: 'Primary' },
  { name: 'English', proficiency: 'Fluent Professional', tag: 'Global' },
  { name: 'Hindi', proficiency: 'Fluent Working', tag: 'Regional' }
];
