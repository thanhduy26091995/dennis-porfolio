# Dennis Portfolio — dennisbui.dev

## Problem
Dennis has no centralized, personalized place to present his CV, projects, and writing. His current CV is not continuously updated, standard CV templates feel dry and impersonal. There is no single destination to send recruiters, friends, or followers to see a complete picture of who he is professionally.

## Evidence
- Assumption — needs validation via: feedback from recruiters/connections after sharing dennisbui.dev
- Note: this project also serves as an ECC practice project — technical success is a valid outcome in itself

## Users
- **Primary**: Recruiters and hiring managers who want a quick overview of background, skills, and projects
- **Secondary**: Technical friends and followers from Facebook/LinkedIn who want to follow posts and projects
- **Tertiary**: Dennis himself — needs to update information easily and have a personalized place to share
- **Not for**: General non-tech public, users who need two-way interaction (comments, forums)

## Hypothesis
We believe **a personal portfolio website at dennisbui.dev** will **help Dennis make a strong impression on recruiters and build a personal brand in the technical community** for **recruiters, friends, followers, and the technical community on Facebook/LinkedIn**.
We'll know we're right when **at least 1 recruiter or connection proactively mentions the portfolio after being shared the link**.

## Success Metrics
| Metric | Target | How measured |
|---|---|---|
| Portfolio mentioned by recruiter or connection | ≥ 1 time within 3 months of launch | Qualitative feedback |
| Page load time | < 3s LCP | Lighthouse / Core Web Vitals |
| CV information completeness | 100% CV fields covered | Manual checklist |
| Medium posts rendering correctly | ≥ 1 post displayed correctly | Manual QA |

## Scope

**MVP** — Deploy dennisbui.dev with full CV information as a modern personal portfolio:

- **About / Hero**: photo, name, title, short tagline, social links (GitHub, LinkedIn, Medium)
- **Skills**: tech stack list, grouped by category (Frontend, Backend, Tools...)
- **Experience**: work experience timeline
- **Projects**: list of current and past projects (name, description, tech stack, link)
- **Blog**: display posts from Medium (RSS feed or copied content)
- **Contact**: contact form or links (email, social)
- **Hobby**: personal interests section to add personality

**Post-MVP (out of scope)**
- Auth / login system — deferred
- Comment system — deferred
- Dark mode — deferred
- CMS / admin panel for no-code content updates — deferred
- i18n (EN/VN) — deferred
- Personal note-taking page (tech stack notes) — deferred
- Tools reference page — deferred
- Separate sharing/post page beyond blog — deferred

## Delivery Milestones
| # | Milestone | Outcome | Status | Plan |
|---|---|---|---|---|
| 1 | Core Portfolio | About, Skills, Experience, Hobby pages live at dennisbui.dev | pending | — |
| 2 | Projects Showcase | Full project/app list displayed with links | pending | — |
| 3 | Blog Integration | Medium posts readable directly on site | pending | — |
| 4 | Contact & Launch | Contact info complete, production deploy, domain live | pending | — |

## Open Questions
- [ ] **Design direction**: Which modern template fits best? (minimalist, glassmorphism, dark-first, developer-style?) — TBD needs validation via design research
- [ ] **Tech stack**: Next.js 15 + TailwindCSS v4 + TypeScript vs Astro? — TBD needs decision via `/blueprint`
- [ ] **Medium integration**: RSS feed or Medium API? — TBD needs technical spike
- [ ] **Content hosting**: Static JSON or headless CMS (Contentlayer, MDX) for easier future updates? — TBD
- [ ] **Hobby section**: What specific content to include? — TBD needs input from Dennis

## Risks
| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Medium API/RSS insufficient data | Medium | Medium | Fallback: manually copy content as MDX |
| Domain DNS propagation delay on deploy | Low | Low | Test with Vercel preview URL first |
| Design decision taking too long | Medium | Medium | Use an existing template, customize later |
| Content (text, images) not ready | High | High | Use placeholder content in MVP, replace after |

---
*Status: DRAFT — requirements only. Implementation planning pending via /plan.*
