# Product Requirements Document: LearnWebDev Refactor

## 1. Overview

### 1.1 Purpose
Refactor the LearnWebDev codebase to reduce technical debt while maintaining its static site architecture and educational focus.

### 1.2 Scope
This refactor addresses code maintainability and developer experience improvements without changing user-facing functionality or design.

## 2. Requirements

### 2.1 Component Extraction (P0 - Critical)

**Requirement**: Extract navbar and footer into reusable JavaScript components

**User Story**: As a developer, I want to update the navbar in one place so that changes propagate to all 9 pages automatically.

**Acceptance Criteria**:
- Create `components/navbar.js` that generates navbar HTML
- Create `components/footer.js` that generates footer HTML
- Each page loads and renders components via JavaScript
- Active page highlighting works correctly on each page
- All existing links and functionality preserved
- No visible difference to end users

**Technical Details**:
- Use vanilla JavaScript (no frameworks)
- Components insert into designated mount points in HTML
- Pass current page identifier to handle active state

### 2.2 CSS Source Management (P0 - Critical)

**Requirement**: Create readable source CSS and build process

**User Story**: As a developer, I want to read and modify CSS easily so that I can maintain and extend styles.

**Acceptance Criteria**:
- Create `css/style.source.css` with unminified, commented CSS
- Organize CSS into logical sections (reset, typography, components, utilities)
- Create build script to minify CSS for production
- Document build process in README
- Existing minified CSS replaced with new minified output
- Visual output remains identical

**Technical Details**:
- Use Node.js script with `clean-css` or similar
- Keep source and minified files in version control
- Add comments explaining color palette and design decisions

### 2.3 Analytics Consistency (P1 - High)

**Requirement**: Apply Google Analytics tracking to all pages

**User Story**: As a site owner, I want analytics on all pages so that I can understand user behavior across the entire site.

**Acceptance Criteria**:
- All 9 HTML pages include identical Google Analytics code
- Analytics ID (G-NWFH1G2VXN) remains unchanged
- Tracking script loads before any page content

**Technical Details**:
- Add gtag.js script to all page `<head>` sections
- Verify in browser dev tools that analytics loads on each page

### 2.4 Development Tooling (P1 - High)

**Requirement**: Add package.json with build scripts

**User Story**: As a developer, I want simple commands to build and deploy so that I can work efficiently.

**Acceptance Criteria**:
- `package.json` defines project and scripts
- `npm run build` minifies CSS
- `npm run dev` serves site locally (optional enhancement)
- Scripts documented in README
- Dependencies minimal and well-justified

**Technical Details**:
- Use `clean-css-cli` for CSS minification
- Optionally use `live-server` or `http-server` for local dev
- Keep total dependencies under 5

### 2.5 Documentation Updates (P2 - Medium)

**Requirement**: Update documentation to reflect new architecture

**User Story**: As a future developer, I want clear documentation so that I can quickly understand the codebase.

**Acceptance Criteria**:
- CLAUDE.md updated with component architecture
- CLAUDE.md includes build commands
- README.md created or updated with setup instructions
- Comments added to JavaScript component files

## 3. Non-Requirements

**Explicitly out of scope**:
- Framework migration (Vue, Angular, etc.)
- TypeScript conversion
- Backend/API integration
- Design system changes
- Content updates
- New features or pages
- Testing framework setup
- CI/CD pipeline

## 4. Technical Specifications

### 4.1 File Structure
```
learn-web-dev/
├── components/
│   ├── navbar.js       # Navbar component
│   └── footer.js       # Footer component
├── css/
│   ├── style.source.css   # Readable source
│   └── style.css          # Minified output
├── js/
│   └── script.js       # Contact form logic
├── images/
├── *.html              # 9 HTML pages (including post-react.html)
├── package.json        # New: build scripts
├── CLAUDE.md          # Updated
└── README.md          # New or updated
```

### 4.2 Browser Compatibility
- Modern evergreen browsers (Chrome, Firefox, Safari, Edge)
- ES6+ JavaScript features acceptable (matches current JS)
- No IE11 support required

### 4.3 Performance
- Page load time must not increase
- JavaScript components load asynchronously where possible
- Minified CSS size should be similar to current

## 5. Dependencies

### 5.1 New Dependencies
- `clean-css-cli` (dev dependency) - CSS minification
- `live-server` or `http-server` (optional dev dependency) - local dev server

### 5.2 Existing Dependencies (unchanged)
- Bootstrap 5.3.7 (CDN)
- Google Fonts (CDN)
- Google Analytics (CDN)

## 6. Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| JavaScript components break SEO | High | Ensure content loads without JS; use noscript fallbacks if needed |
| Build process adds complexity | Medium | Keep scripts simple; document thoroughly |
| Breaking changes during refactor | High | Test all pages before committing |
| Git merge conflicts on gh-pages | Medium | Test deployment process; maintain backup |

## 7. Testing Plan

### 7.1 Manual Testing
- [ ] Load each of 9 pages in browser
- [ ] Verify navbar renders correctly on each page
- [ ] Verify footer renders correctly on each page
- [ ] Verify active page highlighting works
- [ ] Test contact form submission
- [ ] Test all navigation links
- [ ] Verify responsive behavior (mobile/desktop)
- [ ] Check browser console for errors

### 7.2 Visual Regression
- Take screenshots before/after to compare
- Ensure pixel-perfect match of existing design

## 8. Rollout Plan

### 8.1 Implementation Phases
1. **Phase 1**: Create component files and build tooling
2. **Phase 2**: Update HTML pages to use components
3. **Phase 3**: Update CSS with source file
4. **Phase 4**: Add analytics to all pages
5. **Phase 5**: Documentation updates
6. **Phase 6**: Testing and validation
7. **Phase 7**: Commit and push to GitHub

### 8.2 Rollback Plan
If issues arise post-deployment:
- Git revert to previous commit
- GitHub Pages will auto-deploy previous version
