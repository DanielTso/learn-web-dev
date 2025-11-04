/**
 * LearnWebDev - Enhanced Interactive Features
 * Includes: Dark Mode, Progress Tracking, Scroll Animations, Contact Form
 */

document.addEventListener('DOMContentLoaded', function () {
    console.log('LearnWebDev initialized!');

    // ============================================
    // DARK MODE TOGGLE
    // ============================================
    initDarkMode();

    // ============================================
    // PROGRESS TRACKING
    // ============================================
    initProgressTracking();

    // ============================================
    // SCROLL ANIMATIONS
    // ============================================
    initScrollAnimations();

    // ============================================
    // CONTACT FORM
    // ============================================
    initContactForm();

    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    initSmoothScroll();
});

/**
 * Dark Mode Toggle
 */
function initDarkMode() {
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);

    // Create dark mode toggle button if it doesn't exist
    let themeToggle = document.querySelector('.theme-toggle');
    if (!themeToggle) {
        themeToggle = document.createElement('button');
        themeToggle.className = 'theme-toggle';
        themeToggle.setAttribute('aria-label', 'Toggle dark mode');
        themeToggle.innerHTML = currentTheme === 'dark' ? '☀️' : '🌙';
        document.body.appendChild(themeToggle);
    }

    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeToggle.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
    });
}

/**
 * Progress Tracking System
 * Tracks which tutorials/pages user has visited
 */
function initProgressTracking() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Get or initialize progress data
    let progress = JSON.parse(localStorage.getItem('learnProgress') || '{}');

    // Mark current page as visited
    if (!progress[currentPage]) {
        progress[currentPage] = {
            visited: true,
            visitedAt: new Date().toISOString(),
            timeSpent: 0
        };
    }

    // Track time spent on page
    let startTime = Date.now();
    window.addEventListener('beforeunload', function() {
        const timeSpent = Math.floor((Date.now() - startTime) / 1000); // in seconds
        progress[currentPage].timeSpent = (progress[currentPage].timeSpent || 0) + timeSpent;
        localStorage.setItem('learnProgress', JSON.stringify(progress));
    });

    // Update progress indicators on page
    updateProgressIndicators(progress);
}

/**
 * Update progress indicators (progress bars, percentages, etc.)
 */
function updateProgressIndicators(progress) {
    // Calculate overall progress
    const totalPages = ['post-html.html', 'post-css.html', 'post-js.html'];
    const completedPages = totalPages.filter(page => progress[page]?.visited).length;
    const overallProgress = Math.round((completedPages / totalPages.length) * 100);

    // Update any progress bars on the page
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        bar.style.width = overallProgress + '%';
        bar.setAttribute('aria-valuenow', overallProgress);
        bar.textContent = overallProgress + '%';
    });

    // Update progress text
    const progressText = document.querySelectorAll('.progress-text');
    progressText.forEach(text => {
        text.textContent = `${completedPages} of ${totalPages.length} tutorials completed`;
    });

    // Add checkmarks to completed items
    totalPages.forEach(page => {
        if (progress[page]?.visited) {
            const link = document.querySelector(`a[href="${page}"]`);
            if (link && !link.querySelector('.completion-badge')) {
                const badge = document.createElement('span');
                badge.className = 'completion-badge';
                badge.innerHTML = ' ✓';
                badge.style.color = '#10B981';
                badge.style.fontWeight = 'bold';
                link.appendChild(badge);
            }
        }
    });
}

/**
 * Scroll Animations
 * Fade in elements as they come into view
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with animation class
    const animatedElements = document.querySelectorAll(
        '.learning-card, .feature-item, .stat-item, .code-playground'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

/**
 * Contact Form Handling
 */
function initContactForm() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Basic validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }

            console.log('Form Submitted:');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            // Show success message
            showNotification('Thank you for your message! We will get back to you soon.', 'success');

            // Reset form
            contactForm.reset();
        });
    }
}

/**
 * Show notification message
 */
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }

    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#6366F1'};
        color: white;
        border-radius: 0.75rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 9999;
        animation: slideIn 0.3s ease;
        max-width: 400px;
    `;

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
