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
**Status**: ✅ done

**Tasks**:
- [x] Scaffold Next.js 15 with TypeScript
- [x] Install dependencies: `framer-motion`, `rss-parser`
- [x] Configure `next.config.ts`: image domains, standalone output
- [x] Set up project structure: `src/components/`, `src/data/`, `src/lib/`, `src/app/`
- [x] Create placeholder data files: `src/data/profile.ts`, `src/data/skills.ts`, `src/data/experience.ts`, `src/data/projects.ts`
- [x] Create `Dockerfile` (multi-stage: deps → builder → runner, Node 20 Alpine)
- [x] Create `docker-compose.yml`: app + nginx services
- [x] Create `.dockerignore`

---

### Step 2 — Design System & Global Layout
**Status**: ✅ done | **Depends on**: Step 1

**Tasks**:
- [x] Define color palette in `globals.css` (TailwindCSS v4): dark bg `#0a0a0a`, accent `#64ffda`
- [x] Set up typography (Geist via `next/font`)
- [x] Create `src/components/layout/Header.tsx`: sticky nav with blur backdrop, numbered links
- [x] Create `src/components/layout/Footer.tsx`: copyright + social links
- [x] Create `src/app/layout.tsx`: global layout wrapping Header + Footer
- [x] Create reusable primitives: `Section.tsx`, `SectionTitle.tsx`, `Badge.tsx`
- [x] Add smooth scroll behavior

---

### Step 3 — Hero / About + Hobby
**Status**: ✅ done | **Depends on**: Step 2

**Tasks**:
- [x] Populate `src/data/profile.ts`: name, title, tagline, bio, avatar, social links (real data)
- [x] Create `src/components/sections/Hero.tsx`: avatar with initials fallback, Framer Motion fade-up
- [x] Create `src/components/sections/Hobby.tsx`: personal interests blurb
- [x] Wire up `src/app/page.tsx` to render all sections

**Pending content**:
- [ ] Add real avatar photo at `public/avatar.jpg`
- [ ] Update hobby content in `Hobby.tsx` with real interests

---

### Step 4 — Skills Section
**Status**: ✅ done | **Depends on**: Step 2

**Tasks**:
- [x] Populate `src/data/skills.ts`: grouped by category
- [x] Create `src/components/sections/Skills.tsx`: badge grid, staggered animation

---

### Step 5 — Experience Timeline
**Status**: ✅ done | **Depends on**: Step 2

**Tasks**:
- [x] Populate `src/data/experience.ts`: placeholder entries
- [x] Create `src/components/sections/Experience.tsx`: vertical timeline, animated

**Pending content**:
- [ ] Replace placeholder experience data with real work history

---

### Step 6 — Projects Showcase
**Status**: ✅ done | **Depends on**: Step 2

**Tasks**:
- [x] Populate `src/data/projects.ts`: placeholder projects
- [x] Create `src/components/sections/Projects.tsx`: card grid, hover effects, links

**Pending content**:
- [ ] Replace placeholder project data with real projects

---

### Step 7 — Blog / Medium Integration
**Status**: ✅ done | **Depends on**: Step 2

**Tasks**:
- [x] Create `src/lib/medium.ts`: RSS feed via `rss-parser`, `revalidate: 3600`
- [x] Create `src/components/sections/Blog.tsx`: async RSC, latest 6 posts, empty state
- [x] Set `MEDIUM_USERNAME = "thanhduy_78508"`

---

### Step 8 — Contact + SEO + VPS Deploy
**Status**: ✅ done | **Depends on**: Steps 3–7

**Tasks**:
- [x] Create `src/components/sections/Contact.tsx`: email + social links, no form (MVP)
- [x] Add SEO metadata: title, description, OG tags
- [x] Add `robots.txt` and `sitemap.xml`
- [x] Create `Dockerfile` multi-stage build (standalone output)
- [x] Create `docker-compose.yml` with app + nginx services
- [x] Create `nginx.conf`: HTTP→HTTPS redirect, proxy_pass to app:3000
- [x] Create `deploy-fresh.sh`: certbot standalone, auto-renewal cron
- [x] Create `deploy-update.sh`: git pull → rebuild → rolling restart
- [x] Create `.github/workflows/deploy.yml`: GitHub Actions CI/CD on push to master
- [x] Deploy to VPS — `https://dennisbui.dev` is live 🎉

**Verification**:
```bash
npm run build
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

---

## Content TODOs (after deploy)

- [ ] Add real avatar photo at `public/avatar.jpg`
- [ ] Update `src/data/experience.ts` with real work history
- [ ] Update `src/data/projects.ts` with real projects
- [ ] Update hobby content in `src/components/sections/Hobby.tsx`

---

*Generated by /blueprint — 2026-08-03 | Last updated: 2026-08-04*  
*PRD: .claude/prds/dennis-portfolio.prd.md*
