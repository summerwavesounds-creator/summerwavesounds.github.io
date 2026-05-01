// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// PARTICLES (SOFT FLOATING “WATER” FEEL)
particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    color: { value: ["#6ef3ff", "#ff8bdc"] },
    shape: { type: "circle" },
    opacity: { value: 0.4 },
    size: { value: 4 },
    move: { enable: true, speed: 1 }
  }
});
