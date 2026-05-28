# Portfolio Website

Plain HTML, CSS, and JavaScript portfolio site with no framework, package manager, or build step.

## Structure

`index.html` is the About page.
`cv.html` renders CV data from `data/cv-data.js`.
`projects.html` renders project data from `data/projects-data.js`.
`css/` contains split styles, each kept under 50 lines.
`js/` contains shared partials, theme logic, and page renderers.
`assets/` stores images and downloadable files.

## Editing Content

Profile photo: replace `assets/profile.jpg`.
Open Graph image: replace `assets/og-image.jpg`.
CV PDF: add `assets/cv.pdf` when a download link is needed.
About text lives directly in `index.html`.
CV content lives in `data/cv-data.js`.
Project cards live in `data/projects-data.js`.

## Theme

Colors are controlled in `css/tokens.css`.
Change `--accent` and `--accent-hover` for the primary color.
Update both `:root` and `[data-theme="dark"]` values together.

## Local Preview

Open `index.html`, `cv.html`, or `projects.html` directly in a browser.
No install command is required.

## Deployment

GitHub Pages: publish this folder as a static site.
Netlify: drag the folder into the Netlify dashboard.
Vercel: import the repo and use static output defaults.
