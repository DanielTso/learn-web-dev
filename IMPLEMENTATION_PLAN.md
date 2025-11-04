# Implementation Plan: LearnWebDev Refactor

## Timeline Overview
**Estimated Duration**: 2-3 hours
**Approach**: Single implementation sprint with incremental commits

## Phase 1: Setup & Tooling (20 min)

### 1.1 Initialize Package.json
- [x] Create `package.json` with project metadata
- [x] Add `clean-css-cli` as dev dependency
- [x] Add optional `live-server` for local development
- [x] Define npm scripts:
  - `build:css` - Minify CSS
  - `dev` - Start local server (optional)

**Commands**:
```bash
npm init -y
npm install --save-dev clean-css-cli
npm install --save-dev live-server
```

### 1.2 Create Directory Structure
- [x] Create `components/` directory
- [x] Verify existing directories (css/, js/, images/)

**Commands**:
```bash
mkdir -p components
```

## Phase 2: CSS Refactor (30 min)

### 2.1 Unminify Current CSS
- [x] Read current minified `css/style.css`
- [x] Create `css/style.source.css` with formatted, readable CSS
- [x] Add section comments:
  - `/* Font Imports */`
  - `/* Design System Variables */`
  - `/* Global Styles */`
  - `/* Navigation */`
  - `/* Hero/Header Sections */`
  - `/* Cards */`
  - `/* Buttons */`
  - `/* Footer */`
- [x] Document color palette in comments
- [x] Add explanatory comments for non-obvious styles

### 2.2 Test Build Process
- [x] Run `npm run build:css` to generate minified output
- [x] Compare minified output with original
- [x] Verify no visual changes when loading pages

**Commands**:
```bash
npm run build:css
```

## Phase 3: Component Extraction (45 min)

### 3.1 Create Navbar Component
- [x] Create `components/navbar.js`
- [x] Extract navbar HTML from any page
- [x] Parameterize active page logic
- [x] Export function that accepts `currentPage` parameter
- [x] Add JSDoc comments

**Template**:
```javascript
/**
 * Renders the site navigation bar
 * @param {string} currentPage - The current page identifier (e.g., 'home', 'about')
 */
function renderNavbar(currentPage) {
  // Component code here
}
```

### 3.2 Create Footer Component
- [x] Create `components/footer.js`
- [x] Extract footer HTML from any page
- [x] Export function that returns footer HTML
- [x] Add JSDoc comments

### 3.3 Update HTML Pages
For each of the 8 HTML files:
- [x] Replace navbar HTML with mount point: `<div id="navbar-mount"></div>`
- [x] Replace footer HTML with mount point: `<div id="footer-mount"></div>`
- [x] Add component script imports before closing `</body>`:
  ```html
  <script src="components/navbar.js"></script>
  <script src="components/footer.js"></script>
  <script>
    // Initialize components with current page
  </script>
  ```
- [x] Add Google Analytics to pages missing it (6 pages need it)

**Files to update**:
1. `index.html` (currentPage: 'home')
2. `pathway.html` (currentPage: 'pathway')
3. `tutorial.html` (currentPage: 'tutorial')
4. `about.html` (currentPage: 'about')
5. `contact.html` (currentPage: 'contact')
6. `post-html.html` (currentPage: 'home')
7. `post-css.html` (currentPage: 'home')
8. `post-js.html` (currentPage: 'home')

## Phase 4: Analytics Consistency (15 min)

### 4.1 Add Google Analytics
Add to `<head>` of pages missing analytics:
- [x] `pathway.html`
- [x] `tutorial.html`
- [x] `about.html`
- [x] `post-html.html`
- [x] `post-css.html`
- [x] `post-js.html`

**Template** (use existing from index.html):
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-NWFH1G2VXN"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-NWFH1G2VXN');
</script>
```

## Phase 5: Documentation (20 min)

### 5.1 Create README.md
- [x] Project description
- [x] Setup instructions
- [x] Development commands
- [x] Build process explanation
- [x] Deployment notes
- [x] Design system overview (link to CLAUDE.md for details)

### 5.2 Update CLAUDE.md
- [x] Add component architecture section
- [x] Update code organization to mention components/
- [x] Add build commands
- [x] Update development workflow
- [x] Document npm scripts

## Phase 6: Testing & Validation (20 min)

### 6.1 Manual Testing Checklist
- [ ] Start local dev server: `npm run dev`
- [ ] Test each page in browser:
  - [ ] `index.html` - Navbar, footer, hero, cards
  - [ ] `pathway.html` - Navbar active state, content cards
  - [ ] `tutorial.html` - Navbar, sidebar content
  - [ ] `about.html` - Full page layout
  - [ ] `contact.html` - Form submission, navbar active state
  - [ ] `post-html.html` - Blog layout, prev/next navigation
  - [ ] `post-css.html` - Blog layout, sidebar
  - [ ] `post-js.html` - Blog layout, code examples
- [ ] Verify responsive behavior (resize browser to mobile width)
- [ ] Check browser console for errors on each page
- [ ] Verify all navbar links work
- [ ] Test contact form submission
- [ ] Verify footer appears on all pages

### 6.2 Visual Verification
- [ ] Compare pages visually to original (before refactor)
- [ ] Check that colors, fonts, spacing are identical
- [ ] Verify logo and images load correctly

### 6.3 Analytics Verification
- [ ] Open browser dev tools Network tab
- [ ] Load each page and verify gtag.js loads
- [ ] Check for analytics tracking events in console

## Phase 7: Git Commit & Push (10 min)

### 7.1 Review Changes
```bash
git status
git diff
```

### 7.2 Stage Files
```bash
git add .
```

### 7.3 Create Descriptive Commit
```bash
git commit -m "$(cat <<'EOF'
refactor: Improve maintainability with components and build process

Major changes:
- Extract navbar/footer into reusable JavaScript components
- Add readable CSS source file (style.source.css) with comments
- Implement npm build script for CSS minification
- Add Google Analytics consistently across all 8 pages
- Create comprehensive documentation (README, PRD, implementation plan)

Technical improvements:
- Reduced code duplication from 8 copies to 1 component
- Added package.json with build tooling
- Documented color palette and design system in CSS
- Updated CLAUDE.md with new architecture

Testing completed:
- All pages render correctly with components
- Responsive behavior preserved
- Contact form functionality unchanged
- No visual regressions

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"
```

### 7.4 Push to GitHub
```bash
git push origin gh-pages
```

### 7.5 Verify Deployment
- [ ] Wait 2-3 minutes for GitHub Pages to rebuild
- [ ] Visit live site URL
- [ ] Test main pages on production
- [ ] Check browser console for errors

## Rollback Procedure (if needed)

If issues are discovered post-deployment:

```bash
# View recent commits
git log --oneline -5

# Revert to previous commit
git revert HEAD

# Or hard reset (use with caution)
git reset --hard HEAD~1
git push -f origin gh-pages
```

## Success Criteria

✅ All acceptance criteria from PRD are met
✅ All pages function identically to before refactor
✅ Build process is documented and functional
✅ Code duplication eliminated
✅ Analytics tracking consistent
✅ Changes committed and pushed to GitHub
✅ GitHub Pages deployment successful

## Post-Implementation

### Immediate Next Steps
- Monitor GitHub Pages deployment
- Check live site for any issues
- Gather feedback from any stakeholders

### Future Enhancements (out of scope for this sprint)
- Add automated testing
- Set up CI/CD for build process
- Consider static site generator (11ty, Jekyll)
- Add form backend integration
- Implement dark mode toggle
