export interface EducationItem {
  id: string;
  title: string;
  periodOrMetric: string;
  isHighlightBadge?: boolean;
  description: string;
  accentClass: string;
}

export interface SkillSticker {
  id: string;
  label: string;
  hasStar?: boolean;
  starAfter?: string;
  bgClass: string;
  textClass: string;
  fontWeightClass: string;
  rotateClass: string;
  note: string;
}

export interface OrganizationItem {
  id: string;
  role: string;
  period: string;
  organization: string;
  summary: string;
  dotColorClass: string;
}

export interface FeaturedHighlight {
  number: string;
  title: string;
  subtitle: string;
  badgeBgClass: string;
  badgeTextClass: string;
  cardBgClass: string;
  borderClass: string;
  targetProjectId: string;
}

export interface CertificateItem {
  id: string;
  emoji: string;
  event: string;
  rank: string;
  detail: string;
  year: string;
  issuer: string;
  category: string;
  summary: string;
  gradientClass: string;
  borderClass: string;
  barClass: string;
}

export interface ToolTile {
  code: string;
  name: string;
  group: 'Design & IDEs' | 'Analytics & Office';
  usage: string;
}

export interface ProjectDetail {
  id: string;
  roleLabel: string;
  title: string;
  description: string;
  bullets: string[];
  theme: 'pink' | 'cream' | 'espresso';
  ctaLabel: string;
  ctaHref?: string;
  hasCaseStudyModal?: boolean;
  mockupEmoji: string;
  mockupTitle: string;
  mockupSubtitle: string;
  polaroidCaption: string;
  polaroidRotateClass: string;
}

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: 'itpln',
    title: '(1) Information Systems, Institut Teknologi PLN',
    periodOrMetric: '2026 – Present',
    description: 'Ikatan Kerja Track • Focus on Enterprise Architecture & Business Systems',
    accentClass: 'border-pink-blush',
  },
  {
    id: 'unsri',
    title: '(2) Informatics Engineering, Universitas Sriwijaya',
    periodOrMetric: 'GPA: 3.98 / 4.00',
    isHighlightBadge: true,
    description: 'Completed Core Computer Science & Algorithms Curriculum (2025 – 2026)',
    accentClass: 'border-pink-blush',
  },
  {
    id: 'man-ic',
    title: '(3) Natural Sciences (IPA), MAN Insan Cendekia OKI',
    periodOrMetric: 'Avg: 94.78 / 100',
    description: 'Active in Science & Economics Olympiads • High Academic Distinction (2022 – 2025)',
    accentClass: 'border-kraft-dark',
  },
];

export const SKILL_STICKERS: SkillSticker[] = [
  {
    id: 'ui-ux',
    label: 'UI/UX design',
    bgClass: 'bg-[#E8B8C8]',
    textClass: 'text-espresso',
    fontWeightClass: 'font-bold',
    rotateClass: '-rotate-2',
    note: 'Wireframing, high-fidelity Figma prototyping, user journey mapping & usability flows.',
  },
  {
    id: 'system-analysis',
    label: 'system analysis',
    hasStar: true,
    starAfter: 'system',
    bgClass: 'bg-white',
    textClass: 'text-cocoa',
    fontWeightClass: 'font-bold',
    rotateClass: 'rotate-3',
    note: 'Requirements gathering, business process modeling, geofencing & operational logic.',
  },
  {
    id: 'java-cpp',
    label: 'Java & C++',
    bgClass: 'bg-[#FAF3EC]',
    textClass: 'text-espresso',
    fontWeightClass: 'font-semibold',
    rotateClass: '-rotate-3',
    note: 'Object-oriented desktop architecture (Java Swing), data structures & algorithmic problem solving.',
  },
  {
    id: 'data-modeling',
    label: 'data modeling',
    bgClass: 'bg-white',
    textClass: 'text-espresso',
    fontWeightClass: 'font-bold',
    rotateClass: 'rotate-2',
    note: 'Entity-relationship structuring, enterprise schema planning & analytical spreadsheets.',
  },
  {
    id: 'web-design',
    label: 'web ★ design!',
    bgClass: 'bg-[#F5DCE4]',
    textClass: 'text-espresso',
    fontWeightClass: 'font-black',
    rotateClass: '-rotate-1',
    note: 'Responsive storytelling layouts, visual hierarchy & interactive editorial portfolios.',
  },
  {
    id: 'business-analysis',
    label: 'business analysis',
    bgClass: 'bg-white',
    textClass: 'text-cocoa',
    fontWeightClass: 'font-semibold',
    rotateClass: 'rotate-3',
    note: 'Economic evaluation, financial efficiency strategy & competitive business case synthesis.',
  },
];

export const ORGANIZATIONAL_EXPERIENCES: OrganizationItem[] = [
  {
    id: 'dorm-council',
    role: 'Head of Female Dormitory Council',
    period: '2023 – 2024',
    organization: 'MAN Insan Cendekia OKI',
    summary:
      'Led daily dormitory operations, task delegation, discipline oversight, and student-supervisor mediation for 200+ students. Fostered collaborative residential living and conflict resolution.',
    dotColorClass: 'bg-pink-blush',
  },
  {
    id: 'osis-religious',
    role: 'Member of Religious Affairs Division (OSIS)',
    period: '2022 – 2023',
    organization: 'MAN Insan Cendekia OKI',
    summary:
      'Planned and executed major school-wide religious programs, managed logistical schedules, and coordinated cross-division youth development events.',
    dotColorClass: 'bg-kraft-dark',
  },
];

export const FEATURED_HIGHLIGHTS: FeaturedHighlight[] = [
  {
    number: '01',
    title: 'Personal Web & Digital Literacy Showcase',
    subtitle: 'Wix Web Design • Creative Writing & Technology Digest',
    badgeBgClass: 'bg-pink-blush',
    badgeTextClass: 'text-espresso',
    cardBgClass: 'bg-pink-soft/30',
    borderClass: 'border-pink-blush/40',
    targetProjectId: 'project-personal-web',
  },
  {
    number: '02',
    title: 'GoFood Geofencing: Crowd & Estimated-Time',
    subtitle: 'UI/UX Figma Prototype • System Analysis & Wait-Time Transparency',
    badgeBgClass: 'bg-kraft-main',
    badgeTextClass: 'text-espresso',
    cardBgClass: 'bg-cream-note',
    borderClass: 'border-kraft-dark/30',
    targetProjectId: 'project-gofood',
  },
  {
    number: '03',
    title: 'Mystical Pet Game',
    subtitle: 'Java Swing Desktop Application • OOP & Interactive GUI',
    badgeBgClass: 'bg-espresso',
    badgeTextClass: 'text-white',
    cardBgClass: 'bg-stone-100',
    borderClass: 'border-stone-200',
    targetProjectId: 'project-mystical-pet',
  },
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: 'tdc-summitfest',
    emoji: '🏆',
    event: 'TDC Summitfest',
    rank: 'Semifinalist',
    detail: 'Business Case 2026 • ITS',
    year: '2026',
    issuer: 'Institut Teknologi Sepuluh Nopember (ITS)',
    category: 'National Business Case Competition',
    summary:
      'Developed an end-to-end digital transformation and operational efficiency strategy evaluated by industry judges at TDC Summitfest ITS 2026.',
    gradientClass: 'from-amber-50 to-pink-50',
    borderClass: 'border-stone-200',
    barClass: 'bg-amber-400',
  },
  {
    id: 'jisf-2024',
    emoji: '🥇',
    event: 'JISF 2024',
    rank: 'Gold Medalist',
    detail: 'Innovation Science • IYSA',
    year: '2024',
    issuer: 'Indonesian Young Scientist Association (IYSA)',
    category: 'International Science & Innovation Fair',
    summary:
      'Awarded Gold Medal at Jakarta International Science Fair (JISF) 2024 for applied scientific research, prototype design, and structured academic defense.',
    gradientClass: 'from-yellow-50 to-amber-100/60',
    borderClass: 'border-amber-200',
    barClass: 'bg-amber-500',
  },
  {
    id: 'osnp-2024',
    emoji: '🏅',
    event: 'OSN-P Sumsel',
    rank: '4th Place',
    detail: 'Economics Olympiad 2024',
    year: '2024',
    issuer: 'Puspresnas • South Sumatra Province',
    category: 'Provincial National Science Olympiad (Economics)',
    summary:
      'Ranked 4th across South Sumatra Province in the Economics Olympiad (OSN-P), demonstrating mastery in microeconomics, macroeconomics, and fiscal analysis.',
    gradientClass: 'from-stone-50 to-blue-50',
    borderClass: 'border-stone-200',
    barClass: 'bg-blue-400',
  },
  {
    id: 'osnk-2024',
    emoji: '🎖️',
    event: 'OSN-K 2024',
    rank: '1st Place',
    detail: 'Economics Olympiad • Puspresnas',
    year: '2024',
    issuer: 'Pusat Prestasi Nasional (Puspresnas)',
    category: 'Regency National Science Olympiad (Economics)',
    summary:
      'Secured 1st Place at the Regency level (OSN-K) in Economics, advancing to the provincial stage with top analytical problem-solving scores.',
    gradientClass: 'from-pink-50 to-red-50',
    borderClass: 'border-stone-200',
    barClass: 'bg-rose-400',
  },
];

export const TOOLS_ROW_1: ToolTile[] = [
  { code: 'Fg', name: 'Figma', group: 'Design & IDEs', usage: 'UI/UX wireframes, component systems & interactive prototypes' },
  { code: 'Wx', name: 'Wix Studio', group: 'Design & IDEs', usage: 'Responsive portfolio architecture & editorial web storytelling' },
  { code: 'Nb', name: 'NetBeans IDE', group: 'Design & IDEs', usage: 'Java Swing desktop GUI development & OOP applications' },
  { code: 'VS', name: 'VS Code', group: 'Design & IDEs', usage: 'Web development, C++ & algorithmic problem solving' },
];

export const TOOLS_ROW_2: ToolTile[] = [
  { code: 'X', name: 'Microsoft Excel', group: 'Analytics & Office', usage: 'Economic modeling, financial ratios & structured datasets' },
  { code: 'W', name: 'Microsoft Word', group: 'Analytics & Office', usage: 'System specifications, business case papers & documentation' },
  { code: 'P', name: 'Microsoft PowerPoint', group: 'Analytics & Office', usage: 'Executive pitch decks & competition presentations' },
  { code: 'Jv', name: 'Java & C++', group: 'Analytics & Office', usage: 'Object-oriented logic, state engines & core algorithms' },
];

export const SELECTED_PROJECTS: ProjectDetail[] = [
  {
    id: 'project-personal-web',
    roleLabel: 'WEB DESIGNER & CREATOR • ACADEMIC PROJECT',
    title: 'Personal Web & Digital Literacy Showcase (2026)',
    description:
      'An interactive personal web space designed and built using Wix Studio to consolidate academic milestones, creative writing, and digital literacy analyses into a polished modern portfolio.',
    bullets: [
      'Responsive visual layout aligned with contemporary digital storytelling.',
      'Embedded infographics, article summaries, and interactive reader forms.',
      'Optimized navigation architecture for recruiters and peer reviewers.',
    ],
    theme: 'pink',
    ctaLabel: 'View Live Site ↗',
    ctaHref: 'https://adreannaaw19.wixsite.com/wheelsontheb',
    mockupEmoji: '🌐',
    mockupTitle: 'Wheels on the Blog',
    mockupSubtitle: 'adreannaaw19.wixsite.com',
    polaroidCaption: "Wix Digital Showcase '26",
    polaroidRotateClass: 'rotate-2',
  },
  {
    id: 'project-gofood',
    roleLabel: 'UI/UX DESIGNER & SYSTEM ANALYST • TEAM PROJECT',
    title: 'GoFood Geofencing: Crowd & Estimated-Time Tracker (2026)',
    description:
      'Conceptualized and prototyped a feature expansion for GoFood utilizing GPS geofencing radius data to assess merchant queue density and deliver real-time meal preparation transparency.',
    bullets: [
      'Comprehensive user journey mapping for delivery drivers, diners, and merchants.',
      'Figma high-fidelity prototype with dynamic restaurant crowd-level indicators.',
      'Addressed consumer anxiety during peak dining hours with predictive ETA buffers.',
    ],
    theme: 'cream',
    ctaLabel: 'Figma UI/UX Case Study ✦',
    hasCaseStudyModal: true,
    mockupEmoji: '📍',
    mockupTitle: 'Geofencing System Analysis',
    mockupSubtitle: 'Figma Prototype • Mobile App',
    polaroidCaption: "Crowd Radar Feature '26",
    polaroidRotateClass: '-rotate-2',
  },
  {
    id: 'project-mystical-pet',
    roleLabel: 'JAVA DEVELOPER • PROGRAMMING PRACTICUM',
    title: 'Mystical Pet Game (2025)',
    description:
      'A fully functional desktop virtual pet simulator developed in NetBeans using Java Swing. Implemented object-oriented principles, modular event listeners, and animated state management.',
    bullets: [
      'Pet mood, hunger, energy, and level progression state engine.',
      'Multi-frame graphical interface with custom sprite renderings and sound effects.',
      'Object-oriented architecture ensuring clean encapsulation and extensible pet classes.',
    ],
    theme: 'espresso',
    ctaLabel: 'View GitHub Repo ↗',
    ctaHref: 'https://github.com/avrouzaw/java-mystical-pet-app',
    mockupEmoji: '🐾',
    mockupTitle: 'Java Swing GUI App',
    mockupSubtitle: 'avrouzaw / java-mystical-pet-app',
    polaroidCaption: "OOP Practicum '25",
    polaroidRotateClass: 'rotate-1',
  },
];
