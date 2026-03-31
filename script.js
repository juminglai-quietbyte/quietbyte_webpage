document.addEventListener('DOMContentLoaded', () => {
  // Category filter
  const pills = document.querySelectorAll('.filter-pill');
  const cards = document.querySelectorAll('.app-card');

  pills.forEach((pill) => {
    pill.addEventListener('click', () => {
      const category = pill.dataset.category;

      pills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');

      cards.forEach((card) => {
        if (category === 'all' || card.dataset.category === category) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // Scroll reveal
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.app-card, .value-card, .about-box, .feedback-cta').forEach((el) => {
    el.classList.add('reveal');
    observer.observe(el);
  });
});
