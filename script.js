// Feedback form handler
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('feedback-form');
  const success = document.getElementById('form-success');

  // TODO: Replace YOUR_FORM_ID with your Formspree form ID
  // Sign up at https://formspree.io, create a form, and paste the ID below
  const FORMSPREE_ID = 'xqeygrwl';

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' },
      });

      if (response.ok) {
        form.classList.add('hidden');
        success.classList.remove('hidden');

        setTimeout(() => {
          form.reset();
          form.classList.remove('hidden');
          success.classList.add('hidden');
        }, 4000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Unable to send feedback. Please try again later.');
    }
  });

  // Smooth reveal on scroll
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

  document.querySelectorAll('.app-card, .feedback-card').forEach((el) => {
    el.classList.add('reveal');
    observer.observe(el);
  });
});
