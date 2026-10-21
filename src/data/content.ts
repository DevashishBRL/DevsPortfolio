import type { Project, AuthoredArticle, ExternalMention } from '../types/content';

// ─── Engineering & Research Projects ─────────────────────────────────────────

export const engineeringProjects: Project[] = [
  {
    id: 'robotics-research',
    title: 'Robotics Research',
    subtitle: 'Autonomous Systems & Control',
    description:
      'Research into robotic systems design, sensor fusion, and autonomous navigation — spanning simulation environments and physical prototypes.',
    tags: ['Robotics', 'ROS', 'Python', 'Embedded Systems'],
    area: 'engineering',
    status: 'ongoing',
    featured: true,
  },
  {
    id: 'embedded-prototyping',
    title: 'Embedded Prototyping',
    subtitle: 'Hardware & Firmware',
    description:
      'Hardware design and firmware development for embedded systems, from microcontroller programming to PCB-level integration.',
    tags: ['Embedded C', 'ARM', 'FPGA', 'Sensors'],
    area: 'engineering',
    status: 'ongoing',
    featured: true,
  },
  {
    id: 'simulation-environments',
    title: 'Simulation Environments',
    subtitle: 'Digital Twins & Testing',
    description:
      'Building digital simulation environments to model, validate and test robotic systems before physical deployment.',
    tags: ['Gazebo', 'Unity', 'Python', 'Digital Twin'],
    area: 'engineering',
    status: 'ongoing',
    featured: false,
  },
];

// ─── KLA Interactives Products ────────────────────────────────────────────────

export const klaProjects: Project[] = [
  {
    id: 'draftgrid',
    title: 'DraftGrid',
    subtitle: 'Structured writing for thinkers',
    description:
      'A writing tool designed around structured thinking — grids, templates and drafting flows for people who think before they write.',
    tags: ['Product Design', 'Web App', 'Writing Tools'],
    area: 'kla',
    status: 'active',
    featured: true,
  },
  {
    id: 'araloom',
    title: 'AraLoom',
    subtitle: 'Visual knowledge weaving',
    description:
      'A tool for connecting ideas spatially — weaving together notes, concepts and references into a visual tapestry of knowledge.',
    tags: ['Knowledge Management', 'Canvas', 'Visual Tools'],
    area: 'kla',
    status: 'active',
    featured: true,
  },
  {
    id: 'tabzones',
    title: 'TabZones',
    subtitle: 'Purposeful browser workspaces',
    description:
      'Browser workspace organiser that groups tabs into focused zones, helping reduce cognitive load during deep work sessions.',
    tags: ['Browser Extension', 'Productivity', 'UX'],
    area: 'kla',
    status: 'active',
    featured: true,
  },
  {
    id: 'jobpal',
    title: 'JobPal',
    subtitle: 'Job search, made human',
    description:
      'A personal job search companion that brings structure and calm to the application process — tracking, notes and status in one place.',
    tags: ['Web App', 'Productivity', 'Career Tools'],
    area: 'kla',
    status: 'active',
    featured: true,
  },
];

// ─── Authored Articles (AnyBody Can Design) ───────────────────────────────────

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
  },
  {
    id: 'complexity-is-not-depth',
    title: 'Complexity Is Not Depth',
    description:
      'Why adding more features rarely adds more value, and the discipline it takes to simplify without losing meaning.',
    date: '2024-06-15',
    tags: ['Design', 'Product', 'Simplicity'],
    area: 'anybody-can-design',
  },
  {
    id: 'the-interface-is-not-the-product',
    title: 'The Interface Is Not the Product',
    description:
      'Separating the experience from the tool — and why what people feel when they use something matters more than what they see.',
    date: '2024-03-20',
    tags: ['UX', 'Product Design', 'Philosophy'],
    area: 'anybody-can-design',
  },
];

// ─── External Mentions ────────────────────────────────────────────────────────

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
