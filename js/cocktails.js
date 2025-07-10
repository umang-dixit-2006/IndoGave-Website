document.addEventListener('DOMContentLoaded', () => {
    // ===== EXISTING CODE (KEEP THIS) ===== //
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

    // Content animation
    const featuredCocktail = document.querySelector('.featured-cocktail');
    setTimeout(() => {
        featuredCocktail.classList.add('fade-in');
    }, 1800);

    // Modal functionality
    const viewAllBtn = document.getElementById('viewAllBtn');
    const recipesModal = document.getElementById('recipesModal');
    const closeModal = document.getElementById('closeModal');

    viewAllBtn.addEventListener('click', () => {
        recipesModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeModal.addEventListener('click', () => {
        recipesModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Button hover effects
    const buttons = [viewAllBtn, ...document.querySelectorAll('.buy-btn')];
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-3px)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
        });
    });

    // ===== NEW PURCHASE FUNCTIONALITY (ADD THIS) ===== //
    // Purchase modal elements
    const purchaseModal = document.getElementById('purchaseModal');
    const closePurchase = document.getElementById('closePurchase');
    const buyButtons = document.querySelectorAll('.buy-btn');
    const modalProductImage = document.getElementById('modalProductImage');
    const modalProductName = document.getElementById('modalProductName');
    const increaseQty = document.getElementById('increaseQty');
    const decreaseQty = document.getElementById('decreaseQty');
    const productQty = document.getElementById('productQty');
    const productPrice = document.getElementById('productPrice');

    // Mock product data
    const products = {
        'AMERAGAVE WITH ORANGE': {
            price: 32.99,
            image: 'https://images.unsplash.com/photo-1551751299-1b51cab2694c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
        },
        'AMERAGAVE SPRITZ': {
            price: 28.99,
            image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
        },
        'SMOKY AMERAGAVE': {
            price: 35.99,
            image: 'https://images.unsplash.com/photo-1438522014717-d7ce32b9bab9?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
        },
        'AMERAGAVE OLD FASHIONED': {
            price: 38.99,
            image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
        }
    };

    let currentQty = 1;
    let currentPrice = 0;

    // Handle buy button clicks
    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const recipeCard = e.target.closest('.recipe-card');
            const productName = recipeCard.querySelector('h3').textContent;

            modalProductName.textContent = productName;
            modalProductImage.src = products[productName].image;
            currentPrice = products[productName].price;
            productPrice.textContent = currentPrice.toFixed(2);
            currentQty = 1;
            productQty.textContent = currentQty;

            purchaseModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Quantity controls
    increaseQty.addEventListener('click', () => {
        currentQty++;
        productQty.textContent = currentQty;
        productPrice.textContent = (currentPrice * currentQty).toFixed(2);
    });

    decreaseQty.addEventListener('click', () => {
        if (currentQty > 1) {
            currentQty--;
            productQty.textContent = currentQty;
            productPrice.textContent = (currentPrice * currentQty).toFixed(2);
        }
    });

    // Close purchase modal
    closePurchase.addEventListener('click', () => {
        purchaseModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    purchaseModal.addEventListener('click', (e) => {
        if (e.target === purchaseModal) {
            purchaseModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});