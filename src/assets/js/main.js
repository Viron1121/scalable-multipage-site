// main.js
document.querySelectorAll('[data-include]').forEach(el => {
  fetch(el.dataset.include)
    .then(resp => resp.text())
    .then(html => el.innerHTML = html);
});

// Responsive menu toggle
document.addEventListener('click', e => {
  if (e.target.classList.contains('menu-toggle')) {
    const navLinks = e.target.closest('nav').querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }
});