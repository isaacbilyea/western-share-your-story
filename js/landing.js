import { mobileMenu } from './modules/mobile-menu.js';
import { footerAccordion } from './modules/footer-accordion.js';
import { carouselSlider } from './modules/carousel-slider.js';
import { formAlerts } from './modules/form-alerts.js';
import { gsap } from './modules/gsap.js';

mobileMenu();
footerAccordion();
carouselSlider('.story-stat-groups');
carouselSlider('.story-cards');
carouselSlider('.why-share-items');
formAlerts();
gsap();
