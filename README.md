# Dennis (Duy Bui) — Portfolio

Personal portfolio website for Dennis (Duy Bui), a Mobile Engineer & Team Lead with 8+ years shipping native Android and iOS apps.

## Tech Stack

- **Framework**: Next.js 16 (App Router, static export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Deployment**: Docker + nginx on VPS, via GitHub Actions

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/              # Next.js App Router (layout, page, sitemap, robots)
├── components/
│   ├── layout/       # Header, Footer
│   ├── sections/     # Hero, Skills, Experience, Projects, Blog, Hobby, Contact
│   └── ui/           # Reusable primitives (Badge, Section, SectionTitle)
├── data/             # Content files — edit these to update the portfolio
│   ├── profile.ts    # Name, title, bio, social links
│   ├── skills.ts     # Skill groups and items
│   ├── experience.ts # Work history
│   └── projects.ts   # Featured projects
└── lib/
    ├── medium.ts     # Fetches latest blog posts from Medium RSS
    └── constants.ts
```

## Customization

All content lives in `src/data/`. No backend or CMS needed.

| File | What to edit |
|---|---|
| `src/data/profile.ts` | Name, title, bio, avatar, location, email, social links |
| `src/data/skills.ts` | Skill categories and items |
| `src/data/experience.ts` | Work history entries |
| `src/data/projects.ts` | Featured projects |

Blog posts are pulled automatically from the Medium RSS feed configured in `src/lib/medium.ts`.

## CI/CD & Deployment

Push to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`):

1. **Build check** — installs dependencies, type-checks, and builds on Ubuntu
2. **Deploy** — SSHes into VPS, pulls latest code, rebuilds Docker image, and restarts the app container (nginx stays up)

### Required GitHub Secrets

| Secret | Description |
|---|---|
| `VPS_HOST` | VPS IP or hostname |
| `VPS_USER` | SSH username |
| `VPS_SSH_KEY` | Private SSH key |
| `VPS_PORT` | SSH port (default: 22) |
| `APP_DIR` | Absolute path to the repo on VPS |

### Run with Docker locally

```bash
docker compose up --build
```

App is served at `http://localhost:3000`.
