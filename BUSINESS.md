# BUSINESS.md — audited website content reference

> **Purpose:** Audited reference stored with the portfolio for the startup website, product pages, proposals, onboarding, PRDs, and public-facing copy.
>
> **Audit basis:** repository files, source code, tests, package metadata, deployment configuration, and git metadata available in the portfolio repositories in this workspace (this marketing-site repository plus its sibling product repositories), audited **2026-08-09**. The document describes the repository snapshot at that date; it is not a permanent guarantee that deployments, data, or code remain unchanged.
>
> **Important:** This is business and content documentation, not an agent-instruction file. It must not be used to infer claims that are not stated here. `VERIFIED` means supported by repository evidence, not independently verified in production and not automatically approved as website copy. `DRAFT` means proposed positioning or copy that still needs the owner's approval. `CONFIRM` means a company decision or fact that cannot be established from the repositories. `DO NOT PUBLISH` means sensitive, unsupported, or unsafe content.

---

## 0. How to use this document

### 0.1 Publication rules

1. **Use only VERIFIED facts as factual website claims after an editorial/publication review.** Preserve units, dates, product names, and qualifiers; repository verification does not prove current production availability.
2. **Treat every DRAFT sentence as a writing proposal, not an established company fact.** Approve it before publication.
3. **Resolve every CONFIRM item before using it in legal, pricing, contact, or company-identity sections.**
4. **Do not turn a test result into a universal performance guarantee.** Golden tests prove parity for named reference cases; they do not prove correctness for every basin, dataset, or project.
5. **Do not turn a local deployment path into proof of a public service.** A repository may contain a Dockerfile, Cloudflare configuration, or Streamlit entry point without having a publicly available hosted product.
6. **Do not expose credentials, private environment values, sample petition data, or hardcoded demo passwords.**
7. **Do not claim customers, revenue, pricing, contracts, endorsements, partnerships, service levels, or regulatory approval unless separately documented and approved by the owner.**
8. **Keep product status specific.** “Deployed,” “working,” “deployable,” “prototype,” and “archived” are different claims.
9. **Treat implementation and security details as INTERNAL AUDIT ONLY unless deliberately rewritten for public use.** This includes repository paths, local ports, environment-variable names, credential architecture, test commands, stale filenames, and internal failure modes.

### 0.2 Status vocabulary

| Label | Meaning in this document |
|---|---|
| **Reported live deployment configuration** | Repository and portfolio metadata identify a deployment or live URL, but current reachability and uptime have not been independently verified in this audit. This does not establish public self-service access or commercial access. |
| **Working application** | The repository contains an executable application and documented run path. It may still require local data, credentials, or manual setup. |
| **Working prototype / internal tool** | Functional code exists, but public hosting, production operations, support, or product hardening are not verified. |
| **Deployable** | A documented local, Docker, or hosting path exists; no public deployment is claimed unless separately verified. |
| **Archived research** | Historical or methodological code retained for reference. It is not a supported current product. |
| **DRAFT** | Proposed website language, roadmap, success metric, or positioning. |
| **CONFIRM** | Owner must decide or verify it before publication. |

### 0.3 Current portfolio status at a glance

| Domain | Product line | Repository status at audit | Public-facing status safe to use |
|---|---|---|---|
| Marketing site | **insposoft-site** (`insposoft-site`) | Standalone Astro 7 static site on `main`; bilingual EN/TR one-pager with privacy, terms, and 404 pages in both locales; Formspree-ready contact form (renders an "unavailable" notice until an endpoint is configured); owner-supplied public phone and office address in the contact section and privacy/terms pages (2026-08-09); all technical visuals labeled synthetic | **Site structure and copy implemented in the repository; live reachability of `https://insposoft.com` not independently verified in this audit.** |
| Energy markets and storage | **bobo** (`bobo-api` + `bobo-ui`) | Active repositories on `main`; repository/portfolio metadata identifies UI/API hosts; UI has Cloudflare deployment configuration | **Reported live deployment configuration with a credential-gated access path.** Current reachability, public self-service registration, customer tenancy, pricing, and SLA are not independently established here. |
| Hydrology | **Ağkolu, Kemerçayır, Almus** (`agkolu`, `iffc`, `almus-iifc`) | Three working Streamlit applications on `main`; different levels of testing and packaging | **Working site-specific forecasting applications; no public URL verified for the family in this audit.** |
| Flood engineering | **Taşkın Hesap — Sentetik Yöntemler** (`flood-compute`) | Active repository on `main`; FastAPI + vanilla JS application, Docker path, golden and smoke tests | **Working, deployable engineering application; no public hosted URL verified.** |
| Historical research | **RezOPT / KISINTI / UnitOpt** (`hidroopt-dsi-*`) | Archived repositories on `master`; 2016–17 lineage, with a 2023 UnitOpt snapshot/ports | **Archived research and methodology reference; not a supported commercial product.** |

### 0.4 Repository chronology

These are repository facts, not company incorporation dates or employment history:

| Repository / line | First commit | Latest commit in audited snapshot | Notes |
|---|---:|---:|---|
| `hidroopt-dsi-consoleclient` | 2016-11-21 | 2017-11-02 | KISINTI console research application; Windows/.NET Framework |
| `hidroopt-dsi-webclient` | 2017-11-02 | 2017-11-04 | RezOPT web client; legacy Vue/webpack |
| `hidroopt-dsi-webserver` | 2017-11-02 | 2017-11-04 | RezOPT web API; legacy Node/Express/Mongo/Python bridge |
| `hidroopt-unitopt` | 2023-12-27 | 2023-12-27 | UnitOpt .NET stack plus Python validation artifacts |
| `bobo-api` | 2026-05-04 | 2026-08-08 | EPİAŞ data provider |
| `bobo-ui` | 2026-05-05 | 2026-08-08 | BESS dispatch and sizing UI |
| `iffc` | 2026-06-08 | 2026-06-09 | Kemerçayır daily model |
| `almus-iifc` | 2026-06-20 | 2026-06-20 | Almus daily model |
| `agkolu` | 2026-07-18 | 2026-07-21 | Ağkolu model with the documented test suite and verification log |
| `flood-compute` | 2026-07-21 | 2026-08-08 | Taşkın Hesap application |

The chronology supports a **DRAFT** research-to-product narrative, but it does not by itself prove a “decade of research,” company age, customer adoption, or business continuity.

---

## 1. Company identity and brand record

### 1.1 What is verified

- The repositories are hosted under the GitHub namespace **`ismet`**, with repository remotes using `github.com/ismet/...`.
- Some legacy package metadata attributes software to **Ismet Togay**. Public author attribution and any personal/company biography require owner confirmation before publication.
- Product and repository names currently visible in the code include:
  - **Plant BESS studio · EPİAŞ-integrated dispatch** — bobo UI title.
  - **Taşkın Hesap — Sentetik Yöntemler** — flood-compute application title.
  - **Ağkolu HES Günlük Akım Tahmin Modeli** — agkolu application.
  - **Kemerçayır Günlük Akım Tahmin Modeli** — iffc application.
  - **Almus Barajı Günlük Akım Tahmin Modeli** — almus-iifc application.
  - **swh-webclient / swh-webapi**, **KISINTI**, and **UnitOptimization / UnitOpt** — archived line names and package/project names.
- The bobo UI contains an inline favicon and a font pairing (Fraunces, DM Sans, JetBrains Mono). These are **application assets**, not a confirmed corporate logo or brand system.
- The bobo deployment configuration uses the custom domain **`bataryaopt.insposoft.com`**. The corresponding API configuration uses **`epias-data-provider.insposoft.com`**.

### 1.2 Not verified and requiring owner confirmation

The repositories do **not** establish:

- Registered legal entity name
- Corporate/marketing brand name
- Registered legal address, tax information, VAT number, or company registration (the owner-supplied office address is not confirmed as the registered legal address)
- Public email, LinkedIn page, or official social accounts (a public telephone number and office address are **OWNER-SUPPLIED** — see §1.3)
- Marketing website domain other than the bobo application domain
- Corporate logo, favicon system, brand colors, typography system, or usage guidelines
- Product pricing, packaging, billing, trial policy, or commercial terms
- Customer list, customer count, revenue, investment, partnerships, contracts, or testimonials
- Whether repository code is open source, source-available, or proprietary as a company policy

**Licensing nuance:** the `hidroopt-dsi-webserver` package metadata declares `ISC`, but that does not license the whole portfolio. The other repositories do not provide a portfolio-level license. Do not state “open source” or “proprietary” for the whole portfolio until the owner makes and documents that decision.

### 1.3 Owner decision register

| Decision | Current state | Publication rule |
|---|---|---|
| Legal/company name | **CONFIRM** | Do not invent one from repository names or author fields. |
| Brand name | **CONFIRM** | Do not treat `insposoft`, `bataryaopt`, or `bobo` as the corporate brand without approval. |
| Website domain | **CONFIRM** | `bataryaopt.insposoft.com` is an application domain, not automatically the company website. |
| Public contact | **OWNER-SUPPLIED / CONFIRM** | Owner supplied on 2026-08-09: public phone **+90 850 305 20 64** and office address **Via Twins Plaza, No:44, Söğütözü, Çankaya/Ankara, Türkiye**; both are shown in the marketing-site contact section and the privacy/terms pages. Public email, social profiles, and the registered legal address remain CONFIRM. Never copy private environment values or sample petition values. |
| Licensing policy | **CONFIRM** | Review each repository and dependency separately. The `ISC` field in the legacy `swh-webapi` package metadata applies only to that package metadata; it is not a portfolio-wide or necessarily source-tree-wide license. |
| Pricing and sales model | **CONFIRM** | No billing or pricing implementation is evidenced in the current portfolio. |
| Team experience claim | **CONFIRM** | Owner-supplied claim: the team reports approximately 20 years of engineering experience, but the repositories do not verify individual biographies, employment history, or the meaning of “20 years.” Use the softer long-term-practice narrative until names, roles, dates, and supporting project history are approved. |
| Past-project evidence | **OWNER-SUPPLIED / CONFIRM** | Add only anonymized or approved project examples with permission, team role, deliverable, date, and measurable outcome where publication is allowed. |
| Languages | **VERIFIED / DRAFT** | Current apps are predominantly Turkish-first; bobo is English UI. A Turkish-first company site with English mirror is a **DRAFT** recommendation, not an established policy. |

### 1.4 Team credibility and experience layer — OWNER-SUPPLIED / DRAFT

The repositories demonstrate technical work, but a customer must also see the people responsible for it. The website should not present the company as an anonymous collection of repositories. Add this trust layer after the team supplies and approves the information.

**Recommended initial narrative — OWNER-SUPPLIED / DRAFT:**

> We are an engineering team with long-term practice in water systems, hydrology, flood analysis, energy markets, and computational decision support. We combine engineering judgment with software so that complex project assumptions become reviewable scenarios, forecasts, and design outputs.

Any public use of “long-term practice,” “experienced team,” “years of experience,” or equivalent language requires owner approval supported by the team profiles and approved project record below.

This is intentionally softer than a “20 years” headline. The team may upgrade it to **“20+ years of combined engineering experience”** only after documenting whether the number means combined team experience, the lead engineer’s experience, or years in a specific domain.

**Required team-profile fields:**

- Approved name and role/title.
- Education, professional qualifications, and relevant disciplines.
- Years and type of experience, stated individually and accurately.
- Domains: BESS/energy, hydrology, flood engineering, reservoir systems, GIS, optimization, software engineering.
- Relevant projects or research responsibilities.
- Languages and working geography, where useful to customers.
- Optional professional profile, publication, certification, or reference link.
- Explicit approval for portrait, biography, employer names, project names, and dates.

**Required team-proof formats:**

1. **People:** concise profiles showing who understands the engineering problem.
2. **Experience timeline:** approved career/project milestones; repository chronology alone is not a career history.
3. **Technical record:** current tools, named methods, reference cases, validation, and generated deliverables.
4. **Project examples:** anonymized or approved past work with the team’s role and result.
5. **Customer proof:** testimonials, references, or measurable outcomes only with written permission.

**Past-project entry schema — OWNER-SUPPLIED / CONFIRM:**

| Field | Required content |
|---|---|
| Project label | Public client/project name or clearly marked anonymized description |
| Sector and geography | Energy, HEPP, flood, water infrastructure, research; country/region if approved |
| Customer problem | The decision, risk, or engineering bottleneck |
| Team role | Study, model development, software, review, integration, training, or advisory role |
| Inputs and method | Data and engineering method at a publishable level |
| Deliverables | Software, model, report, forecast, schedule, dashboard, or training |
| Outcome | Quantified result only when documented; otherwise state the delivered capability |
| Date/status | Project year or range; completed, ongoing, pilot, or research |
| Publication permission | Approved, anonymized-approved, or do-not-publish |
| Evidence | Reference, artifact, testimonial, or internal approval record |

**Trust rule:** a short named biography and one well-described project example are more persuasive than an unsupported “20 years” badge. Never invent employers, clients, project outcomes, certifications, or professional memberships from repository metadata.

---

## 2. Company positioning

### 2.1 Fact-safe company description

**VERIFIED description:** The portfolio contains software for energy-market and battery-storage analysis, daily hydrological inflow forecasting, flood-design computation, and archived reservoir/hydropower optimization research. The current water and flood applications use Turkish UI terminology and Turkish engineering datasets; bobo is the current English-language UI exception. This describes the repositories, not a confirmed company market strategy.

**DRAFT positioning:**

> Evidence-led software for water, hydrology, flood engineering, and energy-storage decisions in Turkey.

**DRAFT expanded positioning:**

> We build domain-specific engineering software that connects local market rules, Turkish hydrological data, geospatial datasets, and auditable computation. The current portfolio covers co-located BESS dispatch, daily inflow forecasting, and DSİ-oriented flood studies, with an earlier reservoir-optimization research lineage behind it.

These statements are positioning proposals. They do not claim company size, market leadership, customer outcomes, official endorsement, or commercial maturity.

### 2.2 Proposed message pillars — DRAFT

1. **Engineering judgment made visible:** explain assumptions, alternatives, review points, and decision consequences.
2. **Traceable computation:** show data sources, equations or methods, version/date, and outputs.
3. **Local-domain fidelity:** use EPİAŞ/TEİAŞ, DSİ, MGM, Turkish units, and local engineering conventions where the product requires them.
4. **Useful engineering outputs:** return a dispatch, forecast, flood study, report, table, or schedule—not only a model score.
5. **Honest uncertainty:** identify access requirements, external dependencies, data quality, model horizons, and unsupported use cases.
6. **From software to decision:** offer both usable tools and scoped engineering studies, with a clear boundary between automated computation and professional review.
7. **Research-to-application continuity:** connect archived reservoir-optimization work with current water, flood, and energy-storage tools without presenting the archive as a current product.

### 2.3 Customer-facing positioning and commercial promise — DRAFT

The website should answer the customer’s first five questions immediately:

| Customer question | Website answer |
|---|---|
| **Who are you?** | A named engineering team with an accountable technical record and owner-approved experience profiles. |
| **What do you understand?** | Energy storage, hydrology/inflow, flood computation, water systems, geospatial data, and optimization. |
| **What can I buy or request?** | Software access/pilots and scoped engineering studies; exact commercial packages require owner confirmation. |
| **What will I receive?** | Reviewable scenarios, forecasts, engineering computations, reports, exports, and an assumptions/limitations record. |
| **Why should I trust the result?** | Named methods, source-aware data handling, reference-case tests, validation evidence, engineering review, and transparent limitations. |

**Recommended promise — DRAFT:**

> From difficult engineering data to a decision you can review.

**Recommended company description — DRAFT:**

> **Proposed commercial model — pending owner confirmation:** We combine engineering software with deliverable-focused studies for energy storage, hydrology, water systems, and flood decisions. Our team applies transparent computational methods to local data and domain assumptions, producing scenarios that engineers can inspect, challenge, and use. The exact hosted-software, licensing, study, advisory, and support offers must be confirmed before publication.

**Commercial architecture — DRAFT / CONFIRM:** subject to the owner confirming that both routes are offered, maintain two parallel routes instead of forcing every visitor into a software-only funnel:

- **Software route:** request access, pilot a product, license a deployment, or discuss integration.
- **Engineering route:** scope a BESS analysis, site-specific inflow assessment, flood computation/study support, or methodology review.

The two routes should share one trust framework but use different qualification questions, deliverables, responsibility boundaries, and CTAs.

### 2.4 Claims that are safe only with qualifiers

| Proposed claim | Safe formulation |
|---|---|
| “Real market data” | “Uses EPİAŞ transparency data through the bobo API, where credentials and upstream availability permit.” |
| “DSİ-compatible” | “Implements named DSİ-oriented methods and is golden-tested against named workbook cases.” Do not say DSİ-approved or officially endorsed. |
| “AI/ML forecast” | “Uses Random Forest and Gradient Boosting ensembles with autoregressive, weather, and snow features.” Do not promise forecast accuracy. |
| “Production-ready” | Avoid as a blanket portfolio claim. Use the product-specific status labels in §0.3. |
| “Live” | Use only as “reported live deployment configuration” for bobo, qualify access as credential-gated, and confirm current reachability before publication. Do not imply public self-service access. |
| “National coverage” | Use only for the flood-compute data layers where the relevant dataset coverage is stated; do not generalize national coverage to every product. |
| “Automated” | Describe the specific automated step. External data, credentials, review, and engineering judgment may still be required. |

---

## 3. Product 1 — bobo BESS studio

### 3.1 Product identity and status

**VERIFIED name:** `bobo-ui` title: **Plant BESS studio · EPİAŞ-integrated dispatch**. Backend package: `epias-data-provider`.

**VERIFIED status:**

- **INTERNAL AUDIT NOTE:** The following bullets describe repository/configuration evidence, not public website copy by themselves.
- `bobo-api` and `bobo-ui` are active repositories on `main`.
- The UI has Cloudflare Worker configuration intended to serve the built SPA at `bataryaopt.insposoft.com` and proxy `/api` to the API host.
- The documented API host is `https://epias-data-provider.insposoft.com`; repository configuration does not by itself establish current reachability.
- The app has a build-time credential gate and a ten-minute idle timeout.
- Public registration, billing, role management, customer tenancy, uptime, and self-service access are **not** present in the repository evidence.

**Safe website status:** **Reported live deployment configuration with a credential-gated access path.** Current availability, public self-service registration, billing, and customer tenancy require confirmation.

### 3.2 What it does

bobo is a browser application for evaluating hourly battery operation and battery capacity around a wind/solar plant using EPİAŞ market prices and plant-generation data. It has two connected parts:

- **API:** FastAPI service wrapping `eptr2` for power-plant listing, market-clearing prices, and plant-scoped real-time generation.
- **UI:** React/Vite/TypeScript SPA that runs the dispatch optimizer in the browser, normally through a Web Worker, and displays operational and financial results.

It answers three practical questions:

1. Which hours could a battery charge or discharge under the selected assumptions?
2. What battery capacity and power rating produce the strongest modeled result in the sizing sweep?
3. How do modeled revenue, tariff costs, O&M, degradation, FX, and CAPEX affect the result?

The results are an engineering/economic scenario, not a guarantee of realized revenue or investment return.

### 3.3 User workflow

1. Sign in through the build-time UI access gate.
2. Select an EPİAŞ plant and, when tariff economics are required, a province/TEİAŞ region.
3. Choose a quick period (`1w`, `1m`, `3m`, `6m`, `1y`, or `2y`) or enter dates manually. The API requires the end date to be strictly before the current day in Europe/Istanbul.
4. Load hourly price and generation data from EPİAŞ.
5. Adjust battery capacity, charge/discharge power, efficiencies, initial state of charge, installed-generation/export limit, charging source, wear cost, optional PV reconstruction, and finance assumptions.
6. Run **Optimize dispatch**. The UI commits the result and economics as an applied snapshot; uncommitted sidebar edits do not move result views.
7. Run the capacity sizing sweep. Finance charts can update when economic assumptions change without repeating the DP calculation.
8. Review KPI cards, charts, operation rows, and CSV export.

**Input limitation:** the current UI has no paste or file-upload path for custom price/generation series. EPİAŞ is the active data-input route.

### 3.4 Core methods and features

- Backward dynamic programming over discretized state-of-charge bins.
- Hourly steps with a discretization that can use up to 600 SOC bins.
- Objective based on hybrid grid energy revenue minus throughput wear cost.
- Installed-capacity/export ceiling and optional plant-only charging constraint.
- Optional PV-clipping reconstruction that trims to full days and reports measured versus reconstructed generation.
- Capacity sweep from zero storage through configured capacity multiples, with an analytic generation-only baseline at zero capacity.
- Financial layer using capital-recovery-factor annualization, battery CAPEX, OPEX, TEİAŞ tariff data, EUR/TRY data, simple payback, degradation/fade, and net annual benefit calculations.
- Recharts visualizations, brush/legend interactions, operation table, CSV export, and Web Worker execution.
- Committed reference tariff data covering 81 provinces and 15 TEİAŞ regions, plus committed EUR/TRY reference data; these are static repository inputs, not a claim of live or official feed status.

### 3.5 Outputs

- Hourly trajectory with SOC, action, grid contribution, total export/import, generation, price, revenue, throughput, wear cost, and spill/curtailment where applicable.
- Plant-only and with-BESS gross/NET revenue views; NET calculations appear when the applicable tariff/region context and assumptions are configured.
- Incremental BESS revenue and tariff/O&M cost views.
- Equivalent full cycles.
- Price and generation charts, dispatch chart, battery-versus-price chart, uplift chart, action histogram, and price-duration curve.
- Capacity sweep showing annualized benefit, net annual benefit, payback, and lifetime cash bridge.
- Paginated operation table and CSV export.

### 3.6 Website-ready copy — DRAFT

> **See what a battery could do behind your renewable plant.**
>
> bobo combines EPİAŞ market prices, plant generation, hourly dispatch optimization, and Turkey-specific tariff and FX calculations to explore how much storage to install, how to operate it, and how the economics change with CAPEX, degradation, and financing assumptions.

**Short product line — DRAFT:**

> EPİAŞ-integrated dispatch and sizing analysis for co-located wind/solar BESS projects.

### 3.7 Verification and limitations — INTERNAL AUDIT ONLY

**VERIFIED engineering facts — INTERNAL AUDIT NOTE:** These are evidence for editorial review, not ready-made website copy.

- `bobo-api` has mocked/default pytest coverage and an integration marker for live EPİAŞ calls; integration tests are skipped when credentials are absent.
- The UI has strict TypeScript configurations that can be checked manually with two `tsc --noEmit` commands.
- The DP engine is deterministic for the same inputs and parameters.
- The repository’s Playwright smoke script is stale: it still drives a removed paste/upload flow and must not be presented as current end-to-end validation.

**Important limitations:**

- The UI login is a build-time list of plaintext credentials embedded in the bundle. It is an access gate, not server-side authentication or authorization.
- The API’s `API_KEY` is optional. When configured, it protects the bobo `/power-plants` routes; `/health` remains a liveness endpoint without that API-key requirement.
- EPİAŞ credentials, upstream availability, date limits, and upstream chunk limits apply. MCP requests are chunked at 31 days and real-time generation at 89 days.
- The EPTR upstream field is named `priceEur`, but the repository documents that its value may be TL/MWh rather than EUR/MWh. Public copy must not silently label all values as EUR.
- The model does not prove dispatch feasibility, grid interconnection, battery warranty compliance, degradation behavior, ancillary-service revenue, imbalance exposure, or actual investment return.
- No billing, subscription, portfolio tenancy, server-side user administration, or public API product is evidenced.

**Do not publish:** “guaranteed payback,” “bankable investment case,” “official EPİAŞ/TEİAŞ tool,” “market-leading,” “fully secure,” or any customer/revenue claim.

### 3.8 Target audiences — DRAFT, grounded in capability

- Wind/solar owners evaluating co-located storage.
- BESS investors and project finance teams needing an initial scenario model.
- Energy consultants preparing a Turkey-specific storage analysis.
- Battery vendors demonstrating dispatch and sizing scenarios.

These are target audiences, not verified customers.

---

## 4. Product line 2 — daily inflow forecasting applications

### 4.1 Product identity and shared scope

The three repositories are related Streamlit applications for **daily inflow forecasting in m³/s over a 16-day horizon** at named Turkish sites:

| Application | Site / data identity | Current implementation status |
|---|---|---|
| **Ağkolu** (`agkolu`) | Target station: **SAP DERE - AĞKOLU HES ANAYATAK (H22A015)** | Working application with modular `hydro/` package, offline pytest suite, uncertainty-band work, verification log, and Turkish UI |
| **Kemerçayır** (`iffc`) | Default input: `Su_Zaman_Serisi_KMR.xlsx`; basin file `3_HEPPs.kmz`; app title is Kemerçayır | Working single-file Streamlit application with a Streamlit Cloud/devcontainer compatibility entry shim; no active Streamlit Cloud deployment is verified and no test suite is configured |
| **Almus** (`almus-iifc`) | Target station: **E14A018**; default file `E14A018_daily_inflow_1999-2025.xlsx` | Working single-file Streamlit application using `uv`; no test suite |

The repositories show a shared model design and code lineage. A formal company product family name such as “Karakurt AYLIK” is **DRAFT** and must not be treated as an established registered product name without owner approval.

### 4.2 Shared model design

- **Model A:** autoregressive model using Q lags 1, 2, 3, and 7, recursively seeded from operator-entered current discharge Q₀; operationally used for forecast days 1–3.
- **Model B:** weather/snow model without flow lags, forecast in one shot for days 4–16.
- Both use Random Forest and Gradient Boosting regressors, trained in square-root target space.
- Operational forecasts use an ensemble; implementation details differ slightly by app, so the website should describe the family at this level unless the individual app is named.
- Features include precipitation, temperature, PET, rolling precipitation, antecedent moisture, degree-day snow-bucket states, seasonal terms, and optional snow-cover features.
- Optional snow-cover input is based on MODIS data through Google Earth Engine; the three current applications also contain NASA GIBS/MODIS map presentation paths. Availability depends on the application’s configuration and external service response.
- Ağkolu additionally uses committed IMERG/CHIRPS daily and 12-point satellite-rainfall features. This rainfall-feature statement is specific to Ağkolu and should not be generalized to every sibling application.
- The current applications call Open-Meteo daily archive/forecast endpoints without a configured commercial API key in the repositories. Provider access terms, quotas, attribution requirements, and availability are external and may change; recheck them before publication. Google Earth Engine setup may still require a project or service-account configuration for SCF data.

### 4.3 Shared user workflow

1. Authenticate through the app’s Streamlit-secrets-based login gate; the deployment must provide the configured credentials.
2. Load the site’s daily flow series and basin geometry, either from repository defaults or, where the app permits, administrator uploads.
3. Enter the current discharge Q₀.
4. Fetch or reuse weather and optional MODIS snow-cover data.
5. Train/use the cached models and generate the next 16 daily inflow estimates.
6. Review the outputs available in that application: forecast tables/charts, maps, validation panels, and downloads are not identical across all three apps.

### 4.4 Application-specific differences — INTERNAL AUDIT ONLY

#### Ağkolu

- Modular architecture under `hydro/`; the entry script primarily wires the UI.
- Point schemes include a basin-average point, elevation bands, or grid/Thiessen points; the default grid is 12 points.
- Includes a q10–q90 uncertainty band, historical validation, a table/download area, model verification, and a rolling operational verification log.
- Includes an offline pytest suite; tests do not require network or GEE.
- Repository documentation reports blind-test uncertainty-band coverage of approximately 77% for Model A and 75% for Model B. This is an internal reported evaluation statistic, not a forecast guarantee and not a claim that every future forecast interval will have that coverage.
- Known data limitations include quantized DSİ observations, possible flow regulation near the HES forebay, missing or mismatched rainfall peaks, and external data availability.

#### Kemerçayır

- Main implementation is `kemercayir_daily_model.py`; `kemerdere_daily_model.py` is a compatibility shim used by the documented Streamlit Cloud/devcontainer path.
- Required default input is `Su_Zaman_Serisi_KMR.xlsx`; basin geometry is `3_HEPPs.kmz`; river lines are optional.
- Admin-only controls include file uploads, point scheme, snow calibration, and train/test split settings; non-admin users primarily provide Q₀.
- No automated test, lint, or typecheck suite is configured.

#### Almus

- Main implementation is `main.py`; its top docstring contains stale filenames and must not be copied into public material.
- Target data is station E14A018 with the committed 1999–2025 daily inflow workbook; the default load filter begins at 2010-01-01.
- Uses `[accounts]` in Streamlit secrets for login; administrators see training/layout controls and other users see the Q₀ input.
- A full first run requires internet access, data fetching, snow-parameter search, model training, and validation; caches make later runs cheaper.
- No automated test, lint, or CI suite is configured.

### 4.5 Outputs

Depending on the application:

- 16-day daily inflow forecast in m³/s.
- Per-day table and forecast charts.
- Model A, Model B, and hybrid values.
- Forecast-day reliability framing, with days 1–3 treated as the near-term autoregressive segment and days 4–16 as the weather/snow segment.
- Snow-cover and rainfall maps.
- Ağkolu uncertainty band, operational verification log, and CSV/download functions.

### 4.6 Website-ready copy — DRAFT

> **Forecast the next 16 days of inflow at a Turkish dam or HEPP site.**
>
> The inflow applications combine recent discharge, weather forecasts, snow-bucket physics, and optional satellite snow-cover information. The near-term forecast is seeded by today’s observed flow; the longer horizon uses weather and snow features so operators can plan ramps and storage decisions with the available evidence in view.

**Short product line — DRAFT:**

> Site-specific 16-day daily inflow forecasting with weather and snow signals.

### 4.7 Verification and limitations

- Ağkolu is the only member with a documented offline automated test suite and persistent operational verification log.
- The applications contain validation calculations such as NSE, logNSE, KGE, PBIAS, and peak NSE, but evidence and presentation differ by app. Ağkolu has the documented offline test suite and reported uncertainty evaluation; Kemerçayır and Almus have no comparable automated test suite in the repositories.
- The apps do not establish a universal skill level for all Turkish basins or all forecast horizons.
- The sites are hard-coded or configured around three named catchments. A new basin requires data, geometry, configuration, and model validation; “retargetable in days” is **DRAFT**, not a verified delivery commitment.
- Login secrets contain plaintext credentials and are required for use; this is not an enterprise identity system.
- GEE, Open-Meteo, NASA GIBS, local cache files, and site data are external or operational dependencies. Missing GEE data is designed to be non-fatal in the model, but it changes available features and map content.
- These applications support operational planning; they are not a replacement for operator judgment, official forecasts, reservoir rules, or safety-critical decisions without review.

**Do not publish:** “accurate 16 days,” “guaranteed snowmelt prediction,” “real-time national forecasting,” “official DSİ forecast,” or a universal NSE/PICP promise.

### 4.8 Target audiences — DRAFT, grounded in capability

- HEPP and dam operators at the three supported sites.
- Hydrology and DSİ engineering teams working with daily inflow data.
- Researchers and students studying weather/snow-informed inflow forecasting.
- Potential engineering customers considering a site-specific deployment.

No customer deployment or commercial contract is verified in the repositories.

---

## 5. Product line 3 — Taşkın Hesap / Sentetik Yöntemler

### 5.1 Product identity and status — INTERNAL AUDIT ONLY

**VERIFIED name:** **Taşkın Hesap — Sentetik Yöntemler Web Uygulaması**.

**VERIFIED status:**

- **INTERNAL AUDIT NOTE:** The following bullets describe repository/configuration evidence, not public website copy by themselves.
- Active `flood-compute` repository on `main`.
- FastAPI/uvicorn backend and vanilla HTML/CSS/JavaScript frontend using Leaflet and Chart.js.
- Local run path is `python run.py`, using port **8737**.
- Dockerfile and documented deployment guidance exist.
- Backend documentation lists 64 routes: 30 GET, 33 POST, and 1 DELETE.
- Optional HTTP Basic password protection is enabled through the `APP_PASSWORD` environment variable.
- No public hosted URL is established in this audit.

**Safe website status:** **Working, deployable flood-engineering application; hosted availability requires confirmation.**

### 5.2 What it does

Taşkın Hesap automates a Turkish flood-design workflow from a map-guided basin study. It is designed around DSİ-oriented synthetic flood methods, selected broad-coverage and regional data layers where available, frequency analysis, routing, and report/export generation. Coverage, resolution, completeness, licensing, and external availability vary by layer.

The application can:

- Delineate a basin from an outlet using DEM and flow-direction processing.
- Import or edit basin geometry.
- Calculate basin geometry, elevation profile, slope, concentration time, and hydrologic parameters.
- Derive runoff CN and rational-method parameters from CORINE and soil-group inputs.
- Build Thiessen rainfall weights from MGM stations.
- Calculate design rainfall and flood peaks.
- Compare synthetic methods and hydrographs.
- Run at-site and regional frequency analyses.
- Calculate PMP/MMY and route flood hydrographs through reservoirs or multi-basin systems.
- Produce Word reports, MGM petitions, KMZ files, CSV/JSON data, and project save/load artifacts.

### 5.3 User workflow

The primary seven-step workflow is:

1. **Basin:** click an outlet, import a basin, or edit geometry.
2. **Parameters:** inspect/correct basin geometry, slope profile, YZD region, base flow, and soil group.
3. **CN:** calculate land-use/runoff parameters using CORINE and hydrologic soil-group data.
4. **Thiessen:** select the default MGM measurement network or upload station points and calculate area weights.
5. **Rainfall:** derive P2–P100 design rainfall from annual-maxima data or enter rainfall values manually; show each row’s source and series information.
6. **Flood computation:** calculate DSİ Synthetic, Mockus, Rational where applicable, and optional Snyder results; compare peaks and hydrographs.
7. **Frequency and post-processing:** run NTFA, BTFA, MMY, multi-basin routing, reservoir routing, water-potential analysis, and exports as needed.

The app also contains separate modes for water potential, multi-basin routing, reservoir routing, controlled gates, raster basemaps, project save/load, and KMZ export.

### 5.4 Methods and data

**Flood methods:**

- DSİ Synthetic method with BH2 unit hydrograph, SCS runoff, YZD temporal distribution, and the KABULET peak matrix.
- Mockus triangular unit hydrograph.
- Rational method for small basins (the implementation documents an A ≤ 1 km² applicability condition).
- Snyder synthetic unit hydrograph with optional parameters and volume balancing.
- Optional snowmelt contribution where configured.

**Frequency and routing:**

- NTFA at-site frequency analysis using Normal, Log-Normal 2P/3P, Pearson-3, Log-Pearson-3, and Gumbel distributions, with Smirnov–Kolmogorov comparison and Grubbs–Beck reporting.
- BTFA regional index-flood analysis with Dalrymple homogeneity information.
- MMY/Hershfield probable maximum precipitation calculations using the repository’s regional tables and workbook semantics.
- Storage-Indication/Modified Puls reservoir routing.
- Controlled-gate routing and multi-basin lagged hydrograph routing.

**Data layers documented in the repository:**

- Copernicus GLO-30 DEM tiles and optional national 10 m DEM clips.
- CORINE CLC2018 land-cover data.
- SoilGrids-derived AWC and hydrologic soil-group layers.
- CHELSA v2.1 precipitation/PET/net layers.
- MGM database: 1,290 stations, 78 observation types, 9,614 series, and approximately 45,000 station-years covering the repository’s documented 1925–2023 source period; the default Thiessen set contains 1,184 stations with at least 10 years of suitable records.
- AGİ annual-peak database: 2,732 stations and approximately 36,500 station-years covering 1935–2020.
- Daily-flow database: 2,909 stations and approximately 8.9 million days covering 1934–2015.
- DSİ river network: approximately 405,000 river lines.

Dataset counts and date ranges are repository snapshot metadata. They may change after regeneration and should be rechecked before being displayed as live website counters.

### 5.5 Outputs

- Basin polygon, river context, and derived basin parameters.
- Design rainfall and flood peaks for documented return periods, including Q2–Q10000 paths where the selected method supports them.
- Hydrograph data and method comparison tables/charts.
- NTFA, BTFA, and MMY results with source and diagnostic information.
- Reservoir-routing output including peak attenuation, delay, level, and gate schedule where applicable.
- Water-potential results including annual volume, reliability, and transferred/gap-filled series where data supports them.
- Generated `.docx` flood-report section/report.
- Separate MGM petition output in supported `.docx` or `.pdf` formats.
- KMZ basin export with streams and selected return-period values.
- CSV/JSON tables and saved project JSON.

### 5.6 Website-ready copy — DRAFT

> **A map-guided flood-design workflow for Turkish engineering studies.**
>
> Taşkın Hesap combines basin delineation, CN and soil analysis, Thiessen rainfall, DSİ-oriented synthetic methods, frequency analysis, routing, and report generation in one workflow. Its calculations are compared with named DSİ and engineering workbook cases through golden tests, while assumptions and data sources remain visible to the engineer.

**Short product line — DRAFT:**

> DSİ-oriented flood-study computation, comparison, routing, and reporting from a basin map.

### 5.7 Verification and limitations — INTERNAL AUDIT ONLY

**Verified validation evidence — INTERNAL AUDIT NOTE:** Publish only the qualified formulations in §9 after editorial approval.

- The Tayakadın reference case has a golden test for the DSİ/Mockus engine with tolerance 1e-6.
- Snyder, reservoir routing, NTFA, BTFA, MMY, raster, CORINE, KMZ, and API smoke checks are represented by separate executable test scripts.
- The repository documents tighter case-specific checks for BTFA/MMY and case-specific tolerances for Snyder/routing; do not compress all tests into one universal tolerance claim.
- The net-precipitation tool documents internal results of raw NSE +0.42, calibrated NSE +0.72, and five-fold cross-validation NSE +0.58 on 41 natural gauges, with known regional weaknesses. These are validation results for the net-precipitation data layer, not an end-to-end flood-study accuracy evaluation or proof that every flood study is equally accurate.
- The CHELSA comparison is documented as Lin agreement 0.824 against 1,005 MGM stations. This is evidence for the selected climate-layer comparison, not an official endorsement.

**Important limitations:**

- “Golden parity” applies to named reference workbooks and cases. It does not mean that every workbook, basin, parameter choice, or regulatory decision is automatically correct.
- Basin delineation is CPU/memory intensive and runs in a subprocess behind a non-blocking lock; concurrent requests can receive HTTP 503.
- First use may require network access to download DEM/CORINE and other data. Large DEMs, raster processing, and GIS dependencies affect deployment requirements.
- The 10 m DEM path has scale, cell-count, and datum limitations. The repository specifically warns that fine-resolution L/Lc values may differ from DSİ map-calibrated lengths.
- Soil group is a lower-bound estimate without depth-to-bedrock information and can materially change flood peaks. Users must review it.
- Historical AGİ extraction contains identified corrupt records; the application reports/screen them according to its documented rules. Users must inspect exclusions and results.
- MGM measurement coverage is uneven; short records and heavy-tailed frequency fits can produce unstable design rainfall.
- The application is Turkish-first. It is not a universal HEC/HEC-RAS replacement, a flood warning system, or an automatic regulatory approval service.
- Public deployments must configure authentication, HTTPS, resource limits, and operational backups; the repository alone does not provide a hosted service or SLA.

**Do not publish:** “DSİ approved,” “official DSİ software,” “guaranteed regulatory acceptance,” “zero manual review,” or “accurate for every basin.”

### 5.8 Target audiences — DRAFT, grounded in capability

- DSİ and public-sector flood-study engineers.
- Dam, bridge, culvert, road, and water-infrastructure consultants.
- Civil and hydrology engineers preparing proposal or design studies.
- University and research users needing reproducible Turkish flood-method calculations.

These are intended audiences, not verified customers.

---

## 6. Archived research lineage — hidroopt-dsi projects

### 6.1 Correct scope and status

The four legacy repositories are a research archive, not a current commercial product suite:

1. **KISINTI console application** (`hidroopt-dsi-consoleclient`): Windows/.NET Framework model of drought/water-deficit rationing for a dam reservoir.
2. **RezOPT web client** (`hidroopt-dsi-webclient`): legacy Vue 2 SPA for reservoir projects and scenarios.
3. **RezOPT web API** (`hidroopt-dsi-webserver`): legacy Node/Express/Mongoose service connected to MongoDB and Python calculations.
4. **UnitOptimization / UnitOpt** (`hidroopt-unitopt`): .NET Framework Web API/EF/SQL Server hydro-unit flow allocation and efficiency solver, with Vue client and Python validation artifacts.

The legacy projects are on `master`, lack modern CI and comprehensive tests, and require old Windows/.NET, Node, database, or OR-Tools environments. The UnitOpt repository’s latest snapshot is from 2023, while its core lineage and web stack are thesis-era work.

**Safe website status:** **Archived research and methodology reference.**

### 6.2 What the archive contains

- **KISINTI:** a constraint-programming stage selects candidate rationing years under policy constraints; a GLOP linear program then balances 420 monthly rows and optimizes a water-use coefficient. Inputs are embedded in source arrays, and the active computation contains a hardcoded scenario remnant.
- **RezOPT web stack:** users can create projects/scenarios around reservoir goals such as irrigation, drinking water, flood control, and energy; MongoDB stores domain objects; Python calculations write scenario results and Excel artifacts. The current computation path has a known hardcoded-scenario behavior and weak child-process error handling.
- **UnitOpt:** reads scenario, turbine, and inflow data from SQL Server through EF; uses legacy OR-Tools constraint programming, turbine efficiency interpolation, hydraulic head calculations, spill handling, and bulk result storage. The validation artifacts include three turbine curve types (Francis, Kaplan, Pelton). The code supports scenario-defined turbine arrays; do **not** advertise a universal “four-turbine limit” without separate confirmation.

### 6.3 Historical value

**VERIFIED methodological value — INTERNAL AUDIT NOTE:** the archive demonstrates formalization of reservoir and hydropower decisions as mathematical programs rather than only spreadsheet rules. It contains CP/LP decomposition, mass-balance reasoning, turbine-flow allocation, efficiency curves, routing/operational concepts, and an early core/API/UI architecture.

**DRAFT website copy:**

> Before the current water, flood, and energy-storage applications, the portfolio included research software for reservoir rationing, long-horizon mass balance, and hydro-unit flow allocation. Those repositories remain available as a historical methodology reference—not as supported production software.

### 6.4 Archive limitations — INTERNAL AUDIT ONLY

- No comprehensive automated tests or CI.
- KISINTI requires Windows/.NET Framework and a compatible legacy OR-Tools DLL; the solution also references a missing external project.
- RezOPT web client production build is documented as broken; its development API points to localhost and requires an old backend/database stack.
- RezOPT webserver `npm test` is a failing stub; scenario computation has a hardcoded scenario ID and weak error propagation.
- UnitOpt requires Windows/Visual Studio/IIS Express, SQL Server, legacy OR-Tools binaries, and old frontend tooling.
- Inputs, database schemas, credentials, and deployment assumptions are not suitable for a new public service without a rewrite and security review.

**Do not publish:** “enterprise reservoir-management platform,” “supported legacy SaaS,” “production-ready solver,” or current customer/deployment claims.

---

## 7. Portfolio fit guide

Use this table to route an inquiry. It is a product-fit aid, not a sales promise.

| User need | Best-fit line | Conditions | Do not use when |
|---|---|---|---|
| Explore battery dispatch and storage sizing around a wind/solar plant | **bobo** | EPİAŞ plant and price/generation access; province/region when tariff netting is needed; scenario assumptions available | User needs custom file upload, ancillary services, grid studies, or a guaranteed investment case |
| Analyze a site-supported 16-day dam/HEPP inflow forecast | **Ağkolu / Kemerçayır / Almus** | The site matches one of the three configurations; Q₀ and local secrets/data are available | User expects a generic national forecast or an unvalidated new basin |
| Prepare a Turkish flood-design study from an outlet/basin | **Taşkın Hesap** | GIS/data dependencies available; engineer reviews basin, soil, rainfall, method, and results | User needs a flood-warning service, full hydraulic modeling, or official approval without review |
| Study historical reservoir rationing or hydro-unit optimization methods | **hidroopt archive** | Academic, historical, or methodology purpose | User needs supported production operations or modern security/hosting |
| Need billing, SSO, customer accounts, analytics, or a public support portal | **No current product is verified to provide this** | Requires a future platform layer | Do not imply that bobo’s login gate is a SaaS account system |

---

## 8. Website content plan

> **Implementation status (VERIFIED, 2026-08-09):** the marketing site (`insposoft-site`, Astro 7 static) implements this plan as a single one-page layout. The home page combines company positioning, the three capability areas (bobo; Ağkolu·Kemerçayır·Almus; Taşkın Hesap) as “Engineering Systems” cards with decision/review lines, an evidence & approach section with a verification ledger, a three-step “How we work” section, technical demonstrations, the research lineage, and a contact section using the Formspree form. Privacy, terms, and 404 pages exist in both locales. The plan’s separate product pages (BESS studio, Inflow, Taşkın Hesap, Methods & evidence) remain **DRAFT**; the one-pager presents their content as sections, and the product-level CTAs from §8.2 are not implemented.

### 8.1 Recommended site structure — DRAFT

1. **Home:** concise company positioning, three current product lines, evidence/verification section, and a restrained contact CTA.
2. **BESS studio:** EPİAŞ data path, dispatch model, sizing sweep, economics, sample outputs, access request.
3. **Inflow forecasting:** three supported sites, 16-day horizon, weather/snow design, uncertainty and limitations, site-assessment CTA.
4. **Taşkın Hesap:** seven-step workflow, methods, report/KMZ outputs, golden-test methodology, demo/pilot CTA.
5. **Research lineage:** archived reservoir and hydro-unit optimization work, clearly separated from current products.
6. **Methods and evidence:** data sources, tests, validation cases, and limitations.
7. **Contact:** owner-supplied phone and office address (2026-08-09) plus the Formspree inquiry form; legal/company identity and an approved public email remain to be confirmed.

### 8.2 CTA registry — DRAFT

| Page | Primary CTA | Secondary CTA |
|---|---|---|
| Home | “Discuss an engineering use case” | “Explore the products” |
| bobo | “Request BESS access” | “Read the dispatch method” |
| Inflow | “Discuss your basin” | “See the forecast approach” |
| Taşkın Hesap | “Request a flood-study demo” | “Read how results are verified” |
| Lineage | “Explore the research archive” | “Read the methods” |

Do not use “Buy now,” “Start free trial,” or “Book a demo” until the access, pricing, and sales process exists.

### 8.3 Tone and editorial rules — DRAFT

- Expert-first, specific, calm, and evidence-led.
- Prefer “calculates,” “models,” “reports,” “compares,” and “supports review” over “guarantees,” “proves,” or “solves every case.”
- Put product-specific qualifiers next to claims, not hidden in a generic disclaimer.
- Preserve Turkish engineering names: EPİAŞ, TEİAŞ, DSİ, MGM, AGİ, Taşkın Hesabı, Kemerçayır, Ağkolu, Almus.
- Keep Turkish UI terminology in Turkish product screenshots; provide English explanatory copy only where appropriate.
- Date all changing proof points and dataset counts.
- Link or cite the relevant method/test evidence internally before publishing a numerical claim.

---

## 9. Proof-point registry — INTERNAL EDITORIAL REVIEW

These are candidates for a public “methods/evidence” page only after the owner approves the qualifier, citation, and publication scope. Do not pass this table directly to website copy.

| Proof point | Exact safe wording | Source context |
|---|---|---|
| bobo deployment | “The UI repository contains Cloudflare configuration intended for `bataryaopt.insposoft.com` and proxies `/api` to `epias-data-provider.insposoft.com`; current reachability requires confirmation.” | `bobo-ui/wrangler.jsonc`, `bobo-ui/AGENTS.md` |
| bobo access | “The UI uses a build-time credential list and ten-minute idle timeout.” | `bobo-ui/AGENTS.md`, `bobo-ui/README.md` |
| Flood golden test | “The Tayakadın reference case is checked by an executable golden test at tolerance 1e-6.” | `flood-compute/README.md`, `backend/tests/test_golden.py` |
| Flood method coverage | “Separate executable checks cover Snyder, reservoir routing, NTFA, BTFA, MMY, raster, CORINE, KMZ, and API smoke behavior.” | `flood-compute/AGENTS.md`, `backend/tests/` |
| Flood climate-layer validation | “The repository documents Lin agreement 0.824 against 1,005 MGM stations for its CHELSA comparison.” | flood-compute data-preparation documentation |
| Flood precipitation-layer validation | “The repository documents raw NSE +0.42, calibrated NSE +0.72, and five-fold CV NSE +0.58 on 41 natural gauges for the **net-precipitation data layer only**; these are not end-to-end flood-study accuracy scores.” | `flood-compute/tools/net_yagis_dogrulama.py` and project docs |
| Hydrology horizon | “The three site applications produce a documented 16-day daily inflow forecast.” | each hydrology project’s entry/docs |
| Ağkolu testing | “Ağkolu includes an offline pytest suite that does not require network or GEE.” | `agkolu/AGENTS.md`, `agkolu/README.md` |
| Research chronology | “The archived reservoir/hydropower repositories begin in 2016–17; current active product repositories begin in 2026.” | repository git logs |

Never present the table as a list of customer outcomes, official endorsements, or universal accuracy guarantees.

---

## 10. SEO and search-intent ideas — DRAFT

These are keyword hypotheses, not measured search-volume facts.

| Product | English ideas | Turkish ideas | Intent |
|---|---|---|---|
| bobo | BESS dispatch optimization, battery sizing, renewable-storage economics, EPİAŞ price analysis | batarya depolama fizibilitesi, BESS optimizasyonu, EPİAŞ fiyat analizi, depolamalı RES | Evaluate a storage scenario |
| Inflow | 16-day inflow forecast, snowmelt hydrology, dam inflow machine learning | günlük akım tahmini, baraj giriş akımı, kar erimesi tahmini, hidroloji makine öğrenmesi | Operational planning and research |
| Taşkın Hesap | DSİ flood design, synthetic flood methods, design flood Q100, basin delineation | taşkın hesabı, sentetik yöntemler, proje taşkını, tasarım debisi, Q100 | Engineering study and review |
| Research archive | reservoir rationing, hydro unit optimization, OR-Tools reservoir model | rezervuar optimizasyonu, su kısıntısı, hidro ünite optimizasyonu | Academic and historical research |

Do not claim SEO rankings, traffic, market demand, or search volume without separate evidence.

---

## 11. DO NOT PUBLISH / CONFIRM checklist

### 11.1 Never publish from repository evidence alone

- Credentials, passwords, API keys, private environment values, or private email addresses.
- Sample names, addresses, tax numbers, phone numbers, or signatures embedded in petition defaults.
- Customer names, customer counts, revenue, valuation, funding, testimonials, case studies, or ROI outcomes.
- Official DSİ, MGM, EPİAŞ, TEİAŞ, university, or government endorsement/partnership.
- Regulatory approval, compliance certification, safety certification, bankability, or guaranteed acceptance.
- Uptime, response-time, availability, security, data-retention, or SLA claims.
- “Market-leading,” “唯一/only,” “best,” “100% accurate,” or universal accuracy claims.
- “Open source” or “proprietary” for the whole portfolio without an explicit licensing decision.
- “Live public SaaS,” “self-service,” “free trial,” or “paid product” when the corresponding user, billing, and support systems are not documented.
- Localhost URLs, bare IP addresses, development ports, or internal repository paths in public copy.

### 11.2 Must be confirmed before launch

- Legal company and brand identity.
- Public domain, email, and social profiles (phone and office address are owner-supplied, 2026-08-09); registered legal address remains to be confirmed.
- Product access process and whether bobo is publicly reachable or invite-only.
- Pricing, packaging, service/project model, and payment terms.
- Customer references and permission to publish them.
- Legal notices, privacy policy, cookie/analytics policy, terms, and data-processing responsibilities.
- Licensing and ownership policy for source code and generated reports.
- Whether repository-derived numeric proof points may be published and how they should be cited.
- Whether the company wants to offer hosted software, consulting studies, white-label deployments, or only research/prototypes.

---

## 12. Internal source register — NOT WEBSITE COPY

This section is editorial metadata for maintaining the content reference. Do not copy repository paths, internal filenames, local ports, or development commands into public pages. The authoritative technical source for each claim is the relevant project’s current `AGENTS.md`, README, source, tests, and deployment configuration—not this document alone. At the audit date, the key sources are:

- **Marketing site:** `insposoft-site/AGENTS.md`, `insposoft-site/README.md`, `astro.config.mjs`, `package.json`, `src/layouts/BaseLayout.astro`, `src/components/` (`OnePage.astro`, `ContactForm.astro`, `TechnicalHero.astro`), `src/lib/contact.ts` (shared public contact values), `src/pages/` and `src/pages/tr/` (`index`, `privacy`, `terms`, `404`), `src/styles/global.css`, `public/` (`og.svg`, `og.png`, `sitemap.xml`, `robots.txt`), `wrangler.toml`, `.env.example`.
- **Portfolio:** root `AGENTS.md`.
- **bobo API:** `bobo-api/AGENTS.md`, `bobo-api/README.md`, `bobo-api/pyproject.toml`, `bobo-api/app/`, `bobo-api/tests/`.
- **bobo UI:** `bobo-ui/AGENTS.md`, `bobo-ui/README.md`, `bobo-ui/package.json`, `bobo-ui/wrangler.jsonc`, `bobo-ui/src/`, `bobo-ui/worker/`.
- **Ağkolu:** `agkolu/AGENTS.md`, `agkolu/README.md`, `agkolu/agkolu_daily_model.py`, `agkolu/hydro/`, `agkolu/tests/`.
- **Kemerçayır:** `iffc/AGENTS.md`, `iffc/kemercayir_daily_model.py`, `iffc/kemerdere_daily_model.py`, `iffc/requirements.txt`.
- **Almus:** `almus-iifc/AGENTS.md`, `almus-iifc/main.py`, `almus-iifc/pyproject.toml`, `almus-iifc/uv.lock`.
- **Taşkın Hesap:** `flood-compute/AGENTS.md`, `flood-compute/README.md`, `flood-compute/backend/`, `flood-compute/frontend/`, `flood-compute/Dockerfile`, `flood-compute/backend/tests/`, and `flood-compute/tools/`.
- **KISINTI:** `hidroopt-dsi-consoleclient/AGENTS.md` and the `KISINTI/` source/project files.
- **RezOPT web:** `hidroopt-dsi-webclient/AGENTS.md`, `README.md`, `package.json`; `hidroopt-dsi-webserver/AGENTS.md`, `package.json`, `server.js`, `computations/`.
- **UnitOpt:** `hidroopt-unitopt/AGENTS.md`, solution/projects under `core/`, `webapi/`, and `webclient/`.

When a source file, deployment, status, dataset, or public contact changes, update this document and its audit date before reusing the affected claim on the website.

---

## 13. Engineering startup website content requirements — DRAFT specification

This section converts the repository evidence above into a practical website brief. It is a content requirement, not proof that the company already offers every listed service or operates every listed channel.

### 13.1 Website goals

The website should:

1. Explain the company in one sentence without hiding behind software names.
2. Separate current energy/BESS tools, current hydrology and flood applications, and archived reservoir/hydropower optimization research. The current repository evidence does not establish a current hydropower dispatch/control product; hydropower optimization belongs to the archived lineage unless separately confirmed.
3. Help an engineering buyer decide whether a product fits their problem, data, site, and decision stage.
4. Demonstrate technical credibility through methods, inputs, outputs, reproducible reference cases, and limitations.
5. Convert qualified visitors into a technical conversation, access request, pilot discussion, or study inquiry.
6. Make no unsupported claims about customers, regulatory approval, accuracy, uptime, revenue, or commercial readiness.
7. Support Turkish-first engineering audiences while leaving room for an English-language BESS and international-facing presentation.

### 13.2 Required website audiences

The first release should address these audiences explicitly:

| Audience | Likely question | Relevant evidence/product |
|---|---|---|
| Renewable-plant owner or BESS investor | “Can storage improve the modeled value of my wind/solar plant?” | bobo: EPİAŞ data path, dispatch, sizing sweep, tariff/FX scenario layer |
| BESS vendor, EPC, or energy consultant | “Can I demonstrate or screen a Turkey-specific storage case?” | bobo: hourly trajectory, economics, CSV/table outputs |
| HEPP or dam operator | “Can I see the next days of inflow with weather and snow signals?” | Ağkolu, Kemerçayır, Almus: site-specific 16-day forecasting applications |
| Hydrology/flood consultant | “Can I move from basin geometry to a reviewed design-flood study?” | Taşkın Hesap: delineation, CN, Thiessen, frequency, routing, reports/exports |
| Reservoir or hydropower researcher | “What earlier optimization work exists?” | RezOPT, KISINTI, UnitOpt: clearly marked archive |
| Engineering manager or technical evaluator | “What is proven, what is configurable, and what still requires review?” | Methods, evidence, limitations, access, and governance pages |

These are target audiences, not verified customers.

### 13.3 Required top-level information architecture

| Page | Required content | Primary action |
|---|---|---|
| **Home** | Company promise, sectors, three current product lines—bobo, site-specific inflow forecasting, and flood engineering—plus the separate archived hydropower/reservoir research lineage, evidence philosophy, selected workflow visuals, and status/access qualifiers | Discuss an engineering use case |
| **Energy & BESS** | BESS problem framing, bobo workflow, EPİAŞ data path, dispatch/sizing/economics, assumptions, example output | Request BESS access or scenario discussion |
| **Hydrology & water systems** | Inflow forecasting, hydropower-planning context, supported sites, weather/snow model, site-specific limits; current hydropower optimization remains archival unless separately confirmed | Discuss a basin or HEPP use case |
| **Flood engineering** | Taşkın Hesap workflow, methods, GIS/data layers, outputs, reference-case evidence, engineer review boundary | Request a flood-study discussion |
| **Engineering services** | Only approved service packages; scope, inputs, deliverables, responsibilities, timing and commercial model | Describe a project requirement |
| **Methods & evidence** | Data sources, equations at an appropriate level, test/reference cases, uncertainty, dated proof points | Review the technical basis |
| **Research lineage** | Archived RezOPT/KISINTI/UnitOpt story, historical value, explicit unsupported status | Explore the archive |
| **About / team** | Company identity, named team profiles, long-term engineering-practice narrative, approved experience timeline, and working principles | Learn who is responsible |
| **Past projects** | Approved/anonymized project examples with problem, team role, deliverable, date, and outcome or capability delivered | Evaluate relevant experience |
| **Contact / access** | Approved public contact, structured inquiry form, access route, privacy notice | Submit an inquiry |
| **Legal / trust** | Privacy, terms, cookies, IP/licensing, disclaimers, security and data-processing boundary | Review terms and responsibilities |

Legal/company identity and public email/social contact remain **CONFIRM** items; public phone and office address are owner-supplied (2026-08-09).

### 13.4 Required homepage content blocks

The home page should contain, in this order:

1. **Hero:** a short, specific value proposition; sector labels; one primary CTA and one secondary exploration CTA.
2. **Problem frame:** the decisions supported—storage dispatch/sizing, inflow planning, flood-study computation, and historical reservoir/hydropower optimization research. Do not present the archive as a current hydropower control product.
3. **Three current solution cards:** bobo; site-specific inflow forecasting; Taşkın Hesap. Each card must show status, fit, output, and limitation in one line.
4. **Engineering workflow:** data → model/method → review → decision output.
5. **Evidence strip:** dated, qualified facts such as named reference-case tests, 16-day horizon, or a documented model feature—not vague “AI-powered” claims.
6. **Sector navigation:** energy/storage, hydrology/water, flood engineering, research archive.
7. **How an engagement works:** discovery, data review, scenario/configuration, validation, handover; mark this **DRAFT** until the commercial process is confirmed.
8. **CTA:** inquiry/access request with a clear response expectation only after an actual service level is established.
9. **Footer:** approved identity, contact, legal links, language switch, source/last-updated policy where appropriate.

### 13.5 Required product-page schema

Every current-product page should use the same fields so product claims remain comparable. A page is complete only when it has an approved hero, supported-scope table, workflow, evidence citation, limitation block, CTA, content owner, audit date, and legal/publication review.

| Field | Requirement |
|---|---|
| Product name and status | Use exact repository-backed name and a status label from §0.2. |
| Decision problem | State what the engineer/operator is trying to decide. |
| Intended users | List capability-grounded audiences; do not imply customers. |
| Supported scope | State site, geography, horizon, inputs, units, and method boundaries. |
| Workflow | Show steps from data/input to result. |
| Methods | Name the model or engineering method without unnecessary implementation jargon. |
| Data sources | Identify source families and whether data is static, fetched, optional, or user-provided. |
| Outputs | Show tables, charts, trajectories, reports, exports, and units. |
| Evidence | Attach a named test, evaluation, or reference case with date and scope. |
| Assumptions | Explain the inputs that materially affect the result. |
| Limitations | Place the most important caveat next to the relevant claim. |
| Access/deployment | State whether access is live/configured, working, pilot, local, or unverified. |
| CTA | Ask for the next technical step, not an unsupported purchase action. |
| Source metadata | Keep source files, audit date, claim status, and owner approval in the internal register. |

### 13.6 Energy and BESS page requirements mapped to bobo

The public page should present bobo as a **scenario-analysis and dispatch/sizing tool**, not as a revenue guarantee or grid-operations system.

Required content:

- Problem: co-located wind/solar owners need to explore when a battery may charge/discharge and how capacity, power, tariffs, CAPEX, degradation, and financing assumptions affect a modeled case.
- Inputs: selected EPİAŞ plant, hourly price/generation series, date range, province/TEİAŞ region where relevant, battery parameters, export ceiling, charging-source rule, wear and finance assumptions.
- Method: hourly backward dynamic programming over SOC states, optional PV-clipping reconstruction, capacity sweep, and financial scenario layer.
- Outputs: dispatch trajectory, SOC/action charts, plant-only versus BESS comparison, equivalent cycles, capacity sweep, payback/annual-benefit scenario views, operation table, and CSV.
- Buyer qualification: ask whether the visitor has an EPİAŞ plant identifier, a wind/solar operating context, a desired date range, and a need for screening versus investment-grade analysis.
- Explicit exclusions: no ancillary-service model, grid-interconnection study, warranty certification, imbalance model, bankability opinion, or realized-revenue guarantee is established.
- Public proof language: “Scenario analysis using EPİAŞ transparency data through the bobo data path” and “browser-based dispatch and sizing exploration,” subject to access and upstream availability. Do not imply official EPİAŞ affiliation or uninterrupted live data.

### 13.7 Hydrology and water-systems page requirements mapped to the hydrology portfolio

The hydrology page may connect inflow forecasting to hydropower operational planning, but it must not imply that the current portfolio offers hydropower dispatch, control, or optimization. Those capabilities belong to the archived research lineage unless separately confirmed.

Required content:

- Supported sites: Ağkolu HES / H22A015, Kemerçayır, and Almus / E14A018.
- Horizon: documented 16-day daily inflow forecast in m³/s.
- Near-term logic: Q₀-seeded autoregressive Model A for days 1–3.
- Longer-horizon logic: weather/snow Model B for days 4–16.
- Signals: recent flow, Open-Meteo precipitation/temperature/PET, degree-day snow states, optional MODIS SCF, and Ağkolu-specific IMERG/CHIRPS features.
- Operator experience: enter current flow, inspect forecast and weather/snow context, review validation and downloads where the selected application provides them.
- Site-specific boundary: these are configured applications for named catchments; a new site requires data, geometry, configuration, and validation.
- Evidence boundary: Ağkolu has the documented offline tests, uncertainty-band evaluation, and operational log; sibling applications have their own validation calculations but no comparable automated test suite in the repository evidence.
- Public exclusion: do not call the family national, universally accurate, official, or safety-critical without human review.

### 13.8 Flood-engineering page requirements mapped to Taşkın Hesap

The flood page should show a complete engineering workflow rather than a generic “AI flood prediction” message.

Required content:

- Problem: turn a basin/outlet and engineering inputs into comparable design-flood, frequency, routing, and reporting outputs.
- Workflow visual: basin → parameters → CN/soil → Thiessen rainfall → rainfall/frequency → flood methods → routing/report/export.
- Method families: DSİ Synthetic, Mockus, Rational where applicable, Snyder, NTFA, BTFA, MMY/Hershfield, reservoir routing, and multi-basin routing.
- Data families: DEM, CORINE, SoilGrids-derived soil layers, CHELSA layers, MGM rainfall records, AGİ peaks/daily flow, and river-network context, all subject to coverage and review.
- Outputs: hydrographs, return-period peaks, method comparisons, water-potential outputs, Word report sections, MGM petition files, KMZ, CSV/JSON, and saved project artifacts where supported.
- Review boundary: soil group, rainfall record quality, station matching, outliers, basin delineation, DEM scale, method selection, and regulatory interpretation require engineer review.
- Proof: named workbook/golden cases and separate executable checks, with each tolerance and result scope stated precisely.
- Public exclusion: not a flood-warning system, hydraulic-model replacement, automatic regulatory approval, or guarantee for every basin.

### 13.9 Hydropower research-lineage page requirements

The archive should support credibility without being presented as a current product:

- Explain the historical problems: reservoir rationing, mass balance, irrigation/water-deficit policy, hydro-unit flow allocation, turbine efficiency, and scenario management.
- Use a timeline based on repository chronology, not a company-age claim.
- Explain methodological continuity: CP/LP optimization, water balance, turbine curves, routing, and operational concepts.
- Label RezOPT, KISINTI, and UnitOpt as archived research/reference material; do not describe them as a current hydropower dispatch, control, or optimization service without a separately verified modern offering.
- Show screenshots or diagrams only after checking source ownership, third-party assets, and sensitive data.
- Do not advertise unsupported deployment, current customers, production reliability, or legacy SaaS access.

### 13.10 Engineering-services content requirements — DRAFT / CONFIRM

The repository supports capability narratives, but it does not establish a commercial services catalogue. Before publishing any service, confirm scope, pricing, responsibility, and deliverables. The recommended first commercial model is **software plus engineering studies in parallel**, with separate CTAs and qualification forms.

#### 13.10.1 Recommended offer architecture — DRAFT / CONFIRM

| Offer route | Customer buys/request | Typical first deliverable | Qualification questions |
|---|---|---|---|
| **BESS software / pilot** | Access to bobo, a guided pilot, or a scenario walkthrough | Configured dispatch/sizing scenario, assumptions summary, and exportable results | Plant identifier, wind/solar context, period, storage question, data/access readiness |
| **BESS engineering screening** | A scoped storage opportunity assessment | Scenario comparison, sizing/economic sensitivity, limitations, and decision memo | Project stage, CAPEX/finance assumptions, tariff region, required decision date |
| **Hydrology software / site assessment** | Access to a configured forecast application or assessment of a new site | Site-data review, forecast setup, validation plan, and operating-view prototype | Basin/site, flow history, Q₀ availability, weather/snow context, desired horizon |
| **Flood computation / study support** | Tool-assisted flood workflow, engineering support, or reviewed computation | Basin/method assumptions, design-flood outputs, routing/report/export package, and review notes | Basin/outlet, available rainfall/DEM/soil data, return periods, regulatory/study purpose |
| **Methods and optimization advisory** | Technical review, training, or research/prototype discussion | Method note, workshop, prototype scope, or architecture recommendation | Decision owner, existing models/data, desired modernization or review outcome |

The company must decide whether it is selling a hosted product, licensed software, engineering studies, advisory work, or a combination. Until then, use “discuss,” “request access,” and “scope a study,” not “buy now” or “guaranteed delivery.”

#### 13.10.2 Engagement journey — DRAFT

1. **Discovery:** understand the decision, site, stakeholders, timeline, and existing data.
2. **Fit check:** select software, engineering study, or combined route; identify exclusions early.
3. **Data and assumptions review:** confirm units, period, geometry, tariff context, quality issues, and responsibilities.
4. **Pilot or scoped work:** configure the tool or execute the agreed analysis with a defined review plan.
5. **Technical review:** inspect assumptions, sensitivity, validation/reference cases, and limitations with the customer.
6. **Handover:** deliver access, scenario files, reports, exports, documentation, training, or next-step recommendations as contracted.

Each stage should have an owner, expected input, decision gate, and deliverable. Do not publish turnaround times or SLAs until the team can consistently meet them.

#### 13.10.3 Offer-page requirements

Every commercial offer page must show: customer problem, ideal fit, required inputs, what the team does, what the customer receives, review responsibilities, exclusions, indicative engagement shape, next CTA, and the evidence/people supporting the offer. This is how technical capability becomes a credible buying decision rather than a feature catalogue.

Possible packages to evaluate:

| Proposed package | Repository basis | Must be confirmed before publication |
|---|---|---|
| BESS screening and scenario analysis | bobo dispatch, sizing, economics | Data-access responsibility, deliverable format, engineering sign-off, pricing |
| Site-specific inflow model assessment | Three configured hydrology applications | New-site adaptation process, validation acceptance, support model |
| Flood-study computation support | Taşkın Hesap methods, GIS, reports, exports | Whether the company performs studies, reviews studies, or only licenses software |
| Reservoir/hydropower optimization prototype work | Archived research lineage | Modern rewrite, supported stack, security, warranty, commercial scope |
| Technical training or methodology workshop | Documented methods and outputs | Instructor, curriculum, audience, fee, language, liability |

Do not publish “consulting,” “implementation,” “managed service,” “white-label,” or “custom development” as an available offer until the owner confirms it.

### 13.11 Trust, compliance, and technical assurance requirements

A credible engineering website should include a trust page or trust section containing:

- Data-handling categories: public upstream data, user-provided project data, generated results, credentials, and operational logs.
- Access model: whether the product is public, invited, local, or project-specific; never publish credentials or secrets.
- Security statement limited to what has actually been reviewed; do not claim “secure” or “fully secure” from repository configuration alone.
- Availability statement: current hosting, backup, monitoring, support hours, and SLA only after confirmation.
- Engineering review disclaimer: model outputs support analysis and review; responsibility for design and regulatory decisions remains defined by the engagement.
- Third-party data and software acknowledgements: EPİAŞ, TEİAŞ, DSİ, MGM, Open-Meteo, MODIS/GEE/GIBS, CORINE, CHELSA, SoilGrids, Copernicus, libraries, and licenses as applicable.
- External-service claims must include the provider documentation URL or approved reference, retrieval/review date, and a provider-dependent qualifier; API-key, coverage, pricing, and availability policies can change.
- IP policy: source-code license, generated-report ownership, customer data ownership, and reuse rights.
- Version/date labels for changing datasets, methods, and proof points.

### 13.12 Lead-generation and access-request requirements

The contact/access flow should collect only information needed to qualify an engineering inquiry:

- Name and organization
- Approved business email
- Sector: renewable/BESS, HEPP/dam, flood/water infrastructure, research, other
- Decision to support
- Site/country/region and approximate scale
- Available data or EPİAŞ plant/site identifier, if relevant
- Desired output: software access, scenario analysis, site adaptation, flood-study support, research discussion
- Timeline and preferred language
- Consent to process the inquiry under the published privacy notice

Separate forms should be used for:

- **BESS access request**
- **Basin/HEPP forecasting discussion**
- **Flood-study or engineering inquiry**
- **Research/archive contact**

Do not request passwords, API keys, service-account JSON, private project files, or full sensitive engineering documents in a public form.

### 13.13 Case-study and proof-content requirements

No customer case study is verified in the repository evidence. Until an approved customer story exists, use **technical demonstration** pages instead. Because the team has selected credentials plus past projects as the initial trust package, the website should combine repository-backed technical demonstrations with owner-supplied, approved project examples.

**Recommended proof hierarchy:**

1. Named team members and relevant experience.
2. Approved/anonymized project examples showing the team’s role and deliverable.
3. Repository-backed methods, outputs, reference cases, and validation.
4. Customer references, testimonials, and quantified outcomes when permission exists.

A project example should not be replaced by a generic technology claim. Show the engineering problem, the team’s responsibility, the work product, and what decision the customer could make afterward. If an outcome cannot be published, describe the delivered capability without inventing impact.

Every screenshot, chart, map, report, dataset excerpt, or demo output must be classified as `synthetic_demo`, `repository_reference`, or `approved_customer_result` in the content metadata. Before publication, verify that it contains no credentials, private or personal data, internal paths, or unlicensed third-party imagery; label synthetic or repository-derived material visibly and do not describe it as a customer outcome. Confirm redistribution and attribution rights for datasets, maps, satellite imagery, logos, screenshots, generated reports, and software interfaces, and record those decisions in `license_review` and `legal_review`.

Each demonstration should contain:

1. Case name and source/reference workbook.
2. Problem and decision context.
3. Inputs, period, units, and assumptions.
4. Method/configuration used.
5. Output screenshots, charts, or tables with sensitive data removed.
6. Exact test/evaluation scope and tolerance where relevant.
7. What the result does not prove.
8. Software/data version and audit date.
9. Reproduction or review path for an internal technical reader.

Potential repository-backed demonstrations:

- bobo: synthetic EPİAŞ plant dispatch/sizing scenario, clearly marked as a modeled example.
- Ağkolu: 16-day forecast interface, uncertainty-band evaluation, and operational verification workflow.
- Taşkın Hesap: Tayakadın golden case, method comparison, routing, report, or KMZ round trip.
- Archive: historical optimization architecture diagram, marked as research lineage.

### 13.14 SEO, accessibility, and localization requirements

Every indexable page should define:

- One descriptive title and meta description.
- One primary search intent and a small set of related terms.
- A canonical URL, Open Graph/social image, and language metadata.
- Structured headings, descriptive image alt text, captions for charts, and text alternatives for numerical outputs.
- Keyboard-accessible navigation, visible focus states, sufficient contrast, responsive tables, and no information conveyed by color alone.
- Turkish terminology exactly where it is an engineering identifier; English explanatory copy where it improves reach.
- Stable product slugs and redirects when names change.
- No SEO claims about rankings, volume, market size, or demand without separate evidence.

### 13.15 Content-block metadata and governance

Every reusable website content block should carry this internal metadata. Website generation/export must filter by `publication_scope`; internal audit sections, source paths, credentials architecture, local deployment details, and unapproved proof points must never be included in a public export. The public export is an allow-list, not a deny-list: only blocks explicitly marked `public`, with `claim_status=VERIFIED` or owner-approved `DRAFT`, exact `source_refs`, required qualifiers, an unexpired review date, and completed legal/licensing review may be emitted. `proposal`, `internal`, and `do_not_publish` blocks must be excluded automatically.

| Metadata | Example |
|---|---|
| `content_id` | `bobo.home.hero.v1` |
| `claim_status` | `VERIFIED`, `DRAFT`, `CONFIRM`, or `DO NOT PUBLISH` |
| `claim_text` | Exact sentence or data point being governed |
| `source_refs` | Exact repository path(s), test name(s), or approved external reference(s) supporting this claim |
| `evidence_scope` | What the evidence does and does not establish; required for metrics, tests, status, and external-service claims |
| `audit_date` | `2026-08-09` or the next review date |
| `owner` | Person responsible for approval |
| `owner_approval` | `pending`, `approved`, approver, and approval date |
| `legal_review` | `pending`, `approved`, reviewer, and review date |
| `license_review` | `not_applicable`, `pending`, or `approved`, with reviewer/date where applicable |
| `audience` | BESS investor, HEPP operator, flood engineer |
| `locale` | `tr-TR` or `en` |
| `asset_class` | `none`, `synthetic_demo`, `repository_reference`, or `approved_customer_result` |
| `expiry/review_trigger` | Deployment, dataset, provider-policy, price, legal, or product-status change |
| `publication_scope` | `public`, `proposal`, `internal`, or `do_not_publish`; a public export includes only approved `public` blocks |
| `required_qualifier` | Exact caveat that must travel with the claim |

A content editor must not promote a block from `DRAFT` or `CONFIRM` to public copy without owner approval. A technical change should trigger a search for affected `source_refs`, proof points, screenshots, product status, and CTAs.

### 13.16 Website copy starter set — DRAFT

**Company headline option A — recommended while biographies are being prepared:**

> Engineering software and studies for energy, water, and flood decisions.

**Company subheadline:**

> We are an engineering team with long-term domain practice, combining transparent computation with professional review to turn market data, hydrological observations, weather and snow signals, geospatial layers, and engineering methods into decisions you can inspect.

**Team trust strip:**

> Built around real water, energy, and infrastructure problems—not only generic software.

**Experience claim upgrade — CONFIRM:**

> **20+ years of combined engineering experience**

`claim_status=CONFIRM · publication_scope=internal · owner_approval=pending`

Use this only after the team confirms the calculation basis and supplies approved biographies and project evidence. If “20 years” refers to one person rather than the combined team, rewrite it accordingly; do not emit this block in a public export while `claim_status=CONFIRM`.

**Dual CTA:**

> **Have a project decision to make?** Discuss an engineering study · Explore software access

**Energy card:**

> **BESS dispatch and sizing** — Explore how a battery could operate behind a wind or solar plant using EPİAŞ transparency data through the bobo data path, subject to access and upstream availability, with configurable technical and economic assumptions.

**Hydrology card:**

> **Site-specific inflow forecasting** — Forecast the next 16 days of daily inflow at supported Turkish dam and HEPP sites using recent flow, weather, and snow signals.

**Flood card:**

> **Flood-study computation** — Move from basin geometry and rainfall inputs to comparable synthetic methods, frequency analysis, routing, and engineering report outputs.

**Trust line:**

> Methods, assumptions, data sources, and limitations are part of the product—not a footnote.

**Starter-copy governance records — INTERNAL EDITORIAL METADATA (abbreviated):**

These records are a planning register, not complete export objects. The full metadata schema in §13.15 is mandatory before any block can enter a public export; in particular, each block still needs `audit_date`, `owner_approval`, `legal_review`, `license_review`, `evidence_scope`, `required_qualifier`, and an applicable `asset_class`.

| `content_id` | `claim_status` | `publication_scope` | `source_refs` / evidence basis | Required approval or qualifier |
|---|---|---|---|---|
| `home.hero.v1` | `DRAFT` | `proposal` | Portfolio capability sections; owner positioning decision | Replace with approved legal/brand identity and approved team narrative |
| `home.team-trust.v1` | `DRAFT` | `proposal` | Approved team profiles and project examples | Do not publish experience language without owner approval |
| `home.bobo-card.v1` | `DRAFT` | `proposal` | bobo product sections and EPİAŞ qualifier | Preserve access/upstream-availability qualifier |
| `home.hydrology-card.v1` | `DRAFT` | `proposal` | Hydrology product sections | Do not imply current hydropower dispatch/control |
| `home.flood-card.v1` | `DRAFT` | `proposal` | Taşkın Hesap product sections | Preserve engineer-review and method-scope qualifier |
| `home.dual-cta.v1` | `CONFIRM` | `proposal` | Confirmed commercial model | Publish only after software/study routes and contact handling exist |

All copy in this subsection remains **DRAFT** until company identity, language, service model, access route, team proof, and legal details are confirmed. These metadata records are part of the editorial source and must not be emitted as visible website text.

### 13.17 Repository-to-website integration matrix

> **Implementation note (VERIFIED, 2026-08-09):** the current marketing site implements these website destinations as sections of a single one-page layout (see the §8 implementation status), not as separate pages.

| Repository evidence | Website destination | Public treatment |
|---|---|---|
| `bobo-ui` title, workflow, charts, sizing, economics | Energy/BESS page and product card | Public feature summary with economic and availability qualifiers |
| `bobo-api` EPİAŞ plant/price/generation contract | Methods/data section | Explain data path; do not publish credentials or imply official affiliation |
| `agkolu` README/UI/tests/verification | Hydrology page, technical demo, evidence page | Highlight 16-day scope, uncertainty, and app-specific test status |
| `iffc` and `almus-iifc` model/UI/docs | Hydrology page and supported-sites table | Name supported sites and differences; do not imply a generic national service |
| `flood-compute` workflow/methods/exports | Flood page and technical demonstrations | Show workflow and outputs; preserve engineer-review and regulatory qualifiers |
| Flood golden/API/routing/validation tests | Methods & evidence page | Publish only scoped, dated, qualified proof points |
| `hidroopt-dsi-*` chronology and solver architecture | Research lineage page | Historical reference only; no current-product language |
| Git metadata and package names | Internal governance/about draft | Never use as proof of company age, customers, or incorporation |
| Owner-supplied team biographies and approved project examples | About/team, past-projects, relevant product pages | Publish only with identity, role, permission, evidence, and date review |

### 13.18 Launch-readiness checklist

Before the website goes live, confirm:

- Legal entity, brand, domain, owner attribution, and public contact.
- Named team profiles, professional histories, approved role descriptions, and the wording/basis of any 20-year experience claim.
- At least two approved or anonymized past-project examples, including team role, deliverable, date, permission, and evidence.
- Product status and access route for every product card.
- Which offerings are software, engineering studies, pilots, advisory work, or research only.
- Separate software and engineering-study CTAs, qualification forms, and contact routing.
- Pricing/contact process and expected response process.
- Privacy, terms, cookies, data processing, IP, and third-party notices.
- Approved screenshots with secrets, sample personal data, and internal paths removed; every demonstration is labeled synthetic/demo unless it is an approved customer result.
- Current dataset/proof-point dates and citations.
- Claim-level source references for every metric, dataset count, feature, output, status, and availability statement.
- Accessibility review for navigation, charts, tables, forms, and language switching.
- Security review of forms, analytics, authentication, storage, and deployment.
- Licensing/attribution review for source code, libraries, datasets, maps, satellite imagery, logos, screenshots, and generated reports.
- Final editorial review that every public claim has a source, qualifier, owner, publication scope, and review date.
- Final trust review confirming that the website shows accountable people, relevant experience, concrete work products, and a clear next step—not only technology names.

This checklist is a **CONFIRM** gate, not evidence that the website is already launch-ready.
