# INSPOSOFT marketing site

Standalone Astro + TypeScript one-page marketing website for `https://insposoft.com`.

## Scope

- English root page at `/`
- Turkish counterpart at `/tr/`
- Bilingual 404 pages at `/404/` and `/tr/404/` (emitted as `dist/404.html`; not listed in the sitemap)
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
```

## Contact delivery

The form delivers inquiries through **Formspree** — an external form-to-email service that works with static sites. The form POSTs to `PUBLIC_FORMSPREE_ENDPOINT` (`https://formspree.io/f/<id>`), and Formspree forwards each submission to the recipient configured in its dashboard: **ismet.togay@gmail.com**.

- The endpoint is public by design and inlined into the static build (`PUBLIC_` prefix); no API keys are exposed client-side.
- Formspree provides server-side validation, payload limits, origin/rate/spam controls (including the standard `_gotcha` honeypot field), and sanitized delivery.
- The client keeps client-side validation, its own honeypot check, privacy-consent handling, and safe generic error messages.
- Until `PUBLIC_FORMSPREE_ENDPOINT` is set in `.env`, the page renders a bilingual “contact route not configured” notice instead of the form — set the variable locally to see the form.

Setup steps already done:

1. Contact form wired to `PUBLIC_FORMSPREE_ENDPOINT` in `ContactForm.astro`.
2. `.env` (gitignored) holds `PUBLIC_FORMSPREE_ENDPOINT`, `CONTACT_RECIPIENT_EMAIL`, `CONTACT_FROM_EMAIL`; `.env.example` documents them.

Before publishing, confirm in the Formspree dashboard: the recipient address (ismet.togay@gmail.com), sender/from address, spam settings, and that the form ID matches the deployed endpoint.

Do not request passwords, API keys, service-account JSON, or confidential project files through the public form.

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
