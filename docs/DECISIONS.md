# Architecture Decision Log

This document records the significant decisions made during the design and development of Project Lantern, along with the context and reasoning behind each one. The goal is to make the project's design transparent and to help future contributors understand why things are the way they are.

Format: Date · Decision · Context · Alternatives considered · Rationale

---

## 2026-08-01 · Framework: Next.js 16 over WordPress, Ghost, or Astro

**Decision:** Build on Next.js 16 App Router.

**Context:** The platform needs to serve mostly static content (articles, glossary, resource directory) with excellent SEO, low operational cost, and the ability to add dynamic features in later phases (user accounts, AI Q&A, data dashboards).

**Alternatives considered:**
- **WordPress:** The obvious choice for content-heavy sites. Rejected because: (1) requires ongoing PHP/plugin maintenance and security patching; (2) poor TypeScript support makes content modelling fragile; (3) V2 data dashboards and V3 AI features are complex to integrate; (4) accessibility and performance require significant additional work.
- **Ghost:** Excellent for pure blogging. Rejected because: (1) limited flexibility for the resource directory and glossary; (2) Ghost hosting costs; (3) the educational content here is more structured than Ghost's blog-first model.
- **Astro:** Excellent static site generator, near-zero JavaScript by default. Considered seriously. Rejected because: (1) Next.js is more widely understood for potential contributors; (2) server-side rendering and route handlers are needed for V2/V3 features; (3) Next.js's font optimisation and image handling are mature.

**Rationale:** Next.js provides static generation for performance (no runtime database cost), excellent built-in SEO tooling, TypeScript-first development, and a clear path to adding dynamic features in later phases without a rewrite.

---

## 2026-08-01 · Content Layer: Velite over Contentlayer or raw MDX processing

**Decision:** Use Velite for content processing.

**Context:** MDX articles need to be processed into type-safe TypeScript objects with validated frontmatter fields (title, description, status, reviewer, etc.).

**Alternatives considered:**
- **Contentlayer:** The predecessor to Velite. Effectively unmaintained as of 2024 (the maintainer moved to other projects). Rejected due to active maintenance concerns and Next.js 13+ compatibility issues.
- **Raw MDX processing with gray-matter:** Simple but requires manual type enforcement. Any frontmatter schema violation (missing required field, wrong date format) surfaces only at runtime. Rejected because content integrity is important for a health information platform.
- **Sanity, Contentful, or other headless CMS:** Introduces operational complexity and cost. Also breaks the "everything in the repository" model that makes the project transparent and auditable. Rejected.

**Rationale:** Velite provides Zod-validated frontmatter schemas, type-safe output, and MDX compilation — catching content errors at build time rather than runtime. It is the maintained successor to Contentlayer.

---

## 2026-08-01 · Search: Pagefind over Algolia, Meilisearch, or client-side Fuse.js

**Decision:** Use Pagefind for site-wide search.

**Context:** Users need to be able to search across all articles and glossary terms without leaving the page.

**Alternatives considered:**
- **Algolia DocSearch:** Excellent search quality. Rejected because: it requires an Algolia account (API key management, third-party dependency), and for a small-to-medium corpus, the operational complexity is not justified.
- **Meilisearch:** Self-hosted, excellent. Rejected because it requires a running server — incompatible with the static site deployment model for V1.
- **Fuse.js (client-side fuzzy search):** No build step required; loads all content at runtime. Rejected because: (1) all content would need to be shipped to the client as JSON, increasing bundle size; (2) performance degrades as content grows; (3) Pagefind provides better relevance with less client-side JavaScript.

**Rationale:** Pagefind runs as a post-build step, indexes the static HTML, and provides a search UI with zero runtime server cost. It works entirely offline. For a health information platform that may be accessed on slow connections, this is the right tradeoff.

---

## 2026-08-01 · No symptom checker or diagnostic tool

**Decision:** The platform will not include any feature that helps users determine whether they or a family member has dementia.

**Context:** Symptom checkers are a common feature of health information sites.

**Rationale:** This decision is ethical, not technical. A symptom checker for a condition as serious as dementia carries significant risks: false negatives ("you're fine" to someone who is not), false positives (causing unnecessary panic), and the potential to delay or substitute for professional assessment. The harm a wrong answer could cause is too significant. The platform explicitly defers diagnostic questions to qualified healthcare professionals, and every article reinforces this.

---

## 2026-08-01 · Color palette: Sage green (#4a7c6f) primary, amber (#c4793a) accent

**Decision:** Use sage green as the primary brand color with warm amber for interactive elements.

**Context:** Visual design must convey calm authority and warmth without clinical coldness or commercial flashiness.

**Alternatives considered:**
- **Blue:** The default healthcare color. Rejected because it tends toward clinical coldness and is already ubiquitous in Indian health information contexts.
- **Teal:** Warmer than blue but still associated with corporate healthcare. Considered seriously. Rejected in favour of sage green, which has more warmth and less corporate association.
- **Green (saturated):** Too loud. The sage variant has the warmth without the assertiveness.
- **Purple or maroon:** Associated with luxury or religion in Indian contexts; wrong signal.

**Rationale:** Sage green occupies a space between natural warmth and professional credibility. The amber accent brings warmth to interactive elements (buttons, links) without the alarm-signal connotation of red or orange. Together they evoke a candle or lantern — consistent with the project name.

---

## 2026-08-01 · Typography: Nunito (headings) + Inter (body)

**Decision:** Use Nunito for headings and Inter for body text.

**Context:** Typography is the primary design element on a text-heavy platform. Font choice significantly affects the emotional register of the content.

**Alternatives considered:**
- **Outfit:** Geometric, modern. Too neutral and slightly cold for this context.
- **Lato:** Widely used in Indian government and NGO sites. Would feel institutional.
- **Noto Sans:** Excellent multilingual support (critical for future Hindi support). Kept in consideration for V3. Too neutral for headings.
- **DM Serif Display + Inter:** Elegant but the serif heading would feel literary rather than warm/practical.

**Rationale:** Nunito's rounded terminals give headings warmth and approachability without sacrificing legibility. Inter is the gold standard for readable body text on screen. Self-hosted via Next.js font optimisation (no Google Fonts request from the browser).

---

## 2026-08-01 · No dark mode in V1

**Decision:** Implement light mode only for V1.

**Context:** Dark mode is a frequently requested feature.

**Rationale:** The target audience skews older and is often not digitally sophisticated. Dark mode introduces complexity in the design system (every color token needs a dark variant) and in testing. Content readability and accessibility on the chosen light palette will be thoroughly validated. Dark mode is noted as a V2 enhancement.

---

## 2026-08-01 · All articles marked status: draft in V1

**Decision:** No content in V1 will be marked `status: reviewed`.

**Context:** Medical review by a qualified professional is a prerequisite for marking an article reviewed.

**Rationale:** Publishing health information without medical review creates risk of harm. The draft articles demonstrate the content model and design to potential reviewers and collaborators, but are clearly flagged as unreviewed. Visitors see a prominent disclaimer. A medical reviewer partnership is the critical path to V1 going fully live.
