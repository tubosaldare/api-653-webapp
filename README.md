# API Codes Reference — Static Site

Small static site for storing reference documentation and study notes for API codes and standards (API 650 / 653 / 620). This repo is plain HTML/CSS/JS — no build system.

**Quick links**
- File: [html/index.html](html/index.html#L1) — Reference index (main entry)
- File: [html/API-650.html](html/API-650.html#L1) — API 650 page (TOC placeholders)
- File: [html/API-653.html](html/API-653.html#L1) — API 653 page (TOC placeholders)
- File: [html/API-620.html](html/API-620.html#L1) — API 620 page (TOC placeholders)
- File: [html/signature.html](html/signature.html#L1) — Signature page
- Emmet snippets: [emmet/snippets.md](emmet/snippets.md#L1)

Getting started (preview locally)
- Open `html/index.html` directly in a browser: `file:///.../html/index.html`
- Or serve the `html/` folder with Python's simple server:

  ```bash
  python3 -m http.server 8000 --directory html
  # then open http://localhost:8000/
  ```
- If you use the VS Code Live Server extension, the site is available on Live Server port (e.g. `http://127.0.0.1:5500/html/index.html`).

Emmet snippets (regenerate pages)
- All Emmet abbreviations are stored in `emmet/snippets.md`. To regenerate a page:
  1. Copy the snippet under the heading that matches the target page.
  2. Create a new `.html` file in `html/` and paste the snippet.
  3. Expand with Tab or run `Emmet: Expand Abbreviation` in VS Code.

Examples
- To recreate the index page, copy the `index` abbreviation from `emmet/snippets.md` and expand it.

File layout & notable files
- `html/` — HTML pages (index and code pages)
- `css/style.css` — global styles and accessible skip-link styles
- `js/script.js` — small accessibility helper (focus `main` when skip-link clicked)
- `img/favicon.svg` — project favicon
- `emmet/snippets.md` — centralized Emmet abbreviations (human-readable, labeled)
- Backups: `html/index.html.bak` and `css/style.css.bak` (previous versions created during edits)

Accessibility notes
- Each page includes a skip link (`<a class="skip-link" href="#main">`) and `main` is focusable (`tabindex="-1"`) so keyboard users can jump to content.
- Keep images with descriptive `alt` text and use semantic elements (`header`, `main`, `footer`, `nav`).

Contributing
- Keep changes small and focused (HTML, CSS, JS separable). Commit single-purpose edits.
- If you add tooling or package files (npm, CI), update this README and `.github/copilot-instructions.md` with exact run commands.

Notes for AI agents and maintainers
- The central Emmet file (`emmet/snippets.md`) is the canonical source for page skeletons — HTML files contain a short reference comment pointing to that file.
- Preserve relative paths between `html/`, `css/`, `js/`, and `img/` when editing.

Questions or changes
- Tell me which pages you want expanded into full TOCs or which other codes you want added and I can scaffold them.
