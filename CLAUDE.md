# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Nelumbo Marketing — a static, one-page institutional landing page (pt-BR) built with plain HTML, CSS, and vanilla JavaScript. No framework, no backend, no build step, no package manager, no dependencies.

## Running locally

There is no build/dev tooling. Open `index.html` directly in a browser, or serve the directory with any static file server (e.g. a VS Code static-server extension). All asset paths in the HTML/CSS are relative, so it must be served/opened from the project root.

There are no lint, test, or build commands in this repo — do not invent npm scripts or tooling that isn't there.

## Architecture

The entire site is three files that must stay in sync by hand-editing:

- `index.html` — all page content, SEO meta tags, and a large `application/ld+json` structured-data block (`@graph` with Organization, WebSite, Person, Service x2, HowTo, FAQPage). If you edit visible copy (services, process steps, FAQ-like content), check whether the corresponding JSON-LD entry needs the same update — they duplicate information and can drift.
- `style.css` — starts with four `@font-face` blocks (self-hosted Cormorant Garamond + Manrope, each split into a latin and latin-ext subset via `unicode-range`), then a `:root` block of CSS custom properties (colors, shadows, radii, container width, fonts, transition) that drive the whole visual system. Prefer editing these variables over hardcoding new values. Breakpoints: `max-width: 980px` (tablet/mobile nav) and `max-width: 720px` (small mobile); also a `prefers-reduced-motion: reduce` block that must be respected for any new animation.
- `script.js` — small, dependency-free interaction layer: sticky header state on scroll, mobile menu open/close (incl. Escape-to-close), scrollspy for nav active-link highlighting, `IntersectionObserver`-driven `.reveal` entrance animations, and a WhatsApp click handler that tries the native app deep link (`whatsapp://`) first and falls back to `wa.me` in a new tab if the app doesn't take over within 700ms.

Sections in `index.html` correspond to anchor-based nav items and must keep matching `id`s across the header nav, footer nav, and section elements: `#inicio`, `#jornada`, `#como-atuamos`, `#servicos`, `#sobre`, `#contato`.

Fonts are fully self-hosted from `assets/fonts/` (OFL-licensed) — do not introduce a Google Fonts or other external font dependency.

## Security/CSP considerations

`index.html` sets a strict `Content-Security-Policy` plus `Referrer-Policy`, `Permissions-Policy`, and `X-Content-Type-Options` via `<meta http-equiv>` tags. Notably `script-src 'self'` and `style-src 'self'` — do not add inline `<script>`/`<style>` blocks, external script tags, or third-party embeds without updating the CSP accordingly (the existing JSON-LD `<script type="application/ld+json">` is data, not script, and is fine under `script-src`).

## Deployment

Published via GitHub Pages with a custom domain at nelumbomarketing.com.br, configured through the `CNAME` file. `robots.txt` and `sitemap.xml` govern crawler behavior — keep `sitemap.xml` URLs in sync with `og:url`/`canonical` values in `index.html` if the domain ever changes.
