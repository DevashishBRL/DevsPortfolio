/**
 * Content models for Devashish Tambade's personal website.
 *
 * Adding content:
 *   Projects / engineering → src/data/content.ts → engineeringProjects[]
 *   KLA products           → src/data/content.ts → klaProjects[]
 *   Writing articles       → src/data/content.ts → authoredArticles[]
 *   Experiments            → src/data/content.ts → experiments[]
 *   People / community     → src/data/content.ts → communityActivities[]
 *   External mentions      → src/data/content.ts → externalMentions[]
 *   Work history           → src/data/content.ts → workHistory[]
 *   Research areas         → src/data/content.ts → researchAreas[]
 */

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  area: 'engineering' | 'kla' | 'design';
  status: 'active' | 'completed' | 'ongoing';
  year?: number;
  href?: string;
  externalUrl?: string;
  coverImage?: string;
  featured?: boolean;
  tools?: string[];
  relatedIds?: string[];
}

export interface KlaProduct {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  status: 'concept' | 'active' | 'beta' | 'launched';
  href?: string;
  externalUrl?: string;
  coverImage?: string;
  featured?: boolean;
  note?: string;
}

export interface AuthoredArticle {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  area: 'anybody-can-design' | 'engineering' | 'general';
  href?: string;
  externalUrl?: string;
  draft?: boolean;
  featured?: boolean;
  readingTime?: number;
}

export interface Experiment {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  date?: string;
  tags: string[];
  status: 'active' | 'archived' | 'ongoing' | 'prototype';
  href?: string;
  externalUrl?: string;
  coverImage?: string;
  featured?: boolean;
  tools?: string[];
  honest?: string;
}

export interface CommunityActivity {
  id: string;
  title: string;
  role: string;
  organisation?: string;
  period: string;
  description: string;
  tags: string[];
  href?: string;
  featured?: boolean;
}

export interface ExternalMention {
  id: string;
  title: string;
  publication: string;
  description: string;
  date: string;
  url?: string;
  type: 'article' | 'interview' | 'feature' | 'publication';
  image?: string;
  featured?: boolean;
}

export interface WorkEntry {
  id: string;
  role: string;
  organisation: string;
  period: string;
  location?: string;
  type: 'employment' | 'internship' | 'research' | 'freelance' | 'voluntary';
  description: string;
  highlights?: string[];
  tags?: string[];
  current?: boolean;
  href?: string;
}

export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: 'active' | 'exploring' | 'past';
  relatedProjectIds?: string[];
}

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}
