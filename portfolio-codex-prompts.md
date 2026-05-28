# Codex Prompts — Personal Portfolio Website

Run these prompts in order in the same workspace. Each builds on the previous.

## Constraints

- **Stack:** plain HTML, CSS, JavaScript. No frameworks, no build step.
- **Hard rule: every code file must be ≤50 lines** (including blank lines and comments). If a file would exceed this, split it.
- **Design:** modeled on the three reference screenshots (About with photo right, CV with vertical timeline, Projects as 3-column text cards). Inter font. ~1140px container. Blue accent `#1e5fb0`. Light + dark theme.

## Content source — IMPORTANT

A file named **`content.md`** is provided alongside these prompts. It contains all the real content for the site (name, bio, experience, projects, skills, links, etc.) organized by section.

**Before running any prompt below, Codex must read `content.md` first.** Wherever the prompts show placeholder text like `[Your Name]`, `[Role]`, `[Placeholder]`, or generic sample content, **use the actual values from `content.md` instead**. The `content.md` sections map directly to the data files and HTML you'll generate:

- `content.md` section 1 (About / Hero) → `index.html` hero content
- `content.md` section 1 (Name) → `js/partials.js` header logo and footer
- `content.md` section 2 (Contact / Social) → `index.html` social row
- `content.md` sections 3–6 → `data/cv-data.js`
- `content.md` sections 7–8 → `data/projects-data.js`
- `content.md` section 10 → meta tags on each page

Values marked `[VERIFY: ...]` in `content.md` are best-guess placeholders — use them as-is but note them at the end of your output so the user can confirm.

## Architecture (forced by the 50-line cap)

```
/
├── index.html            (About page, static)
├── cv.html               (CV page shell, content rendered from data)
├── projects.html         (Projects page shell, content rendered from data)
├── /css/                 (9 stylesheets, each ≤50 lines)
│   ├── tokens.css        design tokens (CSS variables, light + dark)
│   ├── base.css          reset, typography, focus styles
│   ├── components.css    buttons, pills, skill tags (shared)
│   ├── header.css        site header + nav + theme toggle
│   ├── footer.css        site footer
│   ├── about.css         About page hero
│   ├── cv.css            CV page + timeline
│   ├── projects.css      Projects grid + cards
│   └── print.css         print-only overrides
├── /js/
│   ├── partials.js       injects shared header + footer into every page
│   ├── theme-toggle.js   wires up the theme toggle button
│   ├── cv-render.js      renders CV data into cv.html
│   └── projects-render.js renders Projects data into projects.html
├── /data/
│   ├── cv-data.js        CV content as a JS object
│   └── projects-data.js  Projects content as a JS object
└── /assets/              profile photo, CV PDF, project images
```

A small inline `<script>` lives in each HTML's `<head>` (≤7 lines) to set `data-theme` before paint — prevents the flash of wrong theme.

---

## Prompt 1 — Scaffold all files, design tokens, navigation, theme system

```
Create a personal portfolio website with plain HTML, CSS, and JavaScript. No frameworks, no build step.

FIRST: read content.md at the project root. It contains all real content. Use the "Name" value from section 1 for the header logo and footer copyright in js/partials.js — do NOT use a "[Your Name]" placeholder. Use the page-title format from section 1 for the <title> tags. Use the meta descriptions from section 10 for the <meta name="description"> tags on each page.

HARD RULE: every file (HTML, CSS, JS) in this project must be no more than 50 lines, including blank lines and comments. If a file would exceed this, split it into smaller files.

Create this folder structure:
/
├── index.html
├── cv.html
├── projects.html
├── css/  (tokens.css, base.css, components.css, header.css, footer.css, about.css, cv.css, projects.css, print.css — create all as empty for now except as noted below)
├── js/   (partials.js, theme-toggle.js, cv-render.js, projects-render.js — create all as empty for now except as noted below)
├── data/ (cv-data.js, projects-data.js — empty for now)
└── assets/ (empty folder)

In css/tokens.css (≤50 lines), define CSS custom properties:
- :root (light theme): --bg: #ffffff; --bg-subtle: #f5f6f8; --bg-elevated: #ffffff; --text: #0f1419; --text-muted: #5a6572; --border: #e3e5e8; --accent: #1e5fb0; --accent-hover: #174a8c; --accent-soft: #e8eef7;
- [data-theme="dark"]: --bg: #0d1117; --bg-subtle: #161b22; --bg-elevated: #161b22; --text: #e6edf3; --text-muted: #8b949e; --border: #30363d; --accent: #4493f8; --accent-hover: #58a6ff; --accent-soft: #1a2c44;

In css/base.css (≤50 lines):
- Box-sizing reset, margin 0, min-height 100vh on body.
- Body: font-family Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; font-size 16px; line-height 1.6; background var(--bg); color var(--text); transition: background-color 0.2s, color 0.2s.
- Headings: line-height 1.2, letter-spacing -0.02em on h1.
- :focus-visible: 2px solid var(--accent), 2px offset; remove default outline only with :focus:not(:focus-visible).
- .skip-link: visually hidden by default (position absolute, top -100px), becomes visible on :focus (top 0, padding 0.75rem 1rem, background var(--accent), color white, z-index 100).
- .container: max-width 1140px; margin 0 auto; padding 0 1.5rem.

In css/components.css (≤50 lines):
- .btn base: display inline-flex, align-items center, gap 0.5rem, padding 0.75rem 1.5rem, border-radius 6px, font-weight 500, font-size 0.95rem, text-decoration none, cursor pointer, border 1px solid transparent, transition all 0.2s.
- .btn-primary: background var(--accent), color white. Hover: background var(--accent-hover).
- .btn-secondary: background transparent, color var(--text), border-color var(--border). Hover: background var(--bg-subtle).
- .tag (skill tag, tech tag): display inline-block, background var(--bg-subtle), color var(--text), border 1px solid var(--border), padding 0.35rem 0.75rem, border-radius 5px, font-size 0.78rem, font-weight 500.
- .category-pill: same as .tag but slightly different - background var(--bg-subtle), no border, slightly more padding.

In css/header.css (≤50 lines):
- .site-header: position sticky, top 0, background var(--bg-subtle), border-bottom 1px solid var(--border), z-index 50.
- .header-inner: display flex, justify-content space-between, align-items center, padding 1.25rem 0.
- .logo: font-weight 700, font-size 1.1rem, color var(--text), text-decoration none.
- .site-nav: display flex, gap 2rem, align-items center.
- .site-nav a: color var(--text-muted), text-decoration none, font-weight 500, font-size 0.95rem, padding-bottom 0.25rem, border-bottom 2px solid transparent, transition color 0.2s.
- .site-nav a[aria-current="page"]: color var(--text), border-bottom-color var(--accent).
- #theme-toggle: background transparent, border none, color var(--text), font-size 1.1rem, cursor pointer, padding 0.25rem.
- @media (max-width: 720px): .header-inner flex-direction column, gap 0.75rem; .site-nav gap 1.25rem.

In css/footer.css (≤50 lines):
- .site-footer: text-align center, padding 2rem 0, border-top 1px solid var(--border), color var(--text-muted), font-size 0.85rem, margin-top 4rem.

Create css/print.css as empty for now (we'll fill it in prompt 3).
Create css/about.css, css/cv.css, css/projects.css as empty for now.

In js/partials.js (≤50 lines):
- Define HEADER_HTML and FOOTER_HTML as template-string constants containing the markup for the header and footer (see structure below).
- Define a function init() that finds elements with id="site-header" and id="site-footer" in the document and sets their outerHTML to the templates.
- Inside init(), after injecting the header, find all .site-nav a links and add aria-current="page" to the one whose href matches the current page's pathname (or 'index.html' for '/').
- Call init() immediately (the script will be loaded at end of <body> so DOM is ready).

The HEADER_HTML template should be:
<header class="site-header"><div class="container header-inner"><a href="index.html" class="logo">[Your Name]</a><nav class="site-nav"><a href="index.html">About</a><a href="cv.html">CV</a><a href="projects.html">Projects</a><button id="theme-toggle" aria-label="Switch theme">☾</button></nav></div></header>

The FOOTER_HTML template:
<footer class="site-footer"><div class="container">© 2025 [Your Name]</div></footer>

In js/theme-toggle.js (≤50 lines):
- Function setTheme(theme): sets/removes data-theme attribute on document.documentElement; updates the #theme-toggle button's textContent to "☀" if dark, "☾" if light; updates its aria-label accordingly; saves to localStorage.
- Function init(): reads localStorage "theme"; if absent, defaults to dark if matchMedia "(prefers-color-scheme: dark)" matches, else light. Applies it. Attaches click handler to #theme-toggle that flips the theme.
- Wait for the theme-toggle button to exist before binding (partials.js may not have run yet if scripts are out of order — use a small setTimeout 0 or wrap in DOMContentLoaded).

Now create the three HTML files. Each one must be ≤50 lines.

index.html, cv.html, projects.html share this skeleton (each with its own <title>, meta description, and <main> placeholder content):

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Page Title] — [Your Name]</title>
  <meta name="description" content="[Page description]">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/tokens.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/components.css">
  <link rel="stylesheet" href="css/header.css">
  <link rel="stylesheet" href="css/footer.css">
  <link rel="stylesheet" href="css/[page-specific].css">
  <link rel="stylesheet" href="css/print.css">
  <script>(function(){var t=localStorage.getItem("theme");if(!t)t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";if(t==="dark")document.documentElement.setAttribute("data-theme","dark");})();</script>
</head>
<body>
  <a href="#main" class="skip-link">Skip to main content</a>
  <div id="site-header"></div>
  <main id="main" class="container">
    <h1>[Placeholder]</h1>
  </main>
  <div id="site-footer"></div>
  <script src="js/partials.js" defer></script>
  <script src="js/theme-toggle.js" defer></script>
</body>
</html>

For each page, set the right <title>, meta description, page-specific CSS link, and placeholder h1. For cv.html also include <script src="data/cv-data.js" defer></script> and <script src="js/cv-render.js" defer></script>. For projects.html include the equivalents.

Verify: load each page in a browser. Header and footer should appear (injected by partials.js). Active nav link should be underlined in blue. Theme toggle should work and persist across reloads, with no flash on reload. Both themes should render the header/footer cleanly.

Confirm every file you created is ≤50 lines.
```

---

## Prompt 2 — About page (index.html + css/about.css)

```
Continuing the portfolio project. Reminder: every file must be ≤50 lines.

FIRST: read content.md. Use these sections to populate index.html:
- Section 1 (About / Hero): the Name → <h1> ("Hi, I'm [Name]."), Tagline → .tagline paragraph, Bio → .bio paragraph, photo path → <img src=...>, photo alt → alt attribute.
- Section 2 (Contact / Social): Email → mailto link, LinkedIn URL → LINKEDIN link, GitHub URL → GITHUB link.
- Section 10 (SEO): the index.html meta description.

Do not use any placeholder text like "[Your Name]" — pull the actual values from content.md.

Build out the About page. Two files to modify:

1. css/about.css (≤50 lines): styles for the hero section on the About page.

2. index.html (≤50 lines): replace the placeholder <h1> with the full About content.

In css/about.css:
- .hero: display grid, grid-template-columns 1.1fr 1fr, gap 4rem, align-items center, padding 4rem 0.
- .hero-text h1: font-size clamp(2.25rem, 5vw, 3.25rem), font-weight 700, letter-spacing -0.02em, margin-bottom 1.5rem.
- .tagline: font-size clamp(1.25rem, 2.5vw, 1.65rem), font-weight 600, color var(--accent), line-height 1.3, margin-bottom 2rem, max-width 30ch.
- .bio: color var(--text-muted), line-height 1.7, max-width 52ch, margin-bottom 2.5rem.
- .cta-row: display flex, gap 0.75rem, margin-bottom 2.5rem, flex-wrap wrap.
- .social-row: display flex, gap 1.5rem, align-items center, color var(--text-muted), font-size 0.85rem, letter-spacing 0.05em.
- .social-row a: color inherit, text-decoration none, transition color 0.2s.
- .social-row a:hover: color var(--text).
- .hero-photo: width 100%, max-width 480px, aspect-ratio 4/5, object-fit cover, border-radius 8px, box-shadow 12px 12px 0 var(--bg-subtle), 0 4px 20px rgba(0,0,0,0.08).
- @media (max-width: 720px): .hero grid-template-columns 1fr, gap 2rem, padding 2rem 0; .hero-photo max-width 320px, margin 0 auto, display block; .hero-text order: 1; .hero-photo-wrapper order: 2.

In index.html, replace the <main> contents with:

<main id="main" class="container">
  <section class="hero">
    <div class="hero-text">
      <h1>Hi, I'm [Your Name].</h1>
      <p class="tagline">[Role] focusing on [your focus areas].</p>
      <p class="bio">[2–4 sentences of bio. Placeholder text I'll edit.]</p>
      <div class="cta-row">
        <a href="projects.html" class="btn btn-primary">View Projects →</a>
        <a href="cv.html" class="btn btn-secondary">Read Resume</a>
      </div>
      <div class="social-row">
        <a href="mailto:you@example.com" aria-label="Email">✉</a>
        <a href="https://linkedin.com/in/...">LINKEDIN</a>
        <a href="https://github.com/...">GITHUB</a>
      </div>
    </div>
    <img src="assets/profile.jpg" alt="[Your Name]" class="hero-photo">
  </section>
</main>

Verify the page is ≤50 lines after this change (it should be, around 42 lines). If it exceeds, compress the head section by combining preconnect lines or removing comments.

Verify visually: text on left, photo on right with subtle offset shadow on desktop; stacked vertically on mobile. Both themes render correctly. Buttons hover properly.

Confirm both files are ≤50 lines.
```

---

## Prompt 3 — CV page (data + render + styles + minimal HTML)

```
Continuing the portfolio project. Reminder: every file must be ≤50 lines.

FIRST: read content.md. Use these sections to populate data/cv-data.js:
- Section 3 (CV Intro) → cvData.intro
- Section 4 (Experience) → cvData.experience array, in the order listed (most recent first). Each entry maps to { date, title, org, orgLink, description }.
- Section 5 (Education) → cvData.education array, same shape as experience.
- Section 6 (Skills) → cvData.skills array (the curated list shown in the code block).

Use the real values from content.md verbatim — do not invent placeholder content.

The CV page uses a data-driven pattern: content lives in a JS data file, rendered into the DOM by a render script.

Four files to create/modify:

1. data/cv-data.js (≤50 lines): a single global const cvData with the CV content from content.md sections 3–6.

2. js/cv-render.js (≤50 lines): reads cvData and renders it into a target div in cv.html.

3. css/cv.css (≤50 lines): styles for the CV page including the vertical timeline.

4. cv.html (≤50 lines): minimal shell with a render target.

In data/cv-data.js — define a single const cvData with this shape, populated from content.md sections 3–6:

const cvData = {
  intro: "...",              // from section 3
  experience: [              // from section 4 (most recent first)
    { date: "...", title: "...", org: "...", orgLink: "...", description: "..." },
    ...
  ],
  education: [               // from section 5
    { date: "...", title: "...", org: "...", orgLink: "...", description: "..." },
    ...
  ],
  skills: ["...", "...", ...]  // from section 6
};

Keep this file ≤50 lines. If the experience/education descriptions push it over, split into data/cv-experience.js, data/cv-education.js, data/cv-misc.js (each ≤50 lines) and update cv-render.js to read from all three.

In js/cv-render.js:
- Wait for DOMContentLoaded.
- Find #cv-content. If absent, return.
- Render the intro paragraph at the top.
- Render an Experience section: <h2>Experience</h2>, then a wrapper div .timeline containing one .timeline-entry per experience item. Each entry has three columns: <div class="entry-date">, <div class="entry-rail"><span class="entry-dot"></span></div>, <div class="entry-content"><h3>...</h3><a class="entry-org" href="...">...</a><p>...</p></div>.
- Render the Education section the same way.
- Render the Skills section: <h2>Skills</h2> followed by <div class="skill-tags"> containing one <span class="tag"> per skill.

In css/cv.css:
- .page-header h1: font-size clamp(2.25rem, 5vw, 3.25rem), font-weight 700, letter-spacing -0.02em, margin 3rem 0 1rem.
- .page-header .subtitle: color var(--text-muted), max-width 60ch, margin-bottom 4rem.
- .cv-section: margin-bottom 4rem.
- .cv-section h2: font-size 1.5rem, font-weight 600, padding-bottom 0.75rem, border-bottom 1px solid var(--border), margin-bottom 2.5rem.
- .timeline-entry: display grid, grid-template-columns 140px 24px 1fr, gap 1.5rem, align-items start, padding-bottom 2.5rem, position relative.
- .entry-date: font-size 0.9rem, color var(--text-muted), text-align right, padding-top 0.15rem.
- .entry-rail: position relative, height 100%.
- .entry-rail::before: content "", position absolute, left 50%, top 0.5rem, bottom -2.5rem, width 2px, background var(--border), transform translateX(-50%).
- .timeline-entry:last-child .entry-rail::before: bottom auto, height calc(100% - 0.5rem).
- .entry-dot: position absolute, left 50%, top 0.35rem, width 10px, height 10px, border-radius 50%, background var(--bg), border 2px solid var(--accent), transform translateX(-50%).
- .entry-content h3: font-size 1.05rem, font-weight 600, margin-bottom 0.25rem.
- .entry-org: color var(--accent), font-size 0.95rem, font-weight 500, text-decoration none, display block, margin-bottom 0.75rem.
- .entry-org:hover: text-decoration underline.
- .entry-content p: color var(--text-muted), font-size 0.95rem.
- .skill-tags: display flex, flex-wrap wrap, gap 0.5rem.
- @media (max-width: 720px): .timeline-entry grid-template-columns 16px 1fr; .entry-date grid-column 2, text-align left, padding-top 0, margin-bottom 0.25rem, order -1; .entry-content grid-column 2.

In css/print.css (now fill this in, ≤50 lines):
- @media print: hide .site-header, .site-footer, .skip-link, #theme-toggle, .cta-row, the Download PDF button.
- Force body background white, color black.
- Hide .entry-rail and .entry-dot.
- Simplify .timeline-entry to grid-template-columns 120px 1fr, no gap on the rail column.

Modify cv.html (≤50 lines) — replace the <main> contents with:

<main id="main" class="container">
  <header class="page-header">
    <h1>Curriculum Vitae</h1>
    <p class="subtitle"></p>  <!-- filled by render script -->
  </header>
  <div id="cv-content"></div>
</main>

Make sure cv.html includes <script src="data/cv-data.js" defer></script> and <script src="js/cv-render.js" defer></script> before </body>.

Have cv-render.js also populate the .subtitle paragraph with cvData.intro.

Verify: CV page renders with the vertical timeline, two experience entries, one education entry, skills tags. Timeline rail connects between entries cleanly. Both themes look good. Mobile collapses to a stacked layout with date above each entry.

Confirm every file you touched is ≤50 lines.
```

---

## Prompt 4 — Projects page (data + render + styles + minimal HTML)

```
Continuing the portfolio project. Reminder: every file must be ≤50 lines.

FIRST: read content.md. Use these sections to populate data/projects-data.js:
- Section 7 (Projects Intro) → projectsData.intro
- Section 8 (Projects) → projectsData.projects array. Include the 3 main projects listed. Project 4 (Behavioral Finance Games) is marked optional in content.md — include it if it's listed without a "skip" note from the user, otherwise comment it out so it's easy to enable later.

Each project in section 8 maps to: { category, title, description, tags, link }.

Use the real values from content.md verbatim — keep any [VERIFY: ...] link as the link value but list them at the end of your output so the user can confirm.

Same pattern as the CV page: data + render + styles + minimal HTML.

Four files:

1. data/projects-data.js (≤50 lines) — populated from content.md sections 7–8:

const projectsData = {
  intro: "...",     // from section 7
  projects: [       // from section 8
    { category: "...", title: "...", description: "...", tags: ["...", "..."], link: "..." },
    ...
  ]
};

2. js/projects-render.js (≤50 lines):
- Wait for DOMContentLoaded.
- Find #projects-content. If absent, return.
- Populate the .subtitle with projectsData.intro.
- For each project, create an <article class="project-card"> (wrapped in an <a href="..."> if you make the whole card clickable, with text-decoration none and color inherit) containing:
  - <span class="category-pill">category</span>
  - <h3>title</h3>
  - <p class="card-desc">description</p>
  - <div class="card-tags"> with one <span class="tag"> per tag
- Append all cards to a .project-grid container inside #projects-content.

3. css/projects.css (≤50 lines):
- .page-header h1: same styling as CV page (or move shared .page-header styles into base.css if cleaner — but check the line counts).
- .project-grid: display grid, grid-template-columns repeat(3, 1fr), gap 1.5rem.
- .project-card: background var(--bg-elevated), border 1px solid var(--border), border-radius 10px, padding 1.75rem, display flex, flex-direction column, min-height 320px, transition border-color 0.2s, transform 0.2s, text-decoration none, color var(--text).
- .project-card:hover: border-color var(--accent), transform translateY(-2px).
- .category-pill: align-self flex-start, margin-bottom 1.25rem, background var(--bg-subtle), padding 0.35rem 0.75rem, border-radius 5px, font-size 0.78rem, font-weight 500.
- .project-card h3: font-size 1.5rem, font-weight 600, margin-bottom 1rem.
- .card-desc: color var(--text-muted), font-size 0.95rem, line-height 1.65, margin-bottom auto.
- .card-tags: display flex, flex-wrap wrap, gap 0.5rem, margin-top 1.5rem.
- @media (max-width: 960px): .project-grid grid-template-columns repeat(2, 1fr).
- @media (max-width: 640px): .project-grid grid-template-columns 1fr; .project-card padding 1.25rem.

4. projects.html (≤50 lines): replace <main> contents with:

<main id="main" class="container">
  <header class="page-header">
    <h1>Selected Works</h1>
    <p class="subtitle"></p>
  </header>
  <div id="projects-content"></div>
</main>

Include <script src="data/projects-data.js" defer></script> and <script src="js/projects-render.js" defer></script>.

Verify: 4 cards render in a 3-column grid on desktop (the 4th wraps to the second row); 2 columns on tablet; 1 column on mobile. Cards have consistent heights. Hover lifts the card slightly and changes the border. Both themes look clean.

Confirm every file you touched is ≤50 lines.
```

---

## Prompt 5 — Verification, polish, accessibility

```
Final pass on the portfolio project.

Step 1: line-count audit.
Run `wc -l` (or equivalent) on every file in the project. List any file that exceeds 50 lines. For each one that does:
- If CSS, split the file by concern (e.g. a media-queries.css extracted, or split a component into its own file).
- If JS, extract helper functions into a separate file.
- If HTML, compress (combine adjacent attribute lines, drop unnecessary whitespace) or — if compression isn't enough — move inline content into a data file and render via JS.
Re-run the audit and confirm every file is ≤50 lines.

Step 2: responsive testing.
Test viewports 320, 375, 414, 640, 720, 960, 1024, 1280, 1440. Fix any overflow, text wrap, or layout issues.

Step 3: accessibility checks.
- Confirm skip-link works (Tab on a fresh page should focus it).
- Confirm every <img> has descriptive alt text.
- Confirm the theme toggle's aria-label updates between "Switch to light theme" and "Switch to dark theme".
- Tab through every interactive element on every page; confirm focus rings visible everywhere.
- Color contrast in both themes: muted text vs background ≥ 4.5:1. If --text-muted is too light, darken it (and adjust the dark-mode variant correspondingly).

Step 4: SEO and sharing meta.
- Each page <head> has a meta description.
- Add to each: <meta property="og:title">, <meta property="og:description">, <meta property="og:type" content="website">, <meta property="og:image" content="assets/og-image.jpg">.
- Add <meta name="twitter:card" content="summary_large_image">.
- (These meta lines might push HTML files over 50 — if so, move them into a separate JS file that injects them into <head> on load, or compress the head section. Constraint stands.)

Step 5: README.md (≤50 lines) at project root:
- Brief description of the project.
- Folder structure overview.
- How to edit content: profile photo path, CV PDF path, where bio/About text lives (index.html), where CV content lives (data/cv-data.js), where projects content lives (data/projects-data.js).
- How to swap the accent color (point at css/tokens.css).
- Deployment quick-start: GitHub Pages, Netlify, Vercel.

Step 6: final verification.
- No console errors.
- No broken links.
- Theme toggle persists across reloads.
- Cards/lists render correctly.
- Every file ≤50 lines (final check).

Do not change visual design in this pass.
```

---

## After running the prompts

Since real content was pulled from `content.md` during the build, this list is much shorter than for a placeholder build. Manual steps:

1. Drop `profile.jpg` into `/assets/` (portrait 4:5, ≥800×1000px). Filename must match `content.md` section 1.
2. Rename your resume PDF to `cv.pdf` and drop into `/assets/`.
3. Resolve each `[VERIFY: ...]` value Codex flagged at the end of each prompt — typically project repo URLs and the deployed site URL for OG tags. Update `content.md` to reflect the verified values, then re-run only the prompt(s) that need the change (Codex will regenerate just those files).
4. Deploy: push to GitHub and enable Pages, or drop the folder on Netlify/Vercel.

To update site content later, edit `content.md` and re-run the relevant prompt — Codex will regenerate `data/cv-data.js`, `data/projects-data.js`, or the About page from the updated values without you touching the JS or HTML directly.

## Notes on the 50-line constraint

- The constraint forces good modularity but adds friction: more files to keep track of, content split across HTML + data + render layers.
- If you find a specific file painful to keep under 50 lines mid-project, the right move is usually to split it, not to relax the constraint. The constraint protects against any single file becoming a junk drawer.
- Two places this might bite later: (1) if you add a contact form, the JS to handle it might want its own file; (2) if your CV grows past ~4 experience entries, cv-data.js will hit the cap — split into cv-experience.js, cv-education.js, etc.
- The data-driven rendering for CV and Projects means JS must run for that content to appear. If you ever need guaranteed-static HTML for those pages (rare for a personal portfolio), let me know and we'll do a one-time build script that pre-renders the data into the HTML files.
