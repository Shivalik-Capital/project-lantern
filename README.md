# 🏮 Project Lantern

**Project Lantern** is a comprehensive, culturally-contextualized educational platform and data dashboard for Alzheimer's disease and dementia care in India. 

The available information on dementia is almost entirely written for Western families—assuming access to GPs, structured care homes, and healthcare systems that most Indian families will never encounter. Project Lantern bridges this gap by providing tailored, localized, and practical information, alongside offline-first tracking tools for caregivers.

---

## ✨ Features

- **Culturally-Contextualized Guides:** Articles and guides specifically written for the Indian healthcare context.
- **Dementia Data Map:** Interactive choropleth map visualizing estimated dementia prevalence across Indian states.
- **Offline-First Symptom Tracker:** A daily symptom tracker (Memory, Sleep, Agitation, Appetite, Blood Pressure) designed for caregivers. It stores data locally on the device via IndexedDB (Dexie) and never sends personal health data to a server.
- **PDF Export for Doctors:** Generates structured PDF reports of symptom history to hand to a neurologist or doctor during a 5-minute consultation.
- **PWA Ready:** Installable as a Progressive Web App (PWA) on iOS and Android for offline access.
- **Daily Reminders:** Integrated Google and Apple Calendar recurring reminders to help caregivers remember to log symptoms.

---

## 🛠 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) 16 (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Content:** [Velite](https://velite.js.org/) for type-safe MDX processing
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Local Storage:** [Dexie.js](https://dexie.org/) (IndexedDB wrapper) for the offline tracker
- **PDF Generation:** `jspdf` & `jspdf-autotable`
- **Design System:** Custom "Gleap" theme (Warm cream-paper workspace with graphite and lime pulse accents)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Shivalik-Capital/project-lantern.git
   cd project-lantern
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the content (Velite) and start the development server:
   ```bash
   npm run dev
   ```
   *Note: `npm run dev` automatically runs `velite build` to compile the MDX content before starting Next.js.*

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

- `/app` - Next.js App Router pages (Home, Tracker, Articles, Maps).
- `/components` - Reusable React components (UI elements, layout, tracker inputs).
- `/content` - MDX files for articles and guides, parsed by Velite.
- `/public` - Static assets, PWA manifest, favicons, and the static `.ics` reminder file.
- `velite.config.ts` - Schema definition for the MDX content structure.

---

## 🗺 Roadmap

**V1 & V2 — The Educational Foundation & Data Dashboard** ✅ **COMPLETED**
- Core website structure and educational content repository.
- India state-level choropleth map for dementia prevalence.
- Offline-first daily caregiver tracker with PDF export capabilities.
- Progressive Web App (PWA) installation.

**V3 — AI Accessibility & Hindi Content** *(Upcoming)*
- "Ask the Guide" content assistant (RAG-based AI).
- Plain-language term explainer.
- Hindi translation of top most-visited articles.
- Caregiver stories section.

**V4 — Community & Verified Resources** *(Future)*
- Caregiver Forum: moderated peer support community.
- Facility directory (memory clinics, day care centers, support groups).
- Expanded translations into Tamil and Telugu.
- DPDP Act 2023 compliance enhancements.

**V5 — Depth, Scale & Partnerships** *(Future)*
- Complete translation into 6 Indian languages.
- Partnership with ARDSI for data sharing and content collaboration.
- Research data portal for Indian researchers.
- Video library (expert interviews, caregiving demonstrations).

---

*Disclaimer: Project Lantern provides educational information, not medical advice. Content is for informational purposes only.*
