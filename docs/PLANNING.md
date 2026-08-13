# Alzheimer's India Platform — Technical & Product Planning Document
**Status:** Pre-implementation research and design  
**Classification:** Nonprofit educational project  
**Version:** 1.0 — July 2026

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Existing Platform Landscape](#2-existing-platform-landscape)
3. [Public Dataset Inventory](#3-public-dataset-inventory)
4. [Legal & Ethical Data Acquisition Strategy](#4-legal--ethical-data-acquisition-strategy)
5. [Technology Stack Recommendation](#5-technology-stack-recommendation)
6. [Architecture Design](#6-architecture-design)
7. [AI Feature Strategy](#7-ai-feature-strategy)
8. [Phased Product Roadmap (V1–V5)](#8-phased-product-roadmap-v1v5)
9. [Risk Register](#9-risk-register)
10. [Visual Design Principles](#10-visual-design-principles)
11. [Open Questions & Decisions Needed](#11-open-questions--decisions-needed)

---

## 1. Executive Summary

This document defines the research foundation, architecture, and phased roadmap for a nonprofit educational platform on Alzheimer's disease in India. The platform's purpose is explicitly educational: helping Indian families understand the disease, access caregiving guidance, and explore public-health data — not to provide medical diagnoses, treatment recommendations, or clinical decision support.

**The core insight from this research:** India has a severe information gap. More than 8.8 million people in India live with dementia (2023 estimate from ARDSI's Dementia India Report), and this number is projected to exceed 17 million by 2050. Yet existing Indian platforms are largely static text websites with poor mobile experiences, no interactive data, no AI features, and minimal multilingual depth. The global standard-setters (Alzheimer's Association US, Alzheimer's Disease International) produce excellent content but are not India-contextualized in practical terms.

**There is a clear gap to fill:** a modern, accessible, data-informed, India-specific educational resource that respects the cultural realities of Indian caregiving — joint family structures, limited specialist access in Tier 2 and 3 cities, language diversity, stigma, and the near-total reliance on family members for care.

**This document does not authorize any coding.** It is a research and design artifact.

---

## 2. Existing Platform Landscape

### 2.1 Indian Platforms

---

**Dementia Care Notes (dementiacarenotes.in)**  
*The strongest India-specific resource currently available.*

Strengths:
- Deep, practically-oriented caregiving content written specifically for Indian families and the Indian healthcare system
- City-wise resource directories for 15+ Indian cities
- Audio player on every page (important for lower-literacy users)
- Hindi parallel site (dementiahindi.com) and YouTube channel
- Genuine cultural attunement: covers issues like sibling conflicts over care, long-distance caregiving from NRIs, untrained home attendants, and affordability

Gaps:
- Single-person project (created and maintained by Swapna Kishore, a caregiver-turned-advocate); sustainability is a risk
- Static text; no data visualizations or dashboards
- No AI features
- No interactive tools (no caregiver self-assessment, no symptom tracker, no glossary search)
- Mobile experience is functional but not modern
- No structured data on facilities — the resource lists are manually maintained text
- No community or peer support features
- Copyright is fully retained; content cannot be reused without permission
- Hindi language support exists but many other major languages (Tamil, Telugu, Kannada, Bengali, Marathi) are absent

---

**ARDSI — Alzheimer's and Related Disorders Society of India (ardsi.org)**  
*The official national body, but its digital presence does not match its ground-level work.*

Strengths:
- 20+ city chapter network with real services: memory clinics, day care, caregiver training, helplines
- Institutional credibility and partnerships with WHO and Alzheimer's Disease International (ADI)
- Published major reports: Dementia India Report (2010), Dementia India Strategy (2018), Dementia in India 2023

Gaps:
- Website is frequently outdated and incomplete (noted explicitly by Dementia Care Notes)
- No data visualizations or public dashboards
- Chapter websites are inconsistently maintained or entirely absent
- No AI features, no mobile app
- Published reports are PDFs, not interactive data
- Contact information on many chapters is stale

---

**Dementia India Alliance (started 2023)**

An emerging player with a national dementia support helpline (8585 990 990) and an online memory clinic (DemClinic). Still early-stage, primarily service-focused rather than educational.

---

**ARDSI Kolkata, Pune Chapters (independent sites)**

Inconsistently maintained sub-chapter sites. Valuable for local service information but not educational platforms.

---

### 2.2 International Platforms (Benchmark Analysis)

---

**Alzheimer's Association USA (alz.org)**

Strengths:
- Exceptionally comprehensive disease information written in clear language
- Structured caregiving content by stage
- Free online education programs and webinars
- Research funding transparency
- Community forum and support groups

Gaps relevant to India:
- US-centric healthcare system context (insurance, Medicare, specialist access)
- No India-specific caregiving guidance
- No interactive public-health data dashboards for Indian audiences
- English-only content

---

**Alzheimer's Disease International (alzint.org)**

Strengths:
- Global scope with data from 90+ countries
- Annual World Alzheimer Reports (high-quality, freely downloadable)
- Member network including ARDSI
- Multilingual resources (some Indian language links)

Gaps:
- Not a caregiving platform; it is an advocacy and policy organization
- Data is globally aggregated, not India-specific and interactive
- PDF-heavy, not explorable

---

**Alzheimer's Society UK (alzheimers.org.uk)**

Strengths:
- The Dementia Guide and similar publications are excellent practical resources
- Dementia Connect online service directory (UK)
- Active community forum (Talking Point)

Gaps relevant to India:
- UK NHS and social services system — largely inapplicable to India
- No equivalent resource directory for Indian cities

---

**Our World in Data (ourworldindata.org) — Dementia/Alzheimer's**

Strengths:
- Interactive, citable, properly licensed charts on dementia prevalence, mortality, and DALYs
- Data sourced from GBD; visualizations under Creative Commons Attribution

Note: This is a data visualization platform, not an education platform. But it sets the standard for how public health data can be made accessible and beautiful.

---

### 2.3 The Opportunity Gap Summary

| Capability | Dementia Care Notes | ARDSI | Alzheimer's Association US | Your Platform (Proposed) |
|---|---|---|---|---|
| India-specific content | ✅ Excellent | ✅ Partial | ❌ | ✅ Target |
| Caregiving practical guide | ✅ Strong | ❌ Weak | ✅ Strong | ✅ Target |
| Interactive data dashboards | ❌ | ❌ | ❌ | ✅ Core feature |
| Multilingual (India languages) | ⚠️ Hindi only | ❌ | ❌ | ✅ Phased |
| Mobile-first experience | ⚠️ Adequate | ❌ Poor | ⚠️ Adequate | ✅ Priority |
| AI features | ❌ | ❌ | ❌ | ✅ Careful implementation |
| City-level service locator | ✅ Manual list | ⚠️ Partial | ❌ | ✅ Structured data |
| Community / peer support | ❌ | ❌ | ✅ US-only | 🔄 Later phase |
| Open data attribution | ✅ Good | ⚠️ Inconsistent | ✅ Good | ✅ Required |

---

## 3. Public Dataset Inventory

This section catalogs every relevant dataset identified, with full sourcing, licensing, format, and quality notes. **No scraping is recommended for any dataset where it is prohibited or terms are ambiguous.**

---

### Dataset 1: Longitudinal Aging Study in India (LASI) Wave 1 (2017–18)

**What it contains:** Nationally representative survey of 72,000+ adults aged 45+. Covers health status, cognitive function, economic well-being, social networks, healthcare utilization, and functional health, across all Indian states and union territories.

**Source:** International Institute for Population Sciences (IIPS), Harvard T.H. Chan School of Public Health, University of Southern California  
**Access URL:** data.gov.in (NDA-accessible portal) and Gateway to Global Aging Data (g2aging.org)  
**License:** Research data license via IIPS; free for academic/nonprofit research. Requires registration and data use agreement. Not a scrape-permitted source — formal request required.  
**Update frequency:** Wave 2 data expected; Wave 1 is the publicly available baseline (2017–18 collection period)  
**File format:** CSV/Stata/SPSS microdata files  
**Commercial use:** Prohibited under standard data use agreement  
**Nonprofit use:** Permitted with data use agreement and proper attribution  
**Scraping permitted:** Not applicable — microdata is available via formal download, not from web scraping  
**Data quality:** Highest quality India-specific aging dataset available. Nationally representative, harmonized with international Health and Retirement Study (HRS) family of studies. Limitation: Wave 1 only; 2017–18 data; some underrepresentation in urban slum populations  
**Relevance to platform:** State-level prevalence maps, cognitive health distribution by age/education/gender, rural vs. urban breakdowns

---

### Dataset 2: LASI-DAD (Harmonized Diagnostic Assessment of Dementia for LASI)

**What it contains:** A subsample of 4,096 LASI respondents aged 60+ with in-depth cognitive testing, blood assays, genetic data, and consensus clinical dementia ratings. The first nationally representative dementia study in India. Available across 18 states and union territories.

**Source:** USC, Harvard, AIIMS; published in *Scientific Data* (Nature)  
**Access URL:** Gateway to Global Aging Data (g2aging.org); also available via NIH/NCBI  
**License:** Publicly available with data use agreement. Free for nonprofit/research use.  
**Update frequency:** Wave 2 collection ongoing (as of 2024); Wave 1 is publicly available  
**File format:** Stata, CSV  
**Commercial use:** Prohibited  
**Nonprofit use:** Permitted with registration  
**Scraping permitted:** Not applicable — formal data access  
**Data quality:** Excellent; population-weighted; validated cognitive instruments; cross-country harmonized. Limitation: Blood sample subset (n=2,892); neuroimaging only for 137 participants; geographic coverage stops at 18 states  
**Relevance to platform:** Dementia prevalence by state, risk factor analysis, cognitive test score distributions, urban-rural disparities

---

### Dataset 3: Global Burden of Disease (GBD) Study 2021 / GBD 2023 — IHME

**What it contains:** Comprehensive global and national estimates of disease burden for 371 diseases, including Alzheimer's disease and other dementias. Provides incidence, prevalence, mortality, and DALY rates for India and Indian states from 1990–2021.

**Source:** Institute for Health Metrics and Evaluation (IHME), University of Washington  
**Access URL:** vizhub.healthdata.org/gbd-results/  
**License:** IHME Free-of-Charge Non-Commercial User Agreement. Data available to non-commercial users to improve health policy and practice. Attribution required.  
**Update frequency:** GBD cycle updates roughly every 2 years (GBD 2021 current; GBD 2023 data now available as of 2025)  
**File format:** CSV (downloadable via Results Tool, up to 100,000 rows per request)  
**Commercial use:** Requires separate commercial license from IHME  
**Nonprofit use:** Permitted; full data download requires account registration  
**Scraping permitted:** No. IHME has no public API. Note: **IHME explicitly states no API is available.** Data must be downloaded through their web tool after login.  
**Data quality:** The global gold standard for comparative epidemiology. Limitation: India state-level estimates carry higher uncertainty intervals in low-surveillance states; data is modeled estimates, not direct surveillance  
**Relevance to platform:** Time-series charts of dementia burden in India, state comparison maps, age-standardized rates, risk factor contribution (high BMI, smoking, high fasting glucose)

**Important legal note:** IHME's terms state that "Text, graphs, and screenshots of the visualizations on IHME Websites can be copied and redistributed with proper attribution by non-commercial users via a Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License." This means you can embed or reference their charts with attribution, but cannot distribute derivative visualizations built from their raw data under a different license. For building your own interactive charts, you must download the CSV data after account creation, attribute IHME properly, and ensure your platform remains strictly non-commercial.

---

### Dataset 4: WHO Global Dementia Observatory (GDO)

**What it contains:** 35 key dementia indicators collected from WHO member states, tracking progress on the Global Action Plan on the Public Health Response to Dementia 2017–2025. Covers policy, services, awareness, risk reduction, caregiver support, and research investment.

**Source:** World Health Organization  
**Access URL:** who.int/data/gho/data/themes/global-dementia-observatory-gdo  
**License:** WHO data is generally freely available for non-commercial use with attribution (CC BY-NC-SA or similar). Verify specific terms on the GHO data repository.  
**Update frequency:** As of 2021, 62 countries contributed data; cadence approximately every 2–3 years  
**File format:** CSV/Excel via GHO API; also PDF reports  
**Commercial use:** Restrictions apply; verify with WHO  
**Nonprofit use:** Generally permitted with attribution  
**Scraping permitted:** WHO GHO has an open API (apps.who.int/gho/athena/api/); scraping the website directly is not necessary and likely prohibited under ToS  
**Data quality:** Moderate. Coverage incomplete — not all countries reported. India submitted data for some indicators. Self-reported by governments, not independently verified.  
**Relevance to platform:** Policy comparison (does India have a national dementia plan?), global context for Indian families

---

### Dataset 5: India Census 2011 — Elderly Population Data

**What it contains:** Age-disaggregated population data by state, district, urban/rural. No Census 2021 exists yet (delayed indefinitely as of 2026). The 2011 Census is the most recent official count but is now 14+ years old.

**Source:** Office of the Registrar General & Census Commissioner of India  
**Access URL:** data.gov.in (Primary Census Abstract 2011); censusindia.gov.in API  
**License:** National Data Sharing and Accessibility Policy (NDSAP) — Government of India open data license permitting free use, sharing, and adaptation with attribution. Allows non-commercial and commercial use.  
**Update frequency:** Census is decennial; 2021 data not yet published  
**File format:** Excel, CSV, JSON via NDSAP API  
**Commercial use:** Permitted under NDSAP  
**Nonprofit use:** Permitted  
**Scraping permitted:** Not needed — official API and downloads available  
**Data quality:** Gold standard for population counts. Major limitation: 14 years old. Use for structural patterns (rural/urban elderly distribution, state comparisons), not current prevalence estimates.  
**Relevance to platform:** Base population maps, denominator for per-capita calculations, geographic distribution of elderly populations by district

---

### Dataset 6: National Family Health Survey (NFHS-5, 2019–21)

**What it contains:** District-level data on health, nutrition, and demographic indicators. Includes some cognitive function measures for older adults and data on chronic diseases (diabetes, hypertension) which are risk factors for dementia.

**Source:** Ministry of Health and Family Welfare / IIPS  
**Access URL:** rchiips.org/nfhs/nfhs5.shtml; data.gov.in  
**License:** Government of India open data under NDSAP; state and national reports freely downloadable  
**Update frequency:** Approximately every 4–5 years (NFHS-6 expected)  
**File format:** Excel, PDF for factsheets; DHS Program microdata (requires registration)  
**Commercial use:** Factsheets permitted; microdata requires DHS Program terms  
**Nonprofit use:** Permitted  
**Scraping permitted:** Not necessary — direct downloads available; microdata via DHS requires formal access  
**Data quality:** High quality; nationally and state-representative; district-level factsheets useful for mapping  
**Relevance to platform:** Diabetes and hypertension prevalence by state (risk factor maps), elderly population health indicators

---

### Dataset 7: National Health Mission (NHM) Infrastructure Data

**What it contains:** State-wise counts of district hospitals, community health centers, primary health centers, and sub-centers. Also contains HMIS (Health Management Information System) output indicators.

**Source:** Ministry of Health and Family Welfare, NHM  
**Access URL:** nhm.gov.in; data.gov.in/keywords/NRHM  
**License:** NDSAP (Government of India open license)  
**Update frequency:** Annual  
**File format:** Excel, PDF, JSON (some via data.gov.in API)  
**Commercial use:** Permitted  
**Nonprofit use:** Permitted  
**Scraping permitted:** Not needed — downloads available  
**Data quality:** Moderate. Based on facility reporting; quality varies by state. Useful for showing healthcare access disparities.  
**Relevance to platform:** Map of geriatric care access — showing states with low specialist-to-population ratios, proximity of district hospitals to elderly populations

---

### Dataset 8: Our World in Data — Dementia/Alzheimer's Charts

**What it contains:** Pre-processed, beautifully visualized time-series charts on dementia deaths, death rates, prevalence, and DALYs using IHME GBD data. Includes country-level comparisons.

**Source:** Our World in Data (Esteban Ortiz-Ospina, Max Roser), sourcing IHME GBD  
**Access URL:** ourworldindata.org/grapher/deaths-from-alzheimers  
**License:** Our World in Data's charts are under CC BY 4.0 (Creative Commons Attribution). Data derived from IHME GBD follows IHME's non-commercial license.  
**Update frequency:** Updated as IHME releases new GBD cycles  
**File format:** CSV downloads available from each chart page; embeddable iframes  
**Commercial use:** OWID charts: CC BY 4.0 (commercial allowed). However, underlying IHME data remains non-commercial.  
**Nonprofit use:** Fully permitted with attribution  
**Scraping permitted:** OWID does not prohibit linking to or embedding their charts; CSV download is offered explicitly. Do not scrape their website.  
**Data quality:** Highest. OWID meticulously documents processing steps.  
**Relevance to platform:** Embed OWID charts in educational context sections; use their CSV downloads to build India-specific visualizations; cite properly

---

### Dataset 9: data.gov.in — General Indian Government Datasets

**What it contains:** A unified portal for datasets published by Indian ministries. Relevant datasets include: population by age group (Census), health statistics (HMIS), disease burden (NPHCE data), geriatric care facilities.

**Source:** Government of India  
**Access URL:** data.gov.in  
**License:** NDSAP — open license for all datasets unless otherwise noted  
**Update frequency:** Varies by dataset (some annual, some decennial)  
**File format:** CSV, JSON (API available for registered users with API key)  
**Commercial use:** Generally permitted under NDSAP  
**Nonprofit use:** Permitted  
**Scraping permitted:** Not required — API access is officially provided  
**Data quality:** Variable. Some datasets are well-maintained; others are outdated or incomplete.  
**Relevance to platform:** Supplement to other sources; useful for state-level comparisons and infrastructure mapping

---

### Dataset 10: ARDSI Dementia India Report 2023

**What it contains:** The most recent India-specific national dementia report. Includes estimated prevalence, regional breakdowns, policy recommendations, and caregiver burden analysis.

**Source:** Alzheimer's and Related Disorders Society of India (ARDSI)  
**Access URL:** ardsi.org (PDF)  
**License:** Copyright ARDSI; not under open license  
**Update frequency:** Periodic (previous reports: 2010, 2018)  
**File format:** PDF  
**Commercial use:** Not permitted without permission  
**Nonprofit use:** You may cite this report and reference its data with attribution. You may **not** reproduce substantial portions or rehost the PDF.  
**Scraping permitted:** No — it is a PDF under copyright  
**Data quality:** The most India-specific available. Based on LASI and other surveys; expert-reviewed. Methodology section should be cited.  
**Recommended approach:** Cite the report's aggregate findings (e.g., "According to ARDSI's Dementia India Report 2023...") with a link to the official source. Do not reproduce tables or figures.

---

### Dataset 11: Sample Registration System (SRS) Cause of Death Data

**What it contains:** The SRS provides cause-of-death data for India, including deaths attributed to neurological conditions and senility, which partially captures dementia mortality in the absence of formal dementia coding.

**Source:** Registrar General of India  
**Access URL:** censusindia.gov.in  
**License:** Government of India open data  
**Update frequency:** Annual reports, though with 2–3 year publication lag  
**File format:** PDF, Excel  
**Commercial use:** Permitted  
**Nonprofit use:** Permitted  
**Scraping permitted:** Not needed — downloads available  
**Data quality:** Limitation: India's cause-of-death coding underrepresents dementia significantly because dementia is frequently coded as a complication (pneumonia, falls) rather than primary cause. Use with this caveat clearly noted.  
**Relevance to platform:** Contextual data on mortality; illustrate how dementia may be underdiagnosed and undercounted

---

### Dataset Summary Table

| # | Dataset | Source | License | Format | Commercial? | Nonprofit? | Scraping? | Quality |
|---|---|---|---|---|---|---|---|---|
| 1 | LASI Wave 1 | IIPS/Harvard/USC | Data use agreement | CSV/Stata | No | Yes (DUA) | N/A | ★★★★★ |
| 2 | LASI-DAD | USC/Harvard/AIIMS | Data use agreement | CSV/Stata | No | Yes (DUA) | N/A | ★★★★★ |
| 3 | GBD 2021/2023 | IHME | Non-commercial | CSV | No | Yes (account) | No (no API) | ★★★★★ |
| 4 | WHO GDO | WHO | CC BY-NC-SA | CSV/API | Restricted | Yes | GHO API OK | ★★★☆☆ |
| 5 | Census 2011 | Census India | NDSAP | Excel/CSV/API | Yes | Yes | Not needed | ★★★★☆ |
| 6 | NFHS-5 | MOHFW/IIPS | NDSAP/DHS | Excel/PDF/micro | Factsheets yes | Yes | Not needed | ★★★★★ |
| 7 | NHM Infrastructure | MOHFW/NHM | NDSAP | Excel/PDF | Yes | Yes | Not needed | ★★★☆☆ |
| 8 | Our World in Data | OWID + IHME | CC BY 4.0 / NC | CSV/iframe | OWID: yes; IHME: no | Yes | Do not scrape | ★★★★★ |
| 9 | data.gov.in | Government of India | NDSAP | CSV/JSON API | Yes | Yes | API preferred | ★★★☆☆ |
| 10 | ARDSI Reports | ARDSI | Copyright | PDF | No | Cite only | No | ★★★★☆ |
| 11 | SRS Cause of Death | RGI | Open | PDF/Excel | Yes | Yes | Not needed | ★★★☆☆ |

---

## 4. Legal & Ethical Data Acquisition Strategy

### 4.1 Core Principle

**Never scrape a website whose terms of service prohibit it, and never reproduce copyrighted material without explicit permission.** This is both a legal requirement and an ethical one. For a nonprofit educational platform, credibility depends on impeccable data practices.

### 4.2 Recommended Acquisition Pathway for Each Source

**For LASI and LASI-DAD:**
1. Complete the registration and data use agreement at g2aging.org (free)
2. Download microdata files as CSV/Stata
3. Pre-process into aggregated, non-identifiable summary tables for public display
4. Store raw microdata on a private, access-controlled server — never on the public platform
5. Document the DUA terms in an internal compliance log

**For IHME GBD:**
1. Register for a free IHME account at healthdata.org
2. Download data in CSV batches (100,000 row limit per request; India + state-level dementia data will fit within this)
3. Store the downloaded CSV files in the project repository with attribution metadata
4. Cite IHME in all visualizations: "Source: IHME, Global Burden of Disease 2023"
5. Ensure platform does not generate revenue; maintain nonprofit status

**For WHO GDO:**
1. Use the WHO GHO API (apps.who.int/gho/athena/api/) — officially supported
2. Attribute WHO in visualizations
3. Do not cache or redistribute WHO data in ways that imply it is your own

**For Indian government data (data.gov.in, Census, NFHS factsheets):**
1. Register for a data.gov.in API key
2. Download datasets and cache locally for performance
3. Always attribute Ministry/Department name and NDSAP license
4. For NFHS factsheets: download PDFs directly from rchiips.org; extract data tables manually for visualization

**For ARDSI and other NGO reports:**
1. Reference and link only; do not reproduce
2. Consider formally requesting partnership with ARDSI — they may grant content use permissions for a complementary nonprofit platform
3. If ARDSI provides formal written permission, that overrides the default copyright restriction

**For academic papers (PMC/PubMed open access):**
1. Open access papers may be cited and their findings summarized (not reproduced verbatim)
2. Data from papers can be used if the paper explicitly states the data is publicly available
3. Tables and figures from papers are typically under journal or author copyright; do not embed without permission

### 4.3 Data Freshness and Maintenance

A critical long-term risk is data going stale. Establish a review schedule:

- **Quarterly:** Check for new GBD data releases from IHME; check NFHS factsheet updates
- **Annual:** Re-download NHM infrastructure data; review ARDSI publications
- **Per census cycle:** Major update when Census 2021 (whenever released) and LASI Wave 2 data become available
- **Ongoing:** Monitor WHO GDO for updated India indicators

### 4.4 What to Explicitly Avoid

- **Never scrape Dementia Care Notes, ARDSI websites, or any organization's web content.** These are copyrighted resources and scraping would also be ethically inappropriate toward organizations doing similar work.
- **Do not use any dataset whose terms require commercial licensing** unless you secure that license or find a non-commercial-licensed equivalent.
- **Do not publish individual-level microdata** from LASI or LASI-DAD. Data use agreements require only aggregate, non-identifiable outputs to be publicly shared.
- **Do not embed AI-generated "statistics"** about dementia prevalence. Every number on the platform must trace to a verifiable, licensed source.

---

## 5. Technology Stack Recommendation

### 5.1 Guiding Constraints

Before recommending a stack, it is worth being honest about constraints:

- This is a nonprofit project with a long time horizon
- The primary builder (you, Soren) is a student with development skills from the Piedmont project — Next.js + FastAPI is already in your toolkit
- India's internet connectivity is significantly mobile-dominated and variable; performance on 4G connections in Tier 2 cities is a real constraint
- The platform needs to be maintainable for years without a large team
- Cost must remain minimal (fits on free or near-free hosting tiers in early phases)
- No patient data will be collected; this simplifies compliance

### 5.2 Recommended Stack

**Frontend**

| Layer | Choice | Rationale |
|---|---|---|
| Framework | Next.js 14+ (App Router) | You already know it from Piedmont; excellent SEO (critical for health content discoverability); static generation for content pages; server components reduce JS bundle sizes |
| Styling | Tailwind CSS | Consistent with Piedmont; fast to build; excellent responsive utilities for mobile-first |
| Data visualization | Recharts or Nivo | React-native; accessible by design; simpler than D3 for team of 1–2 |
| Interactive maps | react-simple-maps + topojson | Lightweight India state/district choropleth maps without heavy tile-server dependencies |
| Language support (i18n) | next-intl | Integrates cleanly with Next.js App Router; supports RTL if Urdu added later |
| Component library | Radix UI (headless) + custom styles | Accessible by default (ARIA); no opinionated design that fights your visual direction |
| Search | Pagefind (static index) | Runs entirely at build time; zero cost; fast full-text search for educational content |

**Why not plain HTML/CSS?** Given the scale of features planned (dashboards, AI features, multilingual content, community features later), a component-based React framework is the right call. The SEO concern with React can be fully addressed by Next.js server-side rendering.

**Why not Gatsby?** Next.js is more capable for the API routes and server-side data fetching you will need for dashboard data. Gatsby's ecosystem has also declined relative to Next.js.

---

**Backend**

| Layer | Choice | Rationale |
|---|---|---|
| API framework | FastAPI (Python) | Already in your toolkit from Piedmont; Python is the dominant language for data science and the datasets are Stata/CSV — easy to process |
| Database | PostgreSQL (via Supabase) | Supabase gives a free Postgres instance with a REST API, Auth, and realtime — reduces backend complexity; open source if you need to self-host |
| Data pipeline | Python scripts (pandas, polars) | Pre-process and aggregate datasets from LASI, IHME CSVs into Postgres tables; run on a schedule |
| Cache layer | Redis (Upstash serverless) | Cache aggregated chart data; free tier sufficient for early phases |
| AI services | Anthropic Claude API (claude-haiku-4-5 for cost) | For AI features (see Section 7); keep in a separate service |
| Authentication | Supabase Auth | Needed only when user accounts are introduced (later phases); JWT-based |

---

**Infrastructure & Hosting**

| Layer | Choice | Rationale |
|---|---|---|
| Frontend hosting | Vercel | Consistent with Piedmont; excellent edge CDN; global performance |
| Backend hosting | Render (free tier → paid) | Consistent with Piedmont; simple FastAPI deployment |
| Database | Supabase (free tier: 500MB) | Sufficient for V1/V2; scale to paid (~$25/mo) when needed |
| Media/assets | Cloudflare R2 | S3-compatible object storage; free for <10GB; Cloudflare's CDN is India-optimized |
| Domain/CDN | Cloudflare | Free DDoS protection, caching, and India edge nodes; critical for Tier 2/3 performance |
| CI/CD | GitHub Actions | Free for public/nonprofit repos; auto-deploy on push |

---

**Content Management**

| Layer | Choice | Rationale |
|---|---|---|
| CMS | Contentlayer + MDX (in git) | Educational articles authored as Markdown files in the repository; no CMS subscription; content is version-controlled; zero cost |
| Alternative (if team grows) | Sanity.io (free tier) | If a medical reviewer team needs a GUI to edit content, Sanity is the cleanest option; non-profit projects can apply for a grant account |

---

**Total infrastructure cost at V1 scale:** approximately ₹0–500/month (free tiers). At V3 scale (with active users and a paid database): approximately ₹2,000–5,000/month.

---

### 5.3 What to Avoid

- **WordPress:** Tempting because it is familiar, but it creates significant security maintenance burden, poor performance on slow connections without heavy plugin investment, and does not support the interactive dashboard features natively.
- **React Native/Flutter mobile app at launch:** Build a mobile-first progressive web app first. A native app doubles your development and maintenance burden; it should come only after establishing a user base.
- **Heavy mapping libraries (Mapbox, Google Maps):** These cost money at scale and require API keys. For India state/district choropleth maps, react-simple-maps + free TopoJSON data is sufficient.
- **Blockchain or NFTs:** No. This adds no value and damages credibility for a health platform.
- **Self-hosted LLM for AI features:** The cost and reliability of self-hosting (even via Ollama on a server) at production scale is not justified when Anthropic's API is affordable for the query volumes a nonprofit health platform will see.

---

## 6. Architecture Design

### 6.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        PUBLIC INTERNET                          │
└─────────────────────────┬───────────────────────────────────────┘
                          │
                    Cloudflare CDN
                    (Edge caching, DDoS protection)
                          │
          ┌───────────────┴────────────────┐
          │                                │
    ┌─────▼──────┐                  ┌──────▼──────┐
    │  Next.js   │                  │  FastAPI    │
    │  Frontend  │ ◄────REST────── │  Backend    │
    │  (Vercel)  │                  │  (Render)   │
    └─────┬──────┘                  └──────┬──────┘
          │                                │
          │                        ┌───────┴─────────┐
          │                        │                  │
    ┌─────▼──────┐          ┌──────▼──────┐   ┌──────▼──────┐
    │  Static    │          │  PostgreSQL  │   │  AI Service │
    │  Content   │          │  (Supabase) │   │  (Anthropic │
    │  (MDX/Git) │          │             │   │   Claude)   │
    └────────────┘          └──────┬──────┘   └─────────────┘
                                   │
                            ┌──────▼──────┐
                            │  Data       │
                            │  Pipeline   │
                            │  (Python)   │
                            └──────┬──────┘
                                   │
                   ┌───────────────┼───────────────┐
                   │               │               │
             ┌─────▼────┐  ┌──────▼─────┐  ┌──────▼─────┐
             │IHME GBD  │  │ data.gov.in│  │LASI/NFHS  │
             │  CSVs    │  │    API     │  │ processed  │
             └──────────┘  └────────────┘  └────────────┘
```

### 6.2 Service Boundaries

The architecture is deliberately separated into four domains. This separation is not just technical — it is also a governance boundary. Content, data, AI, and community are managed independently so that problems in one domain do not compromise others.

---

**Domain 1: Educational Content Service**

- All educational articles, caregiving guides, glossary, FAQ
- Authored in MDX files in the Git repository
- Rendered as static HTML at build time (Next.js static generation)
- Reviewed by a medical advisor before publishing (governance process, not a technical component)
- Available without JavaScript (critical for accessibility on older devices)
- Fully indexed by Pagefind for client-side search
- Content metadata: author, last-reviewed date, medical review date, sources cited

This domain has **no API dependency at runtime**. If the backend goes down, educational content continues to serve.

---

**Domain 2: Public Health Dashboard Service**

- Interactive charts: dementia prevalence by state, age-group breakdowns, burden metrics, risk factors
- India state-level choropleth maps
- Trend lines (1990–present using GBD data)
- Caregiver burden indicators
- Healthcare infrastructure access maps

Architecture: The FastAPI backend exposes pre-aggregated endpoints (e.g., `/api/v1/prevalence/state`, `/api/v1/burden/national`). These endpoints query PostgreSQL, which is populated by the data pipeline. Chart data is cached in Redis (15-minute TTL for static datasets; effectively no staleness for non-real-time data).

**The data pipeline runs on a scheduled job** (GitHub Actions or a Render cron job) to re-aggregate data monthly. When new GBD data becomes available, you update the source CSVs and re-run the pipeline.

---

**Domain 3: AI Assistance Service**

- Isolated from all other domains
- Calls the Anthropic Claude API only
- Has its own prompt templates (no user data is persisted)
- Rate-limited per-session (5 queries/session without account; logged but not stored for non-users)
- A thin FastAPI router handles prompt injection prevention before passing to Claude
- Explicitly scoped: only returns educational navigation help, glossary explanations, and content summaries — never medical advice

Details in Section 7.

---

**Domain 4: User Content Service (Introduced in V3)**

- Caregiver stories and peer submissions
- Helpline and facility directory (community-maintained)
- Comments on articles (moderated)
- Requires authentication (Supabase Auth)
- All user content is moderated before publishing
- DPDP Act 2023 (India's data protection law) compliance required: explicit consent, purpose limitation, right to erasure

---

### 6.3 Content Review Governance (Non-Technical)

This is a critical risk mitigation. **Every page of medical or health-related educational content must be reviewed by a qualified professional before publishing.** The platform should display:

- The name and credential of the reviewing professional
- The date of last medical review
- A disclaimer on every page ("This page is for educational purposes only. It does not constitute medical advice.")

Proposed review workflow:
1. Author drafts content in MDX
2. A `status: draft` tag prevents it from appearing on the live site
3. A medical reviewer (geriatrician, neurologist, or trained nurse specialist) reviews the draft
4. Reviewer approves via a simple pull request or form; the `status` tag is updated to `reviewed`
5. Review date and reviewer credential are stored in the MDX frontmatter and displayed publicly

---

## 7. AI Feature Strategy

### 7.1 Design Principles for AI in a Health Education Context

Before listing AI features, the principles that constrain them:

1. **AI is a navigation and accessibility tool, not a clinical tool.** It helps users find, understand, and process educational content. It never interprets symptoms, recommends treatments, or suggests diagnoses.

2. **Every AI response must ground itself in platform content.** The AI should say "Based on our guide on early-stage caregiving..." not "Based on my knowledge of Alzheimer's...". This keeps outputs verifiable and prevents hallucinated medical information.

3. **Limitations must be stated upfront, not buried.** The first time a user opens the AI assistant, they see: "I can help you understand our educational content and find resources. I am not a doctor and cannot give medical advice."

4. **No user health data is collected or used.** The AI does not ask users to input symptoms, diagnoses, or treatment information. It has no memory between sessions.

5. **AI must be gracefully absent.** If the AI service is down, the platform must still be fully functional. AI is an enhancement, not infrastructure.

6. **Flagged queries go to human resources.** If a user query suggests crisis (e.g., language indicating suicidal ideation among caregivers, emergency medical questions), the AI should redirect to emergency contacts immediately, not attempt to answer.

---

### 7.2 Recommended AI Features

**Feature A: Content Assistant ("Ask the Guide")**

What it does: Answers natural-language questions about the platform's educational content. Example queries: "What is sundowning and how do I handle it at night?" / "My mother keeps accusing me of stealing. What should I do?" / "What is the difference between Alzheimer's and vascular dementia?"

How it works:
- User submits query
- Backend retrieves the 3 most relevant content chunks using vector embeddings (Supabase pgvector)
- These chunks are passed to Claude as context in the system prompt
- Claude synthesizes an answer grounded in those chunks only
- Response includes links to the full source articles
- If no relevant content exists: "I don't have information on this specific question. Here are some resources where you might find help." [links to ARDSI, Dementia India Alliance]

Why this is safe: Claude only has access to content you have already written and reviewed. It cannot draw on its broader training for medical claims. Output is bounded.

**Cost estimate:** At claude-haiku-4-5 pricing, ~1,000 queries/day costs approximately ₹200–500/month.

---

**Feature B: Plain-Language Explainer**

What it does: A user can highlight any technical term on a page and get a plain-language explanation. Example: user highlights "hippocampal atrophy" and gets: "The hippocampus is the part of the brain most responsible for forming new memories. In Alzheimer's disease, it shrinks over time, which is why one of the earliest symptoms is difficulty remembering recent events."

How it works:
- On-page JavaScript captures selected text + surrounding paragraph
- Sends to a lightweight Claude endpoint with a strict system prompt: "Explain this medical term in one short paragraph using plain language suitable for a non-medical Indian family caregiver. Do not make any treatment recommendations."
- No storage; pure ephemeral API call

This is one of the highest-value, lowest-risk AI features possible. It makes existing content more accessible without creating any medical risk.

---

**Feature C: Multilingual Content Summarizer**

What it does: Summarizes any article in Hindi, Tamil, Telugu, Kannada, Bengali, or Marathi for users who prefer regional languages but for whom a full translation of every article does not yet exist.

How it works:
- User clicks "Read in Hindi" on any article
- Claude generates a summary (not a full translation; clearly labeled as "AI-generated summary, not a verified translation")
- The full English article remains the authoritative version
- Summaries are cached so the same article does not trigger an API call on every request

Risk mitigation: Clearly label AI-generated summaries as non-authoritative. In V4, replace AI summaries with human-verified translations for the highest-traffic pages.

---

**Feature D: Caregiver Stage Navigator**

What it does: An interactive tool where a caregiver answers 4–5 simple questions about the person with dementia (e.g., "Is the person able to manage daily activities like eating and dressing?"), and the tool suggests which section of the caregiving guide is most relevant to their current situation.

How it works:
- This is a **decision tree**, not an AI feature at its core — a rule-based system maps question answers to content sections
- Claude is used only to phrase the suggestions in warm, empathetic language
- Explicitly does not "stage" or "diagnose" the dementia — just helps navigate the content

This is important: the temptation will be to make this AI-powered and turn it into a "What stage is my grandmother in?" tool. **Resist that.** Medical staging requires clinical assessment. A content navigation tool is genuinely useful and non-harmful.

---

**Feature E: Resource Finder (Hybrid AI + Structured Data)**

What it does: "Find memory clinics, caregiver support groups, and ARDSI chapters near me" — the user types their city, and the platform returns structured information about nearby resources.

How it works:
- The resource directory is a structured database (not AI-generated)
- Claude helps interpret ambiguous city/region queries ("I'm near Gurugram" → search for Delhi NCR resources)
- All resource data comes from verified entries in your database, not from Claude's training data

The AI role here is query disambiguation only. The factual content is curated by humans.

---

### 7.3 Features to Explicitly Not Build

- **Symptom checker:** Even if framed as "educational," a symptom checker is a clinical tool. The risk of a family member using it to avoid or delay seeking professional assessment is real.
- **Drug information chatbot:** Do not let Claude answer questions about Aricept, Memantine, or any other medication. Direct those queries to a doctor.
- **AI-generated caregiver stories or testimonials:** These must be real human experiences, not fabricated.
- **"Will my grandmother get better?" type questions:** These require clinical judgment. The AI must gracefully redirect.
- **AI-powered diagnostic tool based on uploaded scans or test results:** This is a regulated medical device territory in India under the Drugs and Cosmetics Act. Do not go anywhere near this.

---

## 8. Phased Product Roadmap (V1–V5)

### V1 — Foundation (Months 1–4)

**Goal:** A credible, fast, mobile-first educational website with medically reviewed content.

**Deliverables:**
- Core website: Home, About, Understanding Alzheimer's section, Basic Caregiving Guide
- 10–15 well-written, medically reviewed educational articles in English
- Simple glossary (searchable, non-AI)
- India-specific resource directory: ARDSI chapters, Dementia India Alliance, national helplines — as structured data, not a link dump
- Clear disclaimer on every page; medical reviewer credits on all content
- Contact page; About the project page (explains nonprofit mission and personal motivation)
- Full-text search (Pagefind)
- Mobile-first, accessible design (WCAG 2.1 AA target)
- Basic analytics (privacy-respecting, e.g., Plausible Analytics)

**Technology:** Next.js + MDX + Tailwind + Vercel. No backend database yet. Resource directory can be a JSON file in the repo at this stage.

**Not in V1:** Dashboards, AI, multilingual content, user accounts.

**Success metric:** 500 unique monthly visitors from India within 3 months of launch; zero factual errors in published content (enforced by review process).

---

### V2 — Data Dashboard (Months 5–9)

**Goal:** Add interactive public-health dashboards that make India-specific dementia data accessible and visual.

**Deliverables:**
- India state-level choropleth map: estimated dementia prevalence (from LASI/LASI-DAD)
- National trend chart: dementia burden 1990–2021 (GBD/IHME data)
- Risk factor visualization: contribution of diabetes, smoking, hypertension, low education to dementia risk
- Healthcare access map: geriatric specialist density by state (from NHM data)
- "India in Global Context" chart: India vs comparable countries (using OWID/IHME data)
- Data sourcing transparency panel on every chart ("This data comes from IHME GBD 2023, downloaded [date]")
- FastAPI backend deployed on Render
- PostgreSQL on Supabase with pre-aggregated data tables
- Dashboard pages are server-side rendered (good SEO and performance)

**Data sources activated in V2:** IHME GBD CSVs, Census 2011 (elderly population), NHM infrastructure data, OWID charts (embedded with attribution)

**Not in V2:** AI features, Hindi content, user accounts.

**Success metric:** Dashboard pages average >2 minutes time-on-page; charts cited by at least one researcher or journalist.

---

### V3 — AI Accessibility & Hindi Content (Months 10–15)

**Goal:** Add carefully bounded AI features and begin multilingual content.

**Deliverables:**
- "Ask the Guide" content assistant (Feature A — RAG-based, Claude-powered)
- Plain-language term explainer (Feature B)
- Caregiver Stage Navigator tool (Feature D — primarily rule-based)
- Hindi translation of top 5 most-visited articles (human-translated, not AI-generated)
- AI-generated multilingual summaries for remaining articles (clearly labeled as AI-generated)
- Caregiver stories section: real first-person accounts submitted and reviewed
- Crisis/emergency redirect: if AI receives concerning queries, immediate redirect to helplines

**Not in V3:** User accounts, community features, native app.

**Success metric:** AI assistant used on >20% of sessions; Hindi content accounts for >15% of traffic; zero complaints about AI overstepping into medical advice.

---

### V4 — Community & Verified Resources (Months 16–24)

**Goal:** Build sustainable engagement and a community layer.

**Deliverables:**
- User accounts (optional; email/OTP login for Indian users)
- Caregiver Forum: moderated peer support community
- Facility directory with community-submitted and verified entries (memory clinics, day care centers, support groups)
- Resource Finder tool (Feature E — hybrid AI + structured data)
- Human-verified translations of top 20 articles into Hindi, Tamil, Telugu
- Bookmark and save features (requires account)
- Weekly/monthly caregiver email newsletter
- DPDP Act 2023 compliance: privacy policy, data minimization, consent flows, right to erasure

**Technical additions:** Supabase Auth, moderation workflow, email system (Resend or Postmark)

**Not in V4:** Native mobile app.

**Success metric:** 50+ verified facility listings; active community forum with >100 members; 5,000+ monthly visitors.

---

### V5 — Depth, Scale & Partnerships (Year 2–3)

**Goal:** Establish the platform as the authoritative, sustainable, India-specific Alzheimer's educational resource.

**Deliverables:**
- Progressive Web App (PWA) for offline access (critical for areas with poor connectivity)
- Content in 6 Indian languages with human-translated, professionally reviewed articles
- Partnership with ARDSI for data sharing and content collaboration
- Research data portal: aggregate, de-identified datasets curated from public sources for Indian researchers
- Caregiver burden tracking (optional, user-initiated, privacy-preserving — stored locally on device)
- Video library: expert interviews, caregiving demonstrations
- Annual India Dementia Data Report (PDF + interactive web version)
- Explore Ayushman Bharat API integration for coverage information

**Governance:** If the platform reaches significant scale, explore formal nonprofit registration (Section 8/12A under Indian Income Tax Act) or FCRA registration if international funding is sought.

**Success metric:** 25,000+ monthly visitors; referenced by MoHFW or NIMHANS publications; sustainable funding (grants, CSR donations).

---

## 9. Risk Register

### Technical Risks

| Risk | Probability | Impact | Mitigation |
|---|---|---|---|
| Backend (Render) goes down; dashboards unavailable | Medium | Medium | Cache chart data as static JSON files; serve from Vercel edge if backend is down |
| IHME changes data download terms or restricts nonprofit access | Low | High | Maintain downloaded CSV snapshots in repo; monitor IHME announcements |
| Claude API pricing changes make AI features expensive | Medium | Medium | Budget cap per month; use Haiku model (cheapest); rate limit per session |
| Data pipeline fails silently; stale or wrong data shows on dashboards | Medium | High | Add data validation checks; display "Last updated" prominently; alerting on pipeline failures |
| Website performance poor on 2G/slow 4G connections | Medium | High | Static generation for all content pages; lazy load charts; image compression; Cloudflare CDN |

### Legal & Compliance Risks

| Risk | Probability | Impact | Mitigation |
|---|---|---|---|
| Platform inadvertently provides medical advice via AI | Medium | Very High | Strict prompt guardrails; output filtering; "not medical advice" on every AI response; human review of AI prompt templates |
| DPDP Act 2023 violation (if user accounts added) | Medium | High | Legal review before V4 launch; data minimization; explicit consent; privacy policy drafted by a legal professional |
| IHME data used in violation of non-commercial terms (e.g., if platform adds any revenue stream) | Low | High | Maintain strict nonprofit status; review IHME terms before any monetization |
| Copyright claim from ARDSI or other organization whose content is referenced | Low | Medium | Never reproduce content; always cite and link; build relationship with ARDSI proactively |

### Accessibility & Ethical Risks

| Risk | Probability | Impact | Mitigation |
|---|---|---|---|
| Platform is inaccessible to lower-literacy or elderly users who are caregivers themselves | High | High | Audio option on key articles; plain language standard; user testing with non-technical older adults |
| AI assistant gives a harmful response to a distressed caregiver | Low-Medium | Very High | Crisis detection in AI prompts; mandatory helpline redirect for flagged queries; no AI in crisis scenarios |
| Platform reinforces stigma (e.g., framing dementia as burden only, not dignity) | Medium | High | Editorial principle: always depict people with dementia as people first; review language guidelines; consult with caregivers in content review |
| Multilingual AI summaries contain translation errors in medical context | Medium | High | Label clearly as AI-generated; show original English; in V4, replace with human translations for high-traffic pages |

### Sustainability Risks

| Risk | Probability | Impact | Mitigation |
|---|---|---|---|
| Single maintainer burnout (you as the only developer) | High | High | Document all processes; use infrastructure that is low-maintenance; build community of contributors early |
| Content goes stale without regular medical review | High | High | Build review schedule into governance; date of last review visible on every page |
| Funding gap as platform scales to paid infrastructure tiers | Medium | Medium | Grant funding (Wellcome Trust, Gates Foundation India programs, CSR from Indian pharma companies); keep V1–V2 on free tiers as long as possible |

---

## 10. Visual Design Principles

### 10.1 Core Design Philosophy

A healthcare education platform has a different visual contract with users than a commercial product. Users arrive with anxiety, grief, confusion, and urgency. The design must project calm authority and warmth. It must say: "You are in the right place. This information is trustworthy. We understand what you are going through."

### 10.2 Specific Principles

**Principle 1: Trust through restraint**

Avoid the aggressive color schemes, flashy animations, and pop-up patterns common in commercial web design. Use white space generously. Every element on the page should earn its place. A healthcare platform that looks like a news aggregator or an e-commerce site loses credibility instantly.

**Principle 2: Typography as the primary design element**

Because the content is text-heavy by nature, typography does more visual work here than graphics. Recommendations:
- Body text: Minimum 18px for desktop, 16px for mobile. Line height 1.6–1.7.
- Font choice: A humanist sans-serif (e.g., Inter, Outfit, or Nunito) for body text is warmer and more readable than geometric sans-serifs. Avoid purely decorative fonts.
- Hierarchy: Strict 3-level heading hierarchy (H1 for page title, H2 for major sections, H3 for subsections). Never use bold as a heading substitute.
- Reading width: Maximum 65–70 characters per line for body text. Content pages should have a constrained content column, not full-bleed text.

**Principle 3: Color with meaning**

Proposed palette approach:
- **Primary:** A calm, mid-tone teal-blue or sage green — associated with healthcare without the clinical coldness of pure hospital white
- **Text:** Near-black (not pure #000000) on white/off-white — e.g., #1a1a2e on #fafafa
- **Accent:** A warm terracotta or amber for call-to-action elements (links, buttons) — brings warmth without being alarming
- **Data visualization:** A sequential color palette accessible to colorblind users (use viridis or cividis scales; never use red/green alone to distinguish data)
- **Alert/warning:** Standard yellow/amber; red only for genuine emergencies (helpline CTAs)
- **Avoid:** Purple (associated with royalty/luxury, not health), bright orange/red as primary colors (alarm connotation), pure grey backgrounds (cold and institutional)

**Principle 4: Accessibility is non-negotiable**

- WCAG 2.1 AA minimum; target AAA for text
- Minimum contrast ratio 4.5:1 for body text; 3:1 for large text
- Every image has descriptive alt text
- All interactive elements keyboard-navigable
- No color as the sole carrier of meaning
- Focus indicators visible
- Forms with clear error messages (not just red borders)
- Test with screen readers (NVDA/JAWS for Windows; VoiceOver on iOS — given Indian mobile usage patterns, iOS testing is essential)

**Principle 5: India-appropriate imagery**

If stock photography is used, use images of Indian families, Indian homes, and Indian caregiving contexts. Images of elderly white Europeans in clinical Western settings are jarring and othering to an Indian audience. Consider commissioning original illustration rather than stock photography — this avoids licensing issues and allows authentic visual representation.

Consider illustration styles that feel warm and human: line art with soft fills, gentle and non-clinical. Avoid:
- Generic pill/brain stock imagery (looks pharmaceutical and commercial)
- Images that portray people with dementia only as burdens or in distress
- Generic global stock photography with no Indian context

**Principle 6: Mobile-first layout**

India's internet is overwhelmingly mobile. Design for a 360px-wide phone screen first, then adapt upward. Specific requirements:
- Navigation: hamburger menu on mobile with large tap targets (minimum 44x44px)
- Charts: Must be readable on a small screen; avoid charts that require horizontal scrolling
- Dashboard panels: Stack vertically on mobile, not side by side
- Text inputs and forms: Large enough to avoid zoom on iOS (16px minimum font on inputs)

**Principle 7: Navigation clarity**

Users in distress do not browse — they search for something specific. The information architecture should allow someone to reach "What to do when someone is diagnosed" in two clicks from the homepage. Primary navigation should have no more than 6 top-level categories. A persistent global search is essential.

Proposed navigation structure:
1. **Understand Alzheimer's** — What it is, how it progresses, types of dementia
2. **Caregiving Guide** — By stage, by challenge, practical how-to
3. **For the Person Diagnosed** — Resources written for the person with dementia, not just caregivers
4. **Find Help in India** — Resource directory, helplines, facilities
5. **Data & Research** — Dashboards, reports, public data
6. **Our Story** — About the project, team, transparency

---

## 11. Open Questions & Decisions Needed

These are genuine decision points, not rhetorical. Each should be resolved before beginning V1 development.

**Q1: Who is the medical reviewer for V1?**  
This is the most important question. Without at least one qualified medical professional (geriatrician, neurologist, or dementia specialist) willing to review content before it goes live, the platform should not publish health content. Options: reach out to AIIMS geriatrics department, contact ARDSI for a member physician, contact Dementia India Alliance. This may require a formal MOU or advisory board structure.

**Q2: What is the platform's name and domain?**  
The name signals mission. Options to consider: something with "memory" (warm, personal), something with "care" (practical), something India-specific. Avoid generic names like "dementia.in" — they are institutional rather than human.

**Q3: How will the platform handle requests to remove caregiver stories?**  
When V3 opens story submissions, a person who submits their story may later want it removed. You need a clear policy before any user content is accepted: how fast will you respond to removal requests? This is both a DPDP Act concern and a human dignity concern.

**Q4: What is the relationship with ARDSI?**  
Building something that duplicates ARDSI's digital presence without their knowledge could be seen as competitive rather than complementary. A proactive outreach to ARDSI — explaining the educational focus, the data transparency goal, and the nonprofit nature — could open doors to collaboration rather than tension.

**Q5: How will you handle a user who appears to be in crisis?**  
This must be specified in writing before any AI feature goes live. Define: what keywords or patterns trigger a redirect? What resources are shown? Who is listed as a contact? Tele-MANAS (14416), Dementia India Alliance helpline (8585 990 990), and iCall (9152987821) should be pre-integrated.

---

## Appendix A: Key Organizations & Contacts

| Organization | Role | Contact / URL |
|---|---|---|
| ARDSI National | India's national dementia body | ardsi.org / ardsinationaloffice@gmail.com |
| Dementia India Alliance | National support line | dementiaindiaalliance.org / 8585 990 990 |
| LASI / LASI-DAD data access | Research dataset | g2aging.org |
| IHME GBD data | Global burden data | healthdata.org / vizhub.healthdata.org |
| data.gov.in | Indian government open data | data.gov.in |
| WHO GHO API | WHO dementia indicators | apps.who.int/gho/athena/api/ |
| Tele-MANAS | National mental health helpline | 14416 |

---

## Appendix B: Content Review Checklist (Per Article)

Before any educational article is published:

- [ ] Written in plain language (tested against Flesch-Kincaid score or equivalent)
- [ ] All factual claims traced to a cited, licensed source
- [ ] No treatment recommendations (for specific drugs or therapies)
- [ ] No diagnostic claims (does not tell users whether they or their relative has dementia)
- [ ] Reviewed by a named, credentialed medical professional
- [ ] Review date and reviewer name visible in page metadata and footer
- [ ] Disclaimer present ("This article is educational and does not constitute medical advice")
- [ ] Images are appropriately licensed and have alt text
- [ ] Links to external resources are functional and point to reputable organizations

---

*This document was prepared as pre-implementation research. No code should be written until at least the following decisions are made: medical reviewer identified (Q1), platform name confirmed (Q2), relationship with ARDSI initiated (Q4).*

*Next step: Architecture review and decision on open questions, then V1 specification document.*
