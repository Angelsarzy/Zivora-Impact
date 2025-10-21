// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form validation for contact form
const contactForm = document.querySelector('form[action*="formspree"]');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        let isValid = true;
        let errorMessage = '';

        // Name validation
        if (name.length < 2) {
            isValid = false;
            errorMessage += 'Name must be at least 2 characters long.\n';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            isValid = false;
            errorMessage += 'Please enter a valid email address.\n';
        }

        // Message validation
        if (message.length < 10) {
            isValid = false;
            errorMessage += 'Message must be at least 10 characters long.\n';
        }

        if (!isValid) {
            e.preventDefault();
            alert('Please correct the following errors:\n' + errorMessage);
        } else {
            // Show success message (since form will submit to Formspree)
            alert('Thank you for your message! I will get back to you soon.');
        }
    });
}

// Add portfolio card hover effects
document.querySelectorAll('.portfolio-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add fade-in animation for sections on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in to main sections
document.querySelectorAll('main section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('hidden');
}

// Add event listener for mobile menu button (placeholder for future enhancement)
document.addEventListener('DOMContentLoaded', function() {
    // Any additional initialization can go here
    console.log('Portfolio website loaded successfully!');
});
