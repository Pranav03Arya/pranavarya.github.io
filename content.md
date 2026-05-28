# Portfolio Content

> **For Codex:** This file is the single source of truth for all real content on Pranav Aryasomayajula's portfolio site. When running the prompts in `portfolio-codex-prompts.md`, read the relevant section below and use the values **verbatim** in the data files (`data/cv-data.js`, `data/projects-data.js`), the About page HTML (`index.html`), and the shared partials (`js/partials.js`).
>
> Wherever you see `[VERIFY: ...]`, that value is a best-guess placeholder — keep it for now, but flag it in your final output so the user can confirm.

---

## 1. About / Hero — populates `index.html`

These fields populate the hero section on the landing page and the header logo / footer name.

- **Name:** `Pranav Aryasomayajula`
- **Header logo & footer:** `Pranav Aryasomayajula` (used in `js/partials.js`)
- **Page title (browser tab):** `Pranav Aryasomayajula — Portfolio`
- **Role (used in meta description and OG tags):** `Software Engineer & AI Engineer`

- **Tagline (blue, large, under the H1):**
  > Software engineer focused on machine learning, full-stack systems, and turning research into shippable products.

- **Bio (gray, ~3 sentences, under the tagline):**
  > I'm a Master's student in Computer Science at George Mason University, working at the intersection of machine learning, full-stack engineering, and applied research. My recent work spans ML-driven trading systems, computer vision for defence applications, and full-stack AI products — usually building end-to-end, from data pipelines to the interfaces people actually use. I'm drawn to problems where rigorous engineering meets real-world deployment.

- **Profile photo path:** `assets/profile.jpg` *(file must be added manually — user will drop this in)*
- **Photo alt text:** `Pranav Aryasomayajula`

---

## 2. Contact / Social — populates the social row on the About page

The social row appears at the bottom of the About hero. Render order: envelope icon (mailto) · LINKEDIN · GITHUB.

- **Email:** `pranav03arya@gmail.com` → `mailto:pranav03arya@gmail.com`
- **LinkedIn:** `https://linkedin.com/in/pranav-aryasomayajula` — display text: `LINKEDIN`
- **GitHub:** `https://github.com/Pranav03Arya` — display text: `GITHUB`

*Location info (optional, not currently rendered anywhere on the site, but available if needed): Fairfax, VA. Open to relocation.*

---

## 3. CV Intro — populates the subtitle paragraph under "Curriculum Vitae"

> A snapshot of my education, research, and engineering work across machine learning, full-stack development, and data systems.

---

## 4. Experience — populates `data/cv-data.js` → `experience` array

List the entries in this order (most recent first). Each becomes a timeline entry with: date column on left, vertical rail in middle, title + org link + description on right.

### Entry 1
- **Date:** `Sep 2025 — May 2026`
- **Title:** `Graduate Research Assistant`
- **Organization:** `Costello College of Business, George Mason University`
- **Organization link:** `https://business.gmu.edu`
- **Description:**
  > Designed and built a modular ML-driven trading pipeline (ingestion → features → XGBoost + LSTM ensemble → risk engine → execution) covering 5 tickers and 20+ features, now used as the lab's reference implementation for ML-based trading strategies. Deployed unattended paper-trading on Alpaca via APScheduler with auto position-caps and drawdown halts, backed by a risk engine with stop-loss and circuit-breaker controls, SQLite logging, and 21 unit tests at 94% coverage. Also built Behavioral Finance Games in React + TypeScript, deployed to a 50-student MBA class and used to log 100+ decisions for research analysis.

### Entry 3
- **Date:** `Jan 2024 — Jun 2024`
- **Title:** `Data Analyst Intern`
- **Organization:** `Tata Consultancy Services`
- **Organization link:** `https://www.tcs.com/`
- **Description:**
  >  Built a Streamlit application for PDF table extraction using Camelot-py (lattice + stream modes) and PyPDF, with built-in JSON serialization for downstream use; improved table-cell extraction accuracy by 30% on borderless tables through parser tuning and pre-processing.  Built a Streamlit application for PDF table extraction using Camelot-py (lattice + stream modes) and PyPDF, with built-in JSON serialization for downstream use; improved table-cell extraction accuracy by 30% on borderless tables through parser tuning and pre-processing.  Built a Streamlit application for PDF table extraction using Camelot-py (lattice + stream modes) and PyPDF, with built-in JSON serialization for downstream use; improved table-cell extraction accuracy by 30% on borderless tables through parser tuning and pre-processing.


### Entry 3
- **Date:** `Aug 2023 — Dec 2023`
- **Title:** `Research Intern`
- **Organization:** `Defence Research and Development Organization (DRDO)`
- **Organization link:** `https://www.drdo.gov.in`
- **Description:**
  > Manually annotated 10K+ images using LabelImg for 3-class detection (tanks, vehicles, personnel) to build a custom training dataset, then trained YOLOv7 on it — achieving mAP@0.5 of 0.86, 0.85, and 0.83 across the three classes. Built a Python (OpenCV + NumPy) calibration-based distance-estimation pipeline accurate to ±0.5m on drone imagery.

### Entry 4
- **Date:** `May 2023 — Jul 2023`
- **Title:** `Data Analyst Intern`
- **Organization:** `Ernst & Young`
- **Organization link:** `https://www.ey.com`
- **Description:**
  > Built Power BI dashboards with automated ETL refresh, eliminating 8 hours per week of manual Excel reporting. Developed DAX measures for year-to-date revenue and variance analysis tracking 15+ financial KPIs, and shipped region/product drill-down dashboards adopted by finance and audit teams for monthly reviews.

---

## 5. Education — populates `data/cv-data.js` → `education` array

### Entry 1
- **Date:** `2024 — 2026`
- **Title:** `Master of Computer Science`
- **Organization:** `George Mason University`
- **Organization link:** `https://www.gmu.edu`
- **Description:**
  > Graduate-level coursework in machine learning, distributed systems, and applied research. CGPA: 3.6.

### Entry 2
- **Date:** `2020 — 2024`
- **Title:** `Bachelor of Information Technology`
- **Organization:** `Manipal University Jaipur`
- **Organization link:** `https://jaipur.manipal.edu`
- **Description:**
  > Foundations in computer science, data structures, software engineering, and information systems. CGPA: 3.7.

---

## 6. Skills — populates `data/cv-data.js` → `skills` array

A curated subset of the resume's skills list — picked for breadth and signal, not exhaustiveness. Order: languages first, then frameworks, then ML/data, then infra.

```
Python
TypeScript
JavaScript
SQL
PyTorch
React
Node.js
FastAPI
PostgreSQL
OpenCV
FAISS
Sentence-Transformers
AWS
Docker
```

*Notes for Pranav:*
- *Added `React` since you clearly use it in CapitalCrisis even though it wasn't in the resume skills section. Remove if you prefer to keep skills resume-exact.*
- *Dropped: scikit-learn, pandas, NumPy, YOLOv7, FLAN-T5, APScheduler, SQLite, Vercel, Git/GitHub. These are either implied by larger items or too granular for a pill list. Add back any you want to surface.*

---

## 7. Projects Intro — populates the subtitle under "Selected Works"

> A selection of projects spanning machine learning, full-stack web applications, and applied research.

---

## 8. Projects — populates `data/projects-data.js` → `projects` array

3 projects from the resume, with an optional 4th candidate listed at the end. Each card shows: category pill on top, title, description, tag pills at the bottom.

### Project 1
- **Title:** `CapitalCrisis`
- **Category:** `EdTech / Simulation`
- **Tags:** `React`, `TypeScript`, `Claude API`
- **Link:** `[VERIFY: https://github.com/Pranav03Arya/CapitalCrisis — confirm repo name, or replace with live Vercel URL if available]`
- **Description:**
  > Browser-based CFO simulation game played by 100+ students across 6 rounds and 12 decisions. Custom financial engine handles debt/equity modelling, ROI calculation, and risk-event resolution. Architected with 15+ React components, a centralised useReducer for session state, Claude API-driven debriefs, and live Recharts valuation tracking. Deployed on Vercel.

### Project 2
- **Title:** `AIMAILER`
- **Category:** `Full-Stack AI`
- **Tags:** `Node.js`, `PostgreSQL`, `GPT-4`
- **Link:** `[VERIFY: https://github.com/Pranav03Arya/AIMAILER — confirm repo name]`
- **Description:**
  > Full-stack AI-powered job application email generator. Node.js backend with PostgreSQL and Prisma ORM across 7+ normalised tables, OpenAI GPT-4 integration for personalised email generation, JWT + OAuth 2.0 authentication, and a real-time AI chat interface backed by an application tracking dashboard.

### Project 3
- **Title:** `Agent Chaari`
- **Category:** `Conversational AI`
- **Tags:** `Python`, `RAG`, `FAISS`
- **Link:** `[VERIFY: https://github.com/Pranav03Arya/agent-chaari — confirm repo name]`
- **Description:**
  > RAG chatbot that helps users explore temples in India. Streamlit + Python frontend over a cleaned pandas temple dataset, semantic retrieval via Sentence-Transformers (all-MiniLM-L6-v2) + FAISS, hybrid intent/entity extraction, and FLAN-T5 for answering temple QA, trip planning, and cost-estimation queries with map-based exploration.

### Project 4 (optional — uncomment in `projects-data.js` if you want to use it)
- **Title:** `Behavioral Finance Games`
- **Category:** `EdTech Research Tool`
- **Tags:** `React`, `TypeScript`, `Research`
- **Link:** `[VERIFY: GitHub link, or link to the published study/paper if one exists]`
- **Description:**
  > A suite of decision-making games built in React + TypeScript to study behavioral patterns in financial choices. Deployed to a 50-student MBA class and logged 100+ structured decisions used for ongoing research analysis at the Costello College of Business.

---

## 9. CV PDF — populates the "Download Resume" button (if used)

- **Path:** `assets/cv.pdf`
- **Source file:** the user's existing `Pranav_Aryasomayajula_Resume2.pdf` — rename to `cv.pdf` and drop into `/assets/`.

---

## 10. SEO / Open Graph metadata — populates `<meta>` tags on every page

- **Site URL:** `[VERIFY: e.g. https://pranavaryasomayajula.com or https://pranav03arya.github.io — fill in once deployed]`
- **OG image path:** `assets/og-image.jpg` *(optional — can be a 1200×630px image. If not provided, the profile photo can be reused.)*

Per-page meta descriptions:
- **index.html:** `Pranav Aryasomayajula — software engineer and ML researcher building full-stack systems where machine learning meets product.`
- **cv.html:** `CV of Pranav Aryasomayajula — Master's student in Computer Science at George Mason University, with experience in ML research, full-stack development, and data analytics.`
- **projects.html:** `Selected projects by Pranav Aryasomayajula — ML, full-stack web apps, and applied research.`

---

## 11. Outstanding TODOs (for Pranav, not Codex)

These need user input before the site is fully production-ready. Codex can build with placeholders; user fills these in afterwards.

1. **Profile photo:** drop a 4:5 portrait JPEG (≥800×1000px) at `assets/profile.jpg`.
2. **CV PDF:** rename `Pranav_Aryasomayajula_Resume2.pdf` to `cv.pdf` and drop in `/assets/`.
3. **Project links:** verify the three `[VERIFY: ...]` GitHub URLs match your actual repo slugs. Replace with live demo URLs (Vercel) for CapitalCrisis if you want to link to the playable version instead.
4. **Decide whether to include Project 4** (Behavioral Finance Games). If yes, uncomment in `data/projects-data.js`.
5. **Site URL** for OG tags — fill in once the site is deployed.
6. **Optional refinements to consider:**
    - Whether to mention "Open to relocation" anywhere on the About page (currently not rendered).
    - Whether to swap the role from `Software Engineer & ML Researcher` to something more specific (e.g. `ML Engineer`, `Full-Stack Engineer`) depending on which roles you're targeting.
    - Whether to surface CGPA (3.6 Master's, 3.7 Bachelor's) on the Education timeline entries — currently included in descriptions, but could be pulled out into a dedicated line if you want it more prominent.
