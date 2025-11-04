document.addEventListener('DOMContentLoaded', function () {
    console.log('The DOM is fully loaded and parsed.');

    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            console.log('Form Submitted:');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            alert('Thank you for your message! We will get back to you soon.');

            contactForm.reset();
        });
    }
});