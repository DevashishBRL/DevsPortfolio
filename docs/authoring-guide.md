# Authoring Guide

> A practical reference for creating, editing, and removing content on the portfolio
> using Pages CMS — without touching code.

---

## 1. How to access the CMS

1. Open [app.pagescms.org](https://app.pagescms.org) in your browser.
2. Click **Sign in with GitHub** and authenticate as `DevashishBRL`.
3. Select the repository **DevashishBRL / DevsPortfolio**.
4. Pages CMS reads `.pages.yml` from the repo root and presents the editing interface.

> **Who can edit?**
> Only GitHub users who are **collaborators** on the repository with **write access** can log in and make changes. The repository being public does not grant anyone editing rights. Manage collaborators in GitHub → Settings → Collaborators.

---

## 2. Publishing behaviour (read this carefully)

**There is no draft staging or preview environment.**

When you save an entry in Pages CMS, it commits the change directly to the `main` branch. The GitHub Actions deploy workflow triggers immediately and publishes the change to the live site at `https://devashishbrl.github.io/DevsPortfolio/`.

The typical end-to-end time from save → live is 1–3 minutes.

**Consequences:**
- Saving a half-finished article publishes it immediately.
- There is no "save as draft and preview live" option unless you tick the **Draft** field (for writing articles only — this hides the article from the listing page but the URL still resolves if someone knows it).
- To avoid accidental publishing, write content locally in a text editor first, then paste into CMS fields when ready.

**If you want PR-based review before publishing:**
Enable branch protection on `main` in GitHub Settings → Branches → Add rule → require a pull request before merging. Note: Pages CMS would then need to write to a feature branch, which requires configuring the GitHub App integration. This is an advanced setup not covered here.

**Recovering from a mistake:**
Every save is a git commit. To revert:
1. Open the repository on GitHub.
2. Go to **Commits** → find the unwanted commit → click **Revert** (creates a new commit undoing it).
3. The revert commit triggers a new deploy, restoring the previous state.

---

## 3. Content types and their URLs

| CMS Section | Files | Live URL |
|---|---|---|
| Engineering Projects | `src/content/projects/*.md` | `/work/{slug}/` |
| Writing & Articles | `src/content/writing/*.md` | `/writing/{slug}/` |
| KLA Products | `src/content/products/*.md` | `/studio/{slug}/` |
| Experiments | `src/content/experiments/*.md` | No detail page yet (index only) |
| World Destinations | `src/content/destinations/*.json` | (affects 3D world, no own URL) |
| Site Profile | `src/content/site/profile.json` | (used across multiple pages) |

---

## 4. Creating a new project (step-by-step example)

1. In Pages CMS, open **Engineering Projects** → click **New entry**.
2. Fill in the required fields:
   - **Title**: `My New Project`
   - **Subtitle**: `A short tagline`
   - **Description**: One to two sentences for SEO and index cards.
   - **Status**: `completed` / `active` / `ongoing`
3. Fill optional editorial sections:
   - **The Problem**, **My Role**, **Approach**, **Outcome**
4. Add tags, key skills, tools.
5. Write long-form content in the **Content** (rich-text) field — this becomes the body below the structured sections.
6. Click **Save**.

**The slug (URL path) is derived from the filename.** When you create an entry, name the file `my-new-project` — the URL will be `/work/my-new-project/`.

---

## 5. Adding images

1. In any image field, click **Upload** or browse existing images.
2. Images are stored in `public/images/` and served at `/images/filename.ext`.
3. You can also reference images by path in the rich-text body: `![Alt text](/images/filename.png)`

---

## 6. Writing articles

1. Open **Writing & Articles** → **New entry**.
2. Set **Date** (used for sorting — format: `YYYY-MM-DD`).
3. Set **Draft: true** if you want to write without it appearing in the listing. Change to false when ready.
4. Write in the **Content** rich-text field using Markdown syntax.

---

## 7. World Destinations (edit with care)

The six entries in **World Destinations** control the text shown in destination cards and the companion's dialogue in the 3D world:

- `companionGreeting` — what the robot companion says when that destination is selected.
- `description` — text shown in the destination card.
- `actionLabel` / `actionPath` — the button label and path it links to.

**Do not change the `id` field** (e.g. `lab`, `foundry`, `observatory`). The `id` is coupled to camera coordinate data in `src/data/destinations.ts`. Changing an id there without updating the code will break the 3D world navigation.

**Do not add new destinations** through the CMS alone — adding a new destination also requires adding camera coordinates in code.

---

## 8. Site Profile

The **Site Profile** entry (`src/content/site/profile.json`) controls your name, tagline, bio, location, and status notice as used across pages. Edit freely.

---

## 9. Files you must NOT edit through the CMS

The CMS only exposes content files. The following are NOT editable through the CMS and should only be changed through code review:

| File | Why |
|---|---|
| `src/data/destinations.ts` | Contains 3D camera coordinates — code, not content |
| All `*.astro` files | Page components and templates |
| `astro.config.mjs` | Build configuration |
| `.github/workflows/deploy.yml` | CI/CD pipeline |
| `src/content/config.ts` | Collection schema definitions |
| `package.json` | Dependencies |

---

## 10. Build failure diagnosis

If a deploy fails after a CMS save:

1. Open the repository on GitHub → **Actions** tab.
2. Click the failed workflow run.
3. Read the error output — it usually indicates a schema validation failure (a required field was left empty) or a syntax error in a JSON file.
4. Fix the content in the CMS and save again, or use the GitHub **Revert** button on the offending commit.

---

## 11. Complete new project example

Filename: `haptic-feedback-rig`

```yaml
title: "Haptic Feedback Rig"
subtitle: "Low-cost tactile interface for prosthetic testing"
description: "A low-cost haptic feedback rig for evaluating tactile sensation in prosthetic hand prototypes."
discipline: "Mechatronics"
status: "completed"
year: 2025
area: "engineering"
featured: true
tags: ["Haptics", "Embedded Systems", "Prosthetics"]
keySkills: ["Signal Processing", "PCB Design", "C++"]
tools: ["Arduino", "KiCad", "MATLAB"]
problem: "Existing evaluation methods for prosthetic tactile feedback were expensive and inconsistent."
role: "Sole designer and builder of the rig hardware and firmware."
approach: "Designed a vibrotactile array driven by an Arduino Mega with PWM-controlled actuators and serial logging."
outcome: "Reduced evaluation cost by 80% compared to commercial systems. Used in 12 test sessions."
```

Body (Content field):
```markdown
## Technical approach

The rig uses eight eccentric rotating mass motors arranged in a 2×4 grid...
```

Resulting URL: `/work/haptic-feedback-rig/`

