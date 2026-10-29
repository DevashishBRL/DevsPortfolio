import { defineCollection, z } from 'astro:content';

/**
 * Astro 4.x Content Collections Schema Definitions
 * Provides type-safety, frontmatter validation, and headless CMS readiness.
 */

// 1. Projects and Case Studies (Engineering & Research)
const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    discipline: z.string().optional(),
    status: z.enum(['active', 'completed', 'ongoing']).default('completed'),
    year: z.number().optional(),
    area: z.enum(['engineering', 'kla', 'design']).default('engineering'),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    keySkills: z.array(z.string()).default([]),
    tools: z.array(z.string()).default([]),
    externalUrl: z.string().url().optional(),
    coverImage: z.string().optional(),
    relatedIds: z.array(z.string()).default([]),
    // Optional editorial sections if authored in frontmatter or full markdown body
    problem: z.string().optional(),
    role: z.string().optional(),
    approach: z.string().optional(),
    outcome: z.string().optional(),
    note: z.string().optional(),
  }),
});

// 2. Authored Writing & Articles (AnyBody Can Design & Engineering)
const writingCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    series: z.string().default('AnyBody Can Design'),
    date: z.string(), // ISO date e.g. 2024-09-01
    area: z.enum(['anybody-can-design', 'engineering', 'general']).default('anybody-can-design'),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    readingTime: z.number().optional(),
    externalUrl: z.string().url().optional(),
  }),
});

// 3. Products & Software Tools (KLA Interactives)
const productsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    studio: z.string().default('KLA Interactives'),
    status: z.enum(['concept', 'active', 'beta', 'launched']).default('active'),
    platform: z.string().default('Web (planned)'),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    note: z.string().optional(),
    externalUrl: z.string().url().optional(),
  }),
});

// 4. Experiments (Rapid Prototypes & Rigs)
const experimentsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    date: z.string().optional(),
    status: z.enum(['active', 'archived', 'ongoing', 'prototype']).default('ongoing'),
    tags: z.array(z.string()).default([]),
    tools: z.array(z.string()).default([]),
    honest: z.string().optional(),
    featured: z.boolean().default(false),
    externalUrl: z.string().url().optional(),
  }),
});

// 5. World Destinations (Single validated content source of truth)
const destinationsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    num: z.string(), // e.g. "01 / LAB"
    title: z.string(), // e.g. "The Lab"
    category: z.string(), // e.g. "Engineering & Robotics"
    locationLabel: z.string(), // Geographic locator
    specialty: z.string(), // Tagline specialty
    description: z.string(), // Editorial description
    companionGreeting: z.string(), // Character voice intro
    companionMood: z.enum(['happy', 'observing', 'neutral']).default('neutral'),
    actionLabel: z.string(),
    actionPath: z.string(), // relative to base e.g. "work/"
    themeColor: z.string(),
    order: z.number(),
  }),
});

// 6. Site Settings & Profile
const siteCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    bio: z.string(),
    location: z.string(),
    coordinates: z.string(),
    statusNotice: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
  writing: writingCollection,
  products: productsCollection,
  experiments: experimentsCollection,
  destinations: destinationsCollection,
  site: siteCollection,
};

