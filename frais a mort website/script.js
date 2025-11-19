document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully');
    initMobileMenu();
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