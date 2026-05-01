// Automatically update the year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Simple scroll reveal for video cards
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.video-card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight - 100) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});
