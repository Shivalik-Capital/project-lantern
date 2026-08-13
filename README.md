# Project Lantern

Project Lantern is an open-source educational platform dedicated to providing clear, culturally relevant, and medically sound information about Alzheimer's disease and dementia for Indian families.

## Purpose

India has an estimated 5.3 million people living with dementia. Families often navigate the complexities of caregiving without adequate support or localized information. Project Lantern addresses this gap by offering:
- Practical caregiving guides tailored to the Indian context.
- A plain-language medical glossary.
- A curated directory of support resources including national helplines and local memory clinics.

## Core Principles

1. **Evidence-Based:** All content is meticulously researched and reviewed by medical professionals. We do not offer diagnostic tools or symptom checkers.
2. **Culturally Contextual:** Resources are specifically tailored for Indian families, addressing regional challenges and cultural nuances.
3. **Completely Free:** The platform is accessible to all without paywalls, advertisements, affiliate links, or subscription fees.

## Detailed Roadmap

### Phase 1: Foundation (Completed)
- Set up the Next.js 16.3 application architecture.
- Establish the Tailwind v4 design system (Sage green and Amber color palette).
- Create core layout components (Navigation Header, Footer, Helplines Banner).
- Draft the initial set of educational articles and caregiving guides.
- Build the interactive client-side glossary and resource directory.

### Phase 2: Medical Review and Editorial Refinement (In Progress)
- Onboard founding medical reviewers (geriatricians, neurologists, and dementia specialists).
- Review all foundational articles for clinical accuracy.
- Refine editorial guidelines for future content contributors.
- Establish partnerships with local NGOs and ARDSI chapters for directory verification.

### Phase 3: Content Expansion
- Expand the article library to cover late-stage care and legal considerations in India.
- Integrate Velite for robust MDX content management.
- Implement full-text search across the platform using Pagefind.

### Phase 4: Multilingual Support
- Architect the platform for internationalization (i18n).
- Translate foundational content into Hindi, Tamil, and Telugu.
- Partner with regional experts to ensure translated content maintains clinical accuracy and cultural sensitivity.

### Phase 5: Public Health Data Integration
- Develop interactive data visualization dashboards.
- Integrate national public health data (e.g., LASI and IHME GBD data) to highlight state-level prevalence and risk factors.
- Provide accessible reporting for researchers and policymakers.

## Local Development

The project is built using Next.js, React, TypeScript, and Tailwind CSS.

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Contributing

We welcome contributions from developers, researchers, and medical professionals. Please review our contribution guidelines before submitting pull requests.

## License

This project is licensed under the MIT License.
