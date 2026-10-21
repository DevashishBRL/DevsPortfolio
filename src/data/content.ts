import type { Project, AuthoredArticle, ExternalMention } from '../types/content';

// ─── Engineering & Research Projects ─────────────────────────────────────────

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
  },
  {
    id: 'draftgrid',
    title: 'DraftGrid',
    subtitle: 'Structured Drafting for Technical Thinkers',
    description:
      'A structured drafting and document architecture system designed to help engineers and thinkers organize complex ideas before writing.',
    tags: ['Product Design', 'Information Architecture', 'Developer Tools'],
    area: 'engineering',
    status: 'active',
    featured: true,
  },
  {
    id: 'easprosthetics',
    title: 'EasyProsthetics',
    subtitle: 'Accessible Prosthetic Mechanism Research',
    description:
      'Exploration and functional prototyping of accessible, low-cost prosthetic solutions focusing on functional mechanics, modular components and ease of assembly.',
    tags: ['Robotics', 'Prosthetics', 'Biomechatronics', 'Human-Centred Design'],
    area: 'engineering',
    status: 'ongoing',
    featured: true,
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
  },
];

// ─── KLA Interactives Products ────────────────────────────────────────────────

export const klaProjects: Project[] = [
  {
    id: 'kla-draftgrid',
    title: 'DraftGrid',
    subtitle: 'Structured writing for thinkers',
    description:
      'A structured writing tool and thought canvas currently in active development under KLA Interactives, built to structure ideas into clear deliverables.',
    tags: ['Product in Development', 'Writing Tools', 'UX'],
    area: 'kla',
    status: 'active',
    featured: true,
  },
  {
    id: 'kla-araloom',
    title: 'AraLoom',
    subtitle: 'Visual knowledge weaving',
    description:
      'A digital product under development connecting conceptual threads into structured spatial webs of ideas and references.',
    tags: ['Product in Development', 'Knowledge Mapping', 'Spatial UI'],
    area: 'kla',
    status: 'active',
    featured: true,
  },
  {
    id: 'kla-tabzones',
    title: 'TabZones',
    subtitle: 'Purposeful browser workspaces',
    description:
      'A focused browser workspace management tool currently in development to isolate tasks and minimize context switching.',
    tags: ['Product in Development', 'Browser Extension', 'Productivity'],
    area: 'kla',
    status: 'active',
    featured: true,
  },
  {
    id: 'kla-jobpal',
    title: 'JobPal',
    subtitle: 'Job search, made human',
    description:
      'A streamlined companion application in development designed to organize, track and de-stress technical application workflows.',
    tags: ['Product in Development', 'Web App', 'Workflow'],
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
