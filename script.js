// SummerWaveSounds Website Script
// Positive Energy Only.

document.addEventListener('DOMContentLoaded', () => {

    // 1. Dynamic Footer Year
    // Updates automatically, keeping the high-fidelity illusion intact.
    const yearSpan = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    if (yearSpan) {
        yearSpan.textContent = currentYear;
    }

    // 2. Initial Page Smooth Fade-In
    // Once DOM content is loaded, we trigger the CSS 'loaded' class
    // defined in style.css, creating a nice smooth entry.
    document.body.classList.add('loaded');

    // (Optional Future Addition: Add smooth scroll behavior override if 
    // css smooth scroll doesn't work well on a specific browser)

});
