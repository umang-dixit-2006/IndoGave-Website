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
    const heroSection = document.querySelector('.hero-section');
    setTimeout(() => {
        heroSection.classList.add('fade-in');
    }, 1800);

    // Learn More button functionality
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const storySection = document.getElementById('storySection');
    const closeStoryBtn = document.getElementById('closeStoryBtn');

    learnMoreBtn.addEventListener('click', () => {
        storySection.classList.add('active');
        setTimeout(() => {
            storySection.classList.add('visible');
            document.body.style.overflow = 'hidden';
        }, 50);
    });

    closeStoryBtn.addEventListener('click', () => {
        storySection.classList.remove('visible');
        setTimeout(() => {
            storySection.classList.remove('active');
            document.body.style.overflow = 'auto';
        }, 800);
    });

    // Button hover effects
    const buttons = [learnMoreBtn, closeStoryBtn];

    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-3px)';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
        });
    });
});