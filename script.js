const revealItems = document.querySelectorAll('.reveal');
const yearEl = document.getElementById('year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

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
  item.style.transitionDelay = `${Math.min(index * 50, 400)}ms`;
  observer.observe(item);
});

const orbOne = document.querySelector('.orb-one');
const orbTwo = document.querySelector('.orb-two');

window.addEventListener('pointermove', (event) => {
  const x = event.clientX / window.innerWidth;
  const y = event.clientY / window.innerHeight;

  if (orbOne) {
    orbOne.style.transform = `translate(${x * 18}px, ${y * 14}px)`;
  }

  if (orbTwo) {
    orbTwo.style.transform = `translate(${-x * 16}px, ${-y * 12}px)`;
  }
});
