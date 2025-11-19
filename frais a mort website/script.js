document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully');
    
    // Initialize all interactive components
    initMobileMenu();
    initLightbox();
    initSearch();
    
    console.log('All JavaScript components initialized');
});

function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('nav');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
            console.log('Mobile menu toggled');
        });
    }
}

// Lightbox Gallery
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    
    if (!lightbox) {
        console.log('Lightbox not found on this page');
        return;
    }

    const lightboxImg = lightbox.querySelector('.lightbox-image');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    
    // Open lightbox when product images are clicked
    document.querySelectorAll('.product-image').forEach(img => {
        img.addEventListener('click', function() {
            lightboxImg.src = this.src;
            lightboxCaption.textContent = this.alt;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
            console.log('Lightbox opened with image:', this.alt);
        });
    });
    
    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
        console.log('Lightbox closed');
    }
    
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) closeLightbox();
    });
    
    // Close with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeLightbox();
    });
}

// Search Functionality
function initSearch() {
    const searchInput = document.querySelector('.search-input');
    const productCards = document.querySelectorAll('.product-item');
    
    if (searchInput && productCards.length > 0) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase().trim();
            console.log('Searching for:', searchTerm);
            
            productCards.forEach(card => {
                const title = card.querySelector('p:first-child').textContent.toLowerCase();
                const description = card.querySelector('p:nth-child(2)')?.textContent.toLowerCase() || '';
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    } else {
        console.log('Search elements not found on this page');
    }
}