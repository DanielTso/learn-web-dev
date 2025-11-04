/**
 * Renders the site navigation bar
 * @param {string} currentPage - The current page identifier ('home', 'pathway', 'tutorial', 'about', 'contact')
 */
function renderNavbar(currentPage) {
    const navItems = [
        { id: 'home', label: 'Home', href: 'index.html' },
        { id: 'pathway', label: 'Pathway', href: 'pathway.html' },
        { id: 'tutorial', label: 'Tutorial', href: 'tutorial.html' },
        { id: 'about', label: 'About', href: 'about.html' },
        { id: 'contact', label: 'Contact', href: 'contact.html' }
    ];

    const navItemsHTML = navItems.map(item => {
        const isActive = item.id === currentPage;
        const activeClass = isActive ? 'active' : '';
        const ariaCurrent = isActive ? ' aria-current="page"' : '';

        return `
            <li class="nav-item">
                <a class="nav-link ${activeClass}"${ariaCurrent} href="${item.href}">${item.label}</a>
            </li>
        `;
    }).join('');

    const navbarHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="index.html"><img src="images/devblog_logo.jpg" alt="LearnWebDev Logo" style="height: 70px;">
                <div class="d-inline-block align-middle ms-2">
                    <span class="d-block" id="learn-web-dev-text">LearnWebDev</span>
                    <span class="d-none d-sm-block">Code. Create. Conquer.</span>
                </div>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    ${navItemsHTML}
                </ul>
            </div>
        </div>
    </nav>
    `;

    return navbarHTML;
}

/**
 * Initialize navbar on page load
 * Call this function with the current page identifier
 */
function initNavbar(currentPage) {
    const navbarMount = document.getElementById('navbar-mount');
    if (navbarMount) {
        navbarMount.innerHTML = renderNavbar(currentPage);
    }
}
