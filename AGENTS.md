# AGENTS.md — INSPOSOFT marketing site

Guidance for AI agents working in this repository. Read `README.md` and `BUSINESS.md` before changing content, copy, or structure.

## What this repository is

`insposoft-site` is a standalone **Astro + TypeScript static marketing site** for `https://insposoft.com`. It is intentionally separate from the `bobo-ui` application and calls no product backend.

- **Astro 7** (`output: 'static'`, `build.format: 'directory'`), TypeScript strict (`astro/tsconfigs/strict`).
- **No UI framework in use.** Only plain `.astro` components and vanilla inline scripts. `tsconfig.json` pre-configures React JSX, but do not introduce React or other framework islands unless explicitly requested.
- **Bilingual one-pager:** English at `/`, Turkish at `/tr/`. Privacy and terms are conservative publication drafts in both locales and retain owner/legal-review fields where facts are not confirmed.
- Content narrative: energy/BESS (bobo), hydrology (Ağkolu, Kemerçayır, Almus), flood engineering (Taşkın Hesap), and an archived research lineage. All technical visuals are **synthetic demonstrations** and must stay labeled as such.

## Commands

```bash
npm install        # install dependencies
npm run dev        # astro dev — local dev server
npm run build      # astro build — production build to dist/
npm run preview    # astro preview — serve the built site
npm run check      # astro check — type-check .astro files
npm run preview:cf # build, then serve dist/ locally on workerd (wrangler dev)
npm run deploy     # build, then deploy to Cloudflare Workers (wrangler deploy)
```

There is **no test or lint suite** configured. Validation = `npm run check` (and `npm run build` for production confidence). Keep `dist/`, `.astro/`, and `node_modules/` out of changes; they are listed in `.gitignore`.

## Project structure

```
astro.config.mjs        # site URL, static output, directory format, astro:env schema
wrangler.toml           # Cloudflare Workers config — assets-only Worker serving dist/ (see README)
tsconfig.json           # extends astro/tsconfigs/strict
src/
  layouts/BaseLayout.astro   # shared <head>: SEO/JSON-LD, canonical/hreflang, OG/Twitter image, fonts, skip link, js-class gate
  components/
    OnePage.astro            # the entire one-page marketing layout (bilingual)
    ContactForm.astro        # bilingual inquiry form — Formspree delivery; renders an "unavailable" notice when the endpoint is unset
    TechnicalHero.astro      # custom inline SVG hero art
  lib/contact.ts             # shared CONTACT constant (phone/address) — one-pager contact section, legal pages, BaseLayout JSON-LD
  pages/
    index.astro              # English home
    privacy.astro            # English privacy publication draft
    terms.astro              # English terms publication draft
    404.astro                # English 404 page (emits dist/404.html; not listed in sitemap); rewrites copy to Turkish client-side for unknown /tr/* paths
    tr/index.astro            # Turkish home
    tr/privacy.astro          # Turkish privacy publication draft
    tr/terms.astro            # Turkish terms publication draft
    tr/404.astro             # Turkish 404 page
  styles/global.css          # ALL styling: design tokens + component rules + media queries
public/
  robots.txt                 # allows all, references sitemap
  og.svg                     # source art for the social share image
  og.png                     # rasterized 1200x630 share image (og:image + twitter:image in BaseLayout)
  sitemap.xml                # hardcoded list of 6 public URLs — update when pages change
.env.example                 # PUBLIC_FORMSPREE_ENDPOINT / CONTACT_RECIPIENT_EMAIL / CONTACT_FROM_EMAIL (CONTACT_* informational — real recipient/from live in the Formspree dashboard)
README.md                    # scope, commands, publication gates
BUSINESS.md                  # audited portfolio content reference (VERIFIED / DRAFT / CONFIRM) — covers this site and the sibling product repos
```

## Deployment (Cloudflare Workers)

The site deploys as an **assets-only Cloudflare Worker** serving `dist/` — see `wrangler.toml` (`[assets] directory = "./dist"`, `not_found_handling = "404-page"`, `html_handling = "auto-trailing-slash"`). No adapter is used: Astro static output needs none. No runtime and no secrets on the Worker; `PUBLIC_FORMSPREE_ENDPOINT` is declared in `astro.config.mjs` (`env.schema`, read via `astro:env/client` in `ContactForm.astro`) and inlined at **build time**, so it must be present in the build environment (`.env` locally, a build env var in CI or Workers Builds). The `insposoft.com` custom domain requires an **active** Cloudflare zone (nameservers delegated) in the same account. `compatibility_date` in `wrangler.toml` is pinned to the newest date the installed wrangler/workerd supports — bump it when upgrading wrangler. Workers Builds (dashboard: Worker → Settings → Builds) can auto-deploy from Git and does **not** read `[build]` from `wrangler.toml`.

## Conventions

- **i18n pattern:** pages pass `lang="en" | "tr"` into `BaseLayout` and `OnePage`. Components branch on `const tr = lang === 'tr'`. `OnePage.astro` holds all its copy in a single `copy` object keyed by language; `ContactForm.astro` instead builds a `messages` object via a single language ternary and references `messages.*` in the template — match whichever pattern the component you are editing already uses, and always provide both locales for any new page or copy change.
- **Links are locale-relative** with trailing-slash directory paths (e.g. `/tr/privacy/`); the language switch toggles `/` ↔ `/tr/`.
- **Styling lives in `global.css` only.** Use the CSS custom properties defined in `:root` (`--paper`, `--white`, `--ink`, `--ink-soft`, `--ink-faint`, `--forest`, `--blue`, `--teal`, `--rust`, `--rust-deep`, `--serif`, `--sans`, `--mono`, …). Do not add colors outside the palette. Typography: Fraunces (display headings), DM Sans (body), JetBrains Mono (eyebrows/labels/data).
- **`BaseLayout` props:** `title`, `description`, `lang`, and optional `alternatePath` (drives hreflang alternates and x-default). Canonical URLs are built on `https://insposoft.com`.
- **Shared contact details:** `src/lib/contact.ts` exports the `CONTACT` constant (phone + office address) — the single source of truth for the one-pager contact section, all four legal pages, and `BaseLayout`'s JSON-LD `contactPoint`. Edit it there, not per-page; the address is an operating contact, not a confirmed registered legal address (see `BUSINESS.md`).
- **Legal pages** use the `.legal-page` class in `global.css`; the current privacy/terms text is a conservative public draft, not legal advice. Complete bracketed identity, jurisdiction, contact, legal-basis, retention, and commercial fields before final publication.
- Preserve Turkish engineering names exactly: EPİAŞ, TEİAŞ, DSİ, MGM, Ağkolu, Kemerçayır, Almus, Taşkın Hesap, bobo.
- Responsive breakpoints: `900px` and `560px`; support `prefers-reduced-motion` (already handled in `global.css`).
- **Scroll reveal:** elements with the `reveal` class fade/rise once via IntersectionObserver (inline script in `OnePage.astro`). Reveal styles are gated behind a `js` class added to `<html>` by `BaseLayout`'s head script, so content stays visible without JavaScript and under `prefers-reduced-motion`.
- **Vanilla inline scripts only:** the mobile-nav toggle and scroll reveal live in `OnePage.astro`; form validation/submission lives in `ContactForm.astro`. Keep new interactivity as inline `<script is:inline>` blocks inside the component that owns it — no framework islands.

## Guardrails (important)

- **Content claims:** Never add customer names/counts, revenue, pricing, "20 years" experience, regulatory approval, official endorsement, or universal accuracy claims. Every technical demonstration on the site is synthetic and must remain clearly labeled. `BUSINESS.md` is the audited reference for what may be said and how (VERIFIED / DRAFT / CONFIRM / DO NOT PUBLISH vocabulary) — consult it before writing marketing copy.
- **Contact form delivers via Formspree.** The form POSTs to `PUBLIC_FORMSPREE_ENDPOINT` (a public `https://formspree.io/f/<id>` endpoint inlined into the static build; never a secret API key), and Formspree forwards submissions to the recipient set in its dashboard: **ismet.togay@gmail.com**. Client-side validation and honeypot stay in `ContactForm.astro`; Formspree adds server-side validation, rate limiting, spam controls (incl. `_gotcha`), and sanitized delivery. Keep client-facing errors generic and safe; never request passwords, API keys, or confidential files through the form. Do not swap in another in-repo delivery endpoint without the full delivery gate in README (the site remains `output: 'static'` with no adapter). When `PUBLIC_FORMSPREE_ENDPOINT` is unset (e.g. local dev without `.env`), the component renders a bilingual `contact-unavailable` notice instead of the form, so a broken form is never shown.
- **Secrets:** `.env*` files are excluded via `.gitignore` (which keeps `.env.example`). Never commit credentials or private values; `.env.example` only holds empty variable names.
- **No internal details in public output:** do not publish localhost URLs, ports, or internal repository paths on the site.
- Keep `README.md`, `BUSINESS.md`, and `public/sitemap.xml` consistent when the site structure or content changes.

## When modifying the site

1. Run `npm run check` after edits; fix any type errors.
2. For copy/content changes, verify against `BUSINESS.md` status labels first.
3. If you add a page, mirror it in `/tr/` and update `public/sitemap.xml`.
4. Test responsive behavior at 900px/560px and verify the reduced-motion experience for any new animation.
