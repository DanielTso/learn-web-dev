# Changelog

All notable changes to the LearnWebDev project are documented in this file.

## [Unreleased]

### Added
- React basics tutorial page (`post-react.html`) covering JSX, components, props, state, and Vite setup
- React learning card on the homepage
- React as Stage 2 in the learning pathway (10 stages total)
- "Next: React" navigation button on the JavaScript tutorial page
- React mentioned in about page mission statement

### Changed
- Homepage stats updated from 3 to 4 free courses
- Pathway page restructured: React split into its own stage, other frameworks moved to Stage 3, stages renumbered 4-10
- Progress tracking now counts 4 tutorials instead of 3
- CLAUDE.md updated to reflect React tutorial and 10-stage pathway

## [2.0.0] - Modern Redesign

### Added
- Vibrant color palette with CSS custom properties (Indigo, Pink, Green)
- Interactive code playground with HTML/CSS/JS editors and live preview
- Dark mode toggle persisted in localStorage
- Progress tracking system for tutorial pages
- Scroll animations with IntersectionObserver
- Notification system with slide-in/out animations
- Hero section with social proof and CTA
- Stats section on homepage
- Features grid section
- Google Fonts: Space Grotesk, Inter, JetBrains Mono

### Changed
- Complete visual redesign from Bootstrap-default to custom design system
- Updated all pages with new styling

## [1.0.0] - Component Refactor

### Added
- Reusable navbar component (`components/navbar.js`) with active page highlighting
- Reusable footer component (`components/footer.js`) with dynamic copyright year
- CSS source file (`css/style.source.css`) with organized sections and comments
- `package.json` with build scripts (`npm run dev`, `npm run build:css`)
- `.nojekyll` file for GitHub Pages compatibility
- Google Analytics tracking on all pages
- Project documentation (CLAUDE.md, PRD.md, PROJECT_BRIEF.md, IMPLEMENTATION_PLAN.md)

### Changed
- Navbar/footer extracted from 8 HTML pages into single components
- CSS workflow: edit source file, build to minified output

### Removed
- Duplicated navbar/footer HTML across pages
- `gemini.md` (replaced by CLAUDE.md)

## [0.1.0] - Initial Release

### Added
- Static website with Bootstrap 5.3.7
- Tutorial pages: HTML (`post-html.html`), CSS (`post-css.html`), JavaScript (`post-js.html`)
- Learning pathway page with 9-stage roadmap
- VS Code setup tutorial page
- About page
- Contact page with form validation
- Sequential navigation between tutorial posts
