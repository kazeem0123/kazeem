// Responsive menu toggle and smooth scroll

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });

  // Smooth scroll for nav links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        navLinks.classList.remove('active');
      }
    });
  });

  // Contact form validation
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      const feedback = document.getElementById('form-feedback');
      let valid = true;
      feedback.textContent = '';
      // Simple validation
      if (!name.value.trim()) {
        valid = false;
        name.style.outline = '2px solid #f44336';
      } else {
        name.style.outline = '';
      }
      if (!email.value.trim() || !/^\S+@\S+\.\S+$/.test(email.value)) {
        valid = false;
        email.style.outline = '2px solid #f44336';
      } else {
        email.style.outline = '';
      }
      if (!message.value.trim()) {
        valid = false;
        message.style.outline = '2px solid #f44336';
      } else {
        message.style.outline = '';
      }
      if (!valid) {
        feedback.style.color = '#f44336';
        feedback.textContent = 'Please fill in all fields correctly.';
        return;
      }
      // Simulate success
      feedback.style.color = '#4caf50';
      feedback.textContent = 'Thank you! Your message has been sent.';
      contactForm.reset();
    });
  }

  // Footer dynamic date/time and year
  const footerDate = document.getElementById('footer-date');
  const footerYear = document.getElementById('footer-year');
  function updateFooterDate() {
    const now = new Date();
    const dateString = now.toLocaleString();
    if (footerDate) footerDate.textContent = dateString;
    if (footerYear) footerYear.textContent = now.getFullYear();
  }
  updateFooterDate();
  setInterval(updateFooterDate, 1000);

  // Back to Top button
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });
  backToTop.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
