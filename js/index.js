document.addEventListener('DOMContentLoaded', () => {
    // Page load animation
    const pageTransition = document.querySelector('.page-transition');

    setTimeout(() => {
        pageTransition.style.transform = 'scaleY(1)';
        pageTransition.style.transformOrigin = 'bottom';
        pageTransition.style.transition = 'transform 1s ease-in-out';
    }, 500);

    setTimeout(() => {
        pageTransition.style.opacity = '0';
        pageTransition.style.pointerEvents = 'none';
    }, 1500);

    // Hero content animation
    const heroContent = document.querySelector('.hero-content');
    setTimeout(() => {
        heroContent.classList.add('fade-in');
    }, 1800);

    // Product cards animation
    const productCards = document.querySelectorAll('.product-card');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('fade-in');
                }, index * 200);
            }
        });
    }, observerOptions);

    productCards.forEach(card => {
        observer.observe(card);
    });

    // Header scroll effect
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(245, 245, 245, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = 'transparent';
            header.style.backdropFilter = 'none';
        }
    });

    // Button hover effect
    const heroButton = document.querySelector('.hero-button');

    heroButton.addEventListener('mouseenter', () => {
        heroButton.style.transform = 'translateY(-3px)';
    });

    heroButton.addEventListener('mouseleave', () => {
        heroButton.style.transform = 'translateY(0)';
    });
});
// BUY NOW Button hover effect
const buyButton = document.querySelector('.buy-button');

buyButton.addEventListener('mouseenter', () => {
    buyButton.style.transform = 'translateY(-2px)';
});

buyButton.addEventListener('mouseleave', () => {
    buyButton.style.transform = 'translateY(0)';
});
// ...existing code...

// Newsletter form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('newsletterForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const input = form.querySelector('.newsletter-input');
            if (input.value.trim() !== '') {
                alert('Thank you for subscribing!');
                input.value = '';
            }
        });
    }
});

// ...existing code...



// Footer Modal Logic
document.addEventListener('DOMContentLoaded', function() {
    const modalLinks = document.querySelectorAll('.footer-link[data-modal]');
    const modals = {
        privacy: document.getElementById('privacy-modal'),
        terms: document.getElementById('terms-modal'),
        shipping: document.getElementById('shipping-modal')
    };

    modalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const type = link.getAttribute('data-modal');
            if (modals[type]) {
                modals[type].classList.add('active');
            }
        });
    });

    document.querySelectorAll('.footer-modal-close').forEach(btn => {
        btn.addEventListener('click', function() {
            const type = btn.getAttribute('data-close');
            if (modals[type]) {
                modals[type].classList.remove('active');
            }
        });
    });

    // Close modal on background click
    Object.values(modals).forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
});