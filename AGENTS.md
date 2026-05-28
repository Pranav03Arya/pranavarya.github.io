# Repository Guidelines

## Project Structure & Module Organization

This directory contains a small static portfolio site. The main page is `index.html`, page styling lives in `styles.css`, and browser-side JavaScript lives in `index.js`. Image assets are stored both at the project root and in `images/`; prefer `images/` for new assets so paths stay organized, for example `images/profile.jpg`.

The Git worktree root is one level above this folder, so keep portfolio-specific changes inside `Portfolio/` unless a repository-wide update is intentional.

## Build, Test, and Development Commands

There is currently no package manager, build step, or test runner configured. Use direct browser preview for normal development:

```sh
start index.html
```

On non-Windows shells, use the equivalent open command, such as `open index.html` or `xdg-open index.html`.

Useful Git checks:

```sh
git status --short
git diff -- Portfolio/
```

These show local changes and restrict review to this project folder.

## Coding Style & Naming Conventions

Use plain HTML, CSS, and JavaScript. Keep indentation consistent with the existing files: four spaces in HTML and CSS. Use lowercase HTML tags and descriptive class names such as `.sidebar`, `.main`, and `.infoContainer`.

In JavaScript, use `let` and `const` appropriately, prefer camelCase names, and keep browser behavior in `index.js` rather than inline scripts. In CSS, group related selectors together and avoid broad styling changes that affect unrelated page sections.

## Testing Guidelines

No automated tests are present. Before submitting changes, manually open `index.html` and verify the page renders correctly at desktop and narrow mobile widths. Check image paths, console errors, navigation labels, and layout changes after editing `styles.css` or `index.js`.

If tests are added later, document the framework and command here, and place test files beside the code they validate or in a clearly named `tests/` directory.

## Commit & Pull Request Guidelines

The current Git history is minimal and uses short messages such as `add folder`. Continue using concise, imperative commit subjects, for example `Update portfolio sidebar` or `Add profile image assets`.

Pull requests should include a brief description of the change, screenshots for visual updates, and any manual checks performed. Link related issues when available and call out changes to root-level repository files separately from portfolio-only edits.

## Agent-Specific Instructions

Do not recreate or delete tracked assets unless the task explicitly requires it. This folder may be part of a larger worktree, so avoid changing sibling directories while working on the portfolio.
