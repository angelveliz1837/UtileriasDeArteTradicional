document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            if (navLinks.style.display === 'flex') {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = 'var(--color-bg)';
                navLinks.style.padding = '1rem';
                navLinks.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
            }
        });
    }

    // Product Data (Mock)
    const products = [
        {
            id: 1,
            name: "Set Acuarelas Profesionales",
            price: "$45.00",
            image: "https://picsum.photos/seed/watercolors/400/400"
        },
        {
            id: 2,
            name: "Pincel Marta Kolinsky #4",
            price: "$22.50",
            image: "https://picsum.photos/seed/brush/400/400"
        },
        {
            id: 3,
            name: "Papel Arches Grano Fino",
            price: "$18.00",
            image: "https://picsum.photos/seed/paper/400/400"
        },
        {
            id: 4,
            name: "Tinta China Negra Premium",
            price: "$12.00",
            image: "https://picsum.photos/seed/ink/400/400"
        }
    ];

    // Render Products
    const productGrid = document.querySelector('.product-grid');
    if (productGrid) {
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h4>${product.name}</h4>
                    <span class="product-price">${product.price}</span>
                    <button class="btn-add">Añadir al Carrito</button>
                </div>
            `;
            productGrid.appendChild(card);
        });
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
