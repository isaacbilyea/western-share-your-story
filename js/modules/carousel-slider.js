export function carouselSlider(containerSelector) {
    //VARIABLES
    const container = document.querySelector(containerSelector);
    const controls = document.querySelector(
        `[data-carousel="${containerSelector.slice(1)}"]`
    );
    const dots = Array.from(controls.querySelectorAll('.carousel-dot'));
    const prevBtn = controls.querySelector('.carousel-prev');
    const nextBtn = controls.querySelector('.carousel-next');
    const baseSlides = Array.from(container.querySelectorAll('.carousel-item'));
    const total = baseSlides.length;
    const firstClone = baseSlides[0].cloneNode(true);
    const lastClone = baseSlides[total - 1].cloneNode(true);

    container.appendChild(firstClone);
    container.insertBefore(lastClone, baseSlides[0]);

    const slides = container.querySelectorAll('.carousel-item');
    let index = 1;
    let startX = 0;

    container.style.transform = 'translateX(-100%)';

    //FUNCTIONS
    const setActiveDot = () => {
        const active = (index - 1 + total) % total;
        dots.forEach((dot, dotIndex) => {
            dot.classList.toggle('active', dotIndex === active);
        });
    };

    const setPosition = () => {
        container.style.transform = `translateX(-${index * 100}%)`;
    };

    const snapTo = (target) => {
        container.style.transition = 'none';
        index = target;
        setPosition();
        container.offsetHeight;
        container.style.transition = '';
    };

    const moveTo = (target) => {
        index = target;
        setPosition();
        setActiveDot();
    };

    const showNext = () => {
        moveTo(index + 1);
    };

    const showPrev = () => {
        moveTo(index - 1);
    };

    const handleTransitionEnd = () => {
        if (index === slides.length - 1) {
            snapTo(1);
            setActiveDot();
        } else if (index === 0) {
            snapTo(slides.length - 2);
            setActiveDot();
        }
    };

    const resize = () => {
        const desktop = window.innerWidth >= 768;
        controls.style.display = desktop ? 'none' : 'flex';

        if (desktop) {
            container.style.transition = 'none';
            container.style.transform = 'none';
            container.offsetHeight;
            container.style.transition = '';
        } else {
            snapTo(1);
            setActiveDot();
        }
    };

    const handleTouchStart = (event) => {
        startX = event.touches[0].clientX;
    };

    const handleTouchEnd = (event) => {
        const endX = event.changedTouches[0].clientX;
        const leftSwipe = startX - endX > 50;
        const rightSwipe = endX - startX > 50;

        if (leftSwipe) {
            showNext();
        } else if (rightSwipe) {
            showPrev();
        }
    };

    //EVENT LISTENERS
    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);

    dots.forEach((dot, dotIndex) => {
        dot.addEventListener('click', () => {
            moveTo(dotIndex + 1);
        });
    });

    container.addEventListener('transitionend', handleTransitionEnd);
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('resize', resize);

    resize();
    setActiveDot();
}
