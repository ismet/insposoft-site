# INSPOSOFT marketing site

Standalone Astro + TypeScript one-page marketing website for `https://insposoft.com`.

## Scope

- English root page at `/`
- Turkish counterpart at `/tr/`
- Separate privacy and terms placeholder routes in both locales
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

## Contact delivery gate

The form is currently a safe preview state. It validates required fields and rejects a filled honeypot, then reports that delivery is not configured. It does **not** pretend to send an inquiry.

Before production contact delivery is enabled, add a server-side endpoint with:

- approved recipient and sender environment variables
- server-side validation and payload limits
- origin/rate/spam controls
- privacy-consent handling
- sanitized message delivery
- safe client-facing errors

Do not request passwords, API keys, service-account JSON, or confidential project files through the public form.

## Publication gates

Replace or review before production launch:

- provisional legal pages
- public business email and form provider
- legal jurisdiction and registered entity details
- logo/brand assets
- team biographies and experience claims
- approved project examples and asset licenses
- technical demonstration labels and source review
- privacy, terms, and data-processing responsibilities
