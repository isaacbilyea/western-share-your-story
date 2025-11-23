export function footerAccordion() {
    //VARIABLES
    const footerToggles = document.querySelectorAll('.footer-toggle');

    //FUNCTIONS
    function toggleFooterSection() {
        const ul = this.nextElementSibling;
        const isActive = this.classList.contains('active');

        footerToggles.forEach((toggle) => {
            toggle.classList.remove('active');
            toggle.nextElementSibling.classList.remove('active');
        });

        if (!isActive) {
            this.classList.add('active');
            ul.classList.add('active');
        }
    }

    function resetFooterAccordion() {
        if (window.innerWidth >= 1200) {
            footerToggles.forEach((toggle) => {
                toggle.classList.add('active');
                toggle.nextElementSibling.classList.add('active');
            });
        } else {
            footerToggles.forEach((toggle) => {
                toggle.classList.remove('active');
                toggle.nextElementSibling.classList.remove('active');
            });
        }
    }

    //EVENT LISTENERS
    footerToggles.forEach((toggle) => {
        toggle.addEventListener('click', toggleFooterSection);
    });

    window.addEventListener('resize', resetFooterAccordion);

    resetFooterAccordion();
}
