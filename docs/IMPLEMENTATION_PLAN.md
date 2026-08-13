# Project Lantern V1: Foundation Scaffold

**Codename:** Project Lantern (working name, not final)  
**Scope:** V1 Foundation — credible, fast, mobile-first educational website  
**Reference:** [Planning Document](file:///Users/desktop/.gemini/antigravity/brain/d4e54b8e-f026-472d-b7b3-65b87af4bfac/alzheimers_india_planning_document.md), Sections 5, 6, 8 (V1), 10

---

## What We're Building

A standalone Next.js educational site for Alzheimer's/dementia in India. No backend database. No AI. No user accounts. Pure static content site with structured data for resources, a glossary, and full-text search. Every page carries a medical disclaimer. Content uses MDX with frontmatter tracking review status.

This is a **separate project** from Piedmont, living at `/Users/desktop/project-lantern`.

> [!IMPORTANT]
> This project doubles as a college application portfolio piece. Everything is public, documented, and tells a story of genuine research, ethical reasoning, and technical execution.

---

## Technology Stack (Research-Updated)

The planning document recommended Next.js 14+ and Contentlayer. Based on current research (July 2026):

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 16.2.10** (latest stable) | App Router, static generation, server components |
| Content layer | **Velite** (0.4.0) | Typed MDX with Zod schemas. Contentlayer is dead (last published June 2023). Velite is the direct replacement — zero runtime, framework-agnostic, type-safe. |
| MDX rendering | **@next/mdx** | Official, recommended for repo-local content. `next-mdx-remote` is only needed for CMS/remote content. |
| Styling | **Tailwind CSS v4** | CSS-native theme tokens |
| Components | **shadcn/ui** (Radix primitives) | Accessible by default, you own the code, Tailwind v4 support |
| Search | **Pagefind 1.5.2** | Post-build static index, zero cost |
| Fonts | **Nunito** (body) + **Inter** (UI) | Humanist warmth + clean UI — via Google Fonts |
| i18n (future) | **next-intl 4.13.2** | Not installed in V1, but confirmed compatible for V3 |

---

## Proposed Changes

### Project Initialization & Documentation

#### [NEW] `/Users/desktop/project-lantern/`
- `npx create-next-app@latest ./` with App Router, TypeScript, Tailwind v4, ESLint
- Install Velite, Pagefind, shadcn/ui
- Public GitHub repo from day one

#### [NEW] `README.md`
Not a boilerplate README. A narrative:
- What this project is and why it exists (the India information gap)
- Personal motivation
- What stage it's at (V1 of a 5-phase roadmap)
- How to run locally
- How data is sourced and licensed
- Link to the full planning document

#### [NEW] `docs/PLANNING.md`
The full planning document (all 11 sections + appendices), committed to the repo. This is a portfolio showpiece — it demonstrates research depth, ethical reasoning, and systems thinking.

#### [NEW] `docs/DECISIONS.md`
Running decision log capturing *why* behind every choice:
- Why Next.js over WordPress
- Why Velite over Contentlayer
- Why no symptom checker
- Why this color palette
- Why specific data sources were included or excluded

Each entry: date, decision, context, alternatives considered, rationale.

#### [NEW] `CONTRIBUTING.md`
Guidelines for future contributors. Signals community-scale thinking even as a solo project.

#### [NEW] `.github/ISSUE_TEMPLATE/` (optional)
Bug report and feature request templates — shows project maturity.

---

### Design System

Based on Section 10 visual principles: *"calm authority and warmth"*, *"trust through restraint"*.

#### [NEW] `app/globals.css`
Design tokens as CSS custom properties (Tailwind v4 native):

**Color palette:**
- Primary: Sage green (`#4a7c6f`) — healthcare warmth without clinical coldness
- Primary light: `#e8f0ed` — backgrounds
- Text: Near-black `#1a1a2e` on off-white `#fafafa`
- Accent: Warm amber `#c4793a` — CTAs, links
- Accent hover: `#a8632e`
- Muted: `#6b7280` — secondary text
- Border: `#e5e7eb`
- Emergency: `#dc2626` — helpline CTAs only
- Surface: `#ffffff` — cards

**Typography:**
- Body: Nunito, 18px desktop / 16px mobile, line-height 1.7
- Content max-width: 680px (65–70 characters per line)
- Heading scale: strict H1 → H2 → H3 hierarchy

**Spacing:**
- Consistent 8px grid system
- Generous whitespace (the doc says *"every element earns its place"*)

---

### Core Layout Components

#### [NEW] `components/layout/Header.tsx`
- Logo/wordmark (Project Lantern)
- Desktop: horizontal nav with 6 items (from Section 10.2 Principle 7)
- Mobile: hamburger menu via shadcn Sheet, 44×44px tap targets
- Persistent search icon that opens search overlay

#### [NEW] `components/layout/Footer.tsx`
- Emergency helpline numbers: Tele-MANAS (14416), Dementia India Alliance (8585 990 990)
- Quick links to all sections
- "This platform is for educational purposes only" disclaimer
- Data attribution note
- Copyright line

#### [NEW] `components/layout/Navigation.tsx`
Six top-level categories:
1. Understand Alzheimer's
2. Caregiving Guide
3. For the Person Diagnosed
4. Find Help in India
5. Data & Research (placeholder for V2)
6. Our Story

#### [NEW] `components/layout/Disclaimer.tsx`
Persistent, subtle banner on content pages:
> "This platform provides educational information only. It does not constitute medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional."

#### [NEW] `components/layout/HelplineBanner.tsx`
Prominent component with emergency contacts:
- Tele-MANAS: 14416
- Dementia India Alliance: 8585 990 990
- iCall: 9152987821

---

### Content Pipeline (Velite)

#### [NEW] `velite.config.ts`
Velite configuration with Zod schemas defining:

**Article schema:**
```
title, description, section, slug, status (draft|reviewed),
author, medicalReviewer, reviewDate, lastUpdated,
sources [{name, url}], tags, readingTime, body (MDX)
```

**Glossary term schema:**
```
term, pronunciation, definition, relatedArticles, category
```

#### [NEW] `content/articles/` directory
MDX files organized by section:
- `content/articles/understand/` — disease education
- `content/articles/caregiving/` — practical guides
- `content/articles/diagnosed/` — for the person with dementia

Each MDX file has typed frontmatter enforced by Velite's Zod schemas. Articles with `status: draft` are excluded from production builds.

#### [NEW] `content/resources/directory.json`
Structured entries for:
- ARDSI National + 5–6 major city chapters (Delhi, Mumbai, Kolkata, Bangalore, Chennai, Hyderabad)
- Dementia India Alliance helpline
- Tele-MANAS, NIMHANS Bangalore, iCall

> [!NOTE]
> All entries manually compiled from official public sources. No scraping.

#### [NEW] `content/glossary/terms.json`
20–30 key terms: Alzheimer's, dementia, vascular dementia, Lewy body, sundowning, hippocampus, amyloid, tau, caregiver burden, cognitive decline, etc.

---

### Page Structure

#### [NEW] `app/page.tsx` — Home
- Hero section: empathetic headline, brief mission statement
- "Where do you want to start?" — 3–4 cards linking to key entry points
- Helpline numbers prominently displayed
- Latest/featured articles
- Disclaimer

#### [NEW] `app/understand/page.tsx` — Section index
- Lists all articles in "Understand Alzheimer's"
- Card layout with title, description, reading time

#### [NEW] `app/understand/[slug]/page.tsx` — Article page
- MDX rendered content with proper typography (680px content column)
- Metadata block: reviewer, review date, sources
- Disclaimer at top
- Related articles at bottom

#### [NEW] `app/caregiving/page.tsx` + `app/caregiving/[slug]/page.tsx`
- Same pattern as understand section

#### [NEW] `app/glossary/page.tsx`
- Searchable A–Z list of medical terms with plain-language definitions
- Client-side filtering (no API needed)
- Each term: word, pronunciation, plain definition, related articles

#### [NEW] `app/find-help/page.tsx` — Resource Directory
- Structured cards: ARDSI chapters, helplines, memory clinics
- Filter by city/state
- Each entry: name, city, type, phone, website, notes

#### [NEW] `app/about/page.tsx`
- Project mission and personal motivation
- Transparency: data sourcing, what this platform is and isn't
- Medical advisory (placeholder until reviewer identified)

#### [NEW] `app/contact/page.tsx`
- Contact info / email
- Links to helplines

---

### Seed Content (3 Draft Articles)

These demonstrate the content model. Marked `status: draft` — not medically reviewed:

1. **What is Alzheimer's Disease?** (`understand/what-is-alzheimers.mdx`)
2. **Understanding Different Types of Dementia** (`understand/types-of-dementia.mdx`)
3. **After a Diagnosis: A Guide for Indian Families** (`caregiving/after-diagnosis.mdx`)

---

### Search

#### Pagefind integration
- Post-build indexing: `next build && pagefind --site .next`
- `data-pagefind-body` on content containers
- Search UI component in header overlay
- Zero runtime cost

---

### Accessibility & Performance

- WCAG 2.1 AA target on all components
- `aria-` labels on all interactive elements
- Skip-to-content link
- Keyboard navigation for menus and search
- Visible focus indicators (styled, not browser default)
- Images: lazy loaded, alt text required
- Target: Lighthouse performance ≥ 95, accessibility ≥ 95

---

## Not in This Build

Per the planning document, these are explicitly deferred:
- ❌ Data dashboards (V2)
- ❌ AI features (V3)
- ❌ Hindi or multilingual content (V3)
- ❌ User accounts (V4)
- ❌ Community features (V4)
- ❌ Backend / database (V2)
- ❌ Analytics (can add Plausible post-scaffold)

---

## Verification Plan

### Automated
```bash
cd project-lantern
npm run lint        # ESLint passes
npm run build       # Next.js + Velite builds with all pages
```

### Manual
- Mobile responsiveness tested at 360px width
- All navigation links functional
- Disclaimer visible on every content page
- Helpline numbers visible on every page
- Glossary search/filter works
- Resource directory filter works
- Articles render MDX content with metadata
- Lighthouse audit: performance ≥ 95, accessibility ≥ 95
