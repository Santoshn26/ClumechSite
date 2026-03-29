document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Optional: stop observing once it's visible
      }
    });
  }, {
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the element is visible
  });

  const elementsToReveal = document.querySelectorAll('.reveal');
  elementsToReveal.forEach(el => observer.observe(el));
});