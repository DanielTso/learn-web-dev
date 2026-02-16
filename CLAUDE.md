# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

LearnWebDev is a static educational website for learning front-end web development. It teaches HTML, CSS, and JavaScript through beginner-friendly guides with interactive code playgrounds. The site uses vanilla HTML, CSS, and JavaScript with Bootstrap 5.3.7 for responsive layouts.

## Development Workflow

### Quick Start
```bash
npm install          # Install dependencies
npm run dev         # Start local dev server (opens at localhost:8080)
npm run build:css   # Minify CSS for production
```

### Commands
- **`npm run dev`** - Start live-server for local development
- **`npm run build:css`** - Minify CSS from `css/style.source.css` to `css/style.css`
- **`npm run build`** - Alias for build:css

### Critical: CSS Editing
- **Always edit `css/style.source.css`**, never `css/style.css` directly (it is auto-generated)
- Run `npm run build:css` after any CSS changes

## Architecture

### Component System
The site uses vanilla JS components that inject HTML into mount points at runtime:

- `components/navbar.js` - Navigation bar with active page highlighting. Call `initNavbar(currentPage)` where `currentPage` is one of: `'home'`, `'pathway'`, `'tutorial'`, `'about'`, `'contact'`
- `components/footer.js` - Footer with dynamic copyright year. Call `initFooter()`
- `components/code-playground.js` - Interactive HTML/CSS/JS editor with live iframe preview. Auto-initializes on DOM ready for any `.code-playground` elements

Each HTML page has `<div id="navbar-mount"></div>` and `<div id="footer-mount"></div>` mount points. Component scripts are loaded before `</body>` and initialized on `DOMContentLoaded`.

### Page Structure
- `index.html` - Homepage with hero, learning cards, code playground (currentPage: `'home'`)
- `pathway.html` - 9-stage learning roadmap (currentPage: `'pathway'`)
- `tutorial.html` - VS Code setup guide (currentPage: `'tutorial'`)
- `about.html` - About the site (currentPage: `'about'`)
- `contact.html` - Contact form with validation (currentPage: `'contact'`)
- `post-html.html`, `post-css.html`, `post-js.html` - Tutorial blog posts with 8-col main + 4-col sidebar layout (currentPage: `'home'`)

### JavaScript Features (`js/script.js`)
Loaded on every page. Includes:
- **Dark mode toggle** - Persisted in `localStorage('theme')`, sets `data-theme` attribute on `<html>`
- **Progress tracking** - Tracks visited tutorial pages in `localStorage('learnProgress')`, updates progress bars and checkmarks
- **Scroll animations** - IntersectionObserver-based fade-in for `.learning-card`, `.feature-item`, `.stat-item`, `.code-playground`
- **Contact form** - Validation and notification display (only on contact.html)
- **Smooth scroll** - For anchor links (`a[href^="#"]`)
- **Notification system** - `showNotification(message, type)` with slide-in/out animation

## Design System

The design system is defined via CSS custom properties in `:root` (with dark mode overrides in `[data-theme="dark"]`):

### Colors (Light Mode)
- Primary: `#6366F1` (Indigo) / Dark: `#4F46E5` / Light: `#818CF8`
- Secondary: `#EC4899` (Pink) / Dark: `#DB2777`
- Accent: `#10B981` (Green) / Dark: `#059669`
- Background: `#F9FAFB` / Surface: `#FFFFFF`
- Text: `#111827` / Secondary text: `#6B7280`
- Gradients: `--gradient-primary`, `--gradient-hero`, `--gradient-success`

### Typography
- Headings: Space Grotesk (Google Fonts, 400-700)
- Body: Inter (Google Fonts, 300-700)
- Code: JetBrains Mono (Google Fonts, 400-500)

### Key CSS Variables
Use the existing `--color-*`, `--shadow-*`, `--space-*`, `--radius-*`, and `--transition-*` variables rather than hardcoding values.

## External Dependencies

**CDN Resources** (loaded on every page):
- Bootstrap 5.3.7 (CSS and JS) via jsDelivr CDN
- Google Fonts: Space Grotesk, Inter, JetBrains Mono (via CSS @import in style.source.css)
- Google Analytics (ID: G-NWFH1G2VXN) - must be present on all pages

**NPM Dev Dependencies**:
- `clean-css-cli` - CSS minification
- `live-server` - Local development server

## Git Workflow

**Deployment branch**: `gh-pages` (auto-deploys to GitHub Pages)

**When making changes**:
1. Edit source files (HTML, `css/style.source.css`, JS)
2. Run `npm run build:css` if CSS was modified
3. Test locally with `npm run dev`
4. Commit and push to `gh-pages`

**Adding a new page**: Include Google Analytics snippet, navbar/footer mount points, all component scripts, and call `initNavbar('pageId')` + `initFooter()` on DOMContentLoaded.
