# Copilot instructions for this repository

Purpose: Help AI coding agents be immediately productive working on this repository — a small, static portfolio website.

Project layout (important files)
- **HTML:** [html/index.html](html/index.html#L1) — main entry, currently minimal.
- **Pages:** [html/signature.html](html/signature.html#L1) — secondary page present but empty.
- **CSS:** [css/style.css](css/style.css#L1) — global styles (file exists, currently empty).
- **JS:** [js/script.js](js/script.js#L1) — client-side logic (file exists, currently empty).
- **Assets:** `img/` — images used by HTML pages.

Big picture
- **Static site:** There is no build system, package.json, or server-side code. The site is plain HTML/CSS/JS served as static files.
- **Single-page structure:** The repository places HTML files under `html/` and global assets under `css/`, `js/`, and `img/`.

Coding conventions & patterns (observable)
- **Central CSS/JS files:** Add styles to [css/style.css](css/style.css#L1) and scripts to [js/script.js](js/script.js#L1). Prefer minimal, dependency-free code.
- **Keep paths relative:** HTML links reference local `css/`, `js/`, and `img/` directories—preserve relative paths when adding assets.
- **Small, focused edits:** Pages are simple; prefer small, easily testable changes rather than large refactors.

Developer workflows (what works here)
- **Preview locally:** Open [html/index.html](html/index.html#L1) in a browser. For a quick local server, use:

  ```bash
  python3 -m http.server 8000 --directory html
  ```

- **No tests/build:** There are no test scripts or build commands in the repo. If you add tooling, update this file with exact commands.

When creating or editing code
- **Add small commits:** Each visual or behavioral change should be separable (HTML, CSS, JS) so previews are easy.
- **Reference files in PRs:** Mention the modified files (for example, `html/index.html`, `css/style.css`, `js/script.js`).
- **Document new structure:** If you introduce a build tool, create a README and update this Copilot file with precise commands and entry points.

Examples (explicit guidance for common edits)
- To add a hero section: update [html/index.html](html/index.html#L1) and add styles in [css/style.css](css/style.css#L1).
- To add interactive behavior: add functions to [js/script.js](js/script.js#L1) and bind them to elements in the HTML using IDs or classes.

Limitations and what *not* to assume
- There is no package manager or CI config present—do not assume `npm`, `node`, or other tools are configured.
- Do not add invisible infra changes without documenting them (e.g., adding `package.json` requires README updates).

If unsure, ask the maintainer what preview method they prefer and whether adding a small dev server or build system is acceptable.

Next steps for agents
- Keep changes minimal and well-documented.
- Propose adding tests or a dev server only after confirming with the user; include explicit commands and files to trust.

---
Please review — tell me which sections need more detail or examples from other files.
