// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll Animations using Intersection Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target); // Stop observing once it appears
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-up').forEach((el) => {
    observer.observe(el);
});

// Navbar background change on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        navbar.style.background = 'rgba(255, 255, 255, 0.9)';
    }
});

// Simple form submission handler (prevent default)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('.submit-btn');
    const originalText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.style.opacity = '0.8';
    
    setTimeout(() => {
        btn.textContent = 'Message Sent!';
        btn.style.background = '#10b981'; // Green color for success
        this.reset();
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = ''; // Reset to default
            btn.style.opacity = '1';
        }, 3000);
    }, 1500);
});
