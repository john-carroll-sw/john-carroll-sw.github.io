# John Carroll Portfolio V2 PRD

## 1. Overview

Portfolio V2 should present John Carroll as an enterprise AI builder who can move from ambiguous business problem to working, production-minded system. The site should keep the personality and kinetic energy of V1, especially the video and animation-driven hero, while adding clearer positioning, stronger proof, sharper project storytelling, and a more mature visual system.

The intended feeling is:

> Technical, cinematic, credible, and alive.

V2 should not become a generic dark terminal portfolio. It can borrow clarity from Jacob Smith's Bedrock Technical Solutions site, but the final result should feel like John's body of work: AI systems, full-stack delivery, cloud architecture, demos, and human-centered problem solving.

## 2. Goals

- Preserve the V1 hero's video and animation personality as a signature element.
- Make John's positioning instantly clear in the first viewport.
- Convert the long project list into a curated set of featured systems with outcomes and proof.
- Translate resume credibility into web-native sections: roles, impact metrics, awards, skills, and systems delivered.
- Make the site feel senior, current, and production-minded without losing warmth or playfulness.
- Improve SEO, accessibility, performance, and resume download freshness.
- Provide a design and content structure that can evolve without requiring major rewrites.

## 3. Non-Goals

- Do not clone Jacob's visual design or copy.
- Do not remove the video/animation hero concept.
- Do not make the site a static resume page.
- Do not show placeholder sections.
- Do not surface every technology John has ever used with equal weight.
- Do not prioritize flashy effects over legibility, responsiveness, accessibility, or credibility.

## 4. Target Audience

Primary:

- AI and engineering leaders evaluating John's ability to lead complex AI systems.
- Enterprise stakeholders looking for an engineer or architect who can turn AI ideas into real implementations.
- Recruiters or hiring managers scanning for senior technical credibility.

Secondary:

- Developers and collaborators evaluating project depth.
- Founders or operators looking for AI automation, RAG, agentic workflow, or full-stack prototyping help.
- Friends, peers, and community members exploring John's work.

## 5. Positioning

Recommended headline direction:

**John Carroll builds agentic AI systems from prototype to production.**

Supporting positioning:

- Forward Deployed AI Engineering
- Agentic Systems Architecture
- Enterprise RAG and Search
- Full-Stack AI Products
- Cloud-Native Delivery
- Human-Centered Automation

Short descriptor:

**Forward Deployed AI Engineer · Agentic Systems Architect · Full-Stack Builder**

## 6. Brand Principles

### Keep

- Motion-rich hero background.
- Strong personal voice.
- Real demos and project artifacts.
- Coffee/curiosity/builder energy where it feels natural.
- Dark mode as the primary experience.

### Reduce

- Repeated neon gradients.
- Placeholder content.
- Overly broad tech lists.
- Carousel dependence for project discovery.
- Effects that compete with the story.

### Add

- Outcome-first project framing.
- Resume-backed credibility.
- Case-study structure.
- A profile dossier card.
- Cleaner navigation and section hierarchy.
- A sharper "What I Build" section.

## 7. Information Architecture

Recommended page structure:

1. Hero
2. Credibility Strip
3. Profile Dossier
4. About / Operating Philosophy
5. Featured Systems
6. What I Build
7. Technical Systems Map
8. Recognition / Experience Timeline
9. Contact

Optional future pages:

- `/projects/[slug]` for case studies
- `/writing` for blogs/articles
- `/speaking` for talks/workshops
- `/resume` for resume metadata and download

## 8. Hero Requirements

The hero is a signature element and should remain video/animation-forward.

### Functional Requirements

- Reuse the V1 video background concept.
- Support multiple hero video modes or loops.
- Maintain smooth crossfade or transition behavior.
- Keep text readable over motion on desktop and mobile.
- Respect `prefers-reduced-motion`.
- Provide a static poster/fallback image for reduced motion and slow networks.
- Keep CTAs visible and stable.

### Content

Primary headline:

- "I build AI systems that move from prototype to production."

Alternate headline options:

- "Agentic AI systems, built for real-world workflows."
- "From messy enterprise problems to working AI systems."
- "I build full-stack AI systems that ship."

Subcopy:

- "Forward deployed AI engineering, enterprise RAG, agentic workflows, multimodal assistants, and cloud-native full-stack products."

Hero CTAs:

- View Featured Systems
- Download Resume
- Get in Touch

### Visual Direction

- Keep immersive full-viewport or near full-viewport video.
- Use calmer overlays so content feels intentional.
- Use terminal or system-status accents sparingly.
- Make the hero feel cinematic and technical, not chaotic.
- Maintain a hint of the next section below the first viewport where practical.

### Hero Console Concept

Use a small animated console panel over the video background:

```txt
john@portfolio ~
$ identify_high_value_ai_workflows
enterprise opportunities found

$ ship_agentic_system --secure --scalable --human_centered
system online
```

This should feel like an accent, not the whole hero.

## 9. Credibility Strip

Purpose:

- Quickly prove seniority and real-world impact.

Candidate items:

- Microsoft
- Boeing
- Cigna / Evernorth
- $200M+ AI-related revenue influenced
- $25M annual efficiency savings
- AI Global Black Belt Hackathon, 1st Place
- Forward Deployed Engineering

Implementation:

- Compact horizontal strip on desktop.
- Wrap into 2-column or stacked chips on mobile.
- Avoid looking like a sponsor logo wall unless actual logos are used intentionally.

## 10. Profile Dossier

Inspired by Jacob's profile card, but tailored to John.

Fields:

- Name: John Carroll
- Location: Atlanta, GA
- Focus: Agentic AI, RAG, enterprise platforms
- Experience: Microsoft, Boeing, Cigna / Evernorth
- Strength: Prototype to production
- Education: Auburn, Quantic, Georgia Tech OMSCS
- Recognition: AI hackathon winner, STARS Award, Quality/production release recognition
- Links: GitHub, LinkedIn, Resume

Design:

- Compact, technical, and skimmable.
- Use key-value rows.
- Include subtle code/console styling.
- Pair with a short narrative about John's operating philosophy.

## 11. About Section

The about section should answer:

- What kinds of problems does John solve?
- Why is he credible?
- How does he work?
- What makes his portfolio different from a list of demos?

Content direction:

John is an AI architecture and engineering leader focused on building practical AI systems for complex enterprise workflows. His work spans forward deployed engineering, agentic orchestration, RAG, search, cloud platforms, full-stack product delivery, and executive-facing AI adoption. He is strongest where business ambiguity meets technical complexity.

Tone:

- Confident
- Specific
- Warm
- Less generic than the current "passionate software engineer" wording

## 12. Featured Systems

Purpose:

- Replace the long undifferentiated project list with curated, outcome-oriented work.

Recommended featured projects:

- Supply Chain Reasoning Engine
- Field Technician Assistant
- Coffee Chat Voice Assistant
- Video Analysis with LLMs
- Extract Image from Product URL
- Job Description Match to Resumes
- Planogram Analysis
- Document Extraction to JSON

Each featured card should include:

- Project title
- One-line outcome
- Problem domain
- Role or contribution
- Key stack
- Demo/GitHub link
- Visual asset
- Optional "case study" action

Card copy pattern:

```txt
Field Technician Assistant
Hands-free multimodal RAG for technicians working from complex technical documentation.

Built with: Azure AI Search, OpenAI, speech, image analysis, TypeScript, Python
```

Outcome-first examples:

- "Turns product pages into structured image extraction workflows."
- "Lets field technicians ask technical questions with voice, images, and grounded retrieval."
- "Audits retail planograms using multimodal reasoning."
- "Analyzes video content and enables chat over visual evidence."

## 13. Case Study Model

V2 can launch with cards only, but the structure should support detail drawers or future pages.

Case study fields:

- Problem
- Why it mattered
- What I built
- Architecture
- Stack
- Demo
- GitHub
- Outcome
- Lessons learned

Suggested interaction:

- Project card opens a drawer or navigates to a detail page.
- Detail view includes architecture bullets and screenshots/GIFs.
- Keep the interaction fast and low-friction.

## 14. What I Build

Purpose:

- Translate John's capabilities into buyer/operator language.

Cards:

- Agentic Workflows
- Enterprise RAG and Search
- Voice and Multimodal Assistants
- AI Automation Prototypes
- Evaluation and Safety Guardrails
- Cloud-Native Full-Stack Systems

Each card should answer:

- What it is
- When it helps
- What John brings to it

Example:

**Enterprise RAG and Search**

"Retrieval systems with ingestion, chunking, indexing, semantic and hybrid search, grounding, citations, evaluation, and monitoring."

## 15. Technical Systems Map

Purpose:

- Replace the huge tech stack wall with a sharper map of John's applied systems expertise.

Categories:

- AI Orchestration: LangChain, LangGraph, Semantic Kernel, AutoGen, PromptFlow
- Retrieval and Search: Azure AI Search, hybrid search, reranking, embeddings, citations
- Data and Knowledge: knowledge graphs, Neo4j, ETL, metadata pipelines, vector databases
- Cloud and Platform: Azure, AWS, GCP, Docker, Kubernetes, CI/CD, observability
- Full-Stack Product: React, Next.js, TypeScript, Python, FastAPI, Node.js
- Evaluation and Safety: benchmarks, guardrails, quality monitoring, human-in-the-loop workflows

Design:

- Use dense but readable grouped chips.
- Avoid listing every historical tool.
- Prioritize relevance to V2 positioning.

## 16. Recognition and Experience

Purpose:

- Give career credibility without turning the page into a resume.

Recommended format:

- Timeline or stacked milestones.
- Each milestone includes organization, role, date range, and one impact bullet.

Candidate milestones:

- Cigna / Evernorth: Forward Deployed Engineering and AI Enablement
- Microsoft: AI Apps and Agents Global Black Belt
- Boeing: AI/ML engineering and analytics systems
- Hexagon: public safety SaaS and cloud engineering

Recognition highlights:

- Microsoft AI Global Black Belt Hackathon, 1st Place
- Boeing Alabama STARS Award
- Cigna/Evernorth fastest production release recognition
- Global Hackathon judge, AI Agents category

Open issue:

- Resume dates should be reviewed before public release, especially future-dated or overlapping role dates.

## 17. Resume Download

Phase 1:

- Keep the existing stable public route: `/John_Carroll_Resume.pdf`.
- Update the file manually before launch.

Phase 2:

- Add a sync script that finds the latest resume source, exports or converts to PDF, and copies it into `public/John_Carroll_Resume.pdf`.
- Generate `data/resume.json` with source filename and updated date.
- Display "Resume updated [date]" near the download link.

Do not block V2 design work on resume automation.

## 18. Navigation

Desktop nav:

- About
- Systems
- Capabilities
- Experience
- Contact
- Resume

Mobile nav:

- Full-screen or sheet menu.
- Keep Resume as a visible action.
- Avoid hiding primary CTAs behind too many taps.

Behavior:

- Sticky header.
- Transparent or low-contrast over hero.
- Solid/backdrop blur after scrolling.
- Active section indicator optional.

## 19. Visual Design Requirements

Palette:

- Primary background: deep near-black
- Surface: dark blue/black or charcoal
- Accent: cyan/teal
- Secondary accents: restrained purple/pink only where useful
- Text: high-contrast white/off-white
- Muted text: slate gray

Typography:

- Primary sans-serif for readability.
- Monospace for system/console accents.
- Avoid excessive hero-scale text outside the hero.
- Do not use negative letter spacing.

Cards:

- Border radius 8px or less.
- Subtle borders and shadows.
- No nested card-within-card layouts.
- Use visual assets for project cards where inspection matters.

Motion:

- Hero video transitions are allowed and encouraged.
- Microinteractions should be subtle.
- Respect `prefers-reduced-motion`.
- Avoid layout shift caused by animations.

## 20. Accessibility Requirements

- All text must meet contrast expectations.
- Hero text must remain readable over video.
- All interactive controls need accessible names.
- Buttons and links must be keyboard reachable.
- Project cards should not require hover to reveal essential content.
- Reduced motion mode must disable or simplify video and glitch effects.
- Mobile text must not overflow buttons or cards.
- Use semantic sections and headings.

## 21. Performance Requirements

- Hero videos should be optimized for web delivery.
- Provide poster images.
- Lazy-load non-critical media.
- Prefer static export compatibility.
- Avoid loading all project GIFs above the fold.
- Avoid client-only rendering for the whole page unless necessary.
- Split interactive components from static content where possible.

Targets:

- First meaningful content visible quickly.
- No blank hero while videos load.
- Mobile should feel smooth on ordinary devices.

## 22. SEO and Metadata

Requirements:

- Strong page title and description.
- Open Graph image.
- Twitter/social card metadata.
- Structured content for projects where practical.
- Resume link should be crawlable.
- Use semantic headings and descriptive project copy.

Suggested title:

**John Carroll | Forward Deployed AI Engineer**

Suggested description:

**John Carroll builds agentic AI systems, enterprise RAG, multimodal assistants, and cloud-native full-stack products from prototype to production.**

## 23. Content Model

Recommended data files:

- `data/profile.json`
- `data/projects.json`
- `data/resume.json`
- `data/experience.json`
- `data/capabilities.json`

Project schema:

```json
{
  "title": "Field Technician Assistant",
  "slug": "field-technician-assistant",
  "summary": "Hands-free multimodal RAG for technicians working from complex documentation.",
  "problem": "Technicians need fast, grounded answers while working in the field.",
  "role": "Architecture, full-stack prototype, AI integration",
  "stack": ["Azure AI Search", "OpenAI", "Python", "TypeScript"],
  "image": "/projects/field-technician-assistant.gif",
  "links": {
    "github": "https://github.com/...",
    "demo": ""
  },
  "featured": true
}
```

## 24. Launch Scope

V2 launch should include:

- New hero using V1 video/animation foundation.
- Updated positioning and copy.
- Credibility strip.
- Profile dossier.
- Refined About section.
- Featured Systems grid.
- What I Build section.
- Technical Systems Map.
- Recognition/Experience section.
- Contact section.
- Stable resume download link.
- SEO metadata.
- Responsive design pass.
- Basic reduced-motion support.

Can defer:

- Full case study pages.
- Blog section.
- Speaking section.
- Resume automation script.
- Advanced project filtering.
- Analytics dashboard.

## 25. Acceptance Criteria

- The first viewport clearly explains what John builds and why it matters.
- The hero keeps the V1 video/animation spirit.
- No placeholder sections are visible.
- Project cards lead with outcomes or concrete capabilities.
- The site highlights enterprise credibility without reading like a resume.
- The resume download link works at `/John_Carroll_Resume.pdf`.
- Mobile layout is polished and readable.
- Reduced motion mode is usable.
- Project content can be updated through data files.
- The site builds successfully as a static export.

## 26. Open Questions

- Which hero videos from V1 are must-keep?
- Should the hero retain rotating titles, or should it move to a calmer animated console?
- Which 6 to 8 projects are the official V2 featured systems?
- Do we want project detail drawers at launch, or cards only?
- Should the visual tone lean more "cinematic AI lab" or "executive technical consultant"?
- Should John's current employer be presented as Cigna, Evernorth, The Cigna Group, or Solomon Page placement language?
- Which resume date ranges should be public-facing after cleanup?
- Should contact use a form, mailto link, calendar link, or all three?

## 27. Suggested Build Sequence

1. Create content data model and copy draft.
2. Refactor the page into section components.
3. Build the V2 hero using the existing video assets.
4. Build profile dossier and credibility strip.
5. Convert projects into featured systems.
6. Add capabilities and systems map.
7. Add experience/recognition section.
8. Add SEO metadata and resume link.
9. Run responsive, accessibility, and motion checks.
10. Polish visual details and launch.
