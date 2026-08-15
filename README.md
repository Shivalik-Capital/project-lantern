# Project Lantern

Project Lantern is a comprehensive, culturally-contextualized educational platform and data dashboard for Alzheimer's disease and dementia care in India.

## Roadmap

V1 — Foundation (Months 1–4)

Goal: A credible, fast, mobile-first educational website with medically reviewed content.

Deliverables:

Core website: Home, About, Understanding Alzheimer's section, Basic Caregiving Guide
10–15 well-written, medically reviewed educational articles in English
Simple glossary (searchable, non-AI)
India-specific resource directory: ARDSI chapters, Dementia India Alliance, national helplines — as structured data, not a link dump
Clear disclaimer on every page; medical reviewer credits on all content
Contact page; About the project page (explains nonprofit mission and personal motivation)
Full-text search (Pagefind)
Mobile-first, accessible design (WCAG 2.1 AA target)
Basic analytics (privacy-respecting, e.g., Plausible Analytics)

Technology: Next.js + MDX + Tailwind + Vercel. No backend database yet. Resource directory can be a JSON file in the repo at this stage.

Not in V1: Dashboards, AI, multilingual content, user accounts.

Success metric: 500 unique monthly visitors from India within 3 months of launch; zero factual errors in published content (enforced by review process).

V2 — Data Dashboard (Months 5–9)

Goal: Add interactive public-health dashboards that make India-specific dementia data accessible and visual.

Deliverables:

India state-level choropleth map: estimated dementia prevalence (from LASI/LASI-DAD)
National trend chart: dementia burden 1990–2021 (GBD/IHME data)
Risk factor visualization: contribution of diabetes, smoking, hypertension, low education to dementia risk
Healthcare access map: geriatric specialist density by state (from NHM data)
"India in Global Context" chart: India vs comparable countries (using OWID/IHME data)
Data sourcing transparency panel on every chart ("This data comes from IHME GBD 2023, downloaded [date]")
FastAPI backend deployed on Render
PostgreSQL on Supabase with pre-aggregated data tables
Dashboard pages are server-side rendered (good SEO and performance)

Data sources activated in V2: IHME GBD CSVs, Census 2011 (elderly population), NHM infrastructure data, OWID charts (embedded with attribution)

Not in V2: AI features, Hindi content, user accounts.

Success metric: Dashboard pages average >2 minutes time-on-page; charts cited by at least one researcher or journalist.

V3 — AI Accessibility & Hindi Content (Months 10–15)

Goal: Add carefully bounded AI features and begin multilingual content.

Deliverables:

"Ask the Guide" content assistant (Feature A — RAG-based, Claude-powered)
Plain-language term explainer (Feature B)
Caregiver Stage Navigator tool (Feature D — primarily rule-based)
Hindi translation of top 5 most-visited articles (human-translated, not AI-generated)
AI-generated multilingual summaries for remaining articles (clearly labeled as AI-generated)
Caregiver stories section: real first-person accounts submitted and reviewed
Crisis/emergency redirect: if AI receives concerning queries, immediate redirect to helplines

Not in V3: User accounts, community features, native app.

Success metric: AI assistant used on >20% of sessions; Hindi content accounts for >15% of traffic; zero complaints about AI overstepping into medical advice.

V4 — Community & Verified Resources (Months 16–24)

Goal: Build sustainable engagement and a community layer.

Deliverables:

User accounts (optional; email/OTP login for Indian users)
Caregiver Forum: moderated peer support community
Facility directory with community-submitted and verified entries (memory clinics, day care centers, support groups)
Resource Finder tool (Feature E — hybrid AI + structured data)
Human-verified translations of top 20 articles into Hindi, Tamil, Telugu
Bookmark and save features (requires account)
Weekly/monthly caregiver email newsletter
DPDP Act 2023 compliance: privacy policy, data minimization, consent flows, right to erasure

Technical additions: Supabase Auth, moderation workflow, email system (Resend or Postmark)

Not in V4: Native mobile app.

Success metric: 50+ verified facility listings; active community forum with >100 members; 5,000+ monthly visitors.

V5 — Depth, Scale & Partnerships (Year 2–3)

Goal: Establish the platform as the authoritative, sustainable, India-specific Alzheimer's educational resource.

Deliverables:

Progressive Web App (PWA) for offline access (critical for areas with poor connectivity)
Content in 6 Indian languages with human-translated, professionally reviewed articles
Partnership with ARDSI for data sharing and content collaboration
Research data portal: aggregate, de-identified datasets curated from public sources for Indian researchers
Caregiver burden tracking (optional, user-initiated, privacy-preserving — stored locally on device)
Video library: expert interviews, caregiving demonstrations
Annual India Dementia Data Report (PDF + interactive web version)
Explore Ayushman Bharat API integration for coverage information

Governance: If the platform reaches significant scale, explore formal nonprofit registration (Section 8/12A under Indian Income Tax Act) or FCRA registration if international funding is sought.

Success metric: 25,000+ monthly visitors; referenced by MoHFW or NIMHANS publications; sustainable funding (grants, CSR donations).
