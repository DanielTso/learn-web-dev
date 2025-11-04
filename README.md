# LearnWebDev

A beginner-friendly educational website for learning front-end web development. Learn HTML, CSS, and JavaScript through practical guides and examples.

## 🌐 Live Site

Visit the live site: [LearnWebDev](https://your-github-username.github.io/learn-web-dev/)

## 📚 About

LearnWebDev provides structured learning paths and tutorials for aspiring web developers. The site covers:

- **HTML**: Understanding the structure and semantics of web pages
- **CSS**: Styling and layout techniques including Flexbox and Grid
- **JavaScript**: Adding interactivity and dynamic behavior
- **Development Setup**: IDE configuration and essential tools
- **Learning Pathway**: A roadmap from beginner to proficient developer

## 🛠️ Technology Stack

This is a static website built with:

- **HTML5** - Page structure and content
- **CSS3** - Styling and responsive design
- **Vanilla JavaScript** - Component management and interactivity
- **Bootstrap 5.3.7** - Responsive grid and UI components
- **Google Fonts** - Typography (Poppins, Lato, Press Start 2P)

## 🏗️ Architecture

The site uses a component-based architecture with vanilla JavaScript:

### Components
- `components/navbar.js` - Reusable navigation bar with active page highlighting
- `components/footer.js` - Consistent footer across all pages

### Pages
- `index.html` - Homepage with learning cards
- `pathway.html` - 9-stage learning roadmap
- `tutorial.html` - IDE setup guide
- `about.html` - About the project
- `contact.html` - Contact form with validation
- `post-html.html`, `post-css.html`, `post-js.html` - Educational blog posts

### Styling
- `css/style.source.css` - Readable source CSS with comments
- `css/style.css` - Minified production CSS

## 🚀 Development

### Prerequisites

- Node.js (for build tools)
- A modern web browser
- Git

### Setup

1. Clone the repository:
```bash
git clone https://github.com/your-username/learn-web-dev.git
cd learn-web-dev
```

2. Install dependencies:
```bash
npm install
```

3. Start local development server:
```bash
npm run dev
```

The site will open in your default browser at `http://localhost:8080`

### Build Process

To minify CSS for production:

```bash
npm run build:css
```

This reads `css/style.source.css` and outputs minified `css/style.css`

### File Structure

```
learn-web-dev/
├── components/          # Reusable JavaScript components
│   ├── navbar.js
│   └── footer.js
├── css/
│   ├── style.source.css    # Editable source CSS
│   └── style.css           # Minified output (auto-generated)
├── js/
│   └── script.js        # Contact form logic
├── images/              # Logo and assets
├── *.html               # 8 HTML pages
├── package.json         # NPM scripts and dependencies
├── CLAUDE.md           # AI assistant guidance
└── README.md           # This file
```

## 🎨 Design System

### Color Palette
- **Primary Accent**: `#7234fa` (purple)
- **Hover Accent**: `#5a28c7` (darker purple)
- **Dark Backgrounds**: `#334464` (navbar/footer)
- **Card Backgrounds**: `#312f36`
- **Main Background**: `#ddd8ce` (warm beige)
- **Text**: `#334464` (dark blue-gray)

### Typography
- **Headings**: Poppins (bold, 700 weight)
- **Body**: Lato (400/700 weight)
- **Brand**: Press Start 2P (retro gaming font)

## 📝 Making Changes

### Updating Navigation or Footer

Edit the component files:
- `components/navbar.js` - Navigation bar
- `components/footer.js` - Footer

Changes will apply to all pages automatically.

### Updating Styles

1. Edit `css/style.source.css` (not `style.css`)
2. Run `npm run build:css` to minify
3. Refresh browser to see changes

### Adding a New Page

1. Create new HTML file
2. Add navbar mount point: `<div id="navbar-mount"></div>`
3. Add footer mount point: `<div id="footer-mount"></div>`
4. Include component scripts before closing `</body>`:
```html
<script src="components/navbar.js"></script>
<script src="components/footer.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    initNavbar('page-id');  // Use appropriate page ID
    initFooter();
  });
</script>
```

## 🚢 Deployment

The site is deployed via GitHub Pages from the `gh-pages` branch.

To deploy changes:

1. Commit your changes:
```bash
git add .
git commit -m "Your commit message"
```

2. Push to GitHub:
```bash
git push origin gh-pages
```

GitHub Pages will automatically rebuild and deploy the site (usually takes 2-3 minutes).

## 📊 Analytics

The site uses Google Analytics (ID: G-NWFH1G2VXN) to track visitor metrics across all pages.

## 🤝 Contributing

This is an educational project. Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - feel free to use this project for learning purposes.

## 🙏 Acknowledgments

- Bootstrap for the responsive framework
- Google Fonts for typography
- The web development community for inspiration

---

**Happy Learning! 🚀**

For more information, see [CLAUDE.md](CLAUDE.md) for AI assistant guidance or [PRD.md](PRD.md) for product requirements.
