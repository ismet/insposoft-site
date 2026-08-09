# INSPOSOFT marketing site

Standalone Astro + TypeScript one-page marketing website for `https://insposoft.com`.

## Scope

- English root page at `/`
- Turkish counterpart at `/tr/`
- Bilingual 404 pages at `/404/` and `/tr/404/` (emitted as `dist/404.html`; not listed in the sitemap). Unknown `/tr/*` paths also receive the root `dist/404.html`, which rewrites its copy, language switch, and document language to Turkish client-side via an inline script; the standalone `/tr/404/` page is untouched.
- Privacy and terms routes in both locales with conservative publication drafts
- Editorial-light visual system with a custom SVG technical composition
- Capability narrative for energy/BESS, hydrology/water, and flood engineering
- Clearly labeled synthetic technical demonstrations
- No customer, revenue, 20-year, regulatory-approval, or universal-accuracy claims

The site is intentionally separate from `bobo-ui` and does not call any product backend.

## Commands

```bash
npm install
npm run check
npm run build
npm run dev
npm run preview
npm run preview:cf  # build, then serve dist/ locally on workerd (Cloudflare)
npm run deploy      # build, then deploy to Cloudflare Workers
```

## Contact delivery

The form delivers inquiries through **Formspree** — an external form-to-email service that works with static sites. The form POSTs to `PUBLIC_FORMSPREE_ENDPOINT` (`https://formspree.io/f/<id>`), and Formspree forwards each submission to the recipient configured in its dashboard: **ismet.togay@gmail.com**.

- The endpoint is public by design and inlined into the static build (`PUBLIC_` prefix); no API keys are exposed client-side.
- Formspree provides server-side validation, payload limits, origin/rate/spam controls (including the standard `_gotcha` honeypot field), and sanitized delivery.
- The client keeps client-side validation, its own honeypot check, privacy-consent handling, and safe generic error messages.
- Until `PUBLIC_FORMSPREE_ENDPOINT` is set in `.env`, the page renders a bilingual “contact route not configured” notice instead of the form — set the variable locally to see the form.

Public contact details — the phone number and office address shown in the one-pager's contact section and on all four legal pages — come from one shared source, `src/lib/contact.ts` (the `CONTACT` constant), which also feeds the JSON-LD `contactPoint` in `BaseLayout.astro`. The address is an operating contact and is not confirmed as a registered legal address; confirm it before final publication.

Setup steps already done:

1. Contact form wired to `PUBLIC_FORMSPREE_ENDPOINT` in `ContactForm.astro`.
2. `.env` (gitignored) holds `PUBLIC_FORMSPREE_ENDPOINT`, `CONTACT_RECIPIENT_EMAIL`, `CONTACT_FROM_EMAIL`; `.env.example` documents them. The two `CONTACT_*` vars are informational only — the actual recipient/from addresses are configured in the Formspree dashboard and are not read by the build.

Before publishing, confirm in the Formspree dashboard: the recipient address (ismet.togay@gmail.com), sender/from address, spam settings, and that the form ID matches the deployed endpoint.

Do not request passwords, API keys, service-account JSON, or confidential project files through the public form.

## Deployment — Cloudflare Workers

The site deploys as an **assets-only Cloudflare Worker** serving the static `dist/` build: no runtime, no adapter (Astro 7 static output needs no adapter for Cloudflare). Configuration lives in `wrangler.toml`.

### Prerequisites

- Node.js ≥ 22.12 (Astro 7 requirement; also covers wrangler 4.x)
- A Cloudflare account
- For `insposoft.com`: the zone must be an **active** Cloudflare zone in the same account — Workers custom domains require the nameservers delegated to Cloudflare (CNAME-only setups are not supported). Order of operations: add the zone → migrate nameservers → attach the custom domain → `npm run deploy`. Until the zone is active, set `workers_dev = true` in `wrangler.toml` to test on `insposoft-site.workers.dev`. SSL/TLS is provisioned automatically.

### Commands

```bash
npm run build       # astro build → dist/
npm run preview:cf  # build, then serve dist/ locally on workerd (http://localhost:8787); requires .env for the form
npm run deploy      # build, then npx wrangler deploy
```

Authenticate once with `npx wrangler login` (or set `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` in CI). `wrangler.toml` maps: `[assets] directory = "./dist"`, `not_found_handling = "404-page"` (unknown routes serve `dist/404.html` with a real 404 status), `html_handling = "auto-trailing-slash"` (matches `build.format: 'directory'` and the sitemap URLs). To preview on `<name>.workers.dev` instead of the custom domain, set `workers_dev = true` and remove the `[[routes]]` block.

**Build-time env:** `PUBLIC_FORMSPREE_ENDPOINT` is inlined into the static build, so it must be present in the build environment (`.env` locally, or a build environment variable in CI/Workers Builds). The Worker itself has no runtime secrets. `compatibility_date` in `wrangler.toml` is pinned to the newest date the installed wrangler/workerd supports — bump it whenever you upgrade wrangler.

### Automatic deploys — Workers Builds (optional)

Cloudflare's native Git integration auto-deploys on push to `main`. Setup in the dashboard: Workers & Pages → your Worker → **Settings → Builds** → connect the GitHub repo, then:

1. Build command: `npm ci && npm run build`
2. Deploy command: keep the default `npx wrangler deploy`
3. Add `PUBLIC_FORMSPREE_ENDPOINT` under the build's environment variables

Workers Builds does **not** read `[build]` from `wrangler.toml` — build settings are configured in the dashboard (deployments still use this repo's `wrangler.toml` for the Worker and asset config). Free plan: 3,000 build minutes/month, 1 concurrent build.

## Publication gates

Replace or review before production launch:

- legal identity, jurisdiction, approved contact details, and bracketed legal-review fields in the privacy/terms drafts
- public business email and form provider
- legal jurisdiction and registered entity details
- logo/brand assets
- team biographies and experience claims
- approved project examples and asset licenses
- technical demonstration labels and source review
- privacy, terms, and data-processing responsibilities
