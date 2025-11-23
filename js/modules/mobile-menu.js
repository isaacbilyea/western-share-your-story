export function mobileMenu() {
    //VARIABLES
    const burgerMenu = document.querySelector('.burger-menu');
    const closeMenuBtn = document.querySelector('.close-menu');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-overlay a');
    const body = document.body;
    const html = document.documentElement;

    //FUNCTIONS
    function openMenu() {
        mobileMenuOverlay.classList.add('active');
        body.style.overflow = 'hidden';
        html.style.overflow = 'hidden';
    }

    function closeMenu() {
        mobileMenuOverlay.classList.remove('active');
        body.style.overflow = '';
        html.style.overflow = '';
    }

    function handleLinkClick() {
        setTimeout(() => {
            closeMenu();
        }, 100);
    }

    function handleResize() {
        if (window.innerWidth >= 1200) {
            closeMenu();
        }
    }

    //EVENT LISTENERS
    burgerMenu.addEventListener('click', openMenu);
    closeMenuBtn.addEventListener('click', closeMenu);
    window.addEventListener('resize', handleResize);

    mobileMenuLinks.forEach((link) => {
        link.addEventListener('click', handleLinkClick);
    });
}
