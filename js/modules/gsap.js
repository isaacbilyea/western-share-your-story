export function gsap() {
    const { gsap: gsapLib, ScrollTrigger, ScrollToPlugin } = window;
    gsapLib.registerPlugin(ScrollTrigger, ScrollToPlugin);

    function animateGroup(selector) {
        gsapLib.from(selector, {
            opacity: 0,
            y: 50,
            duration: 0.5,
            scrollTrigger: {
                trigger: selector,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            }
        });
    }

    function animateStagger(selector, delay) {
        gsapLib.from(selector, {
            opacity: 0,
            y: 75,
            duration: 0.5,
            stagger: delay,
            scrollTrigger: {
                trigger: selector,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            }
        });
    }

    if (window.innerWidth >= 768) {
        animateGroup('.story-stat-groups');
        animateGroup('.why-share-items');
        animateStagger('.story-card', 0.1);
        animateStagger('.initiative-card', 0.5);
    }

    const menuLinks = document.querySelectorAll(
        '.menu-nav-links a[href^="#"], .mobile-main-nav a[href^="#"]'
    );

    menuLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const hash = link.getAttribute('href');

            gsapLib.to(window, {
                duration: 1,
                scrollTo: {
                    y: hash
                },
                ease: 'power2.inOut'
            });
        });
    });
}
