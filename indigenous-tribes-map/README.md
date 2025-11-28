# First Nations Living Journal (tribal.seed2sea.org)

A living tribute to Indigenous nations across Turtle Island. This app is part of the Seed 2 Sea Foundation, sharing respectful stories about lands, languages, and ongoing sovereignty.

## Features
- Interactive tribal map with regional filtering and quick detail drawer
- Timeline of key historical moments with era and category filters
- Deep-dive tribe profiles (territories, traditions, events, languages)
- Guided Q&A experience powered by the AI SDK (bring your API key)
- Tailwind 4 design system with motion accents for storytelling

## Stack
- Next.js 16 (App Router) + React 19
- Tailwind CSS 4 + Framer Motion
- Vercel AI SDK (@ai-sdk/react + ai)

## Local Development
1) Install deps: `pnpm install`
2) Run dev server: `pnpm dev`
3) Type-check/lint: `pnpm lint`
4) Production build: `pnpm build`

## Cloudflare Pages Deployment
This repo is configured for Cloudflare Pages + Functions using `@cloudflare/next-on-pages`.
- Build command: `pnpm dlx @cloudflare/next-on-pages@latest build` (or `pnpm run cf:build`)
- Build output directory: `.vercel/output/static`
- Functions directory (auto): `.vercel/output/functions`
- Recommend enabling `nodejs_compat` (set in `wrangler.toml`) so Next.js and the AI SDK work on Workers.
- Deploy manually: `pnpm dlx wrangler pages deploy .vercel/output/static --project-name tribal-seed2sea`
- Set secrets in the Pages dashboard (e.g., `ANTHROPIC_API_KEY` for the guide, any analytics keys, etc.).
- Use Node 20 on Pages (`NODE_VERSION=20`) to match the pinned runtime.

### GitHub CI to Cloudflare Pages
- Workflow: `.github/workflows/cloudflare-pages.yml`
- Secrets to add in GitHub: `CLOUDFLARE_API_TOKEN` (Pages write), `CLOUDFLARE_ACCOUNT_ID`, optional `ANTHROPIC_API_KEY` (Pages env var), and `CLOUDFLARE_PROJECT_NAME` if you change the default `tribal-seed2sea`.
- Triggers on pushes to `main` (and manual runs). It builds via `pnpm run cf:build` (using the pinned `next-on-pages`) then publishes `.vercel/output/static` with `cloudflare/pages-action@v1`.

## Data Sources and Stewardship
- Tribe and region data live in `lib/tribes-data.ts`; timeline events live in `lib/timeline-data.ts`.
- Each entry is curated for accuracy and respect; when adding a nation, include territories, languages, a short description, cultural practices, and historically grounded events.
- Keep coordinates approximate (centroid of the homelands) and use descriptive `imageQuery` text suitable for land/people imagery.
- When editing content, avoid stereotypes, honor tribal self-names, and prefer primary sources or tribal sites for validation.

## Seed 2 Sea Context
This launch (tribal.seed2sea.org) complements the broader Seed 2 Sea storytelling work. For the companion web experience, see the sibling repo in `../seed2sea`.
