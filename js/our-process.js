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

    // Content animations
    const heroSection = document.querySelector('.hero-section');
    const variants = document.querySelectorAll('.variant');

    setTimeout(() => {
        heroSection.classList.add('fade-in');
    }, 1800);

    setTimeout(() => {
        variants.forEach((variant, index) => {
            setTimeout(() => {
                variant.classList.add('fade-in');
            }, index * 200);
        });
    }, 2000);

    // Process modal
    const processButton = document.getElementById('processButton');
    const processModal = document.getElementById('processModal');
    const closeModal = document.getElementById('closeModal');

    processButton.addEventListener('click', () => {
        processModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeModal.addEventListener('click', () => {
        processModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Button hover effect
    processButton.addEventListener('mouseenter', () => {
        processButton.style.transform = 'translateY(-3px)';
    });

    processButton.addEventListener('mouseleave', () => {
        processButton.style.transform = 'translateY(0)';
    });
});