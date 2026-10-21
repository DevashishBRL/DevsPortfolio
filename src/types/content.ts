/**
 * Content models for Devashish Tambade's personal website.
 * These types define the shape of all structured content —
 * projects, articles, and external mentions.
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
  href?: string;         // internal project page when available
  externalUrl?: string;  // external link if applicable
  featured?: boolean;
}

export interface AuthoredArticle {
  id: string;
  title: string;
  description: string;
  date: string;          // ISO 8601 date string
  tags: string[];
  area: 'anybody-can-design' | 'engineering';
  href?: string;         // internal article page
  externalUrl?: string;
  draft?: boolean;
  featured?: boolean;
}

export interface ExternalMention {
  id: string;
  title: string;
  publication: string;
  description: string;
  date: string;          // ISO 8601 date string
  url?: string;          // link if available
  type: 'article' | 'interview' | 'feature' | 'publication';
}

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string; // identifier for icon component
}
