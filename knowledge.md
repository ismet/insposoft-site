# Project knowledge

This file gives Freebuff context about your project: goals, commands, conventions, and gotchas.

## What this is

**INSPOSOFT marketing site** (`https://insposoft.com`) — a standalone **Astro 7 + TypeScript static site** (no UI framework, no adapter, no backend). Intentionally separate from the `bobo-ui` product repo; it calls no product backend.

- Bilingual one-pager: English at `/`, Turkish at `/tr/`. Privacy/terms and 404 pages exist in both locales.
- Content narrative: energy/BESS (bobo), hydrology (Ağkolu, Kemerçayır, Almus), flood engineering (Taşkın Hesap). All technical visuals are **synthetic demonstrations** and must stay labeled.
- Key source: `src/components/OnePage.astro` (the whole marketing layout), `src/components/ContactForm.astro` (bilingual inquiry form), `src/styles/global.css` (ALL styling), `src/layouts/BaseLayout.astro` (shared head: SEO/JSON-LD, hreflang, OG, theme-color, favicon), `src/lib/contact.ts` (shared public contact details). See `README.md` and `AGENTS.md` for full detail.

## Commands

```bash
npm install          # Node >= 22.12 required
npm run dev          # astro dev — local dev server
npm run build        # astro build — production build to dist/
npm run preview      # astro preview — serve built site locally
npm run check        # astro check — type-check .astro files (main validation)
npm run preview:cf   # build, then serve dist/ locally on workerd (wrangler dev, :8787)
npm run deploy       # build, then deploy to Cloudflare Workers (wrangler deploy)
```

There is **no test or lint suite** — validation is `npm run check` (+ `npm run build` for production confidence). **`astro build` does not type-check** (Vite/esbuild), so `npm run check` is the project's only type gate — deploys (Workers Builds runs `npm ci && npm run build`) skip it. `@astrojs/check` + `typescript` live in `devDependencies`, needed only for check/editor.

## Architecture

- **Static output:** `astro.config.mjs` → `site: 'https://insposoft.com'`, `output: 'static'`, `build.format: 'directory'` (trailing-slash URLs).
- **Deployment:** assets-only Cloudflare Worker serving `dist/` (`wrangler.toml`: `[assets] directory = "./dist"`, `not_found_handling = "404-page"`, `html_handling = "auto-trailing-slash"`). Custom domain `insposoft.com` requires an **active** Cloudflare zone (nameservers delegated) in the same account; `workers_dev = true` for preview.
- **Contact flow:** form POSTs to `PUBLIC_FORMSPREE_ENDPOINT` (public `https://formspree.io/f/<id>`), Formspree forwards to **ismet.togay@gmail.com** (configured in Formspree dashboard, not in code). No secrets client-side. When the endpoint env var is unset, the component renders a bilingual "contact unavailable" notice instead of the form.
- **Env:** env vars are declared as a typed schema in `astro.config.mjs` (`env.schema`, via `astro:env`) and read as `PUBLIC_FORMSPREE_ENDPOINT` from `astro:env/client` in `ContactForm.astro` — `default: ''` keeps the form's “not configured” notice when unset. `PUBLIC_` vars are inlined into the static build, so `PUBLIC_FORMSPREE_ENDPOINT` must be present in the **build environment** (`.env` locally or build env var in CI/Workers Builds). `.env.example` documents the three vars.
- **Shared contact details:** `src/lib/contact.ts` exports a single `CONTACT` constant (phone `+90 850 305 20 64`, Via Twins Plaza No:44, Söğütözü/Çankaya-Ankara) — the single source of truth used by the OnePage contact section, BaseLayout's JSON-LD `contactPoint`, and all 4 legal pages. The address is an operating contact, not a confirmed registered legal address (see BUSINESS.md).
- **Pages:** adding a page requires mirroring it in `/tr/` and updating `public/sitemap.xml` (hardcoded list of 6 public URLs). 404 pages emit `dist/404.html` and are not in the sitemap.

## Conventions

- **i18n pattern:** pages pass `lang="en" | "tr"` into `BaseLayout`/`OnePage`; components branch on `const tr = lang === 'tr'`. `OnePage.astro` uses a `copy` object keyed by language; `ContactForm.astro` uses a `messages` object via one ternary — match whichever the component you're editing already uses, and always provide both locales.
- **`BaseLayout` props:** `title`, `description`, `lang: 'en' | 'tr'`, optional `alternatePath` (drives hreflang alternates + x-default) and `noindex` — set by the 404 pages, it suppresses canonical/alternates/og:url/JSON-LD and emits `robots: noindex, nofollow`. The head also sets `theme-color` `#f5f3ed` (= `--paper`) and references `public/og.png` (1200×630 share image, built from source art `public/og.svg`).
- **Links** are locale-relative trailing-slash paths (e.g. `/tr/privacy/`); language switch toggles `/` ↔ `/tr/`.
- **Styling lives only in `global.css`** using `:root` tokens. Palette: `--paper`, `--paper-deep`, `--paper-line`, `--ink`, `--ink-soft`, `--ink-faint`, `--forest`, `--forest-light`, `--blue`, `--teal`, `--teal-faint`, `--rust`, `--rust-deep`, `--rust-light`, `--white`. Fonts: `--serif` (Fraunces headings), `--sans` (DM Sans body), `--mono` (JetBrains Mono labels/data). No colors outside the palette.
- **Interactivity is vanilla inline scripts only** (`<script is:inline>` inside the owning component): mobile-nav + scroll reveal in `OnePage.astro`, form validation/submission in `ContactForm.astro`. No framework islands (React is preconfigured in tsconfig but must NOT be introduced unless explicitly requested).
- **Scroll reveal:** `.reveal` elements fade/rise via IntersectionObserver, gated behind a `js` class on `<html>` so content stays visible without JS and under `prefers-reduced-motion`.
- **Breakpoints:** 900px and 560px.

## Gotchas / guardrails

- **Content claims:** never add customer names/counts, revenue, pricing, "20 years" experience, regulatory approval, endorsements, or universal accuracy claims. `BUSINESS.md` is the audited reference (VERIFIED / DRAFT / CONFIRM / DO NOT PUBLISH) — consult it before writing marketing copy.
- Preserve Turkish engineering names exactly: EPİAŞ, TEİAŞ, DSİ, MGM, Ağkolu, Kemerçayır, Almus, Taşkın Hesap, bobo.
- **Contact form:** keep client errors generic; never request passwords/API keys/confidential files through it; don't swap the delivery endpoint without the README delivery gate.
- **Secrets:** `.env*` are gitignored (`.env.example` kept). Never commit credentials.
- **Deployment:** no runtime/secrets on the Worker; `compatibility_date` in `wrangler.toml` is pinned — bump when upgrading wrangler. Workers Builds (dashboard config) does NOT read `[build]` from `wrangler.toml`.
- Keep `README.md`, `BUSINESS.md`, and `public/sitemap.xml` consistent when site structure/content changes.
- `dist/`, `.astro/`, `node_modules/` are gitignored — keep them out of changes. `.astro/` holds generated types (`types.d.ts`, `env.d.ts`, `content.d.ts`) regenerated by `dev`/`build`/`check`.
- **TypeScript 6:** `tsconfig.json` extends `astro/tsconfigs/strict` — don't reintroduce `baseUrl` (deprecated in TS 6, removed in TS 7; Astro's `moduleResolution: 'bundler'` needs no `baseUrl`/`paths`). No `@ts-ignore`/`@ts-expect-error`/`as any` in the codebase — keep it that way.
- Legal pages are conservative publication drafts with bracketed fields (identity, jurisdiction, contact, legal basis) to complete before final publication.
