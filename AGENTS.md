# AGENTS.md — INSPOSOFT marketing site

Guidance for AI agents working in this repository. Read `README.md` and `BUSINESS.md` before changing content, copy, or structure.

## What this repository is

`insposoft-site` is a standalone **Astro + TypeScript static marketing site** for `https://insposoft.com`. It is intentionally separate from the `bobo-ui` application and calls no product backend.

- **Astro 5** (`output: 'static'`, `build.format: 'directory'`), TypeScript strict (`astro/tsconfigs/strict`).
- **No UI framework in use.** Only plain `.astro` components and vanilla inline scripts. `tsconfig.json` pre-configures React JSX, but do not introduce React or other framework islands unless explicitly requested.
- **Bilingual one-pager:** English at `/`, Turkish at `/tr/`. Privacy and terms are placeholder pages in both locales.
- Content narrative: energy/BESS (bobo), hydrology (Ağkolu, Kemerçayır, Almus), flood engineering (Taşkın Hesap), and an archived research lineage. All technical visuals are **synthetic demonstrations** and must stay labeled as such.

## Commands

```bash
npm install        # install dependencies
npm run dev        # astro dev — local dev server
npm run build      # astro build — production build to dist/
npm run preview    # astro preview — serve the built site
npm run check      # astro check — type-check .astro files
```

There is **no test or lint suite** configured. Validation = `npm run check` (and `npm run build` for production confidence). Keep `dist/`, `.astro/`, and `node_modules/` out of changes; they are listed in `.gitignore`.

## Project structure

```
astro.config.mjs        # site URL, static output, directory format
tsconfig.json           # extends astro/tsconfigs/strict
src/
  layouts/BaseLayout.astro   # shared <head>: SEO, canonical/hreflang, fonts, favicon
  components/
    OnePage.astro            # the entire one-page marketing layout (bilingual)
    ContactForm.astro        # bilingual inquiry form (preview state — see below)
    TechnicalHero.astro      # custom inline SVG hero art
  pages/
    index.astro              # English home
    privacy.astro            # English privacy placeholder
    terms.astro              # English terms placeholder
    tr/index.astro           # Turkish home
    tr/privacy.astro         # Turkish privacy placeholder
    tr/terms.astro           # Turkish terms placeholder
  styles/global.css          # ALL styling: design tokens + component rules + media queries
public/
  robots.txt                 # allows all, references sitemap
  og.svg                     # Open Graph / social share image (og:image + twitter:image in BaseLayout)
  sitemap.xml                # hardcoded list of 6 public URLs — update when pages change
.env.example                 # CONTACT_RECIPIENT_EMAIL / CONTACT_FROM_EMAIL / CONTACT_FORM_API_KEY
README.md                    # scope, commands, publication gates
BUSINESS.md                  # audited content reference (VERIFIED / DRAFT / CONFIRM)
```

## Conventions

- **i18n pattern:** pages pass `lang="en" | "tr"` into `BaseLayout` and `OnePage`. Components branch on `const tr = lang === 'tr'`. `OnePage.astro` holds all its copy in a single `copy` object keyed by language; `ContactForm.astro` instead uses inline `{tr ? '…' : '…'}` ternaries — match whichever pattern the component you are editing already uses, and always provide both locales for any new page or copy change.
- **Links are locale-relative** with trailing-slash directory paths (e.g. `/tr/privacy/`); the language switch toggles `/` ↔ `/tr/`.
- **Styling lives in `global.css` only.** Use the CSS custom properties defined in `:root` (`--paper`, `--ink`, `--forest`, `--blue`, `--teal`, `--rust`, `--serif`, `--sans`, `--mono`, …). Do not add colors outside the palette. Typography: Fraunces (display headings), DM Sans (body), JetBrains Mono (eyebrows/labels/data).
- **`BaseLayout` props:** `title`, `description`, `lang`, and optional `alternatePath` (drives hreflang alternates and x-default). Canonical URLs are built on `https://insposoft.com`.
- **Legal pages** use the `.legal-page` class in `global.css`; keep them as explicit placeholders until real legal content is approved.
- Preserve Turkish engineering names exactly: EPİAŞ, TEİAŞ, DSİ, MGM, Ağkolu, Kemerçayır, Almus, Taşkın Hesap, bobo.
- Responsive breakpoints: `900px` and `560px`; support `prefers-reduced-motion` (already handled in `global.css`).

## Guardrails (important)

- **Content claims:** Never add customer names/counts, revenue, pricing, "20 years" experience, regulatory approval, official endorsement, or universal accuracy claims. Every technical demonstration on the site is synthetic and must remain clearly labeled. `BUSINESS.md` is the audited reference for what may be said and how (VERIFIED / DRAFT / CONFIRM / DO NOT PUBLISH vocabulary) — consult it before writing marketing copy.
- **Contact form is a preview state.** It validates required fields, rejects a filled honeypot, then reports that delivery is not configured. Do **not** wire it to a real email provider or backend without: a server-side endpoint, approved recipient/sender env vars, server-side validation and payload limits, origin/rate/spam controls, privacy-consent handling, sanitized delivery, and safe client-facing errors (see README "Contact delivery gate"). Note the site is `output: 'static'` with no adapter, so an in-repo delivery endpoint would require switching to SSR/adapters or handling delivery in an external service. Never request passwords, API keys, or confidential files through the form.
- **Secrets:** `.env*` files are excluded via `.gitignore` (which keeps `.env.example`). Never commit credentials or private values; `.env.example` only holds empty variable names.
- **No internal details in public output:** do not publish localhost URLs, ports, or internal repository paths on the site.
- Keep `README.md`, `BUSINESS.md`, and `public/sitemap.xml` consistent when the site structure or content changes.

## When modifying the site

1. Run `npm run check` after edits; fix any type errors.
2. For copy/content changes, verify against `BUSINESS.md` status labels first.
3. If you add a page, mirror it in `/tr/` and update `public/sitemap.xml`.
4. Test responsive behavior at 900px/560px and verify the reduced-motion experience for any new animation.
