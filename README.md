# Devashish Tambade — Personal Website

Personal website built with [Astro](https://astro.build), TypeScript and modern CSS.  
Static output compatible with GitHub Pages.

---

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (included with Node.js)

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build for production

```bash
npm run build
```

The static output is written to `dist/`.

### Preview the production build

```bash
npm run preview
```

---

## Project structure

```
src/
├── components/        # Reusable Astro components
│   ├── Header.astro
│   ├── Footer.astro
│   ├── SectionHeader.astro
│   ├── ProjectCard.astro
│   └── ArticleCard.astro
├── data/
│   └── content.ts     # All site content (projects, articles, mentions)
├── layouts/
│   └── BaseLayout.astro   # Root HTML shell with meta, fonts, global CSS
├── pages/
│   ├── index.astro    # Homepage
│   ├── about.astro
│   ├── work.astro
│   ├── products.astro
│   ├── writing.astro
│   └── mentions.astro
├── styles/
│   └── global.css     # Design system — tokens, components, responsive
└── types/
    └── content.ts     # TypeScript interfaces for all content models
public/
└── favicon.svg
```

---

## Adding content

### Add a new project

Open [`src/data/content.ts`](src/data/content.ts) and add an entry to `engineeringProjects` or `klaProjects`:

```ts
{
  id: 'my-project',
  title: 'My Project',
  subtitle: 'What it is in one line',
  description: 'A longer description of what this project does.',
  tags: ['Tag1', 'Tag2'],
  area: 'engineering',   // or 'kla'
  status: 'active',      // 'active' | 'ongoing' | 'completed'
  year: 2025,
  featured: true,        // show on homepage
}
```

### Add an article

Add an entry to `authoredArticles` in the same file:

```ts
{
  id: 'my-article',
  title: 'My Article Title',
  description: 'A short description of the article.',
  date: '2025-01-15',
  tags: ['Design', 'UX'],
  area: 'anybody-can-design',
}
```

### Add an external mention

Add an entry to `externalMentions`:

```ts
{
  id: 'mention-2025',
  title: 'Article title as published',
  publication: 'Publication Name',
  description: 'What the piece covers.',
  date: '2025-03-01',
  url: 'https://example.com/article',
  type: 'article',   // 'article' | 'interview' | 'feature' | 'publication'
}
```

---

## Deploying to GitHub Pages

### Option 1 — GitHub Actions (recommended)

Create `.github/workflows/deploy.yml` (already included if you use this repo) and push to `main`. The workflow will build and deploy automatically.

### Option 2 — Manual deploy

```bash
npm run build
# Push the `dist/` folder to the `gh-pages` branch
```

Or use the `gh-pages` npm package:

```bash
npm install -D gh-pages
npx gh-pages -d dist
```

---

## Design notes

- **Palette**: Deep slate background (`hsl(220,16%,7%)`), warm white foreground, amber accent (`hsl(38,92%,58%)`)
- **Type**: Inter (UI), Instrument Serif (display italics), JetBrains Mono (labels/code)
- **Scale**: Fluid type and spacing using `clamp()` — no media queries needed for scaling
- **Reduced motion**: All transitions are disabled for users who prefer reduced motion
- **Accessibility**: Keyboard navigation, focus rings, ARIA labels, skip-to-content link, semantic HTML throughout

---

## Limitations (first iteration)

- No individual project detail pages yet — cards link to `#` until pages are built
- No individual article pages — planned for iteration 2
- No CMS integration — content is managed in `src/data/content.ts`
- No search or filtering
- No 3D / WebGL miniature world — planned for a future iteration
- Social links in footer are placeholder hashes until real URLs are provided
