/**
 * Renders the site footer
 * @returns {string} HTML string for the footer
 */
function renderFooter() {
    const currentYear = new Date().getFullYear();

    const footerHTML = `
    <footer class="bg-dark text-white text-center py-3">
        <p>&copy; ${currentYear} LearnWebDev. All Rights Reserved.</p>
        <p class="small">Disclaimer: This website is for educational purposes only and does not provide professional advice.</p>
    </footer>
    `;

    return footerHTML;
}

/**
 * Initialize footer on page load
 */
function initFooter() {
    const footerMount = document.getElementById('footer-mount');
    if (footerMount) {
        footerMount.innerHTML = renderFooter();
    }
}
