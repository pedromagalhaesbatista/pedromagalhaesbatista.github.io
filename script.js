const revealItems = document.querySelectorAll('.reveal');
const yearEl = document.getElementById('year');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (prefersReducedMotion) {
  revealItems.forEach((item) => item.classList.add('show'));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 45, 300)}ms`;
    observer.observe(item);
  });
}
