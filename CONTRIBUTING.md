# Contributing to Project Lantern

Thank you for your interest in contributing. Project Lantern is a free educational platform about Alzheimer's disease and dementia care for Indian families. Every contribution — from fixing a typo to reviewing medical content — helps.

## The Most Important Contribution

**Medical content review.** All V1 articles are marked `status: draft` and have not been reviewed by a qualified medical professional. We need geriatricians, neurologists, or dementia specialists willing to review educational content.

If you are a qualified medical professional or know one who might be interested, please reach out before making any content changes.

## What We're Looking For

### High Priority
- **Medical review** of draft articles
- **Factual corrections** — if something is medically inaccurate, please flag it immediately, even with just an issue
- **Resource additions** — ARDSI chapters, helplines, or memory clinics not in the directory (include the source URL)
- **Accessibility issues** — anything that makes the site harder to use for people with disabilities

### Welcome Contributions
- **New educational articles** — please open an issue first to discuss scope before writing
- **Glossary terms** — additions to `content/glossary/terms.json`
- **Bug reports** — broken links, rendering errors, mobile layout issues
- **Typos and language improvements**

### Out of Scope for V1
- Hindi/multilingual content (planned for V3)
- Data dashboards (planned for V2)
- User accounts or community features (planned for V4)
- Any diagnostic or symptom-checking feature (not in any version — see `docs/DECISIONS.md`)

## Content Standards

Every article on this platform must meet these standards before publishing (i.e., before being marked `status: reviewed`):

1. **Plain language** — written for a general adult audience, not medical professionals
2. **Sourced** — every factual claim traces to a named, reputable source
3. **No diagnostic claims** — does not tell readers whether they or a family member has dementia
4. **No treatment recommendations** — does not recommend specific medications or therapies
5. **Medically reviewed** — reviewed by a named, credentialed professional
6. **Includes disclaimer** — the standard disclaimer is included at the top of every article
7. **India-appropriate** — resources, context, and examples reflect the Indian experience

## How to Contribute

### For Code Contributions

1. Fork the repository and clone it locally
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes following the code style in existing files
4. Run `npm run lint` to check for linting errors
5. Run `npm run build` to verify the build passes
6. Open a pull request with a clear description of what you changed and why

### For Content Contributions

1. Open an issue first describing what you want to add or change
2. Wait for a maintainer to confirm before writing
3. Write content following the article template and content standards above
4. Open a pull request — content PRs must include all sources

### For Bug Reports

Please open a GitHub issue with:
- What you expected to happen
- What actually happened
- Browser and device (especially important for mobile accessibility issues)
- Screenshots if relevant

## Article Frontmatter

All articles must include the following frontmatter fields:

```yaml
---
title: "Article Title"
description: "One or two sentences describing the article content."
section: understand  # or caregiving, diagnosed
slug: article-url-slug
status: draft  # never change to reviewed without medical sign-off
author: "Your Name"
tags: ["relevant", "tags"]
lastUpdated: "YYYY-MM-DD"
sources:
  - name: "Source Name"
    url: "https://source-url.com"
---
```

## Code of Conduct

This project is about helping families navigate a difficult disease. Please engage with the same care and dignity you would bring to that conversation.

- Be respectful in all interactions
- Assume good faith
- Focus on the substance of contributions, not personalities
- Remember that the audience for this content includes people in genuine distress

---

*Questions? Open a GitHub issue or use the contact information in the README.*
