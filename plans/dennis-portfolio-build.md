# Blueprint: Dennis Portfolio — dennisbui.dev

**Objective**: Build and deploy a modern personal portfolio website at dennisbui.dev  
**PRD**: `.claude/prds/dennis-portfolio.prd.md`  
**Mode**: Direct (no GitHub CLI — edit-in-place, no branches)  
**Total steps**: 8  
**Parallelism**: Steps 4–7 are independent and can run in parallel after Step 2

---

## Tech Stack Decisions

| Concern | Choice | Reason |
|---|---|---|
| Framework | Next.js 15 (App Router) | Best SEO, RSC, trending |
| Language | TypeScript | Type safety, standard |
| Styling | TailwindCSS v4 | Latest release, utility-first |
| Animation | Framer Motion | Modern, declarative |
| Deploy | Docker → VPS | Self-hosted, portable, fast deployment |
| Content | TypeScript data files | Simple, no CMS needed for MVP |
| Blog | RSS feed via `rss-parser` | No API key, reliable |
| Design style | Developer dark portfolio (Brittany Chiang-inspired) | Clean, minimal, subtle motion |

---

## Dependency Graph

```
Step 1 (Setup)
    └── Step 2 (Design System)
            ├── Step 3 (Hero/About)   ─┐
            ├── Step 4 (Skills)        │ parallel
            ├── Step 5 (Experience)    │
            ├── Step 6 (Projects)      │
            └── Step 7 (Blog)         ─┘
                    └── Step 8 (Contact + Deploy)
```

---

## Steps

### Step 1 — Project Initialization
**Status**: pending

**Context brief**: Empty Next.js project needs to be scaffolded with the agreed tech stack. This is the foundation all other steps depend on.

**Tasks**:
- [ ] Scaffold Next.js 15 with TypeScript: `npx create-next-app@latest . --typescript --tailwind --app --src-dir --import-alias "@/*"`
- [ ] Install dependencies: `framer-motion`, `rss-parser`, `@types/rss-parser`
- [ ] Configure `next.config.ts`: image domains, RSS fetch allowlist
- [ ] Set up project structure: `src/components/`, `src/data/`, `src/lib/`, `src/app/`
- [ ] Create placeholder data files: `src/data/profile.ts`, `src/data/skills.ts`, `src/data/experience.ts`, `src/data/projects.ts`
- [ ] Create `Dockerfile` (multi-stage: builder + runner, Node Alpine)
- [ ] Create `docker-compose.yml`: app service + optional Nginx reverse proxy
- [ ] Create `.dockerignore`
- [ ] Test Docker build locally: `docker build -t dennis-portfolio .`

**Verification**:
```bash
npm run dev            # dev server starts
npm run build          # build passes
docker build -t dennis-portfolio .   # Docker image builds
docker run -p 3000:3000 dennis-portfolio  # container runs
```

**Exit criteria**: Dev server starts, build passes, Docker image builds and runs locally.

---

### Step 2 — Design System & Global Layout
**Status**: pending | **Depends on**: Step 1

**Context brief**: Establish visual identity before building sections. All section components import from this foundation.

**Tasks**:
- [ ] Define color palette in `tailwind.config.ts`: dark bg (#0a0a0a), accent color, text hierarchy
- [ ] Set up typography (font: Geist via `next/font`)
- [ ] Create `src/components/layout/Header.tsx`: sticky nav with blur backdrop, links to all sections
- [ ] Create `src/components/layout/Footer.tsx`: copyright + social links
- [ ] Create `src/app/layout.tsx`: global layout wrapping Header + Footer
- [ ] Create reusable primitives: `Section.tsx`, `SectionTitle.tsx`, `Badge.tsx`
- [ ] Add smooth scroll behavior

**Exit criteria**: Layout renders, nav links scroll to section anchors.

---

### Step 3 — Hero / About + Hobby
**Status**: pending | **Depends on**: Step 2

**Context brief**: First thing every visitor sees. Must communicate who Dennis is within 3 seconds.

**Tasks**:
- [ ] Populate `src/data/profile.ts`: name, title, tagline, bio, avatar path, social links
- [ ] Create `src/components/sections/Hero.tsx`: photo, name, animated title, bio, social links row, CTA button
- [ ] Create `src/components/sections/Hobby.tsx`: personal interests blurb
- [ ] Animate with Framer Motion `viewport` trigger
- [ ] Wire up `src/app/page.tsx` to render all sections

**Exit criteria**: Hero renders with placeholder content, animations work, links clickable.

---

### Step 4 — Skills Section
**Status**: pending | **Depends on**: Step 2 | **Parallel with**: Steps 5, 6, 7

**Tasks**:
- [ ] Populate `src/data/skills.ts`: `{ category: string, items: string[] }[]`
- [ ] Create `src/components/sections/Skills.tsx`: grouped badge grid, staggered entrance animation

**Exit criteria**: Skills grid renders, categories clear, scroll animation works.

---

### Step 5 — Experience Timeline
**Status**: pending | **Depends on**: Step 2 | **Parallel with**: Steps 4, 6, 7

**Tasks**:
- [ ] Populate `src/data/experience.ts`: `{ company, role, period, description, tech[] }[]`
- [ ] Create `src/components/sections/Experience.tsx`: vertical timeline, animated entries

**Exit criteria**: Timeline renders, dates readable, tech badges consistent with Skills.

---

### Step 6 — Projects Showcase
**Status**: pending | **Depends on**: Step 2 | **Parallel with**: Steps 4, 5, 7

**Tasks**:
- [ ] Populate `src/data/projects.ts`: `{ name, description, tech[], liveUrl?, repoUrl?, status, featured }[]`
- [ ] Create `src/components/sections/Projects.tsx`: card grid, hover effects, Live/GitHub links

**Exit criteria**: Project grid renders, hover effects work, external links open correctly.

---

### Step 7 — Blog / Medium Integration
**Status**: pending | **Depends on**: Step 2 | **Parallel with**: Steps 4, 5, 6

**Tasks**:
- [ ] Create `src/lib/medium.ts`: fetch Medium RSS feed, cache with `revalidate: 3600`
- [ ] Create `src/components/sections/Blog.tsx`: latest 6 posts, graceful empty state
- [ ] Populate with Dennis's actual Medium username

**Exit criteria**: Blog section shows real posts or clean empty state, build passes.

---

### Step 8 — Contact + SEO + VPS Deploy
**Status**: pending | **Depends on**: Steps 3–7

**Tasks**:
- [ ] Create `src/components/sections/Contact.tsx`: email + social links, no form (MVP)
- [ ] Add SEO metadata: title, description, OG tags, favicon
- [ ] Add `robots.txt` and `sitemap.xml`
- [ ] Fix any remaining lint/TS errors
- [ ] Build and push Docker image to VPS (via `docker save` / registry / `scp`)
- [ ] On VPS: `docker-compose up -d` to start container
- [ ] Configure Nginx on VPS as reverse proxy to container port 3000
- [ ] Point dennisbui.dev DNS A record to VPS IP
- [ ] Add SSL via Let's Encrypt + Certbot (or Nginx + acme.sh)
- [ ] Verify dennisbui.dev resolves and serves HTTPS
- [ ] Final QA: all sections visible, links work, mobile responsive, no console errors

**Verification**:
```bash
npm run build
docker build -t dennis-portfolio .
curl -I https://dennisbui.dev
```

**Exit criteria**: dennisbui.dev live over HTTPS, all sections render, no console errors.

---

## Invariants (verified after every step)

- `npm run build` passes
- `npm run lint` zero errors
- No TypeScript `any` without explicit comment
- All components mobile-responsive
- No hardcoded personal data in component files — always imported from `src/data/`

---

## Open Questions Resolved

| Question | Decision |
|---|---|
| Tech stack | Next.js 15 + TypeScript + TailwindCSS v4 + Framer Motion |
| Design direction | Developer dark portfolio, minimal, Brittany Chiang-inspired |
| Medium integration | RSS feed via `rss-parser`, revalidate 1h |
| Content hosting | Static TypeScript data files in `src/data/` |
| Hobby content | TBD — placeholder in Step 3, Dennis fills in |

---

*Generated by /blueprint — 2026-08-03*  
*PRD: .claude/prds/dennis-portfolio.prd.md*
