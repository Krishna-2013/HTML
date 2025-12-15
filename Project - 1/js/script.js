// Simple fade-in animation for main content
window.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');
    main.style.opacity = '0';
    main.style.transition = 'opacity 1.2s ease';

    setTimeout(() => {
        main.style.opacity = '1';
    }, 200);
});

// Search bar animation when focused
const searchInput = document.getElementById('search-input-side-filters');

searchInput.addEventListener('focus', () => {
    searchInput.style.transform = 'scale(1.03)';
    searchInput.style.transition = '0.3s ease';
});

searchInput.addEventListener('blur', () => {
    searchInput.style.transform = 'scale(1)';
});

// Header link hover effect animation using JS (extra subtle effect)
const navLinks = document.querySelectorAll('header ul li a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.letterSpacing = '1px';
        link.style.transition = '0.2s ease';
    });

    link.addEventListener('mouseout', () => {
        link.style.letterSpacing = '0px';
    });
});
