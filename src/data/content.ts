import type { Project, KlaProduct, AuthoredArticle, Experiment, CommunityActivity, ExternalMention, WorkEntry, ResearchArea } from '../types/content';

// ─── Engineering & Research Projects ────────────────────────────────────────

export const engineeringProjects: Project[] = [
  {
    id: 'torus-enclosure',
    title: 'TORUS Wearable Medical Device Enclosure',
    subtitle: 'Medical Device Hardware & Ergonomics',
    description:
      'Wearable enclosure engineering for a medical monitoring device, addressing patient ergonomics, environmental sealing, durability and biocompatible material constraints.',
    tags: ['Hardware Design', 'Ergonomics', 'Medical Devices', 'Rapid Prototyping'],
    area: 'engineering',
    status: 'completed',
    featured: true,
    href: '/DevsPortfolio/work/torus-enclosure/',
  },
  {
    id: 'easyprosthetics',
    title: 'EasyProsthetics',
    subtitle: 'Accessible Prosthetic Mechanism Research',
    description:
      'Exploration and functional prototyping of accessible, low-cost prosthetic solutions focusing on functional mechanics, modular components and ease of assembly.',
    tags: ['Robotics', 'Prosthetics', 'Biomechatronics', 'Human-Centred Design'],
    area: 'engineering',
    status: 'ongoing',
    featured: true,
    href: '/DevsPortfolio/work/easyprosthetics/',
  },
  {
    id: 'digital-agri-board',
    title: 'Digital Agriculture Information Board',
    subtitle: 'IoT Telemetry & Embedded Display System',
    description:
      'An embedded agricultural information and telemetry interface delivering field sensor insights and environmental data to agricultural operators.',
    tags: ['Embedded Systems', 'IoT', 'Telemetry', 'Hardware'],
    area: 'engineering',
    status: 'completed',
    featured: true,
    href: '/DevsPortfolio/work/digital-agri-board/',
  },
  {
    id: 'draftgrid-engineering',
    title: 'DraftGrid',
    subtitle: 'Structured Drafting for Technical Thinkers',
    description:
      'A structured drafting and document architecture system designed to help engineers and thinkers organise complex ideas before writing.',
    tags: ['Product Design', 'Information Architecture', 'Developer Tools'],
    area: 'engineering',
    status: 'active',
    featured: true,
    href: '/DevsPortfolio/studio/draftgrid/',
  },
];

// ─── KLA Interactives Products ───────────────────────────────────────────────

export const klaProducts: KlaProduct[] = [
  {
    id: 'kla-draftgrid',
    title: 'DraftGrid',
    subtitle: 'Structured writing for thinkers',
    description:
      'A structured writing tool and thought canvas currently in active development under KLA Interactives, built to structure ideas into clear deliverables.',
    tags: ['Writing Tools', 'Information Architecture', 'UX'],
    status: 'active',
    featured: true,
    note: 'In active development — not yet publicly available.',
    href: '/DevsPortfolio/studio/draftgrid/',
  },
  {
    id: 'kla-araloom',
    title: 'AraLoom',
    subtitle: 'Visual knowledge weaving',
    description:
      'A digital product under development connecting conceptual threads into structured spatial webs of ideas and references.',
    tags: ['Knowledge Mapping', 'Spatial UI', 'Concept Tool'],
    status: 'active',
    featured: true,
    note: 'In active development — not yet publicly available.',
    href: '/DevsPortfolio/studio/araloom/',
  },
  {
    id: 'kla-tabzones',
    title: 'TabZones',
    subtitle: 'Purposeful browser workspaces',
    description:
      'A focused browser workspace management tool currently in development to isolate tasks and minimise context switching.',
    tags: ['Browser Extension', 'Productivity', 'Focus'],
    status: 'active',
    featured: true,
    note: 'In active development — not yet publicly available.',
    href: '/DevsPortfolio/studio/tabzones/',
  },
  {
    id: 'kla-jobpal',
    title: 'JobPal',
    subtitle: 'Job search, made human',
    description:
      'A streamlined companion application in development designed to organise, track and de-stress technical application workflows.',
    tags: ['Web App', 'Workflow', 'Productivity'],
    status: 'active',
    featured: true,
    note: 'In active development — not yet publicly available.',
    href: '/DevsPortfolio/studio/jobpal/',
  },
];

// ─── Legacy klaProjects export for homepage backward compatibility ────────────

export const klaProjects: Project[] = klaProducts.map((p) => ({
  id: p.id,
  title: p.title,
  subtitle: p.subtitle,
  description: p.description,
  tags: p.tags,
  area: 'kla' as const,
  status: 'active' as const,
  featured: p.featured,
  href: p.href,
}));

// ─── Authored Articles (AnyBody Can Design) ──────────────────────────────────

export const authoredArticles: AuthoredArticle[] = [
  {
    id: 'design-is-listening',
    title: 'Design is Listening',
    description:
      'On the overlooked skill of observation — how watching people use things teaches you more than any brief ever could.',
    date: '2024-09-01',
    tags: ['Design', 'Observation', 'Human Behaviour'],
    area: 'anybody-can-design',
    featured: true,
    href: '/DevsPortfolio/writing/design-is-listening/',
  },
  {
    id: 'complexity-is-not-depth',
    title: 'Complexity Is Not Depth',
    description:
      'Why adding more features rarely adds more value, and the discipline it takes to simplify without losing meaning.',
    date: '2024-06-15',
    tags: ['Design', 'Product', 'Simplicity'],
    area: 'anybody-can-design',
    href: '/DevsPortfolio/writing/complexity-is-not-depth/',
  },
  {
    id: 'the-interface-is-not-the-product',
    title: 'The Interface Is Not the Product',
    description:
      'Separating the experience from the tool — and why what people feel when they use something matters more than what they see.',
    date: '2024-03-20',
    tags: ['UX', 'Product Design', 'Philosophy'],
    area: 'anybody-can-design',
    href: '/DevsPortfolio/writing/the-interface-is-not-the-product/',
  },
];

// ─── Experiments ─────────────────────────────────────────────────────────────

export const experiments: Experiment[] = [
  {
    id: 'iso-world-renderer',
    title: 'Isometric World Renderer',
    subtitle: '3D WebGL experiment',
    description:
      'Building the interactive isometric miniature world you see on this site — an experiment in Three.js orthographic cameras, scene composition and real-time raycasting.',
    date: '2024',
    tags: ['Three.js', 'WebGL', 'Isometric', 'TypeScript'],
    status: 'ongoing',
    tools: ['Three.js', 'TypeScript', 'Astro'],
    honest: 'The buildings are still geometric primitives. Realistic isometric art takes far longer than expected.',
    featured: true,
  },
  {
    id: '3d-prosthetic-simulation',
    title: 'Prosthetic Grip Simulation',
    subtitle: 'Conceptual mechanism study',
    description:
      'A 3D simulation exploring grip mechanism kinematics for modular prosthetic fingers — a research aid rather than a finished prototype.',
    date: '2023',
    tags: ['Simulation', '3D Modelling', 'Biomechanics', 'Robotics'],
    status: 'archived',
    tools: ['Fusion 360', 'Python'],
    honest: 'This was a study, not a working prototype. Valuable for understanding joint limits.',
    featured: true,
  },
  {
    id: 'sensor-dashboard-prototype',
    title: 'Agricultural Sensor Dashboard',
    subtitle: 'Data visualisation prototype',
    description:
      'An early prototype dashboard for the DAIB project — testing how to present multiple sensor streams to non-technical users in a field environment.',
    date: '2023',
    tags: ['Data Viz', 'Embedded UI', 'IoT', 'Prototyping'],
    status: 'archived',
    tools: ['Python', 'Raspberry Pi', 'Tkinter'],
    honest: 'The UI was crude. The value was in understanding what farmers actually needed to see.',
  },
];

// ─── Community / People ──────────────────────────────────────────────────────

export const communityActivities: CommunityActivity[] = [
  {
    id: 'engsoc-mentor',
    title: 'Engineering Mentoring',
    role: 'Peer Mentor',
    organisation: 'University of Bristol — Engineering',
    period: '2023–ongoing',
    description:
      'Supporting fellow engineering students through academic challenges, project scoping and career navigation within the faculty.',
    tags: ['Mentoring', 'Engineering Education', 'Peer Support'],
    featured: true,
  },
  {
    id: 'design-thinking-workshop',
    title: 'Design Thinking Workshops',
    role: 'Facilitator',
    organisation: 'University of Bristol',
    period: '2024',
    description:
      'Facilitated practical design thinking sessions introducing problem-framing, rapid prototyping and user observation techniques to multidisciplinary student groups.',
    tags: ['Design Thinking', 'Facilitation', 'Teaching', 'Workshop'],
    featured: true,
  },
  {
    id: 'kla-community',
    title: 'KLA Interactives Community',
    role: 'Founder',
    organisation: 'KLA Interactives',
    period: '2023–ongoing',
    description:
      'Building a small community of practitioners interested in how people think and work with digital tools — focused on honest product design rather than growth hacking.',
    tags: ['Community Building', 'Product Design', 'Leadership'],
    featured: true,
  },
];

// ─── External Mentions ───────────────────────────────────────────────────────

export const externalMentions: ExternalMention[] = [
  {
    id: 'placeholder-mention-1',
    title: 'Publication or mention title will appear here',
    publication: 'Publication Name',
    description:
      'A brief description of the external article, interview or feature once it is added.',
    date: '2024-01-01',
    type: 'article',
  },
];

// ─── Work History ─────────────────────────────────────────────────────────────

export const workHistory: WorkEntry[] = [
  {
    id: 'bristol-meng',
    role: 'MEng Robotics Engineering',
    organisation: 'University of Bristol',
    period: '2022–present',
    location: 'Bristol, UK',
    type: 'research',
    description:
      'Studying robotics engineering with a focus on mechatronics, embedded systems, human-robot interaction and engineering design. Projects span wearable medical hardware, prosthetic mechanisms and agricultural IoT systems.',
    tags: ['Robotics', 'Mechatronics', 'Embedded Systems', 'Research'],
    current: true,
  },
  {
    id: 'kla-founder',
    role: 'Founder & Product Designer',
    organisation: 'KLA Interactives',
    period: '2023–present',
    type: 'freelance',
    description:
      'Founded KLA Interactives to build digital products focused on how people think and work. Currently developing DraftGrid, AraLoom, TabZones and JobPal.',
    highlights: [
      'DraftGrid: structured writing tool for technical thinkers',
      'AraLoom: visual knowledge mapping tool',
      'TabZones: focused browser workspace management',
      'JobPal: de-stressed job application tracker',
    ],
    tags: ['Product Design', 'Startup', 'UX'],
    current: true,
  },
];

// ─── Research Areas ───────────────────────────────────────────────────────────

export const researchAreas: ResearchArea[] = [
  {
    id: 'human-robot-interaction',
    title: 'Human–Robot Interaction',
    description:
      'How robots communicate intent, respond to human behaviour and can be made more accessible for non-specialist users. Particular interest in prosthetics and rehabilitation robotics.',
    tags: ['HRI', 'Prosthetics', 'Accessibility', 'Robotics'],
    status: 'active',
    relatedProjectIds: ['easyprosthetics'],
  },
  {
    id: 'wearable-hardware',
    title: 'Wearable Medical Hardware',
    description:
      'Engineering enclosures and mechatronic systems that must meet ergonomic, durability and biocompatibility constraints — work informed by the TORUS project.',
    tags: ['Medical Devices', 'Hardware Design', 'Ergonomics'],
    status: 'active',
    relatedProjectIds: ['torus-enclosure'],
  },
  {
    id: 'embedded-iot',
    title: 'Embedded & IoT Systems',
    description:
      'Designing hardware and firmware for resource-constrained environments — sensor integration, telemetry and practical field deployment.',
    tags: ['Embedded Systems', 'IoT', 'Firmware', 'Sensors'],
    status: 'active',
    relatedProjectIds: ['digital-agri-board'],
  },
  {
    id: 'hcd-engineering',
    title: 'Human-Centred Engineering',
    description:
      'Applying design thinking, observation and iteration to engineering problems — ensuring solutions work for the people who will actually use them.',
    tags: ['HCD', 'Design Thinking', 'User Research'],
    status: 'exploring',
  },
];
