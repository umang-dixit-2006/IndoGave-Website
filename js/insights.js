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
    const heroSection = document.querySelector('.insights-hero');
    const insightCards = document.querySelectorAll('.insight-card');

    setTimeout(() => {
        heroSection.classList.add('fade-in');
    }, 1800);

    setTimeout(() => {
        insightCards.forEach(card => {
            card.classList.add('fade-in');
        });
    }, 2000);

    // Modal functionality
    const readMoreBtns = document.querySelectorAll('.read-more-btn');
    const insightModal = document.getElementById('insightModal');
    const closeModal = document.getElementById('closeModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalSubtitle = document.getElementById('modalSubtitle');
    const modalOffice = document.getElementById('modalOffice');
    const modalMeta = document.getElementById('modalMeta');

    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.insight-card');
            const cardImg = card.querySelector('.card-image img').src;
            const title = card.querySelector('.card-title').textContent;
            const subtitle = card.querySelector('.card-subtitle').textContent;
            const office = card.querySelector('.card-office').textContent;
            const metaItems = card.querySelectorAll('.card-meta span');

            modalImage.src = cardImg;
            modalTitle.textContent = title;
            modalSubtitle.textContent = subtitle;
            modalOffice.textContent = office;

            // Clear previous meta items
            modalMeta.innerHTML = '';

            // Add new meta items
            metaItems.forEach(item => {
                const metaSpan = document.createElement('span');
                metaSpan.textContent = item.textContent;
                modalMeta.appendChild(metaSpan);
            });

            insightModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    closeModal.addEventListener('click', () => {
        insightModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside
    insightModal.addEventListener('click', (e) => {
        if (e.target === insightModal) {
            insightModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Button hover effects
    readMoreBtns.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-2px)';
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0)';
        });
    });
});