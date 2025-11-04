# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

LearnWebDev is a static educational website for learning front-end web development. It teaches HTML, CSS, and JavaScript through beginner-friendly guides with practical examples. The site uses vanilla HTML, CSS, and JavaScript with Bootstrap 5.3.7 for responsive layouts.

## Development Workflow

### Quick Start
```bash
npm install          # Install dependencies
npm run dev         # Start local dev server (opens at localhost:8080)
npm run build:css   # Minify CSS for production
```

### Development Commands
- **`npm run dev`** - Start live-server for local development
- **`npm run build:css`** - Minify CSS from source to production
- **`npm run build`** - Alias for build:css

### File Editing
- Edit `css/style.source.css` for styles (not `style.css` which is auto-generated)
- Run `npm run build:css` after CSS changes to generate minified version
- HTML and JS changes take effect on page refresh

## Architecture

### Component-Based Structure
The site uses reusable JavaScript components to eliminate code duplication:

**Components** (`components/` directory):
- `navbar.js` - Generates navigation bar dynamically with active page highlighting
- `footer.js` - Generates footer with dynamic copyright year

**How Components Work**:
1. Each HTML page has mount points: `<div id="navbar-mount"></div>` and `<div id="footer-mount"></div>`
2. Component scripts are loaded before closing `</body>` tag
3. `initNavbar(currentPage)` and `initFooter()` are called on DOMContentLoaded
4. Components inject HTML into mount points at runtime

**Benefits**:
- Navbar/footer code exists in exactly 1 location (not duplicated across 8 pages)
- Updates to navigation propagate automatically to all pages
- Active page highlighting handled by passing page identifier to `initNavbar()`

### Site Structure
- **Homepage** (`index.html`): Hero section with CTA and three main learning cards (currentPage: 'home')
- **Pathway** (`pathway.html`): 9-stage learning roadmap (currentPage: 'pathway')
- **Tutorial** (`tutorial.html`): VS Code setup guide (currentPage: 'tutorial')
- **About** (`about.html`): Information about the site (currentPage: 'about')
- **Contact** (`contact.html`): Contact form with validation (currentPage: 'contact')
- **Blog Posts**: `post-html.html`, `post-css.html`, `post-js.html` with 8-column main + 4-column sidebar (currentPage: 'home')

### Code Organization
- `components/navbar.js` - Navbar component with active state logic
- `components/footer.js` - Footer component with dynamic year
- `css/style.source.css` - **Edit this file** for style changes (readable with comments)
- `css/style.css` - Minified output (auto-generated via npm run build:css)
- `js/script.js` - Contact form validation logic
- `images/` - Logo (`devblog_logo.jpg`) and assets
- `package.json` - Build scripts and dependencies

### JavaScript Functionality

**Components** (`components/`):
- Load on every page via script tags
- Use `initNavbar(pageId)` to set active nav item
- Use `initFooter()` to inject footer HTML
- No external dependencies (vanilla JS)

**Contact Form** (`js/script.js`):
- Waits for DOM ready before executing
- Only handles `#contact-form` if present on page
- Prevents default form submission
- Logs form data to console
- Shows alert confirmation
- Resets form after submission

## Design System

### Color Palette
- Dark backgrounds (navbar/footer): `#334464`
- Card backgrounds: `#312f36`
- Main background: `#ddd8ce`
- Primary accent (buttons/links): `#7234fa`
- Hover accent: `#5a28c7`
- Headings/text: `#334464`

### Typography
- Headings: Poppins (Google Fonts, 700 weight)
- Body text: Lato (Google Fonts, 400/700 weight)
- Brand text: Press Start 2P (Google Fonts)

### Layout Patterns
- Hero sections use SVG background patterns with circles at 0.1 opacity
- Blog post main content (`.col-md-8`) uses subtle dotted SVG pattern
- Homepage cards have light backgrounds (`#f8f9fa`)
- Blog post sidebar cards have dark backgrounds (`#312f36`)

## External Dependencies

**CDN Resources** (loaded on every page):
- Bootstrap 5.3.7 (CSS and JS) via jsDelivr CDN
- Google Fonts: Lato, Poppins, Press Start 2P (via CSS @import)
- Google Analytics tag (ID: G-NWFH1G2VXN) on all 8 pages

**NPM Dev Dependencies** (for build process):
- `clean-css-cli` - CSS minification
- `live-server` - Local development server

## Git Workflow

**Current Branch**: `gh-pages` (deploys to GitHub Pages automatically)

**When Making Changes**:
1. Edit source files (HTML, `css/style.source.css`, JS components)
2. Run `npm run build:css` if CSS was modified
3. Test locally with `npm run dev`
4. Commit and push to `gh-pages` branch
5. GitHub Pages auto-deploys in 2-3 minutes

**Important Guidelines**:
- Always edit `css/style.source.css`, never `css/style.css` directly
- Component changes (navbar/footer) affect all pages automatically
- Verify color palette consistency using design system values
- Test responsive behavior (navbar collapses on mobile)
- Ensure Google Analytics is present on any new pages added
